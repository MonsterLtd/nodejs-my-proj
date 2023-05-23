pipeline {

    agent {
        label 'my-new-agent'
    }

    tools {
        nodejs 'nodejs'
    }

    triggers {
        githubPush()
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
        stage('Test') {
            steps {
                sh 'npm test' //This is for testing the nodejs modules
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