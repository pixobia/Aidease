<h1 align="center">
AidEase(Health-Care Website)
</h1>
AidEase
- This name combines "Aid," which suggests assistance and support, with "Ease," which suggests simplicity and comfort. The name has a clear and straightforward message, indicating that the website provides easy-to-use assistance for people with health-related issues. The name is also simple and easy to pronounce, making it easy for people to remember and recommend to others.

- Join us, let's build a platform to show more informatation like where can we get help,if help is needed to us...

<div style="border: 20px solid #fff; padding: 10px;">
  <div align="center">
    <img src="https://github.com/pixobia/Aidease/blob/main/public/images/about.png" width="30%" height="30%">
  </div>
</div>


P.S. Star ⭐ and Share this repository, if you had fun!! 😍

---

Features:

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Credential authentication
- Google authentication
- Github authentication
- Image upload using Cloudinary CDN
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Calendars with react-date-range
- Page loading state
- Page empty state
- Booking / Reservation system
- Patient reservation cancellation
- Owner reservation cancellation
- Creation and deletion of listings
- Pricing calculation
- Advanced search algorithm by category, date range, map location, number of patients, rooms and bathrooms
    - For example we will filter out listings that have a reservation in your desired date range to travel
- Favorites system
- Shareable URL filters
    - Lets say you select a category, location and date range, you will be able to share URL with a logged out friend in another browser and they will see the same results
- How to write POST and DELETE routes in route handlers (app/api)
- How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- How to handle files like error.tsx and loading.tsx which are new Next 13 templating files to unify loading and error handling
- How to handle relations between Server and Child components!

---
  
### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/pixobia/Aidease.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
