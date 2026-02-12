# S.P.B. & Co. - Professional Web Portal

A modern, responsive, and AI-enhanced web application for **S.P.B. & Co.**, a leading firm of Practicing Cost and Management Accountants led by **FCMA Sunder Prakash Budkoti**.

![SPB & Co. Branding](https://media.licdn.com/dms/image/v2/D5603AQHrEHnHoXTXgQ/profile-displayphoto-crop_800_800/B56ZsrGCyCI0AI-/0/1765954564022?e=1772668800&v=beta&t=RApkb3h-I-v6AwwzsTaa20RkpvHdD9NznItJ1bYrT1E)

## 🚀 Overview

This portal serves as the digital front-office for S.P.B. & Co. (established 2010), highlighting their expertise in Cost Audit, Management Consulting, and Financial Strategy. It features a built-in **Gemini-powered AI Assistant** to provide instant guidance on compliance and services.

## ✨ Key Features

- **Professional Portfolio**: Detailed biography and qualifications of FCMA Sunder Prakash Budkoti.
- **Service Catalog**: Categorized overview of Audit, Costing, Taxation, and Management services.
- **Gemini AI Assistant**: Real-time support for client queries using Google's latest `gemini-3-flash-preview` model.
- **Modern UI/UX**: Built with Tailwind CSS, Lucide icons, and optimized for all device sizes.
- **Direct Engagement**: High-impact contact section replacing traditional forms with direct phone and email links.

## 🛠️ Technical Stack

- **Frontend**: React 19 (ESM based)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **AI Engine**: @google/genai (Gemini API)
- **Build Tool**: Vite

## 💻 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root and add your Gemini API Key:
   ```env
   API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

## 🚢 Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages.

### Manual Deployment
```bash
npm run build
npm run deploy
```

### Automated Deployment (Recommended)
The repository includes a GitHub Actions workflow that automatically builds and deploys your site whenever you push to the `main` branch.

1. Go to your GitHub Repository **Settings**.
2. Navigate to **Pages**.
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

## 📞 Contact

**S.P.B. & Co. (Indirapuram Office)**
- **Phone**: 097167 19137
- **Email**: spbcoca@gmail.com
- **LinkedIn**: [Sunder Prakash Budkoti](https://in.linkedin.com/in/cma-sunder-prakash-budkoti-69a14326)

---
© 2025 S.P.B. & Co. | Quality Driven Financial Insights.
