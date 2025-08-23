# My ecommerce store
This is an excellent project that covers the full lifecycle of a modern web application, from local development to automated cloud deployment.

Let's break this down into three main phases:

Phase 1: Running the Website Locally

Phase 2: Setting Up the Cloud Infrastructure with Terraform

Phase 3: Automating Deployment with GitHub Actions

# Phase 1: Running the Website Locally
First, let's get the project running on your own computer. This allows you to make changes and see them instantly
## Prerequisites:

-Node.js and npm: Make sure you have Node.js installed. You can get it from the official website. npm comes bundled with it.
-Git: You'll need Git to manage the code.
-A Code Editor: I recommend Visual Studio Code.

## Installation
- Clone the Repository: Open your terminal (or command prompt), navigate to where you want to store the project, and run:
  
 ```
git clone <your-github-repository-url>
cd <repository-name>
```
## Install Dependencies:
The package.json file lists all the tools the project needs (like Vite and Tailwind CSS). Install them by running:
The VS Code terminal will then automatically recognize the node and npm commands after the installation is complete.

**Step 1: Download the Node.js Installer**
-Open your web browser and go to the official Node.js website: `https://nodejs.org/en/download/`

-You will see two download options:
  -LTS (Long-Term Support): This is the recommended version for most users. It's stable and has been tested extensively.
  -Current: This version includes the latest features but may be less stable
-Download the `LTS Windows Installer` (.msi file).

**Step 2: Run the Installer**
-Run the downloaded .msi file.
-The installation wizard will guide you through the process. You can generally accept the default options as they are suitable for most users. The installer will automatically add Node.js and npm to your system's PATH.

-Click `Next` through the prompts, and then click `Install` to begin the installation.

**Step 3: Verify the Installation**
-After the installation is complete, close and reopen your VS Code terminal. This step is crucial for the changes to your system's PATH to take effect.
-In the new terminal, run the following commands to verify that both Node.js and npm are installed correctly:
```
node -v
npm -v    #If the commands return version numbers (e.g., v18.16.0 for Node.js and 9.5.1 for npm)
```

 **Run**
- `yarn` or `npm install` to install packages
  
**step 4: Start the Development Server:** This project uses Vite. To start the local server, run:
  ```npm run dev```
  
  Your terminal should now show you a local address, usually http://localhost:5173. Open this URL in your web browser. You should see the e-commerce    website! Any changes you make to the code in the src folder will now appear instantly in your browser.
  
## Phase 2: Setting Up Cloud Infrastructure with Terraform
-Create the AWS S3 bucket where your website will live. We'll use Terraform to do this in an automated, repeatable way.
**Prerequisites:**
-Terraform: Install the Terraform CLI.
-AWS CLI: Install the AWS CLI.
-AWS IAM User: For security, do not use your root AWS account. Create an IAM User with programmatic access and attach policies that give it permission to manage S3 (AmazonS3FullAccess is fine for this project). Save the Access Key ID and Secret Access Key.

**1.Configure AWS Credentials:** 
-Open your terminal and configure the AWS CLI to use the credentials you just created:
```aws configure  ## It will prompt you for your Access Key ID, Secret Access Key, default region (e.g., us-east-1), and default output format ```

