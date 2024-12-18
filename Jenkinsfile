pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/lidiia0288/API_and_UI_autotests.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        
        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
        
        stage('Allure Report Generation') {
            steps {
                sh 'allure generate ./allure-results -o ./allure-report'
            }
        }
        
        stage('Publish Allure Report') {
            steps {
                allure([
                    includeProperties: false,
                    jdk: '',
                    properties: [],
                    reportBuildPolicy: 'ALWAYS',
                    results: [[path: 'allure-results']]
                ])
            }
        }
    }

    post {
        always {
            // Архивируем артефакты тестов
            archiveArtifacts artifacts: 'allure-results/*, allure-report/*', fingerprint: true
            
            // Уведомляем о статусе сборки
            slackSend channel: '#ci-cd',
                      color: currentBuild.result == 'SUCCESS' ? 'good' : 'danger',
                      message: "${currentBuild.fullDisplayName} finished with status ${currentBuild.result}"
        }
    }
}
