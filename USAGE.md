```markdown
Joke Generator — usage notes

What this is
- A small React component (TypeScript) that fetches random jokes from JokeAPI (https://v2.jokeapi.dev/).
- Handles single-line and two-part jokes, includes loading / error logic, copy and tweet actions.

How to use
1. Add the component to your app:
   import JokeGenerator from './components/JokeGenerator';
   ...
   <JokeGenerator />

2. The component uses the browser fetch API. In test environments we mock `global.fetch`.

3. Styling uses Tailwind utility classes; if your project doesn't have Tailwind, either:
   - Add Tailwind to your project, or
   - Replace the classes with your own CSS.

Notes
- You can adjust the API query string to filter categories or flags. Example:
  https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,explicit&type=single,twopart
- For production consider caching, rate-limiting handling and graceful fallbacks for blocked requests.
```