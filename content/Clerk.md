---
title: "How to Build a Fast Blog with Next.js"
date: 2026-03-01
description: "A step-by-step guide to creating a static Markdown blog using Next.js App Router"
author: Jaco Botha
tags:
  - nextjs
  - markdown
  - blogging
  - jamstack
draft: false
image: /images/nextjs-blog-hero.jpg   # optional: featured image path
---
npm install @clerk/nextjs

// src/proxy.ts import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()

export const config = { matcher: [ // Skip Next.js internals and all static
files, unless found in search params
'/((?!\_next|[^?]_\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest))._)',
// Always run for API routes '/(api|trpc)(.\*)', ], }

// src/app/layout.tsx import {ClerkProvider} from "@clerk/nextjs";

return( <ClerkProvider> {children} </ClerkProvider> )

// pre-built components

<SignedIn></SignedIn> can only see when signed in <SignedOut></SignedOut> can
only see when signed out <UserButton /> Avatar and dropdown <SignInButton />
Unstyled Account portal signin page <SignUpButton /> Account signup page
