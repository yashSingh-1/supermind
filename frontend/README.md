AI DM and Comment Automation Application

This AI-powered application helps automate your Direct Messages (DMs) and comments on social media platforms using trigger words to respond intelligently to users. Built with a modern tech stack, it ensures efficiency, scalability, and a seamless user experience.

Features

Trigger Word Automation: Respond automatically to DMs and comments based on predefined trigger words.

Custom Responses: Personalize responses for different trigger words.

Multi-Platform Support: Works seamlessly with Instagram using the Instagram API.

User Authentication: Secure user accounts and sessions powered by Clerk.

Analytics Dashboard: Monitor engagement and response performance.

Scalable Architecture: Built with Next.js and Prisma for robust performance and database management.

Tech Stack

Frontend: Next.js, TailwindCSS

Backend: Prisma ORM, Next.js API Routes

Authentication: Clerk

Social Media Integration: Instagram Graph API

Styling: TailwindCSS

Database: PostgreSQL (via Prisma)

Hosting: Vercel or other cloud platforms

Prerequisites

Node.js >= 18.x

PostgreSQL database

Instagram Developer Account and API credentials

Clerk API credentials

Vercel account for deployment (optional)

Installation

Clone the Repository:

git clone https://github.com/yashSingh-1/Agents.git
cd automate_ai

Install Dependencies:

npm install

Configure Environment Variables:
Create a .env file in the root directory and add the following:

DATABASE_URL=postgresql://user:password@localhost:5432/yourdatabase
NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-frontend-api
CLERK_API_KEY=your-clerk-api-key
INSTAGRAM_ACCESS_TOKEN=your-instagram-access-token

Run Prisma Migrations:

npx prisma migrate dev

Start the Development Server:

npm run dev

The application will be available at http://localhost:3000.

Usage

Login/Register:

Use Clerk for secure login or registration.

Set Up Trigger Words:

Access the dashboard and define trigger words and their corresponding responses.

Connect Instagram:

Link your Instagram account via the Instagram Graph API.

Monitor Responses:

Use the analytics dashboard to view automated interactions and performance metrics.

Deployment

Deploy on Vercel

Push your code to a GitHub repository.

Connect the repository to Vercel.

Add the environment variables in the Vercel dashboard.

Deploy the project.

Contributing

Contributions are welcome! Please follow these steps:

Fork the repository.

Create a new branch:

git checkout -b feature/your-feature-name

Commit your changes:

git commit -m "Add your message here"

Push the branch:

git push origin feature/your-feature-name

Open a pull request.

License

For questions or support, feel free to open an issue or contact the maintainers.

