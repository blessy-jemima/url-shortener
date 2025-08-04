# CHANGES.md

## Stack
- Node.js + Express
- SQLite (in-memory)
- NanoID for short ID generation

## API Endpoints

| Method | Endpoint         | Description                  |
|--------|------------------|------------------------------|
| POST   | /shorten         | Create a short URL           |
| GET    | /:shortId        | Redirect to the original URL |

## Improvements
- Unique shortId via `nanoid`
- In-memory SQLite for fast access
- Clean MVC-style separation
- Full redirect logic
