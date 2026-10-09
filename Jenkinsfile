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
					catchError(buildResult: 'SUCCESS', stageResult: 'SUCCESS') {
						bat 'npm run lint -- --format json --output-file eslint-report.json'
					}
					recordIssues(
                        tools: [
                            esLint(pattern: 'eslint-report.json')
                        ],
                        qualityGates: [
                            [threshold: 10, type: 'TOTAL', unstable: false]
                        ]
                    )
                }
            }
        }

        stage('Build Docker Backend Image') {
            steps {
                dir('backend') {
                    bat "docker build -t students-backend:${env.BUILD_NUMBER} -t students-backend:latest ."
                }
            }
        }

        stage('Build Docker Frontend Image') {
            steps {
                dir('frontend') {
                    echo "Backend API : ${env.BACKEND_API}."
                    bat "docker build -t students-frontend:${env.BUILD_NUMBER} -t students-frontend:latest ."
                }
            }
        }
    }
}