import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import HomeHero from "../../components/HomeHero/HomeHero";
// import MovieList from "../../components/MovieList/MovieList"; // Component to display movie thumbnails
// import MovieDetails from "../../components/MovieDetails/MovieDetails"; // Component for detailed view
// import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"; // Component for error handling
// import Footer from "../../components/Footer/Footer"; // Your footer component

export default function HomePage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Movie Database</title>
        <link rel="canonical" href="http://mysite.com/home" />
      </Helmet>
      <div className="bg-primary-700 font-poppins dark:bg-gray-900 dark:text-white">
      
        <div className="flex flex-col justify-center items-center h-[750px] overflow-hidden dark:bg-gray-900 dark:text-white">
         <HomeHero/>
        </div>
        
   
      </div>
    </>
  );
}
