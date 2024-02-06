## About this project

The project is an integrated system designed to function as an Admin Dashboard, serving the roles of Content Management System (CMS), Administration, and API provider. The main features of the project include the ability to manage multiple vendors through a single CMS, perform CRUD operations on billboards, categories, and products, and generate APIs for various use cases. The system also supports CRUD operations for filters (variants) such as Color and Size, enabling a comprehensive management of the available data.

## Cloning the repository

```bash
https://github.com/Addisu87/ecommerce-admin.git
```

## Running Locally

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

## Key Features

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
- UI Components built using Shadcn UI
- CRUD operations
- Subscriptions(checkout, webhooks) using Stripe
- Styled using Tailwind CSS
- Validations using Zod
- Able to see orders, sales, etc.
- Written in TypeScript

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Addisu Haile**

- GitHub: [![GitHub Badge](https://img.shields.io/badge/-Addisu87-white?logo=GitHub&logoColor=181717&style=plastic)](https://github.com/Addisu87)
- Twitter: [![Twitter Badge](https://img.shields.io/badge/-AddisuTedla-white?logo=Twitter&logoColor=1DA1F2&style=plastic)](https://twitter.com/AddisuTedla)
- LinkedIn: [![LinkedIn Badge](https://img.shields.io/badge/-addisu_tedla-white?logo=LinkedIn&logoColor=1DA1F2&style=plastic)](https://linkedin.com/in/addisu-tedla/)

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Addisu87/ecommerce-admin/issues).

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project give me a star.

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank Antonio Erdeljac.
