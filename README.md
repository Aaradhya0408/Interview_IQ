# InterviewIQ

InterviewIQ is a Vite/React frontend with an Express/MongoDB API. The Render blueprint at the repository root builds the frontend and serves it from the API service, so production uses one origin. Payment integration is disabled for now; the Pricing page offers the free plan only.

## Deploy on Render

1. Push this repository to GitHub and create a **Blueprint** in Render from this repository. Render will detect `render.yaml` and create the `interview-iq` web service.
2. In the service's **Environment** settings, add the secrets below. Render will then build and deploy the app. The health check is `/health`.
3. In Firebase Console, enable Google sign-in and add the deployed Render hostname to the authorized domains. Set `VITE_FIREBASE_APIKEY` in Render before building/redeploying.
4. Configure MongoDB Atlas network access so the Render service can connect.

### Required environment variables

- `MONGODB_URL` — MongoDB Atlas connection string.
- `JWT_SECRET` — long, random signing secret.
- `OPENROUTER_API_KEY` — OpenRouter API key for interview generation and evaluation.
- `VITE_FIREBASE_APIKEY` — Firebase project's web API key; it is included in the frontend build.

`NODE_ENV` is set to `production` by the blueprint. Razorpay/payment secrets are not needed while payments are disabled.

## Local development

- API: `cd 3.interviewIQ/server && npm install && npm run dev`
- Frontend: `cd 3.interviewIQ/client && npm install && npm run dev`
- Put server secrets in `3.interviewIQ/server/.env`. Set `VITE_FIREBASE_APIKEY` in `3.interviewIQ/client/.env.local` for Vite.
- The Vite dev app calls the API at `http://localhost:6000`; set `CLIENT_ORIGIN=http://localhost:5173` in the server environment.
