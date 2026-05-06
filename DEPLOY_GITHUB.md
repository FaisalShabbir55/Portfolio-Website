# Deploy Your Portfolio on GitHub (Free)

Yes — you can host this portfolio **for free** on GitHub using **GitHub Pages**.

---

## Is it free?

- **GitHub Pages**: Free for public repos.
- **Your project**: Static React app (no backend), so it fits GitHub Pages.
- **Bandwidth**: Free within GitHub’s limits (enough for a portfolio).

---

## Option A: Automatic deploy with GitHub Actions (recommended)

The repo includes a workflow that builds and deploys on every push to `main`.

### 1. Push your code to GitHub

```bash
git init
git add .
git commit -m "Portfolio ready for deploy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Portfolio-Website.git
git push -u origin main
```

### 2. Turn on GitHub Pages

1. Open your repo on GitHub.
2. Go to **Settings** → **Pages**.
3. Under **Build and deployment**:
   - **Source**: choose **GitHub Actions** (not “Deploy from a branch”).
4. Save.

### 3. Deploy

- Push to `main` (or run the “Deploy to GitHub Pages” workflow manually).
- After the workflow finishes, the site will be at:

**Project site URL:**

`https://YOUR_USERNAME.github.io/Portfolio-Website/`

(Replace `YOUR_USERNAME` and `Portfolio-Website` if your repo name is different.)

---

## Option B: Use your own domain (e.g. `username.github.io`)

If the repo is named **exactly** `YOUR_USERNAME.github.io`, the site will be:

`https://YOUR_USERNAME.github.io`

Then you don’t need a base path. To do that:

1. Create a **new** repo named `YOUR_USERNAME.github.io`.
2. In **Settings → Pages**, set source to **GitHub Actions**.
3. In the workflow file `.github/workflows/deploy.yml`, change the build step to:

   - Remove the `env: BASE_PATH: /${{ github.event.repository.name }}/` block so the app is built with base `/`.
   - Or set `BASE_PATH: /` in that step.

4. Push the same code to this repo. The workflow will deploy to `https://YOUR_USERNAME.github.io`.

---

## Checklist before deploy

- [ ] `owner-data.json` (and `src/data/owner-data.json` if you use the sync script) has your real info.
- [ ] Run `./sync-data.sh` if you edit the root `owner-data.json`.
- [ ] Repo is pushed to GitHub.
- [ ] **Settings → Pages** is set to **GitHub Actions**.

---

## Summary

| Question              | Answer                                      |
|-----------------------|---------------------------------------------|
| Can I deploy for free?| Yes, with GitHub Pages.                    |
| Do I need a server?   | No, it’s all static files.                  |
| Custom domain?        | Optional; you can add one in Pages settings.|
| HTTPS?                | Yes, GitHub Pages provides it by default.   |

Your portfolio is ready to be deployed on GitHub at no cost.
