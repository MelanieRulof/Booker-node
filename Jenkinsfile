pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh "'${mvnHome}/bin/mvn' clean package"
                  }
        }
        
        stage('Test') {
            steps {
                sh "'${mvnHome}/bin/mvn' test"
            }
        }
        stage('Deploy') {
            steps {
                archiveArtifacts 'target/*.jar'
            }
        }
    }
}
