## About this project

This project is an admin dashboard shows a modern e-commerce app (with features like authentication, subscriptions, API routes, static pages for docs ...etc) that work in Next.js 14 and server components.

## Cloning the repository

```bash
https://github.com/Addisu87/ecommerce-admin.git
```

## Running Locally(Getting Started)

1 - Install dependencies using pnpm:

```bash
npm install
```

2- Copy .env.example to .env.local and update the variables.

```bash
cp .env.example .env.local
```

3-First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Connect to PlanetScale and Push Prisma

```bash
npx prisma generate
npx prisma db push
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Key Features

- Shadcn UI for Admin
- Admin dashboard serve as both CMS, Admin and API
- Control multiple vendoros via single CMS
- CRUD Billboards and can use them standalone and our admin generate API for all cases.
- CRUD operations for categories, products.
- CRUD filters(variants) like Color and Size.
- Search through categories, products, sizes, colors, billboards with include pagination
- Control products are "featured" to show on the homepage
- Able to see orders, sales, etc.
- Show graphs of your revenue etc.
- Order creation
- Stripe checkout
- Stripe webhooks

## Features

- New /app dir,
- Routing, Layouts, Nested Layouts and Layout Groups
- Data Fetching, Caching and Mutation
- Loading UI
- Route handlers
- Metadata files
- Server and Client Components
- API Routes and Middlewares
- Authentication using Clerk.js
- ORM using Prisma
- Database on PlanetScale
- UI Components built using Radix UI
- Documentation and blog using MDX and Contentlayer
- Subscriptions using Stripe
- Styled using Tailwind CSS
- Validations using Zod
- Written in TypeScript
