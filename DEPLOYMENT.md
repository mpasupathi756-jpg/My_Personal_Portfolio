# 🚀 100% Free Long-Term Deployment Guide

This guide details how to deploy **Pasupathi M's Portfolio** completely free of charge with permanent availability, high performance, and automatic continuous deployment via GitHub.

---

## 🌟 Recommended Platform: Cloudflare Pages (Native & Free Forever)

Your project is built with **Nitro** with the **`cloudflare-module`** preset natively configured.

### Why Cloudflare Pages?
- **100% Free Forever**: Generous free tier with **unlimited bandwidth** and **100,000 requests/day**.
- **No Sleep / No Cold Starts**: Unlike free container hosts (like Render or Heroku) that go to sleep after 15 minutes of inactivity, Cloudflare edge servers respond immediately.
- **Global Edge Network**: Cached across 300+ global data centers for ultra-fast load times.
- **Free Custom Domain with SSL**: Attach `yourname.dev` or `yourname.com` with one click and automatic HTTPS.

---

### Method A: Automated GitHub Deployment (Easiest & Best for Long-Term)

Whenever you push new code to your GitHub repository, Cloudflare will automatically build and publish your portfolio in seconds.

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: modern glassmorphic portfolio redesign"
   git branch -M main
   git remote add origin https://github.com/mpasupathi756-jpg/pasupathi-portfolio.git
   git push -u origin main
   ```

2. **Log into Cloudflare**:
   - Visit [dash.cloudflare.com](https://dash.cloudflare.com/) and create a free account.
   - In the left sidebar, click **Compute (Workers & Pages)** → **Pages** → **Connect to Git**.

3. **Select Your Repository**:
   - Choose your GitHub repository `My_Personal_Portfolio`.

4. **Build Settings**:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist/client`
   - **Root directory**: `/` (or `pasupathi-portfolio` if in a subfolder)

5. **Environment Variables (Optional for EmailJS)**:
   If using the contact form via EmailJS:
   - `VITE_EMAILJS_SERVICE_ID`: your service ID
   - `VITE_EMAILJS_TEMPLATE_ID`: your template ID
   - `VITE_EMAILJS_PUBLIC_KEY`: your public key

6. **Click Save and Deploy**:
   - Cloudflare will build the site and provide a free URL such as: `https://pasupathi-portfolio.pages.dev`.

---

### Method B: One-Command CLI Deployment (Wrangler)

You can also deploy directly from your local terminal:

```bash
# 1. Build the production output
npm run build

# 2. Deploy directly with Nitro
npx nitro deploy --prebuilt
```
Or with Cloudflare Wrangler:
```bash
npx wrangler pages deploy .output/public --project-name=pasupathi-portfolio
```

---

## ⚡ Alternative Platform: Vercel (Fast & Zero-Config)

Vercel is another top-tier free choice for frontend developers:

1. Go to [vercel.com](https://vercel.com) and log in with GitHub.
2. Click **Add New** → **Project**.
3. Import your `pasupathi-portfolio` repository.
4. Keep the default settings:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist` or `.output/public`
5. Click **Deploy**. Your site will be live at `https://pasupathi-portfolio.vercel.app`.

---

## 🌐 Adding a Free Custom Domain

Both Cloudflare Pages and Vercel allow you to connect your own domain completely free:
1. In the Cloudflare Pages or Vercel dashboard, go to **Custom Domains**.
2. Enter your domain name (e.g., `pasupathim.dev`).
3. Add the two CNAME records shown in the dashboard to your domain registrar (e.g. Namecheap, GoDaddy, Hostinger).
4. Cloudflare automatically issues and renews an SSL (HTTPS) certificate at zero cost.

---

## 🛠️ Local Development & Preview Commands

```bash
# Run local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```
