pipeline {
    agent any 
    stages {
        stage("git clone") {
            steps {
                git branch:"main",url:"https://github.com/shiva-yadav-9390/college_website1.git"
            }
        }
        stage("docker image") {
            steps {
                sh "docker build -t shiva ."
            }
        }
        stage("container run") {
            steps {
                sh '''
                docker stop c1 || true
                docker rm c1 || true
                docker run -d -p 80:80 --name c1 shiva
                docker ps
                '''
            }
        }
    }
}
