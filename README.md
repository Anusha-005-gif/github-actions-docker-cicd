# CI/CD Pipeline with GitHub Actions, Docker & Minikube

## 📌 Project Overview

This project demonstrates an end-to-end CI/CD pipeline for a Node.js application using GitHub Actions, Docker, Docker Hub, and Kubernetes with Minikube.

The pipeline automatically:

1. Runs automated tests.
2. Builds a Docker image.
3. Pushes the image to Docker Hub.
4. Deploys the Docker image to a local Kubernetes cluster using Minikube.
5. Runs the application inside Kubernetes and makes it accessible through a browser.

## 🛠️ Technologies Used

* Node.js
* Express.js
* Git & GitHub
* GitHub Actions
* Docker
* Docker Hub
* Kubernetes
* Minikube
* PowerShell

## 🔄 CI/CD Workflow

```text
Developer
    │
    ▼
GitHub Repository
    │
    ▼
GitHub Actions
    │
    ├── Install Dependencies
    │
    ├── Run Automated Tests
    │
    ├── Build Docker Image
    │
    └── Push Image to Docker Hub
             │
             ▼
       Docker Hub
             │
             ▼
      Minikube / Kubernetes
             │
             ▼
        Running Application
```

## 📂 Project Structure

```text
github-actions-docker-cicd/
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml
│
├── test/
│   └── app.test.js
│
├── deployment.yaml
├── service.yaml
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## 🚀 Application

The application is a simple Node.js and Express.js web application.

When the application is running, it displays:

```text
Hello! CI/CD Pipeline is working 🚀
```

## 🧪 Running Tests Locally

Install the dependencies:

```bash
npm install
```

Run the automated tests:

```bash
npm test
```

## 🐳 Docker

### Build the Docker Image

```bash
docker build -t github-actions-docker-cicd .
```

### Run the Docker Container

```bash
docker run -p 3000:3000 github-actions-docker-cicd
```

Open:

```text
http://localhost:3000
```

## 🐳 Docker Compose

The application can also be started using Docker Compose:

```bash
docker compose up --build
```

To stop the application:

```bash
docker compose down
```

## ⚙️ GitHub Actions

The GitHub Actions workflow is located at:

```text
.github/workflows/ci-cd.yml
```

The workflow is triggered when code is pushed to the `main` branch.

### Pipeline Stages

**1. Checkout Code**

GitHub Actions checks out the project source code.

**2. Set Up Node.js**

Node.js 20 is configured for the workflow.

**3. Install Dependencies**

Dependencies are installed using:

```bash
npm ci
```

**4. Run Tests**

The automated tests are executed using:

```bash
npm test
```

**5. Login to Docker Hub**

GitHub Actions securely authenticates with Docker Hub using GitHub repository secrets.

**6. Build Docker Image**

The application is packaged into a Docker image.

**7. Push Docker Image**

The image is pushed automatically to Docker Hub.

## 🐳 Docker Hub Image

Docker Hub repository:

```text
https://hub.docker.com/r/anushabhojaraj/github-actions-docker-cicd
```

Docker image:

```text
anushabhojaraj/github-actions-docker-cicd:latest
```

## ☸️ Kubernetes Deployment with Minikube

The project uses Minikube to create a local Kubernetes cluster.

### Start Minikube

```bash
minikube start
```

### Deploy the Application

```bash
kubectl apply -f deployment.yaml
```

### Create the Service

```bash
kubectl apply -f service.yaml
```

### Check the Pod

```bash
kubectl get pods
```

The pod should show:

```text
Running
```

### Access the Application

```bash
minikube service github-actions-docker-cicd
```

This opens the deployed application in the browser.

## 🔐 GitHub Secrets

The Docker Hub credentials are stored securely as GitHub repository secrets.

The following secrets are used:

```text
DOCKERHUB_USERNAME
DOCKERHUB_TOKEN
```

The Docker Hub access token is not stored directly in the workflow file.

## ✅ Project Result

The complete CI/CD pipeline successfully performs:

```text
Code Push
    ↓
Automated Testing
    ↓
Docker Image Build
    ↓
Docker Hub Push
    ↓
Kubernetes Deployment
    ↓
Application Running on Minikube
```

## 🎯 Learning Outcomes

Through this project, I gained practical experience with:

* Creating CI/CD pipelines using GitHub Actions
* Automated testing
* Docker image creation
* Docker containers
* Docker Hub image publishing
* GitHub repository management
* Kubernetes deployments
* Kubernetes services
* Minikube local clusters
* Managing GitHub Actions secrets

## 🔮 Future Enhancements

* Add automated Kubernetes deployment through GitHub Actions
* Add application health checks
* Add Docker image versioning
* Add monitoring and logging
* Deploy the application to a cloud Kubernetes environment

## 👩‍💻 Author

**Anusha D B**

B.E. Artificial Intelligence and Data Science

GitHub: `https://github.com/Anusha-005-gif`
