pipeline {
    agent any
    stages {
        stage("DEscription-Shiva") {
            steps {
                sh "echo different pipeline behaviour on "
            }
        }
        stage("docker image build") {
            steps {
                sh "docker build -t shiva ."
            }
        }
       
        
        stage("when branch is dev") {
            when {
                branch 'dev'
            }
            steps {
                sh '''
                docker stop c1 ||true
                docker rm c1 ||true
                docker run -d  -p 1010:80 --name c1 shiva
                '''
            }
        }
        stage("when branch is main") {
            when {
                branch "main"
            }
            steps {
                sh '''
                docker stop c2 || true
                docker rm c2 || true
                docker run -d -p 80:80 --name c2 shiva
                '''
            }
        }
        stage("when branch is PRASAD") {
            when {
                branch "PRASAD"
            }
            steps {
                sh '''
                docker stop c2 || true
                docker rm c2 || true
                docker run -d -p 800:80 --name c2 shiva
                '''
            }
        }
    }
}
