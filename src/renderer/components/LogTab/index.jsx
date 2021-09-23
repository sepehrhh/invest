import React from 'react';
import PropTypes from 'prop-types';
import { ipcRenderer } from 'electron'; // eslint-disable-line import/no-extraneous-dependencies

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { ipcMainChannels } from '../../../main/ipcMainChannels';

const logger = window.Workbench.getLogger('LogTab');

class LogDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.content = React.createRef();
  }

  componentDidUpdate() {
    this.content.current.scrollTop = this.content.current.scrollHeight;
  }

  render() {
    /* Render log text as raw html to facilitate styling the plain text.
    This is dangerous, but made safer because the text is generated by
    natcap.invest, not by user-input, and because all text is passed
    through sanitize-html. */
    return (
      <Col id="log-display" ref={this.content}>
        <div
          id="log-text"
          dangerouslySetInnerHTML={{ __html: this.props.logdata }}
        />
      </Col>
    );
  }
}

LogDisplay.propTypes = {
  logdata: PropTypes.string,
};

export default class LogTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logdata: '',
    };
  }

  componentDidMount() {
    const { logfile, executeClicked, jobID } = this.props;
    // This channel is replied to by the invest process stdout listener
    // And by the logfile reader.
    ipcRenderer.on(`invest-stdout-${jobID}`, (event, data) => {
      let { logdata } = this.state;
      logdata += data;
      this.setState({ logdata: logdata });
    });
    if (!executeClicked && logfile) {
      ipcRenderer.send(
        ipcMainChannels.INVEST_READ_LOG,
        logfile,
        this.props.pyModuleName,
        jobID,
      );
    }
  }

  componentDidUpdate(prevProps) {
    // If we're re-running a model after loading a recent run,
    // we should clear out the logdata when the new run is launched.
    if (this.props.executeClicked && !prevProps.executeClicked) {
      this.setState({ logdata: '' });
    }
  }

  componentWillUnmount() {
    ipcRenderer.removeAllListeners(`invest-stdout-${this.props.jobID}`);
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <LogDisplay logdata={this.state.logdata} />
        </Row>
      </Container>
    );
  }
}

LogTab.propTypes = {
  logfile: PropTypes.string,
  executeClicked: PropTypes.bool.isRequired,
  jobID: PropTypes.string.isRequired,
  pyModuleName: PropTypes.string.isRequired,
};
