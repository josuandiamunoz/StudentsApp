pipeline {

    agent any

    stages {
        stage('Checkout') {
            steps {
                echo "Repository from branch ${env.BRANCH_NAME} correctly downloaded"
            }
        }

        stage('Backend Linting') {
            steps {
                dir('backend') { 
                    bat 'npm run lint'
                }
            }
        }
    }
}