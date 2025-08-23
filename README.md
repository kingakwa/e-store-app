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

-Run the downloaded `.msi` file.

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

  <img width="706" height="275" alt="npm install" src="https://github.com/user-attachments/assets/245cbd4b-fd53-4632-9076-a4e77dd351b0" />

  
**step 4: Start the Development Server:** 

This project uses Vite. To start the local server, 

run:
  ```npm run dev```
  
  Your terminal should now show you a local address, usually http://localhost:5173. Open this URL in your web browser. You should see the e-commerce    website! Any changes you make to the code in the src folder will now appear instantly in your browser.

<img width="593" height="266" alt="url for the website" src="https://github.com/user-attachments/assets/d0ee6909-dd0d-42ab-b4d0-ba71a240584f" />

<img width="902" height="392" alt="local-test-website-maually" src="https://github.com/user-attachments/assets/cbca796e-693b-41bc-94fc-fa0c4b4ea92b" />

  
## Phase 2: Setting Up Cloud Infrastructure with Terraform

-Create the AWS S3 bucket where your website will live. We'll use Terraform to do this in an automated, repeatable way.

**Prerequisites:**

-Terraform: Install the Terraform CLI.

-AWS CLI: Install the AWS CLI.

-AWS IAM User: For security, do not use your root AWS account. Create an IAM User with programmatic access and attach policies that give it permission to manage S3 (AmazonS3FullAccess is fine for this project). Save the Access Key ID and Secret Access Key.

**1.Configure AWS Credentials:** 

-Open your terminal and configure the AWS CLI to use the credentials you just created:

```aws configure  ## It will prompt you for your Access Key ID, Secret Access Key, default region (e.g., us-east-1), and default output format ```

2.Initialize Terraform:

Navigate to the terraform directory in your project's terminal:

```
cd terraform
terraform init
```

3. Review the Plan: See what resources Terraform is about to create:
   ```
   
   terraform plan #This will show you that it plans to create an S3 bucket configured for static website hosting
   ```
   
4.Apply the Changes: To create the S3 bucket in your AWS account, run:

```
terraform apply  #Terraform will ask for confirmation. Type yes and press Enter. Your S3 bucket is now live!
```

<img width="622" height="166" alt="terraform apply" src="https://github.com/user-attachments/assets/167f41b4-fd48-40bf-893f-dbecb5d4bb01" />


## Phase 3: Automating Deployment with GitHub Actions

-This is the final and most powerful step. We will set up a workflow so that every time you push a change to your GitHub repository, it automatically builds your website and deploys it to the S3 bucket you just created.

**Add AWS Credentials to GitHub Secrets:**

Add AWS Credentials to GitHub Secrets:

-Go to your repository on GitHub.

-Click on `Settings` > `Secrets` and `variables` > `Actions`.

-Click `New repository secret`.

-Create a secret named `AWS_ACCESS_KEY_ID` and paste your IAM user's Access Key ID.

-Create another secret named `AWS_SECRET_ACCESS_KEY` and paste your Secret Access Key.

-Create a final secret named `AWS_S3_BUCKET` and paste the name of the S3 bucket that Terraform created.

-create a secret name for region `AWS_REGION` and past the name of the S3 bucket region e.g `us-east-2`

<img width="628" height="392" alt="variable -on-github" src="https://github.com/user-attachments/assets/2c1635c3-4b98-4c29-bfa4-9621f4933f8e" />


<img width="623" height="218" alt="variables added" src="https://github.com/user-attachments/assets/711144ab-9af5-4ada-b39d-96df6e47c094" />



**Push and Deploy**

-Make a small change to your index.html file (e.g., change some text).

-Commit and push your changes to GitHub:

```
git add .
git commit -m "My first automated deployment"
git push
```

-Go to the Actions tab in your GitHub repository. You will see your workflow running. Once it finishes with a green checkmark, your updated site is live! 

<img width="910" height="302" alt="SUCCESFUL DEPLOY" src="https://github.com/user-attachments/assets/7ed8972f-4a61-4a60-83cd-4ce7bee240a6" />


**Getting the static URL**

You can find the public URL in your S3 bucket's settings under Static website hosting.

**Step 1: Enable Static Website Hosting**

-Go to AWS S3 Console

-Find and click on your bucket (my-country-list-bucket-unique)

-Click on the `Properties` tab

-Scroll down to `Static website hosting`

-Click `Edit`

-Select `Enable`

-Index document: Enter index.html

-Error document (optional): Enter error.html or index.html

-Click `Save changes`

<img width="947" height="333" alt="static website" src="https://github.com/user-attachments/assets/3614ecb5-7e00-4727-a2a9-f5067e799745" />


**step 2: Configure Bucket Policy for Public Access**

- Go to the "Permissions" tab of your bucket
  
- Click `Bucket Policy`
  
- Add this policy (replace YOUR-BUCKET-NAME with my-country-list-bucket-unique):

  ```
  {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::my-country-list-bucket-unique/*"
        }
    ]
}```
-Click `Save changes`

-Disable Block Public Access

**tep 3: Find Your Public URL**

-Go back to the `Properties` tab

-Scroll to `Static website hosting`

-You'll see your website URL there



Your URL will look like:
`http://my-country-list-bucket-unique.s3-website.us-east-2.amazonaws.com`

<img width="833" height="441" alt="website done" src="https://github.com/user-attachments/assets/a585c712-62dd-4bfe-b3c0-feb16b03f503" />



