# CineNex
![image](https://github.com/YangaRubushe/cinenex-landingpage/assets/118383164/2ddf00fc-c25d-4a60-addd-2401461052ce)


Welcome to CineNex, your go-to platform for streaming movies and trailers. Explore our vast collection of films and start watching now!

## CineNex Landing Page:
![image](https://github.com/YangaRubushe/cinenex-landingpage/assets/118383164/4a99364c-629d-4a72-8398-e16d86e54723)

## CineNex LogIn Page
![image](https://github.com/YangaRubushe/cinenex-landingpage/assets/118383164/8bedd662-3751-4fd8-ad39-9e187f1c9acb)

## CineNex Home Page
![image](https://github.com/YangaRubushe/cinenex-landingpage/assets/118383164/bfe4189c-ebe7-4ae1-9fd2-1ed029b0eb75)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Deployment](#deployment)
- [Usage](#usage)
- [Contributing](#contributing)
- [Related Projects](#related-projects)
- [Resources](#resources)
- [Technical Details](#technical-details)
- [License](#license)
- [Authors](#authors)

## Introduction

CineNex is a web-based application designed to offer an experience for movie enthusiasts. With a user-friendly interface, CineNex allows users to browse through a wide range of movies and trailers, start watching their favorite films instantly, and enjoy a seamless streaming experience.

Check out the deployed site here: [CineNex](https://cinenex-landingpage.vercel.app/)

Read the final project blog article here: [CineNex Blog Article](https://medium.com/@zilithemba10/building-cinenex-my-journey-through-developing-a-modern-movie-streaming-platform-d53141bdaf78)

## Features

- **Wide Range of Movies and Trailers:** Browse through an extensive collection of films.
- **Instant Streaming:** Start watching your favorite movies instantly.
- **User-Friendly Interface:** Enjoy CineNex, intuitive interface.
- **Search Functionality:** Easily find specific films.

## Installation

To set up CineNex locally, follow these steps:

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/YangaRubushe/CineNex.git
   cd CineNex
   ```

2. **Install Dependencies**:
   Ensure you have `npm` and `Next.js` installed, then run:
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add your personal information, including API keys. Here's an example of what you might need:
   ```env
   DATABASE_URL=<your-database-url>
   NEXTAUTH_URL=<your-next-auth-url>
   GOOGLE_CLIENT_ID=<your-google-client-id>
   GOOGLE_CLIENT_SECRET=<your-google-client-secret>
   GITHUB_CLIENT_ID=<your-github-client-id>
   GITHUB_CLIENT_SECRET=<your-github-client-secret>
   ```

4. **Run the Development Server**:
   Start the development server with:
   ```sh
   npm run dev
   ```

   Your application should now be running on `http://localhost:3000`.

## Deployment

CineNex is deployed using Vercel. To deploy your own version:

1. **Connect to Vercel**: Log in to Vercel and connect your GitHub repository.
2. **Configure Environment Variables**: Set the same environment variables in Vercel as you have in your local `.env` file.
3. **Deploy**: Trigger a deployment from the Vercel dashboard.

## Usage

- **Browse Movies**: Explore the latest movie trailers and detailed information about each movie.
- **Authentication**: Sign up or log in using Google, GitHub, or email for a personalized experience.
- **Responsive Design**: Enjoy a seamless experience across all devices.

## Contributing

Developers are welcome to contribute to CineNex. To get started:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## Related Projects

Here are some related projects that you might find interesting:

- [CinexNex whole project](https://github.com/YangaRubushe/CineNex)

## Resources

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Supabase](https://supabase.com/)
- [Prisma](https://www.prisma.io/)
- [shadcn/ui](https://shadcn.dev/)

## Technical Details

CineNex was built using React for the frontend and Node.js for the backend. The application interfaces with a Supabase database to manage movie data.

- **Database Configuration:** You can find the database configuration in the [db.js](https://github.com/YangaRubushe/CineNex/blob/master/app/utils/db.ts) file.

Future iterations of CineNex will focus on enhancing the recommendation system, improving the user interface, and adding more features such as user reviews and ratings.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENCE) file for details.

## Authors

This project was developed by Yanga Rubushe.

- LinkedIn: [Yanga Rubushe](https://www.linkedin.com/in/yangarubushe)
- X: [Yanga Rubushe](https://www.x.com/yangarubushe)
