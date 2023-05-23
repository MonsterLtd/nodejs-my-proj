pipeline {

    agent {
        label 'my-new-agent'
    }

    tools {
        nodejs 'nodejs'
        dockerTool 'docker'
    }

    triggers {
        githubPush()
    }

    environment {
        DOCKERHUB_CREDENTIALS = credentials('my_dockerhub_creds')
        IMAGE_NAME = 'nadiad/mynodejsapp'
    }

    stages {

        stage('Clean') {
            steps {
                cleanWs()
            }
        }

        stage('Clone_Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/MonsterLtd/nodejs-my-proj.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm ci' //This is for building the nodejs project
            }
        }
        stage('Docker login') {
            steps {
                sh 'docker login -u $DOCKERHUB_CREDENTIALS -p $DOCKERHUB_CREDENTIALS' //'j+Fb4DmH#-JH*6@'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test' //This is for testing the nodejs modules
            }
        }
        stage('Docker build and tag') {
            steps {
                sh 'docker build -t ${IMAGE_NAME} -f Dockerfile .'
                sh 'docker tag ${IMAGE_NAME} ${IMAGE_NAME}:${BUILD_NUMBER}'
            }
        }
        stage('Docker push') {
            steps {
                sh 'docker push ${IMAGE_NAME}:${BUILD_NUMBER}'
            }
        }
        stage('Deploy') {
           steps {
                sh 'pkill node'
                sh 'npm install -g forever'
                sh 'forever start src/index.js'
           }
        }
    }
}