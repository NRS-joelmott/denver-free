# Denver Free — PWA

Free events, concerts, happy hours, activities and deals near Denver, CO.

## Deploy in 5 steps

### 1. Create a GitHub repo
Go to github.com → New repository → name it `denver-free` → Create

### 2. Upload these files
Drag and drop the entire `denver-free` folder contents into your new repo (or use GitHub Desktop)

### 3. Connect to Vercel
- Go to vercel.com → Add New Project
- Import your `denver-free` GitHub repo
- Framework: **Create React App** (auto-detected)
- Click **Deploy**

### 4. Add your Anthropic API key (for AI search)
In Vercel dashboard → Your project → Settings → Environment Variables
- Name: `REACT_APP_ANTHROPIC_API_KEY`
- Value: your key from console.anthropic.com
- Click Save, then Redeploy

### 5. Install on iPhone
- Open your Vercel URL in **Safari** on your iPhone
- Tap the **Share** button (box with arrow)
- Tap **Add to Home Screen**
- Tap **Add**

Done! It's now on your home screen like a native app.

## Share with friends
Just send them your Vercel URL (e.g. `denver-free.vercel.app`).
They follow step 5 to install it on their phone.

## Local development
```
npm install
npm start
```
