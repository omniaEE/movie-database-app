import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import DarkModeToggle from '../DarkMode/DarkMode';
import logo from "../../assets/movie.png";

const Navbar = ({ setSearchQuery }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // Handle search input
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setSearchQuery(inputValue); // Set the search query on Enter press
    }
  };

  return (
    <header className="bg-primary-500 dark:bg-gray-800 dark:text-white shadow-lg fixed w-full z-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img alt="logo" src={logo} className="h-20 w-auto" />
          </a>
        </div>

        <div className="flex lg:flex-1 justify-center px-6">
          <input
            type="text"
            placeholder="Search movies..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // Update input value
            onKeyDown={handleSearch} // Trigger search on Enter
            className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div className="flex lg:hidden">
          <motion.button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Bars3Icon className="h-10 w-10 text-neutral-800 dark:text-white" />
          </motion.button>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <DarkModeToggle />
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
            <motion.div
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-10 overflow-y-auto"
            >
              <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary-600 dark:bg-gray-700 dark:text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <a href="/" className="-m-1.5 p-1.5">
                    <img alt="logo" src={logo} className="h-20 w-auto" />
                  </a>
                  <motion.button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <XMarkIcon className="h-8 w-8 text-neutral-800 dark:text-white" />
                  </motion.button>
                </div>
                <div className="mt-6">
                  <DarkModeToggle />
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
