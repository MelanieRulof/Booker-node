pipeline {
    agent any

    stages {
        stage('Build') {
            sh "'${mvnHome}/bin/mvn' -B -DskipTests clean package"
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
