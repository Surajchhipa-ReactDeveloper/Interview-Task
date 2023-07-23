import React, { lazy } from "react";
const HomePageMain = lazy(() => import("../Components/HomePage/HomePage"));
const AboutUsPage = lazy(() => import("../Components/Abouts/Abouts"));
const ServiceMain = lazy(() => import("../Components/Servicess/Service"));
const ContactUsMain = lazy(() => import("../Components/ContactUs/Contact"));

const ScreenRoutesLinks = [
  { path: "/", name: "Home", element: <HomePageMain /> },
  { path: "/about", name: "About", element: <AboutUsPage /> },
  { path: "/service", name: "Service", element: <ServiceMain /> },
  { path: "/contact", name: "Contact", element: <ContactUsMain /> },
];

export default ScreenRoutesLinks;
