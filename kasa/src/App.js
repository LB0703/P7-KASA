import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Lodging from "./pages/Lodging";
import Error404 from "./pages/Error404";


const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/accomodation/:id" element={<Lodging />} />
				<Route path="/*" element={<Error404 />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
