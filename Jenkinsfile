
node {
   stage('Preparation') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"                        
     commit_id = readFile('.git/commit-id').trim()
   }
   stage('test') {
     nodejs(nodeJSInstallationName: 'NodeJS') {
       sh 'npm install'
       sh 'npm test'
     }
   }
  stage('docker build/push'){
    docker.withRegistry('http://127.0.0.1:50001'){
      def app = docker.build("g4br13l/docker-node-sample-api:${commit_id}", '.').push()
    }
  }
  //  stage('deploy') {
  //      sh 'docker-compose up --build'
  //  }  
}