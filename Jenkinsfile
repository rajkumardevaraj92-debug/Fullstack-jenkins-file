pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                sh '''
                    cd fullstack-project/backend
                    npm install
                '''
            }
        }

        stage('Run Application') {
            steps {
                sh '''
                    cd fullstack-project/backend
                    pm2 restart server || pm2 start server.js --name server
                '''
            }
        }

    }
}
