# Daily Duo

This project is part of my vibe coding experiments: a small mobile-first PWA for couples that suggests a random activity to do together every day.

## Features

- Shows a daily activity for two people.
- Uses realistic background photos related to the current task.
- Filters tasks by mood: outdoors, home, playful, calm, and spontaneous.
- Saves completed tasks to local history.
- Lets you expand completed tasks to read the full description.
- Lets you add a short note after completing a task.
- Supports favorite tasks.
- Lets you add custom tasks.
- Calculates relationship days from a start date.
- Stores user data locally in the browser with `localStorage`.

## Running Locally

Open `index.html` directly in a browser, or run a local server:

```bash
python -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173
```

## Project Structure

```text
.
├── index.html
├── styles.css
├── app.js
├── manifest.json
├── sw.js
└── assets/
```

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- PWA manifest
- Service Worker
- Unsplash photo backgrounds

## Local Data

The app stores all personal data locally in the browser:

- settings;
- names;
- relationship start date;
- completed tasks;
- completion notes;
- favorites;
- custom tasks.

No backend or account system is included.

## Status

This is an experimental prototype built for personal use and for exploring vibe coding workflows.

## Future Ideas

- Daily reminders.
- Import and export for custom tasks.
- Photos for completed activities.
- A memories calendar.
- Cross-device sync.

## License

No license has been selected yet. If this project becomes public, a `LICENSE` file should be added.
