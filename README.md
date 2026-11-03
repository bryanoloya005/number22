# Node.js Docker Activity

This project demonstrates how to containerize a Node.js application using Docker.

## Required files

- `.dockerignore`
- `Dockerfile`
- `docker-compose.yml`
- `.env`
- `package.json`
- `server.js`

## Setup

1. Copy `.env.example` and rename the copy to `.env`.
2. Open a terminal in this project folder.
3. Run:

```bash
docker compose up --build
```

4. Open:

http://localhost:3000

You can also test:

http://localhost:3000/health

## Stop the container

```bash
docker compose down
```

## GitHub note

Do NOT upload your real `.env` file if it contains passwords, API keys, database credentials, or other secrets. Upload `.env.example` instead.
