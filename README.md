# Postlify Client

A minimal post-sharing platform built with React and Vite.

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- React Hot Toast
- Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/SyntaxAdil/Postlify-client
cd Postlify-client
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3000
```

### Run Locally

```bash
npm run dev
```

## Features

- Create posts with image and caption
- Animated placeholder text
- Image preview before posting
- Responsive design
- Toast notifications

## Deployment

Deployed on **Vercel**.

Add `vercel.json` in root for client-side routing:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Set `VITE_API_URL` in Vercel environment variables to your Render backend URL.

---

> My first fullstack project — built while learning the MERN stack.