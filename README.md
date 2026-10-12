# 🏫 Campus AI Helpdesk

An intelligent, real-time campus helpdesk and ticketing platform powered by AI (Google Gemini & DeepSeek). Designed to automate student queries, streamline issue reporting, and provide fast assistance for campus services.

---

## ✨ Features

- 🤖 **AI-Powered Assistance**: Integrated with Gemini and DeepSeek for automated query resolution and tool execution.
- ⚡ **Real-Time Communication**: Instant updates and live chat powered by Socket.IO.
- 📋 **Ticket & Query Management**: Students and campus staff can submit, track, and manage queries seamlessly.
- 🔐 **Secure Authentication**: User authentication and session management using JWT and bcrypt.
- 📁 **Media & File Attachments**: Cloud-based media storage using Cloudinary.
- 📧 **Automated Notifications**: Email alerts and updates powered by Nodemailer.
- 📊 **Analytics & Reporting**: Interactive campus analytics dashboard using Recharts.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Routing**: React Router
- **Real-time**: Socket.io Client
- **Charts & Icons**: Recharts, React Icons

### Backend
- **Runtime**: Node.js & Express
- **Database**: MongoDB with Mongoose
- **AI Integration**: Google Generative AI (`@google/generative-ai`), OpenAI/DeepSeek SDK
- **Real-time**: Socket.IO
- **Storage & Mail**: Cloudinary, Nodemailer

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18 or higher)
- MongoDB (running locally or MongoDB Atlas URI)
- Git

### 2. Installation & Setup

#### Backend Setup
```bash
cd my-react-app/backend
npm install
```
Configure environment variables:
1. Copy the example environment file:
   ```bash
   cp config.env.example config.env
   ```
2. Open `config.env` and populate your API keys (MongoDB URI, JWT secret, AI keys, Cloudinary credentials, Mailer credentials).

Start the backend server:
```bash
npm run dev
```

#### Frontend Setup
```bash
cd my-react-app
npm install
npm run dev
```

The application will be accessible at `http://localhost:5173`.

---

## 🔒 Security & Environment Variables

Never commit `config.env` or `.env` containing production secrets to public repositories. Use `config.env.example` as a template for configuring environment variables.
