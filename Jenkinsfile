
node {
   stage('Preparation') {
     checkout scm
   }
   stage('test') {
     nodejs(nodeJSInstallationName: 'NodeJS') {
       sh 'npm install'
       sh 'npm test'
     }
   }  
}