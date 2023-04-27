pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                sh 'install'
            }
        }

        stage('Test') {
            steps {
                sh 'test'
            }
        }
    }
}
