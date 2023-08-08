import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Text, Button } from "@mantine/core";
import { RiUserFill, RiLoginCircleFill } from "react-icons/ri";
import { IconBaselineDensityMedium } from "@tabler/icons-react";
import { FiSun, FiMoon } from "react-icons/fi"; // Import the sun and moon icons
// import { theme } from "antd";

const Navbar = ({ toggleSidebar }) => {
  const [darkTheme, setDarkTheme] = useState("light");
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkTheme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);
  const handleModeToggle = () => {
    setDarkTheme(darkTheme === "dark" ? "light" : "dark");
    // setDarkMode(!darkMode);
    // You can add your logic to toggle the dark and light mode here
  };

  return (
    <div className="flex pt-3 pb-2 w-full bg-gradient-to-r from-purple-200 via-green-300 to-purple-200 dark:bg-gradient-to-r dark:from-green-500 dark:via-gray-600 dark:to-gray-800 h-16">
      <Button variant="outlined" onClick={toggleSidebar}>
        <IconBaselineDensityMedium />
      </Button>
      <div className="flex justify-content-center align-items-center space-x-96">
        <div className="flex space-x-10 ml-80">
          <Link to="/">
            <Button
              color="green"
              className="dark:hover:bg-green-500 hover:text-black hover:bg-purple-200"
            >
              Home
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="link" className="hover:bg-green-500">
              About
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="link" className="hover:bg-green-500">
              Contact
            </Button>
          </Link>
        </div>

        <div>
          <Button
            component={Link}
            to="/login"
            variant="outline"
            leftIcon={<RiLoginCircleFill />}
            color="gray"
          >
            <Text>Login</Text>
          </Button>
          <Button
            component={Link}
            to="/register"
            leftIcon={<RiUserFill />}
            color="green"
          >
            <Text>Register</Text>
          </Button>
        </div>
      </div>

      <div className="ml-auto">
        <Button
          variant="outline"
          onClick={handleModeToggle}
          color={darkTheme ? "gray" : "green"}
        >
          {darkTheme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
