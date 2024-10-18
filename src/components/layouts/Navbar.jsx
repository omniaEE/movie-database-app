import { useState } from 'react'; // Importing useState hook
import { Dialog } from '@headlessui/react'; // Importing UI components from Headless UI
import { motion, AnimatePresence } from 'framer-motion'; // Importing Framer Motion for animations
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Importing icons from Heroicons
import DarkModeToggle from '../DarkMode/DarkMode'; // Importing the dark mode toggle component
import logo from"../../assets/movie.png";
const Navbar = () => {
  // State to manage the open/close state of the mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary-600 dark:bg-gray-800 dark:text-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 space-x-6"> {/* Added space-x-6 for horizontal spacing */}
        {/* Logo section */}
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="logo"
              src={logo}
              className="h-20 w-auto"
            />
          </a>
        </div>

        {/* Search area */}
        <div className="hidden lg:flex lg:flex-1 justify-center px-6"> {/* Added px-6 for internal padding */}
          <input
            type="text"
            placeholder="Search movies..."
            className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Dark mode toggle */}
        <div className="flex items-center space-x-4"> {/* Added space-x-4 for spacing between items */}
          <DarkModeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <motion.button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            whileHover={{ scale: 1.1 }} // Scale up on hover
            whileTap={{ scale: 0.9 }} // Scale down on tap
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-10 w-10 text-neutral-800 dark:text-white" />
          </motion.button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            className="lg:hidden "
          >
            {/* DialogPanel with animation */}
            <motion.div
              initial={{ y: '-100% - 128px', opacity: 0 }} // Initial state
              animate={{ y: 0, opacity: 1 }} // Animate to visible state
              exit={{ y: '-100% - 128px', opacity: 0 }} // Exit animation
              transition={{ duration: 0.3 }} // Animation duration
              className="fixed inset-0 z-10 overflow-y-auto"
            >
              <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary-600 dark:bg-gray-700 dark:text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                {/* Close button and logo in mobile menu */}
                <div className="flex items-center justify-between">
                  <a href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      alt="logo"
                      src="https://i.ibb.co/LNL5WX9/Ellipse-129.png"
                      className="h-20 w-auto"
                    />
                  </a>
                  <motion.button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    whileHover={{ scale: 1.1 }} // Scale up on hover
                    whileTap={{ scale: 0.9 }} // Scale down on tap
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="h-8 w-8 text-neutral-800 dark:text-white" />
                  </motion.button>
                </div>

                {/* Search area in mobile menu */}
                <div className="mt-6">
                  <input
                    type="text"
                    placeholder="Search movies..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </Dialog.Panel>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
