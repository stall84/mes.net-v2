# ADR 0009: Use React Router for Client-Side Navigation

DATE: 2024-05-21
STATUS: Accepted
TARGET MODULES: src/

--------------------------------------------------------------------------------
1. CONTEXT & PROBLEM STATEMENT
--------------------------------------------------------------------------------
The current website uses simple anchor tags (`<a href="/...">`) for navigation between pages. This causes full page reloads which is not ideal for a modern web application experience. We need to implement client-side routing to enable SPA behavior, smooth transitions between pages, and proper URL handling without full page refreshes.

--------------------------------------------------------------------------------
2. DECISION
--------------------------------------------------------------------------------
We will implement React Router v6 for client-side routing in this React application. This will allow us to:
- Create a single-page application with dynamic navigation
- Enable smooth transitions between pages
- Use proper URL paths that reflect the current page
- Maintain browser history and back/forward button functionality

--------------------------------------------------------------------------------
3. RATIONALE & ALTERNATIVES CONSIDERED
--------------------------------------------------------------------------------
Why was this choice made over alternatives?
- Choice A: Continue with anchor tags (`<a href="...">`) - This approach causes full page reloads, which is not modern and provides a poor user experience.
- Choice B: Implement custom routing logic - While possible, it would be complex to implement properly and maintain. React Router is battle-tested and widely used.
- Choice C: Use a different routing library (like Reach Router) - React Router is the most popular and well-documented option for React applications.

React Router v6 was chosen because:
- It's the current standard for React routing
- It has excellent documentation and community support
- It provides clean API with hooks like `useNavigate` and `useParams`
- It supports nested routes, lazy loading, and code splitting

--------------------------------------------------------------------------------
4. CONSEQUENCES
--------------------------------------------------------------------------------
Positive:
- Smooth navigation between pages without full page reloads
- Proper URL handling that reflects current page state
- Better user experience with SPA behavior
- Support for browser history and back/forward buttons
- Easy to add new routes in the future

Negative / Trade-offs:
- Additional dependency to manage
- Slight increase in bundle size
- Need to refactor existing navigation components to use React Router components
- Learning curve for developers unfamiliar with React Router concepts
================================================================================