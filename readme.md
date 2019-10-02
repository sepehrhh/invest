To develop and launch this Application
--------------------------

clone repo  

`npm install` from repo directory  

set path to invest executeable at launch:  

# windows:  
set INVEST=C:\\Users\\dmf\\Miniconda3\\envs\\invest-py36\\Scripts\\invest.exe && set GDAL_DATA=C:\\Users\\dmf\\Miniconda3\\envs\\invest-py36\\Library\\share\\gdal && npm start  


  
# linux:  
INVEST=/home/dmf/Miniconda3/envs/invest-py36/Scripts/invest.exe npm start  


To run linter or tests
-----------------------------
`npm run lint`  
`npm run test`  

see `package.json` `scripts` object.  

To run these or other command-line utils of locally installed packages outside the context of the `package.json scripts`, use `npx eslint ...`. 

To run a single test file:  
set INVEST=C:\\Users\\dmf\\Miniconda3\\envs\\invest-py36\\Scripts\\invest.exe && npx jest -u investjob.test.js