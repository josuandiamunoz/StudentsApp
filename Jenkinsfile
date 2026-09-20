pipeline {

    agent any

    stages {
        stage('Checkout') {
            steps {
                echo "Repository from branch ${env.BRANCH_NAME} correctly downloaded"
            }
        }

        stage('Backend Dependencies') {
            steps {
                dir('backend') {
                    bat 'npm ci'
                }
            }
        }

        stage('Backend Linting') {
            steps {
                dir('backend') { 
                    bat 'npm run lint -- --format json --output-file eslint-report.json'
					recordIssues(
                        tools: [
                            eslint(pattern: 'eslint-report.json')
                        ],
                        qualityGates: [
                            [threshold: 10, type: 'TOTAL', unstable: false]
                        ]
                    )
                }
            }
        }
    }
}