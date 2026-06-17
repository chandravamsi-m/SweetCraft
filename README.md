# 🎂 SweetCraft — Custom Cake & Bakery HTML Template

> **Development Blueprint** — Architecture & Planning Document  
> For use with Cursor, Windsurf, or any AI-assisted coding environment.  
> **Stack:** HTML · CSS · Vanilla JavaScript (ES6+) — No frameworks assumed.

---

## Table of Contents

1. [Template Overview](#1-template-overview)
2. [Architecture Overview](#2-architecture-overview)
3. [Public Website Pages](#3-public-website-pages)
4. [Homepage Layouts](#4-homepage-layouts)
5. [Authentication Pages](#5-authentication-pages)
6. [User Dashboard Pages](#6-user-dashboard-pages)
7. [Admin Dashboard Pages](#7-admin-dashboard-pages)
8. [Navigation Structure](#8-navigation-structure)
9. [Component Library](#9-component-library)
10. [Feature Breakdown](#10-feature-breakdown)
11. [Folder Structure](#11-folder-structure)
12. [Responsive Design Strategy](#12-responsive-design-strategy)
13. [Animation & Interaction Ideas](#13-animation--interaction-ideas)
14. [SEO & Performance Strategy](#14-seo--performance-strategy)
15. [Development Notes](#15-development-notes)

---

## 1. Template Overview

| Field              | Detail                                                                 |
|--------------------|------------------------------------------------------------------------|
| **Template Name**  | SweetCraft — Custom Cake & Bakery                                      |
| **Template Category** | Booking / Custom Order + E-Commerce Hybrid                          |
| **Target Audience**  | Artisan bakeries, home bakers, custom cake studios, pastry shops     |
| **Template Purpose** | A dual-purpose template combining a visually rich public marketing site with a customer-facing dashboard for placing custom cake orders, uploading inspiration images, tracking order progress, and making payments. Designed for celebration-focused businesses (weddings, birthdays, corporate events). |
| **Dashboard**       | Yes — Customer (User) Dashboard + Admin Dashboard                     |
| **Total Page Count (approx.)** | 30+ pages across public, auth, and dashboard layers      |

---

## 2. Architecture Overview

The template is divided into three clearly separated layers, each with its own HTML folder, CSS scope, and JS logic.

```
┌─────────────────────────────────────────────────────────┐
│                  PUBLIC MARKETING WEBSITE               │
│  Visually-driven, SEO-optimized, conversion-focused     │
│  Gallery · Flavor Catalog · How It Works · Pricing      │
└─────────────────────────┬───────────────────────────────┘
                          │
              Authentication Gateway
              (Login / Sign Up / Reset)
                          │
          ┌───────────────┴───────────────┐
          │                               │
┌─────────▼──────────┐         ┌──────────▼──────────┐
│   USER DASHBOARD   │         │   ADMIN DASHBOARD   │
│  Place Orders      │         │  Manage Orders      │
│  Upload Inspo Imgs │         │  Manage Catalog     │
│  Track Status      │         │  Manage Customers   │
│  View Invoices     │         │  Process Payments   │
│  Make Payments     │         │  Analytics          │
└────────────────────┘         └─────────────────────┘
```

### Layer Summary

**Public Website**  
The front-facing marketing site. Showcases the bakery's portfolio, gallery, flavor catalog, celebration packages, and testimonials. Drives visitors toward account creation and order placement.

**User Dashboard**  
A logged-in customer workspace. Allows customers to submit new custom orders with specifications and inspiration image uploads, track order status through a visual pipeline, view and pay invoices, and message the bakery team.

**Admin Dashboard**  
The bakery owner/operator back-office. Manages incoming orders, updates order statuses, maintains the flavor/cake catalog and gallery, handles customer accounts, processes or confirms payments, and reviews business analytics.

---

## 3. Public Website Pages

### 3.1 Core Pages (Required for All Templates)

| Page             | File              | Purpose                                                                    |
|------------------|-------------------|----------------------------------------------------------------------------|
| Home 1           | `index.html`      | Visual-first landing — hero cake imagery, featured gallery, quick CTA     |
| Home 2           | `home-2.html`     | Story-first landing — brand narrative, process steps, social proof        |
| About Us         | `about.html`      | Bakery story, founding mission, team/baker profiles, certifications        |
| Contact          | `contact.html`    | Contact form, location map, business hours, social links                  |
| 404 Error        | `404.html`        | Branded error page with navigation back to key sections                   |
| Coming Soon      | `coming-soon.html`| Pre-launch / maintenance page with countdown timer and email capture      |

### 3.2 Template-Specific Pages (Bakery / Custom Order)

| Page                   | File                     | Purpose                                                             |
|------------------------|--------------------------|---------------------------------------------------------------------|
| Gallery                | `gallery.html`           | Full portfolio grid — filterable by occasion, style, flavor theme   |
| Gallery — Single       | `gallery-single.html`    | Detail view of a single cake project with story, specs, ingredients |
| Flavor Catalog         | `flavors.html`           | Full catalog of cake flavors, frostings, and fillings               |
| Occasion Catalog       | `occasions.html`         | Browse cakes by event type — Wedding, Birthday, Baby Shower, etc.  |
| How It Works           | `how-it-works.html`      | Step-by-step custom order process with illustrations                |
| Pricing & Packages     | `pricing.html`           | Tier-based pricing, package inclusions, custom quote CTA            |
| Testimonials           | `testimonials.html`      | Extended review/testimonial page with star ratings and photos       |
| FAQ                    | `faq.html`               | Accordion-based frequently asked questions                          |
| Blog / Inspiration     | `blog.html`              | Decorating tips, event inspiration, behind-the-scenes content       |
| Blog — Single Post     | `blog-single.html`       | Individual article with related posts                               |
| Order Form (Public)    | `order.html`             | Entry-point order enquiry form for non-registered visitors          |

---

## 4. Homepage Layouts

Both homepages share the same navigation bar and footer. They differ in hero style, content hierarchy, and conversion strategy.

---

### Home 1 — Visual Showcase Focus

**Strategy:** Lead with stunning imagery. Let the cakes speak first.

| Section              | Description                                                                                  |
|----------------------|----------------------------------------------------------------------------------------------|
| **Hero**             | Full-viewport split layout — large featured cake photograph on the right, tagline + dual CTA (`Order Now` / `View Gallery`) on the left. Animated entrance for text elements. |
| **Feature Badges**   | Horizontal icon strip: Custom Designs · Fresh Ingredients · On-time Delivery · 5-Star Rated  |
| **Featured Gallery** | Masonry-style grid of 6–9 top portfolio pieces, filterable by occasion tag. `View All` CTA. |
| **Occasion Cards**   | Horizontally scrollable cards for Wedding · Birthday · Corporate · Anniversary · Baby Shower |
| **How It Works**     | 3-step horizontal timeline: Choose Flavor → Share Your Vision → We Deliver Magic             |
| **Flavor Highlights**| Horizontal scrolling flavor chip strip with visuals (Chocolate Truffle, Lemon Velvet, etc.) |
| **Testimonials**     | Auto-scrolling carousel — customer photo, quote, star rating, occasion type                 |
| **CTA Banner**       | Full-width warm-toned banner: "Ready to order your dream cake?" + `Start My Order` button   |
| **Blog Preview**     | 3-card grid of latest inspiration articles                                                  |
| **Footer**           | Logo, nav links, social icons, newsletter signup, copyright                                 |

---

### Home 2 — Brand Story Focus

**Strategy:** Build trust with narrative before conversion. For customers who want to know the baker behind the cake.

| Section                 | Description                                                                                    |
|-------------------------|------------------------------------------------------------------------------------------------|
| **Hero**                | Centered headline over a soft, blurred full-screen cake background. Subheadline tells the brand story in one line. Single CTA: `Explore Our Story`. |
| **Brand Story Block**   | Two-column: founder photo left, brand narrative + founding year + mission statement right      |
| **Stats Counter**       | Animated number counters: Orders Completed · 5-Star Reviews · Flavors Available · Years Active |
| **Process Timeline**    | Vertical 4-step visual timeline: Consultation → Design Approval → Baking → Delivery            |
| **Occasion Showcase**   | Full-width tabbed section — click occasion to see relevant gallery grid dynamically             |
| **Flavor Catalog Peek** | 2-column grid of flavor cards with name, description, dietary tags (GF, Vegan), and hover zoom |
| **Video Section**       | Embedded bakery video (YouTube/Vimeo placeholder) — "A peek inside our kitchen"                |
| **Trust Badges**        | Hygiene certifications, awards, media features (logos)                                        |
| **Extended Testimonials**| 3-column review cards with customer event photos                                             |
| **Newsletter CTA**      | Soft-toned centered section: subscribe for new flavors, seasonal menus, and exclusive offers   |
| **Footer**              | Same as Home 1                                                                                |

---

## 5. Authentication Pages

All auth pages are standalone, using a clean two-panel layout: a branded panel (bakery photography/illustration) on one side and the form on the other. Fully responsive — single column on mobile.

| Page              | File                    | Fields / Elements                                                              |
|-------------------|-------------------------|--------------------------------------------------------------------------------|
| **Login**         | `auth/login.html`       | Email, Password, Remember Me toggle, Forgot Password link, OAuth placeholders (Google), CTA to Sign Up |
| **Sign Up**       | `auth/signup.html`      | Full Name, Email, Password, Confirm Password, Accept Terms checkbox, CTA to Login |
| **Forgot Password** | `auth/forgot-password.html` | Email field, submit button, back to login link                          |
| **Reset Password** | `auth/reset-password.html` | New Password, Confirm New Password, strength indicator, submit           |
| **Email Verified** | `auth/verified.html`   | Success state screen with redirect CTA to dashboard                           |

**Auth Design Notes:**
- Show/hide password toggle on all password fields
- Inline real-time validation with clear error states (red borders + helper text)
- Loading spinner on form submission buttons
- Left panel uses seasonal cake photography that can be swapped per campaign

---

## 6. User Dashboard Pages

Accessible after login. Sidebar navigation is persistent on desktop; bottom tab bar on mobile.

### Dashboard Overview

| Page                    | File                              | Purpose                                                                                   |
|-------------------------|-----------------------------------|-------------------------------------------------------------------------------------------|
| **Dashboard Home**      | `dashboard/index.html`            | Greeting header, order status summary cards, recent orders table, quick action buttons   |
| **Place New Order**     | `dashboard/order-new.html`        | Multi-step custom cake order form (see Feature Breakdown §10.1)                          |
| **My Orders**           | `dashboard/orders.html`           | Filterable order list with status badges, dates, cake thumbnail, quick view button       |
| **Order Detail**        | `dashboard/order-detail.html`     | Full order view — specifications, status pipeline tracker, inspiration images, timeline  |
| **Upload Inspiration**  | `dashboard/order-inspiration.html`| Drag-and-drop image upload panel tied to a specific order (within order detail flow)     |
| **Invoices**            | `dashboard/invoices.html`         | List of all invoices with status (Paid / Pending / Overdue), download PDF icon           |
| **Invoice Detail**      | `dashboard/invoice-detail.html`   | Itemized invoice breakdown, payment breakdown, download/print action                     |
| **Make Payment**        | `dashboard/payment.html`          | Payment amount display, card/UPI input placeholder (Stripe-ready), confirmation screen   |
| **Messages**            | `dashboard/messages.html`         | Threaded conversation with bakery team per order, file attachment support               |
| **Notifications**       | `dashboard/notifications.html`    | Notification feed — order status updates, payment reminders, promotional alerts          |
| **My Profile**          | `dashboard/profile.html`          | Name, contact info, avatar upload, delivery address book, change password                |
| **Account Settings**    | `dashboard/settings.html`         | Notification preferences, email frequency, delete account option                        |

---

## 7. Admin Dashboard Pages

Accessible only to authenticated admin users. Full-width sidebar layout with collapsible nav groups.

| Page                        | File                             | Purpose                                                                              |
|-----------------------------|----------------------------------|--------------------------------------------------------------------------------------|
| **Admin Overview**          | `admin/index.html`               | KPI cards (Orders Today, Revenue MTD, Pending Orders, New Customers), charts         |
| **Order Management**        | `admin/orders.html`              | All orders table — filter by status, date, occasion; bulk action support             |
| **Order Detail (Admin)**    | `admin/order-detail.html`        | Full order info, customer details, inspiration images viewer, status updater         |
| **Customer Management**     | `admin/customers.html`           | Customer list, order count, lifetime value, account status (active/suspended)        |
| **Customer Profile (Admin)**| `admin/customer-detail.html`     | Individual customer history, communication log, notes                                |
| **Cake Catalog**            | `admin/catalog.html`             | Add/edit/delete cake types, link to flavors, set pricing tiers                       |
| **Flavor Manager**          | `admin/flavors.html`             | CRUD interface for flavors, frostings, and fillings with dietary tags                |
| **Gallery Manager**         | `admin/gallery.html`             | Upload portfolio images, assign occasion tags, reorder items, mark as featured       |
| **Occasion Manager**        | `admin/occasions.html`           | Add/edit occasion categories (Wedding, Birthday, etc.) with cover images             |
| **Payment Management**      | `admin/payments.html`            | All transactions table, status filters (Paid/Pending/Refunded), export CSV           |
| **Invoice Generator**       | `admin/invoice-create.html`      | Generate invoices per order, set deposit vs. balance amount, send to customer        |
| **Messages (Admin)**        | `admin/messages.html`            | Unified inbox across all order threads, reply UI                                     |
| **Blog Manager**            | `admin/blog.html`                | Post list — publish/draft/delete, featured image, category                           |
| **Reports & Analytics**     | `admin/reports.html`             | Revenue by period, orders by occasion, popular flavors chart, customer growth        |
| **Settings**                | `admin/settings.html`            | Business info, notification email config, business hours, logo/branding update       |

---

## 8. Navigation Structure

### 8.1 Public Navbar

```
Logo
|
Home ▼
├── Home 1 (Visual Showcase)
└── Home 2 (Brand Story)

Gallery
Flavors
Occasions ▼
├── Weddings
├── Birthdays
├── Baby Showers
├── Corporate Events
└── All Occasions

How It Works
Pricing
Blog

[ Login ]  [ Order Now → ]   🌙  (Dark Mode Toggle)
```

**Navbar Behavior:**
- Sticky on scroll with reduced height + box-shadow after 80px scroll
- Hamburger menu on mobile (slide-in drawer from right)
- Active page indicator on nav links
- `Order Now` button uses accent color (primary CTA)
- Dark mode toggle persists via `localStorage`

---

### 8.2 User Dashboard Sidebar

```
[ SweetCraft Logo ]

👤  Hello, [Customer Name]

──── ORDERS ────
🏠  Dashboard
➕  Place New Order
📋  My Orders
💬  Messages

──── BILLING ────
🧾  Invoices
💳  Make Payment

──── ACCOUNT ────
🔔  Notifications
👤  My Profile
⚙️  Settings
🚪  Logout
```

---

### 8.3 Admin Dashboard Sidebar

```
[ SweetCraft Admin ]

──── OVERVIEW ────
📊  Dashboard

──── OPERATIONS ────
📦  Orders
🎂  Cake Catalog
🍰  Flavors
📸  Gallery
🎉  Occasions

──── CUSTOMERS ────
👥  Customers
💬  Messages

──── BILLING ────
💰  Payments
🧾  Invoices

──── CONTENT ────
📝  Blog

──── INSIGHTS ────
📈  Reports

──── SYSTEM ────
⚙️  Settings
🚪  Logout
```

---

## 9. Component Library

All components are reusable, documented with HTML comments, and use CSS custom properties for theming. No JavaScript framework dependencies.

### 9.1 Global Components

| Component              | Description                                                                      |
|------------------------|----------------------------------------------------------------------------------|
| `c-navbar`             | Public navigation bar with dropdown, mobile drawer, dark mode toggle            |
| `c-footer`             | Full footer with columns, social icons, newsletter form                         |
| `c-btn`                | Button system: Primary, Secondary, Ghost, Danger, Icon-only — all sizes         |
| `c-badge`              | Status badges: Pending · Confirmed · In Progress · Ready · Delivered · Cancelled |
| `c-toast`              | Non-blocking notification toasts (success, error, info, warning)                |
| `c-modal`              | Generic modal/dialog overlay with close button and focus trap                   |
| `c-card`               | Generic content card with image slot, title, body, footer action area           |
| `c-skeleton`           | Skeleton loader blocks for gallery grid, order list, and dashboard cards        |
| `c-dark-toggle`        | Dark/light mode switch — syncs with `prefers-color-scheme` on first load        |

### 9.2 Public Website Components

| Component                | Description                                                                   |
|--------------------------|-------------------------------------------------------------------------------|
| `c-hero`                 | Full-viewport hero with background image, overlay, headline, CTA group       |
| `c-gallery-grid`         | Masonry / equal-grid toggle layout with filter tabs by occasion               |
| `c-gallery-lightbox`     | Keyboard-accessible image lightbox (pure CSS + JS, no plugin)                |
| `c-flavor-card`          | Flavor tile with image, name, description, dietary tag chips                  |
| `c-occasion-card`        | Occasion category card with cover image, name, order count link              |
| `c-process-steps`        | Numbered step indicator — horizontal (desktop) / vertical (mobile)           |
| `c-testimonial-card`     | Review card with avatar, name, occasion, star rating, quote text             |
| `c-testimonial-carousel` | Auto-scrolling carousel built with CSS scroll-snap + JS nav controls         |
| `c-pricing-card`         | Pricing tier card with included features list and CTA button                 |
| `c-faq-accordion`        | Click-to-expand FAQ item with smooth height animation                        |
| `c-blog-card`            | Article preview card with cover image, category tag, title, excerpt, date    |
| `c-stats-counter`        | Animated number counter triggered on scroll into viewport                    |
| `c-newsletter-form`      | Email capture form with Mailchimp-ready markup                               |
| `c-order-enquiry-form`   | Pre-order public enquiry form with occasion type, date, and description      |
| `c-map-embed`            | Google Maps API placeholder iframe with styled container                     |

### 9.3 Dashboard Components

| Component                | Description                                                                   |
|--------------------------|-------------------------------------------------------------------------------|
| `c-sidebar`              | Collapsible sidebar with icon + label nav items, active state highlighting   |
| `c-topbar`               | Dashboard top bar — search, notifications bell, user avatar dropdown         |
| `c-stat-card`            | KPI summary card — icon, label, value, trend indicator (up/down %)          |
| `c-order-table`          | Responsive data table — sortable columns, status badge, action menu          |
| `c-order-status-pipeline`| Visual horizontal step tracker: Placed → Confirmed → Baking → Ready → Delivered |
| `c-order-form-wizard`    | Multi-step form shell with step indicator, back/next navigation, progress bar |
| `c-image-uploader`       | Drag-and-drop file upload zone with preview thumbnails and remove button     |
| `c-calendar-picker`      | Date picker for delivery date selection (pure JS, no external dependency)    |
| `c-flavor-selector`      | Visual multi-select panel for choosing cake flavor, frosting, and filling    |
| `c-invoice-card`         | Compact invoice row with amount, status badge, date, and download icon       |
| `c-invoice-template`     | Print-ready invoice layout with bakery branding, line items, totals          |
| `c-payment-form`         | Stripe-ready card input shell with amount display and confirm button         |
| `c-message-thread`       | Chat-style message thread with sender/receiver distinction, timestamp, file attachments |
| `c-notification-item`    | Single notification row with icon, message, timestamp, and read/unread state |
| `c-chart-bar`            | Lightweight bar chart built with CSS + JS (no Chart.js dependency by default)|
| `c-chart-line`           | Lightweight line chart for revenue/order trend display                       |
| `c-avatar-upload`        | Profile picture upload with crop preview                                     |

---

## 10. Feature Breakdown

### 10.1 Multi-Step Custom Order Form (Core Feature)

The order wizard is the most critical user flow. It must be smooth and visually guided.

```
Step 1 — Occasion Details
  ├── Select Occasion Type (Wedding / Birthday / Corporate / Other)
  ├── Event Date (date picker — disable past dates + enforce lead time)
  ├── Number of Guests / Servings (slider + numeric input)
  └── Delivery Address or Pickup toggle

Step 2 — Cake Specifications
  ├── Cake Shape (Round / Square / Heart / Tiered / Custom)
  ├── Number of Tiers (1 / 2 / 3 / Custom)
  ├── Flavor Selection — visual card picker
  │     ├── Cake Flavor (Chocolate / Vanilla / Red Velvet / Lemon / etc.)
  │     ├── Frosting Type (Buttercream / Fondant / Whipped Cream / Ganache)
  │     └── Filling (Jam / Mousse / Fresh Fruit / None)
  └── Dietary Requirements (Gluten-Free / Vegan / Nut-Free checkboxes)

Step 3 — Design & Inspiration
  ├── Color Theme (color picker or predefined palette swatches)
  ├── Cake Inscription / Message text field
  ├── Design Description (textarea — open field)
  └── Inspiration Image Upload
        ├── Drag-and-drop zone
        ├── Multi-file support (max 5 images, 5MB each)
        └── Thumbnail preview with individual remove button

Step 4 — Review & Submit
  ├── Full order summary — all selections displayed
  ├── Estimated Price Range (calculated from tier + size)
  ├── Terms & Conditions checkbox
  └── Submit Order button (triggers confirmation email placeholder)
```

---

### 10.2 Order Status Tracking Pipeline

Customers track their order through a visual pipeline in the Order Detail page.

```
[ ✅ Order Placed ] → [ ⏳ Awaiting Confirmation ] → [ ✅ Confirmed ] →
[ 🎂 Baking in Progress ] → [ 📦 Ready for Pickup/Delivery ] → [ 🎉 Delivered ]
```

- Each step shows its timestamp once completed
- Current active step is visually highlighted
- Admin can update status from the Admin Order Detail page
- Customer receives notification (UI indicator) on status change

---

### 10.3 Inspiration Image Gallery (Per Order)

- Customer uploads up to 5 inspiration images per order
- Images displayed in a scrollable thumbnail strip in Order Detail
- Admin can view all uploaded images in the Admin Order Detail view
- Images stored in a clearly labeled folder per order reference number

---

### 10.4 Visual Flavor Catalog

- Browseable grid of flavor tiles with name, description, taste profile tags
- Filter by: Flavor Type · Dietary (GF / Vegan / Nut-Free) · Occasion Suitability
- Each flavor card shows: image, flavor name, description, availability badge
- Linked into the order form Step 2 as a visual selector

---

### 10.5 Gallery with Occasion Filters

- Portfolio grid filterable by: All · Wedding · Birthday · Baby Shower · Corporate · Custom
- Two layout modes: Masonry grid (default) / uniform grid (toggle)
- Clicking a gallery item opens a lightbox with full image, occasion tag, and flavor used
- Featured pieces can be pinned to homepage gallery by admin

---

### 10.6 Invoice & Payment System (UI Only)

- Invoices are generated per order by admin
- Invoice shows: deposit amount and balance due with separate due dates
- Customer can download invoice as a print-ready HTML-to-PDF view
- Payment form is Stripe-ready (placeholder markup) — no live payment processing in template
- Payment status tracked in the payments table

---

### 10.7 Dark / Light Mode

- Toggle button in public navbar and dashboard topbar
- Initial load detects `prefers-color-scheme` system preference
- State persisted in `localStorage` under key `sweetcraft-theme`
- All color values defined via CSS custom properties in `:root` and `[data-theme="dark"]`
- Transition: `color 0.3s ease, background-color 0.3s ease` on `body`

---

### 10.8 RTL Support

- RTL layout toggled via `dir="rtl"` on the `<html>` element
- Separate `rtl.css` overrides: `text-align`, `float`, `padding/margin` directional values
- Sidebar flips from left to right
- Gallery grid and carousel direction reverses correctly
- All icons re-checked for directional correctness (arrows, chevrons)

---

## 11. Folder Structure

```
sweetcraft/
│
├── assets/
│   ├── css/
│   │   ├── style.css              ← Main stylesheet (all public pages)
│   │   ├── dashboard.css          ← Dashboard-specific styles
│   │   ├── dark-mode.css          ← Dark theme overrides via CSS variables
│   │   ├── rtl.css                ← RTL layout overrides
│   │   └── components/
│   │       ├── navbar.css
│   │       ├── gallery.css
│   │       ├── cards.css
│   │       ├── forms.css
│   │       ├── sidebar.css
│   │       ├── tables.css
│   │       └── wizard.css
│   │
│   ├── js/
│   │   ├── main.js                ← Global: dark mode, navbar scroll, smooth scroll
│   │   ├── gallery.js             ← Filter, masonry layout, lightbox
│   │   ├── counter.js             ← Stats counter animation (IntersectionObserver)
│   │   ├── carousel.js            ← Testimonial carousel
│   │   ├── accordion.js           ← FAQ accordion
│   │   ├── form-validation.js     ← Shared client-side validation utilities
│   │   ├── order-wizard.js        ← Multi-step order form logic
│   │   ├── image-uploader.js      ← Drag-and-drop upload with preview
│   │   ├── date-picker.js         ← Lightweight custom date picker
│   │   ├── dashboard.js           ← Sidebar toggle, topbar, notification panel
│   │   └── charts.js              ← Admin dashboard charts (CSS/JS, no library)
│   │
│   ├── images/
│   │   ├── cakes/                 ← Cake portfolio photos (WebP + JPG fallback)
│   │   ├── flavors/               ← Flavor tile images
│   │   ├── occasions/             ← Occasion category cover images
│   │   ├── team/                  ← Team/baker profile photos
│   │   ├── blog/                  ← Blog post cover images
│   │   ├── ui/                    ← Icons, illustrations, brand assets
│   │   └── placeholder/           ← Generic placeholder images
│   │
│   └── fonts/                     ← Self-hosted Google Fonts (if bundled)
│
├── pages/
│   │
│   ├── index.html                 ← Home 1 (Visual Showcase)
│   ├── home-2.html                ← Home 2 (Brand Story)
│   ├── about.html
│   ├── gallery.html
│   ├── gallery-single.html
│   ├── flavors.html
│   ├── occasions.html
│   ├── how-it-works.html
│   ├── pricing.html
│   ├── testimonials.html
│   ├── faq.html
│   ├── blog.html
│   ├── blog-single.html
│   ├── order.html
│   ├── contact.html
│   ├── 404.html
│   └── coming-soon.html
│
├── auth/
│   ├── login.html
│   ├── signup.html
│   ├── forgot-password.html
│   ├── reset-password.html
│   └── verified.html
│
├── dashboard/
│   ├── index.html                 ← User Dashboard Home
│   ├── order-new.html             ← Place New Order (multi-step wizard)
│   ├── orders.html                ← My Orders list
│   ├── order-detail.html          ← Single order detail + status + images
│   ├── invoices.html              ← Invoice list
│   ├── invoice-detail.html        ← Single invoice view
│   ├── payment.html               ← Payment screen
│   ├── messages.html              ← Message thread list
│   ├── notifications.html
│   ├── profile.html
│   └── settings.html
│
├── admin/
│   ├── index.html                 ← Admin Dashboard Overview
│   ├── orders.html
│   ├── order-detail.html
│   ├── customers.html
│   ├── customer-detail.html
│   ├── catalog.html
│   ├── flavors.html
│   ├── gallery.html
│   ├── occasions.html
│   ├── payments.html
│   ├── invoice-create.html
│   ├── messages.html
│   ├── blog.html
│   ├── reports.html
│   └── settings.html
│
├── documentation/
│   ├── installation.md
│   ├── customization.md
│   ├── page-structure.md
│   └── credits.md
│
├── CHANGELOG.md
└── README.md                      ← This file
```

---

## 12. Responsive Design Strategy

Following a **mobile-first** approach: base styles target `< 640px`, and are progressively enhanced for larger breakpoints.

### Breakpoints

```css
/* Mobile  */ @media (max-width: 639px)   { ... }
/* Tablet  */ @media (min-width: 640px)   { ... }
/* Desktop */ @media (min-width: 1024px)  { ... }
/* Large   */ @media (min-width: 1280px)  { ... }
```

---

### Behavior by Screen Size

| Element                  | Mobile (< 640px)                                   | Tablet (640–1024px)                       | Desktop (1024px+)                          |
|--------------------------|----------------------------------------------------|-------------------------------------------|--------------------------------------------|
| Public Navbar            | Hidden links; hamburger icon; full-screen drawer  | Hamburger or condensed inline nav         | Full horizontal nav with dropdowns         |
| Hero Section             | Single column, image below text, smaller type     | Side-by-side, reduced padding             | Full viewport split layout                 |
| Gallery Grid             | 1 column                                           | 2 columns                                 | 3–4 columns masonry                        |
| Flavor Catalog           | 1 column cards                                     | 2 columns                                 | 3–4 columns                                |
| Occasion Cards           | Horizontal scroll (scroll-snap)                   | 2×2 grid                                  | 4–5 per row                                |
| Process Steps            | Vertical numbered list                             | Vertical with connectors                  | Horizontal timeline                        |
| Testimonials             | Single card, swipe-enabled carousel               | 2 visible cards                           | 3-column or carousel                       |
| Dashboard Sidebar        | Hidden; bottom tab bar (5 icons)                  | Collapsed icon-only sidebar               | Full sidebar with labels                   |
| Order Wizard             | Full-screen one-step-at-a-time modal-style         | Centered form with visible progress       | Two-column (steps left, form right)        |
| Order Status Pipeline    | Vertical steps                                     | Horizontal compact                        | Full horizontal with timestamps            |
| Data Tables              | Card view (each row becomes a stacked card)       | Horizontal scroll on overflow             | Full table layout                          |
| Charts (Admin)           | Simplified bar chart, no tooltips                 | Standard bar/line                         | Full interactive charts                    |

### Mobile-Specific Rules
- All tap targets minimum **44px** height
- Reduced or disabled CSS animations (`prefers-reduced-motion` honored)
- Touch swipe support on gallery and testimonial carousels (touch events, no library)
- Images use `srcset` with mobile-optimized sizes

---

## 13. Animation & Interaction Ideas

All animations must be **subtle, purposeful, and performant** — using CSS transitions/animations and `requestAnimationFrame` where needed. Respect `prefers-reduced-motion`.

### Public Website

| Element                     | Animation                                                                 |
|-----------------------------|---------------------------------------------------------------------------|
| Navbar on scroll            | Shrink height + add backdrop blur — `transition: all 0.3s ease`          |
| Hero text entrance          | Fade-in + slide-up on page load (`@keyframes slideUp`)                   |
| Gallery items               | Fade-in stagger as items enter viewport (IntersectionObserver)           |
| Gallery filter switch       | Fade-out/in + layout reflow with smooth opacity transition                |
| Lightbox open/close         | Scale-up from center + backdrop fade                                     |
| Flavor card hover           | Lift shadow + image zoom inside card (`transform: scale(1.04)`)          |
| Occasion card hover         | Overlay colour sweep + white text reveal                                  |
| CTA button hover            | Background fill sweep from left (CSS `::before` pseudo-element)          |
| Stats counters              | Count-up animation triggered by scroll into viewport                     |
| Testimonial carousel        | CSS `scroll-snap` with smooth JS scroll, auto-advance with pause on hover|
| FAQ accordion               | Smooth `max-height` expand/collapse with eased timing                    |
| Process steps               | Sequential entrance animation — each step fades in after previous       |
| Footer newsletter button    | Shake animation on invalid email submit attempt                          |

### Dashboard

| Element                       | Animation                                                               |
|-------------------------------|-------------------------------------------------------------------------|
| Sidebar collapse/expand       | `width` transition with icon label fade                                |
| Dashboard KPI cards           | Count-up values on first load; subtle entrance stagger                  |
| Order status pipeline         | Progress fill animation from left to current active step               |
| New order wizard step change  | Slide-left (next) / slide-right (back) transition between steps        |
| Image upload drag hover       | Dashed border highlight + background tint on file hover over drop zone  |
| File upload thumbnail appear  | Fade-in scale-up of thumbnail after file selected                      |
| Toast notifications           | Slide-in from top-right, auto-dismiss with progress bar                |
| Modal open                    | Fade-in + scale from 0.95 → 1.0                                        |
| Table row hover               | Subtle row highlight with background tint                              |
| Admin chart bars/lines        | Draw-in animation on page load using CSS stroke-dashoffset trick       |
| Status badge change (admin)   | Brief pulse animation when status is updated                           |

---

## 14. SEO & Performance Strategy

### On-Page SEO Essentials

| Requirement             | Implementation                                                                  |
|-------------------------|---------------------------------------------------------------------------------|
| Title Tags              | Unique per page, max 60 chars — e.g., `Custom Wedding Cakes — SweetCraft Bakery` |
| Meta Descriptions       | 150–160 chars, action-oriented — e.g., `Order handcrafted custom cakes for weddings, birthdays & events. Upload your inspiration and we'll bake your dream.` |
| H1 Per Page             | One H1 per page, keyword-rich, matches page intent                             |
| Header Hierarchy        | H1 → H2 → H3, no skipping levels — applied to all pages                       |
| Image Alt Text          | Descriptive alt for all `<img>` tags — e.g., `alt="Three-tier white fondant wedding cake with gold leaf"` |
| WebP Images             | All images delivered in `.webp` with `<picture>` + `<source>` fallback to `.jpg` |
| Structured Data (JSON-LD) | `LocalBusiness` schema on homepage and contact page with bakery details     |
| XML Sitemap             | `sitemap.xml` included — lists all public pages with `<lastmod>` dates        |
| robots.txt              | Production-ready — block `/admin/`, `/auth/`, `/dashboard/`                   |
| Canonical Tags          | `<link rel="canonical">` on all pages, especially Home 1 vs Home 2            |
| Open Graph Tags         | `og:title`, `og:description`, `og:image`, `og:type` — for social sharing       |

### Performance Targets

| Metric          | Target         | Implementation                                                   |
|-----------------|----------------|------------------------------------------------------------------|
| PageSpeed Score | 90+ mobile/desktop | Minified CSS/JS, deferred scripts, optimized images           |
| LCP             | < 2.5s         | Hero image preloaded with `<link rel="preload">`, sized correctly |
| FID / INP       | < 100ms        | No heavy synchronous JS on main thread                          |
| CLS             | < 0.1          | All images have explicit `width` and `height` attributes        |
| TTFB            | < 600ms        | Lightweight HTML, no render-blocking resources                  |

### Additional Performance Rules
- CSS delivered in `<head>`, JS deferred with `defer` attribute
- External fonts loaded with `font-display: swap`
- Lazy loading on all below-fold images: `loading="lazy"`
- Dashboard JS loaded only on dashboard pages (not included on public pages)
- No unused CSS shipped to public pages from dashboard stylesheets

---

## 15. Development Notes

### 15.1 CSS Architecture

- All color tokens defined as CSS custom properties in `:root`
- Theming handled by toggling `data-theme="dark"` on `<html>` — no separate stylesheet switch
- Spacing based on a **4px base unit** — use multiples: `4px 8px 12px 16px 24px 32px 48px`
- Typography: max **2 Google Fonts** — recommended: a serif for headings (e.g., `Playfair Display`), sans-serif for body (e.g., `Inter`)
- BEM naming optional but encouraged for component CSS files

```css
/* Example CSS variable setup */
:root {
  --color-primary: #b5834a;       /* Warm caramel — brand primary */
  --color-secondary: #f5e6d3;     /* Soft cream — brand secondary */
  --color-accent: #e07b54;        /* Terracotta — CTA accent */
  --color-text: #2d2d2d;
  --color-bg: #fffdf9;
  --color-border: #ede3d8;
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
  --radius-md: 12px;
  --shadow-md: 0 4px 16px rgba(0,0,0,0.08);
}

[data-theme="dark"] {
  --color-text: #f0e9e0;
  --color-bg: #1a1612;
  --color-border: #3a2f27;
}
```

### 15.2 JavaScript Conventions

- All JS is **ES6+** — use `const`/`let`, arrow functions, template literals, destructuring
- No `console.log` statements in production files
- Modular structure: one JS file per feature (gallery, carousel, wizard, etc.)
- DOM queries cached in `const` at top of each module
- Event delegation preferred over attaching listeners to every element
- No jQuery or lodash — pure vanilla JS throughout
- Only allowable external dependencies (if absolutely needed): a well-maintained date picker library or a PDF generation library for invoices

### 15.3 Multi-Step Order Form Implementation

- Form state stored in a JS object updated at each step
- Progress indicator updates via CSS class toggle (`.step--active`, `.step--completed`)
- Back/Next buttons validate current step before advancing
- On final submit: serialize form state to JSON, display loading state, show confirmation screen
- No backend required for template — form submits to `Formspree` placeholder endpoint

### 15.4 Image Upload Component

- Uses native `<input type="file" accept="image/*" multiple>`
- Drag events: `dragover`, `dragleave`, `drop` handled on the drop zone `<div>`
- Preview uses `FileReader.readAsDataURL()` per file
- Validation: file type (`.jpg`, `.png`, `.webp` only), max size 5MB, max 5 files
- Thumbnails rendered in a flex row with individual remove (×) buttons

### 15.5 Accessibility Standards (WCAG 2.1 AA)

- All interactive elements are keyboard-reachable (`Tab` / `Shift+Tab`)
- Focus visible on all focusable elements — do not suppress `:focus` outline
- Modals trap focus while open and restore focus on close
- ARIA roles on landmarks: `role="navigation"`, `role="main"`, `role="complementary"`
- ARIA labels on icon-only buttons: `aria-label="Close"`
- Gallery lightbox uses `role="dialog"` with `aria-modal="true"`
- Carousel uses `aria-live="polite"` for screen reader announcements
- Color contrast ratio: minimum 4.5:1 for normal text, 3:1 for large text

### 15.6 Placeholder Integrations

| Integration         | Implementation Note                                                        |
|---------------------|----------------------------------------------------------------------------|
| Contact Form        | `<form action="https://formspree.io/f/YOUR_ID" method="POST">`            |
| Newsletter          | Mailchimp embed form markup with `action` URL as placeholder              |
| Google Maps         | `<iframe>` embed placeholder in contact page and dashboard delivery section|
| Payment (Stripe)    | Card element `<div id="stripe-card-element">` placeholder with instructions |
| Order Confirmation  | Alert/toast confirmation UI — backend email handled separately             |

### 15.7 Code Comment Requirements

All HTML files must include section header comments:
```html
<!-- ========================
     SECTION: Hero Banner
======================== -->
```

All JS functions must include a one-line description:
```javascript
// Initialises the multi-step order form and binds step navigation events
function initOrderWizard() { ... }
```

All CSS files must use section separators:
```css
/* ==========================================================================
   COMPONENT: Flavor Card
   ========================================================================== */
```

`<!-- TODO: Replace placeholder image -->` and `<!-- TODO: Update Formspree endpoint -->` comments placed at all customization points.

---

## Changelog

| Version | Date       | Notes                     |
|---------|------------|---------------------------|
| 1.0.0   | TBD        | Initial release           |

---

## Credits

> List all third-party resources here before submission:
> - Google Fonts: Playfair Display, Inter
> - Placeholder images: Unsplash / Pexels (free license)
> - Icon set: [to be specified — e.g., Phosphor Icons, Feather Icons]
> - No JS libraries used unless listed here

---

## License

> Specify your distribution license here (e.g., ThemeForest Regular/Extended License).

---

*This README serves as the authoritative development blueprint for the SweetCraft template. All pages, components, and features described above must be implemented before submission. Refer to the HTML Template Development Guide for quality checklist and submission criteria.*
