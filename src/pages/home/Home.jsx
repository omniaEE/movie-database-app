import React from "react";
import { Helmet } from "react-helmet";
import HomeHero from "../../components/HomeHero/HomeHero";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage({ searchQuery }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Movie Database</title>
      </Helmet>
      <div className="bg-primary-700 font-poppins dark:bg-gray-900 dark:text-white">
        <div className="flex flex-col justify-center items-center h-[750px] overflow-hidden">
          <HomeHero />
        </div>
        <MovieList searchQuery={searchQuery} />
      </div>
    </>
  );
}




