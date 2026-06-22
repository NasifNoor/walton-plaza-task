# Walton Plaza Task

## Overview

This project is a high-performance product listing and detail system using
Next.js, React 19, TypeScript, Tailwind CSS, and GraphQL.

---

## Tech Stack

- Next.js 16 (App Router)
- TypeScript (Strict Mode)
- Tailwind CSS
- GraphQL
- Apollo Client
- React 19

---

## Running the Project

First, Clone the project:

```bash
git clone https://github.com/NasifNoor/walton-plaza-task.git
```

go to project folder

then install dependencies

```bash
npm install
```

## Environment variables:

Add .env file and add graphql endpoint on it.

NEXT_PUBLIC_GRAPHQL_URL= YOUR_GRAPHQL_ENDPOINT

run the project server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

### Product Listing Page

- Product listing using GraphQL
- Client-side pagination
- Price range filtering
- Availability filtering
- Price sorting (Low → High, High → Low)
- Loading skeletons
- Error handling

### Product Details Page

- Dynamic routing
- Product image gallery
- Stock-aware Add to Cart button
- Quantity selection
- Product specifications display

### Cart System

- Add to cart
- Update quantity
- Remove from cart
- Cart drawer
- Cart item count badge
- State persistence using localStorage

### User Experience

- Product image hover effects
- Responsive design
- Skeleton loading states
- 404 page
- Route-level error boundaries

---

## Architecture Decisions

### Why Next.js App Router?

The App Router provides server components, route-based loading states, error boundaries, and improved data fetching patterns. It also enables better separation between server and client logic.

### Why Apollo Client?

Apollo Client provides:

- GraphQL caching
- Query management
- Improved developer experience
- Reduced network requests

### Why Context API for Cart?

The cart state is shared across multiple components such as:

- Navbar
- Product Card
- Product Details Page
- Cart Drawer

Context API provides a lightweight solution without introducing the complexity of Redux for this project.

## State Persistence Strategy

Cart data is persisted using localStorage.

Benefits:

- Maintains cart data across page refreshes
- No backend dependency
- Simple implementation

---

## Performance Optimizations

### Memoization

useMemo is used to avoid recalculating filtered product collections on every render.

### Image Optimization

Next.js Image component is used for automatic image optimization and lazy loading.

### Server vs Client Components

Server Components:

- Data fetching pages
- Route-level rendering

Client Components:

- Cart interactions
- Filters
- Sorting
- Pagination
- Cart Drawer

where user event available.

### GraphQL Optimization

- Apollo cache reduces duplicate requests
- Only required fields are requested

---

## React 19 Consideration

The current cart implementation is fully client-side and updates immediately through React Context.

Because no backend cart API exists in this assessment, optimistic updates are not required.

In a production environment with server-side cart operations, React 19's useOptimistic hook would be a suitable choice for providing immediate feedback while add-to-cart requests are processed.

---

## Trade-offs

### Pagination vs Infinite Scroll

I chose pagination over infinite scrolling because it is a better fit for an e-commerce product catalog.

Users often browse products with specific goals in mind and frequently use filtering and sorting options to find relevant items. Pagination provides:

- Predictable navigation between product sets
- Better user control when filtering and sorting products
- Improved performance by rendering a limited number of items at a time

Infinite scrolling is commonly used in content-discovery platforms such as social media applications where users continuously consume content. For a product catalog experience, pagination offers a more structured and user-friendly browsing experience.

### Category Filter

Category filtering was not implemented because category information is not provided by the GraphQL API response.

### Rating Sort

Rating-based sorting was not implemented because rating data is not available in the provided API response.
