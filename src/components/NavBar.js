import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Text, Button } from "@mantine/core";
import { RiUserFill, RiLoginCircleFill } from "react-icons/ri";
import { IconBaselineDensityMedium } from "@tabler/icons-react";
import { FiSun, FiMoon } from "react-icons/fi"; // Import the sun and moon icons
// import { theme } from "antd";
import Login from './Login'
import Register from "./Register";

const Navbar = ({ toggleSidebar }) => {
  const [darkTheme, setDarkTheme] = useState("light");
  // const [darkMode, setDarkMode] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [signUpModalOpened, setSignUpModalOpened] = useState(false); // State to control the sign-up modal

  const openSignUpModal = () => {
    setSignUpModalOpened(true);
  };

  const closeSignUpModal = () => {
    setSignUpModalOpened(false);
  };

  const openModal = () => {
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };
  useEffect(() => {
    if (darkTheme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);
  const handleModeToggle = () => {
    setDarkTheme(darkTheme === "dark" ? "light" : "dark");

  };


  return (
    <div className="flex pt-3 pb-2 w-full bg-gradient-to-r from-purple-200 via-green-300 to-purple-200 dark:bg-gradient-to-r dark:from-green-500 dark:via-gray-600 dark:to-gray-800 h-16">
      <Button variant="outlined" onClick={toggleSidebar}>
        <IconBaselineDensityMedium />
      </Button>
      <div className="flex justify-content-center align-items-center space-x-96">
        <div className="flex space-x-10 ml-64">
          <Link to="/">
            <Button
              color="green"
              className="dark:hover:bg-green-500 hover:text-black hover:bg-purple-200 text-lg text-black dark:text-white"
            >
              Home
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="link" className="hover:bg-green-500 text-lg">
              About
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="link" className="hover:bg-green-500 text-lg">
              Contact
            </Button>
          </Link>
        </div>

        <div className="flex flex-row">
          <Button
            variant="outline"
            leftIcon={<RiLoginCircleFill />}
            color="gray"
            onClick={openModal}
            className="text-lg"
          >
            <Text>Login</Text>
          </Button>
          <Login opened={modalOpened} onClose={closeModal} />

          <Button
            leftIcon={<RiUserFill />}
            color="green"
            onClick={openSignUpModal}
            className=" text-lg"
          >
            <Text>Register</Text>
          </Button>
          <Register opened={signUpModalOpened} onClose={closeSignUpModal} />
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
