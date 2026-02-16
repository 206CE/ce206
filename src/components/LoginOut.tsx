"use client"; // 👈 This is mandatory for hooks

import { useUser } from "@auth0/nextjs-auth0/client";


export function LoginOut() {
  const { user, error, isLoading } = useUser();

  // 1. Handle the loading state (crucial for Client Components)
  if (isLoading) return <div>Loading...</div>;

  // 2. Handle potential errors
  if (error) return <div>{error.message}</div>;

  return (
    <main>
      <h1>Home Page (Client Rendered)</h1>
      {user ? (
        <div>
          <img
            src={user.picture ?? ""}
            alt={user.name ?? "User"}
            width={50}
          />
          <p>Welcome, {user.name}!</p>
          <p>Email: {user.email}</p>
          <a href="/auth/logout">Logout</a>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <a href="/auth/login">Login</a>
        </div>
      )}
    </main>
  );
}
