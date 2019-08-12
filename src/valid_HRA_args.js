const SAMPLE_DATA = 'C:/Users/dmf/projects/invest/data/invest-sample-data/HabitatRiskAssess/Input/'

const MODEL_NAME = 'habitat_risk_assessment'

const MODEL_ARGS = {
  aoi_vector_path: {
    argname: 'aoi_vector_path',
    value: SAMPLE_DATA + 'subregions.shp',
    type: 'text',
    valid: false,
    validationRules: 'filepath',
    required: true,
  },
  criteria_table_path: {
    argname: 'criteria_table_path',
    value: SAMPLE_DATA + 'exposure_consequence_criteria.csv',
    type: 'text',
    valid: false,
    validationRules: 'filepath',
    required: true,
  },
  decay_eq: {
    argname: 'decay_eq',
    value: 'Linear',
    type: 'select',
    options: ['Linear', 'Multiplicative'],
    valid: true,
    validationRules: 'select',
    required: true,
  },
  info_table_path: {
    argname: 'info_table_path',
    value: SAMPLE_DATA + 'habitat_stressor_info.csv',
    type: 'text',
    valid: false,
    validationRules: 'filepath',
    required: true,
  },
  max_rating: {
    argname: 'max_rating',
    value: '3',
    type: 'text',
    valid: false,
    validationRules: 'integer',
    required: true,
  },
  resolution: {
    argname: 'resolution',
    value: '500',
    type: 'text',
    valid: false,
    validationRules: 'integer',
    required: true,
  },
  risk_eq: {
    argname: 'risk_eq',
    value: 'Euclidean',
    type: 'select',
    options: ['Euclidean', 'Exponential'],
    valid: true,
    validationRules: 'select',
    required: true,
  },
  results_suffix: {
    argname: 'results_suffix',
    value: '',
    type: 'text',
    valid: true,
    validationRules: 'string',
    required: false,
  },
  workspace_dir: {
    argname: 'workspace_dir',
    value: 'workspace',
    type: 'text',
    valid: false,
    validationRules: 'directory',
    required: true,
  },
  visualize_outputs: {
    argname: 'visualize_outputs',
    value: 'True',
    type: 'select',
    options: ['True', 'False'],
    valid: true,
    validationRules: 'select',
    required: true,
  },
};

export {MODEL_ARGS, MODEL_NAME};