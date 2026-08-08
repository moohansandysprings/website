# Moohan Martial Arts Sandy Springs — Static Website Replica

This is a fully static replica of [moohansandysprings.com](https://moohansandysprings.com/), optimized for high performance, mobile responsiveness, and easy content editing without code using **Decap CMS**.

---

## Features

- **100% Static & Pure HTML/CSS/JS**: Zero build step required. Direct deployment on GitHub Pages.
- **Exact Visual Replica**: Authentic fonts (Nunito, Playfair Display), custom color scheme, icons, and exact layout.
- **Decap CMS Integrated**: Non-technical staff can update images, PDFs (e.g. schedules), program details, phone numbers, and text via an easy web interface at `/admin/`.
- **Responsive Navigation**: Mobile hamburger menu, smooth scrolling, and hover dropdowns.
- **No Testimonials**: Simplified page layout per custom design requirement.

---

## Folder Structure

```
moohan-sandy-springs/
├── index.html                   # Main Homepage
├── schedule.html                # Class Schedule page with PDF viewer
├── contact.html                 # Contact Us page
├── free-trial.html              # Free Trial Class signup page
├── summer-camp.html             # Summer Camp info page
├── programs/
│   ├── kid-tiger.html           # Kid Tiger (Ages 4-5) program page
│   ├── junior-tkd.html          # Junior TKD (Ages 6-12) program page
│   └── adult-family.html        # Teen & Adult program page
├── css/
│   └── style.css                # Global stylesheet & design system
├── js/
│   └── main.js                  # Mobile menu, animations, forms, scroll
├── content/
│   ├── site_info.json           # General business info & contact info
│   ├── programs.json            # Program descriptions & highlights
│   └── schedule.json            # Schedule title & PDF reference
├── uploads/                     # Site images & uploaded PDFs
│   ├── moohan-logo.png
│   ├── moohan-masters.webp
│   ├── schedule.pdf
│   └── (program cover photos)
└── admin/                       # Decap CMS visual editor
    ├── index.html
    └── config.yml
```

---

## How to Deploy to GitHub Pages

1. **Create a GitHub Repository**:
   - Go to GitHub and create a new public repository (e.g., `moohan-sandy-springs`).

2. **Push Files**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Moohan website replica"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/moohan-sandy-springs.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - In your GitHub repo, go to **Settings > Pages**.
   - Under **Build and deployment > Source**, select **Deploy from a branch**.
   - Choose `main` branch and `/ (root)` folder, then click **Save**.
   - Your site will be live at `https://YOUR_USERNAME.github.io/moohan-sandy-springs/` in ~1 minute!

---

## Running Decap CMS Locally (Offline Development)

To edit content using the CMS on your local machine without setting up Netlify:

1. **Start the local CMS proxy server**:
   Open a terminal in `C:\Users\alanj\Downloads\moohan` and run:
   ```bash
   npx decap-server
   ```
   *(This starts the local backend API on `http://localhost:8081`)*

2. **Serve the website locally**:
   In a second terminal window in the same folder, run a local web server (e.g. using `npx serve`, `npx http-server`, or Python):
   ```bash
   npx serve .
   ```
   *(or `python -m http.server 8000`)*

3. **Access the CMS dashboard**:
   Navigate to `http://localhost:3000/admin/` (or `http://localhost:8000/admin/`).
   Decap CMS will automatically log you in without requiring password authentication. Any edits or media uploads you save in the UI will write directly to your local JSON files and `uploads/` folder on your computer!

---

## How Non-Technical Staff Can Edit Content (Decap CMS Production Setup)

Staff can visit `yoursite.github.io/admin/` to upload new schedule PDFs, change images, or edit text.

### Step 1: Connect Netlify Identity (Free)
1. Go to [Netlify](https://www.netlify.com/) and create a free account.
2. Click **Add new site > Import an existing project** and link your GitHub repo.
3. Once deployed on Netlify, go to **Site settings > Identity** and click **Enable Identity**.
4. Scroll down to **Services > Git Gateway** and click **Enable Git Gateway**.

### Step 2: Logging in & Editing
1. Visit `yoursite.netlify.app/admin/` (or your custom domain `/admin/`).
2. Log in with your email or GitHub account.
3. You will see 3 easy tabs:
   - **Site Information**: Edit phone, address, hours, mission text, and logos.
   - **Class Schedule PDF**: Click **Upload** to upload a new schedule PDF.
   - **Programs & Courses**: Edit program descriptions, age ranges, and cover images.
4. Click **Publish** — the website will automatically update!
