# Deploying the SmartKoop Frontend to Render.com

This guide provides step-by-step instructions for deploying the SmartKoop frontend application to Render.com.

## Prerequisites

- A [Render.com](https://render.com) account
- Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)
- Your backend API already deployed or will be deployed separately

## Deployment Steps

### 1. Log in to Render.com

Visit [https://dashboard.render.com](https://dashboard.render.com) and log in to your account.

### 2. Create a New Web Service

1. Click on the "New +" button in the top right corner
2. Select "Web Service" from the dropdown menu

### 3. Connect Your Repository

1. Connect your Git repository if you haven't already
2. Select the repository containing your SmartKoop application

### 4. Configure the Web Service

Fill in the following details:
- **Name**: `smartkoop-frontend` (or your preferred name)
- **Runtime**: `Static Site`
- **Build Command**: `cd frontend && npm install && npm run build`
- **Publish Directory**: `frontend/build`

### 5. Set Environment Variables

Add the following environment variable:
- **Key**: `REACT_APP_API_URL`
- **Value**: The URL of your deployed backend API (e.g., `https://your-backend-api.onrender.com/api/v1`)

### 6. Configure Redirect Rules

Add a redirect/rewrite rule to handle client-side routing:
1. In the "Redirects/Rewrites" section, add a new rule:
   - **Source**: `/*`
   - **Destination**: `/index.html`
   - **Action**: `Rewrite`

### 7. Deploy the Service

Click "Create Web Service" to start the deployment process.

## Alternative: Using render.yaml (Blueprint)

We've included a `render.yaml` file in the root of the project that defines the deployment configuration. If you prefer to use this method:

1. Log in to Render.com
2. Go to "Blueprints" in the dashboard
3. Click "New Blueprint Instance"
4. Connect your repository
5. Render will automatically detect the `render.yaml` file and configure the services accordingly
6. Review the configuration and click "Apply"

## Troubleshooting

If you encounter the error "Module not found: Error: Can't resolve './pages/projects/ProjectTaskList'", this has been fixed by removing the commented imports in the App.js file.

## Post-Deployment

After deployment:

1. Verify that your frontend is working correctly by visiting the provided Render URL
2. Test the connection to your backend API
3. Set up a custom domain if needed (through the Render dashboard)

## Updating Your Deployment

Any new commits pushed to your repository's main branch will automatically trigger a new deployment on Render.com.
