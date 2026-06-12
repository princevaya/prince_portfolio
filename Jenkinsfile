pipeline {
    agent any

    environment {
        IMAGE_NAME = "nextjs-app"
        CONTAINER_NAME = "nextjs-container"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                    docker stop $CONTAINER_NAME || true
                    docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                    docker run -d \
                    --name $CONTAINER_NAME \
                    -p 3000:3000 \
                    --restart always \
                    $IMAGE_NAME
                '''
            }
        }
    }
}