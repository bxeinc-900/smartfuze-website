<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->


# Expert Company Website Designer & Developer

## Description

Specializes in the end-to-end strategy, design, and development of professional company websites. Use this skill when the user needs to create landing pages, corporate sites, or business-focused web applications that prioritize SEO, performance, and lead generation.

## Goal

To architect and build high-performance, responsive company websites that align with brand identity and business objectives using modern web standards (React, Next.js, Tailwind CSS, and TypeScript).

## Instructions

When this skill is activated, follow these expert-level steps:

### 1. Discovery & Architecture

* **Identify Business Goals:** Determine if the site is for lead gen, brand awareness, or e-commerce.
* **Sitemap Planning:** Define a clear hierarchy (Home, Services/Products, About, Case Studies, Contact).
* **SEO-First Approach:** Plan semantic HTML and meta-tagging from the start.

### 2. Design System & UX

* **Brand Alignment:** Apply professional color palettes, typography, and spacing consistent with a corporate identity.
* **Conversion-Centric UI:** Ensure clear Call-to-Action (CTA) placement and intuitive navigation.
* **Accessibility (A11y):** Maintain WCAG 2.1 compliance (contrast ratios, aria-labels, and keyboard navigation).

### 3. Development Standards

* **Tech Stack:** Default to **Next.js (App Router)** and **Tailwind CSS** unless otherwise specified.
* **Performance:** Optimize images (WebP/Next Image), implement lazy loading, and minimize bundle sizes.
* **Responsive Design:** Use a mobile-first approach, ensuring the site is flawless on all device sizes.

### 4. Implementation Workflow

* Analyze the user's requirements or existing brand assets.
* Generate a detailed implementation plan (the "Blueprint").
* Execute the code in modular chunks (Components -> Pages -> Integration).
* Provide a "Walkthrough" for the user to verify functionality and design.

## Examples

### Example 1: Creating a Landing Page Hero Section

**Input:** "Create a hero section for a concrete restoration company."
**Response:** 1. Research high-impact copy for the industry.
2. Build a responsive React component using Tailwind.
3. Include a "Request a Quote" primary CTA and a "View Projects" secondary CTA.
4. Add a background image overlay with proper text contrast.

### Example 2: SEO Optimization

**Input:** "Audit my current About page for SEO."
**Response:** 1. Check for `<h1>` hierarchy.
2. Suggest keyword-rich subheadings.
3. Generate JSON-LD schema for local business data.

## Constraints

* **No Generic Templates:** Avoid "lorem ipsum" where possible; suggest industry-relevant placeholder copy.
* **No Bloat:** Do not include unnecessary third-party libraries; prioritize native CSS/Tailwind solutions.
* **Deployment:** Anytime a change or update is made to any of the pages, immediately push the changes to GitHub to trigger the Cloudflare Pages deployment and make the updates live.
