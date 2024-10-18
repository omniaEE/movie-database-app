import { motion } from "framer-motion";
import heroImage from "../../assets/MovieHero.png"; // Replace with your hero image
import logo from "../../assets/victor.png"; // Replace with your logo image

const HomeHero = () => {
  // Variants for container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for individual item animations
  const itemVariants = {
    hidden: (direction) => ({
      x: direction === "left" ? "-100vw" : "100vw",
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        duration: 1.2,
      },
    },
  };

  return (
    <main className="bg-primary-600 -mt-[1px] overflow-hidden dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-6 pt-14 lg:py-24 pb-20">
        <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-20 xl:gap-24 2xl:gap-0 2xl:justify-between">
          {/* Left Section: Text and logo */}
          <motion.div
            className="basis-1/2 space-y-6 flex flex-col md:items-center lg:items-start lg:justify-center text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className="text-neutral-50 text-[36px] lg:text-[52px] 2xl:text-[65px] font-bold leading-snug lg:leading-[78px]"
              variants={itemVariants}
              custom="left"
            >
              Discover Your Next Favorite Movie
            </motion.h1>

            <motion.div className="pb-6" variants={itemVariants} custom="left">
              <img src={logo} alt="Company Logo" className="w-[267px]" />
            </motion.div>

            <motion.p
              className="text-neutral-50 text-[18px] lg:text-[23px] leading-7"
              variants={itemVariants}
              custom="left"
            >
              Explore a vast collection of movies and find your next binge-watch!
            </motion.p>

            {/* Call to Action Button */}
           
          </motion.div>

          {/* Right Section: Hero Image */}
          <motion.div
            className="basis-1/2 flex items-center justify-center"
            variants={itemVariants}
            custom="right"
            initial="hidden"
            animate="visible"
          >
            <img src={heroImage} alt="Movie Hero" className="rounded-lg shadow-xl w-full max-w-md" />
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default HomeHero;
