# CVMaker

## Getting Started

These instructions will help you set up the project locally.

## Prerequisites

- Node.js (v20 or higher)
- pnpm (v9 or higher)

## Environment Setup

1. Clone the repository:

```bash
git clone https://github.com/gabriel-logan/cvmaker.git
```

2. Navigate to the project directory:

```bash
cd cvmaker
```

3. Copy the example environment files and set your environment variables:

```bash
cp .env.example .env
```

4. Now you can set the necessary environment variables in the `.env` file.

## Render Setup and Start

Render Build: cd ./frontend && pnpm install && pnpm build && cd ../backend && pnpm install && pnpm build

Render Start: cd backend/ && npx puppeteer browsers install chrome && pnpm start
