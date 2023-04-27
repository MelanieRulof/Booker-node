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
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
