# Durgaraj Adventures

## Full-stack development

Copy `.env.example` to `.env` and set a strong `ADMIN_PASSWORD` and `JWT_SECRET`.

Run the frontend and API together:

```bash
npm run dev:full
```

The public site runs at `http://localhost:5173`. The private admin control room is at `/control-room`.

## Production

```bash
npm run build
npm start
```

The API serves the built site and listens on `PORT` (default `8787`). Content is stored in `DATA_DIR/durgaraj.sqlite`. Use a persistent disk or a managed database when deploying; SQLite data on an ephemeral serverless filesystem will not persist. Set `FRONTEND_ORIGIN` when the frontend and API use different domains.

Admin credentials are created from `ADMIN_EMAIL` and `ADMIN_PASSWORD` on first startup. Passwords are stored as bcrypt hashes and content mutations require an expiring JWT session.

  # Durgaraj Adventures official website

  This is a code bundle for Durgaraj Adventures official website. The original project is available at https://www.figma.com/design/uT0anzSxRCSodPv42gm3ee/Durgaraj-Adventures-official-website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  