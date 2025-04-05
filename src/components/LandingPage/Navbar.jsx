import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
// Example logo import — update the path to match your project
import Logo from "../../assets/Logo.png";
import { navItems } from "../../constants";
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [avatarDropdownOpen, setAvatarDropdownOpen] = useState(false);
  // const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  // const [searchResultsOpen, setSearchResultsOpen] = useState(false);
  // const [searchLoading, setSearchLoading] = useState(false);
  // const [searchSuggestions, setSearchSuggestions] = useState([]);
  // const [searchSuggestionsOpen, setSearchSuggestionsOpen] = useState(false);
  // const [searchCategories, setSearchCategories] = useState([]);

  // 1. Sync user state with localStorage on route changes
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, [location]);
  // This useEffect hook runs when the 'location' dependency changes.
  // It retrieves the 'user' item from localStorage.
  // If 'user' is found in localStorage, it parses the JSON string and sets the user state.
  // If 'user' is not found, it sets the user state to null.

  // 2. Fix property names from API response
  const userAvatar = user?.image || null;//meaning get's the user avatar as his image he uploaded for profile
  const userName = user?.name || "";//meaning get's the user name as his name he uploaded for profile

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
   };


  const handleMobileDrawer = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container mx-auto px-4">
        {/* Main Navbar Row */}
        <div className="flex items-center justify-between h-16 ">
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img
                src={Logo}
                alt="Legal First Aid"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <div className="flex-shrink-0 ml-1">
              <Link to="/" className="text-xl font-meduim tracking-tight">
                LEGAL FIRST AID
              </Link>
            </div>
          </div>
          {/* Center: Nav Items (Desktop Only) */}
          {/* lg:flex, to apply only on large screen, and hidden not to apply on
          smaller/meduim screens */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex space-x-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="hover:bg-neutral-400 rounded-md shadow-2xl px-3 py-2 font-semibold transition-transform ease-in-out duration-300 hover:scale-105"
                >
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Sign In & Create Account (Desktop Only) + Hamburger (Mobile) */}

          {/* <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/signin"
                className="py-2 px-3 hover:bg-neutral-500 shadow-2xl border rounded-md transition-transform ease-in-out duration-300 hover:scale-105"
              >
                Sign In
              </Link>
              <Link
                to="/create-account"
                className="px-2 py-3 rounded-md bg-gradient-to-r from-neutral-400 to-black shadow-2xl text-white transition-transform ease-in-out duration-300 hover:scale-105"
              >
                Create an account
              </Link>
            </div>
         
            <button
              onClick={handleMobileDrawer}
              className="lg:hidden p-2 focus:outline-none"
            >
              {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div> */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setAvatarDropdownOpen(!avatarDropdownOpen)}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white"
                >
                  {userAvatar ? (
                    <img
                      src={userAvatar}
                      alt={userName}
                      className="w-full h-full rounded-full"
                    />
                  ) : (
                    userName[0]?.toUpperCase() || "U"
                  )}
                </button>
                {avatarDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-50 bg-white rounded-md shadow-lg p-2 z-50">
                    <p className="text-gray-800 font-semibold">{userName}</p>
                    <p className="text-gray-600 text-sm">{user?.email}</p>
                    <button
                      onClick={handleLogout}
                      className="mt-2 w-full text-left text-red-600 hover:underline"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                {/* Desktop auth buttons */}
                <div className="hidden lg:flex items-center space-x-4">
                  <Link
                    to="/signin"
                    className="py-2 px-3 hover:bg-neutral-500 shadow-2xl border rounded-md transition-transform ease-in-out duration-300 hover:scale-105"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/create-account"
                    className="px-2 py-3 rounded-md bg-gradient-to-r from-neutral-400 to-black shadow-2xl text-white transition-transform ease-in-out duration-300 hover:scale-105"
                  >
                    Create an account
                  </Link>
                </div>
              </>
            )}
            {/* Hamburger Icon */}
            <button
              onClick={handleMobileDrawer}
              className="lg:hidden p-2 focus:outline-none"
            >
              {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Drawer Overlay */}
      {/* {mobileDrawerOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 bg-white shadow-md z-40">
          
          <ul className="flex flex-col space-y-4 p-4 ">
            {navItems.map((item, index) => (
              <li key={index} className="border-b pb-2">
                <Link
                  onClick={() => setMobileDrawerOpen(false)}
                  to={item.href}
                  className="block w-full text-center"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-col items-center p-4 space-y-4">
            <Link
              // we set the sertMobileDrawerOpen false so that for every click on an item the drawer closes
              onClick={() => setMobileDrawerOpen(false)}
              to="/signin"
              className="w-full text-center py-2 px-3 border rounded-md"
            >
              Sign In
            </Link>
            <Link
              onClick={() => setMobileDrawerOpen(false)}
              to="/create-account"
              className="w-full text-center px-2 py-3 rounded-md bg-gradient-to-r from-[#4169E1] to-blue-700 text-white"
            >
              Create an account
            </Link>
          </div>
        </div>
      )} */}
      {mobileDrawerOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 bg-white shadow-md z-40">
          {/* Nav items */}
          {!user && (
            <div className="flex flex-col items-center p-4 space-y-4">
              <Link
                onClick={() => setMobileDrawerOpen(false)}
                to="/signin"
                className="w-full text-center py-2 px-3 border rounded-md"
              >
                Sign In
              </Link>
              <Link
                onClick={() => setMobileDrawerOpen(false)}
                to="/create-account"
                className="w-full text-center px-2 py-3 rounded-md bg-gradient-to-r from-[#4169E1] to-blue-700 text-white"
              >
                Create an account
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};
export default Navbar;
