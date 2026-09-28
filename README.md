# Innvolution Website

Website monolith for the website of Innvolution

## Links

The website has the following deployments:

- [Preview Link](https://iitpl.vercel.app/)
- [Live Link](https://innvolution.com/)

## Table of Contents

- [Innvolution Website](#innvolution-website)
  - [Links](#links)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Prerequisites](#prerequisites)
  - [Technologies](#technologies)
      - [Frontend:](#frontend)
      - [Backend:](#backend)
  - [Contribution and Maintenance](#contribution-and-maintenance)
  - [Installation](#installation)
  - [Environment variables](#environment-variables)
  - [Status](#status)
  - [Admin panel](#admin-panel)
      - [Backend enabled pages:](#backend-enabled-pages)
      - [Admin panel related folders:](#admin-panel-related-folders)
      - [Admin panel working:](#admin-panel-working)

## About

Innvolution is committed to bringing cutting edge technologies & solutions to improve standard of care in Cardiovascular & Respiratory Disease Management.

## Prerequisites

To get started with this project, you need to have node and npm installed on your machine. To check the versions, please run

```bash
node --version
npm --version
```

## Technologies

#### Frontend:

- '**React.js**' with Typescript is used for all the UI components.
- '**Tailwind CSS**' is used for stylings.
- '**formic**', '**email.js**', '**react-hook-form**', '**@hookform/resolvers**' and '**zod**' are used for form handling.
- '**axios**' is used for all request-response handling.
- '**Three.js**' and '**Three-globe**' is used for 3D objects like Earth map.
- '**GSAP**', '**Swiper.js**', '**@headlessui/react**' and '**react-transition-group**' are used for animations.
- '**react-markdown**' is used for rendering markdown content.
- '**react-toastify**' is used for notifications like success and error messages.

#### Backend:

- '**Node.js**' and '**Express.js**' for backend server.
- '**MongoDB**' and '**Mongoose**' for database.
- '**nodemailer**' for email handling.
- '**multer**' for file handling.
- '**jsonwebtoken**', '**express-session**', '**dotenv**', '**cookie-parser**', '**bcryptjs**' and '**cors**' for secure authentication.

## Contribution and Maintenance

Website will be maintained for next 1 Year, upto 2025.

## Installation

Open your terminal and navigate to the code folder. Now execute the below command:

```bash
npm i
```

## Environment variables

- REACT_APP_INSTA
- REACT_APP_LINKEDIN
- REACT_APP_TWITTER
- REACT_APP_FACEBOOK
- REACT_APP_YOUTUBE

## Status

- Stent pages to be re-created.

## Admin panel

#### Backend enabled pages:

- Home
- Who We Are
- Premier Elite
- Premier Select
- Awards and Recognition
- Careers
- Contact Us
- Cath Labs Family
- Pinnacle Agile
- News and Articles
- Service and Support

#### Admin panel related folders:

- admin
- utils
- store
- layouts
- hooks

#### Admin panel working:

- All the data structure and their types are created for every backend enabled page under the '**utils**' folder. Say for example, '**homeTypes.ts**' contains all the Home page related data structure and their Typescript types. These types are used everywhere at the required places.
- All the APIs links are defined in the '**constants.ts**' file under '**utils**' folder.
- '**Axios instance**' is defined under '**utils**' folder which is responsible for all the request-response task.
- A single context store is defined for each and every page under the '**store**' folder which also holds the data of the loggedIn admin.
- Whenever a backend enabled page loads on to the browser, a custom hook is called which is defined for the corresponding page under the **'hooks'** folder. **Ex:** **'useFetchHome()'** hook is used to fetch Home page data. It fetches the data by taking all the API links from the '**constants.ts**' file for the respective page and stores the data in the context store. It also checks weather the data is already fetched or not, if it is fetched, it ignores the requests.
- Every backend panel for different pages are using a wrapper called '**AuthWrapperHOC.tsx**' which is responsible for auto login on reload, and authentication check on initial load. If you want to ignore auth check on initial load, you can pass a prop called '**ignoreSigninCheck**' which ignore the auth checks. The component is created under the '**layouts**' folder.
- The whole Admin panel dashboard is created with a shared layout which is defined by the '**AdminLayout.tsx**' file created under the '**layouts**' folder. You can add all the navigation routes here for the Admin Panel.
- All the 'admin panel' pages and 'authentication form' pages are created under the '**admin**' folder.
