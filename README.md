This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Tech Test

This tech test is mostly just to get a feeling of how you work as a developer, there is no need for perfection we just care about how you get there and how you can improve it in the future so spend around an hour at most.

We currently use OpenAPI specs and Swagger to generate the documentation across almost all of our APIs.

For this test we are using two Swagger Specifications: [auth.swagger](https://sso.trison-group.com/swagger) and [commander.swagger](https://api.project-commander.co.uk/swagger)

### Task 1

We'd like you to build out the login form using the credentials we sent you in the email so that you can login.

- We've set up a base login form but it needs to be connected to the API using the Auth Swagger Spec
- We'd like you to implement the login and a redirect to the dashboard upon a successful response
- **Bonus points**: implement some form of auth guard so that the user will be returned to the login page if they do not have credentials when going to the dashboard

## Task 2

We'd then like you to start building out the project dashboard, we have provided a base implementation that doesn't really work and there is no styling on this page.

- There are some mock projects present on the API for to you to consume, you can fetch these using the commander swagger spec and the company id found on the response from the Auth.
- Feel free to organise them how you would like but we'd like to be able to see the project title, description and status for each project and use the thumbnail image in the /assets folder as a
  mock image.
- Styling is up to you on this part and feel free to make it look how you want
