# 🌟 TriggerMind

## 📝 Overview

TriggerMind is an automated tool designed to streamline the research phase of ad creation. It gathers and analyzes data from various sources to provide actionable insights, helping marketers craft user-centric, effective advertisements.

## ✨ Features

### 🔍 Comprehensive Research Automation

- Analyzes YouTube videos and competitor ads to identify:
  - Trends
  - Solutions
  - User pain points
  - Effective solutions

### 🎯 Actionable Insights Generation

- Summarizes key user triggers and problems.
- Recommends:
  - 🔥 High-performing hooks
  - 🖱️ Calls-to-action (CTAs)
  - 🔍 Content formats tailored to specific topics and audiences.

### 🖥️ User-Centric Interface

- Simple input fields for:
  - 📌 Prompt
  - 🧩 For generating advertisement heading, subheading, description generation
- Intuitive dashboard showcasing insights and recommendations at a glance.

## 🔧 Tech Stack

### 🌐 Frontend

- _Framework_: [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
- _Styling_: [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
- _UI Components_: [![shadcn](https://img.shields.io/badge/shadcn.dev-6A67CE?style=for-the-badge&logo=shadcn)](https://shadcn.dev/)

### 🔗 Backend

- _Framework_: [![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/) [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

### 💄️ Database

- _Database_: [![AstraDB](https://img.shields.io/badge/AstraDB-1E273A?style=for-the-badge&logo=datastax&logoColor=white)](https://www.datastax.com/astra)

### ⚙️ Workflow

- _Automation_: [![Langflow](https://img.shields.io/badge/Langflow-3D5AFE?style=for-the-badge&logo=logseq&logoColor=white)](https://github.com/logspace-ai/langflow)

## 🚀 Installation

### Prerequisites

- 💪 Node.js (v16+)
- 💃 AstraDB account

### Steps

1. Clone the repository:
   ```
   git clone https://github.com/yashSingh-1/supermind.git
   cd supermind
   ```
2. Install dependencies:
   ```
   cd frontend
   bun install
   ```
   ```
   cd backend
   npm install
   ```
3. Set up environment variables:

   - Create a .env file in both frontend and backend.
   - And add the following:

     ```
     # frontend

     DATABASE_URL="<database_url>"
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="<API_KEY>"
     CLERK_SECRET_KEY="<Secret_key>"
     NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
     NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
     NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard/home
     NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/dashboard/home
     NEXT_PUBLIC_HOST_URL=http://localhost:3000
     ```

     ```
     LANGFLOW_APPLICATION_TOKEN = "<TOKEN>"
     PORT = 8081
     ASTRA_CLIENT_ID = "<client_id>"
     ASTRA_SECRET = "<astra_secret>"
     ASTRA_TOKEN = "<astra_token>"
     ASTRA_URL = "<astra_url>"
     GROQ_API_KEY = "<groq_api_key>"
     ```

4. Start the development server:

   ```
   cd frontend
   bun run dev

   cd backend
   npx tsc
   node dist/index.js
   ```

## 📖 Usage

1. Open the application in your browser at http://localhost:3000.
2. Enter the topic and brand guidelines in the provided input fields.
3. View generated insights and recommendations on the dashboard.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch: git checkout -b feature-name.
3. Commit your changes: git commit -m 'Add feature name'.
4. Push to the branch: git push origin feature-name.
5. Open a pull request.

## 📜 License

This project is licensed under the [MIT License](LICENSE).
