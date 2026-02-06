# MongoDB Atlas Setup Guide

Follow these steps to set up a free MongoDB cloud database and connect it to your application.

## 1. Create an Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register).
2. Sign up for a free account.

## 2. Create a Cluster
1. After logging in, click **+ Create** or **Build a Database**.
2. Select the **M0 Shared (Free)** tier.
3. Choose a provider (AWS, Google Cloud, or Azure) and a region close to you.
4. Click **Create Cluster** (this may take 1-3 minutes).

## 3. Set Up Database Access
1. Go to **Security** -> **Database Access** in the left sidebar.
2. Click **+ Add Validate Database User**.
3. Enter a **Username** (e.g., `admin`) and **Password**.
   - **IMPORTANT**: Write this password down! You will need it for the URI.
4. Click **Add User**.

## 4. Set Up Network Access (Allow IP)
1. Go to **Security** -> **Network Access** in the left sidebar.
2. Click **+ Add IP Address**.
3. Click **Allow Access from Anywhere** (0.0.0.0/0).
   - *Note: For production, you would only whitelist your server's IP, but "Allow All" is easiest for development.*
4. Click **Confirm**.

## 5. Get Connection String
1. Go back to **Deployment** -> **Database** (or "Clusters").
2. Click **Connect** on your cluster card.
3. Select **Drivers** (Node.js, Go, Python, etc.).
4. Steps:
   - **Driver**: Node.js
   - **Version**: 4.1 or later
5. Copy the connection string provided. It will look like this:
   `mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

## 6. Update Application
1. Open the file `backend/.env`.
2. Replace `MONGO_URI` with your connection string.
3. Replace `<password>` with the password you created in Step 3.
4. Restart your backend server.
