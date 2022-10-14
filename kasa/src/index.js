// import React from 'react';
// //import ReactDOM from 'react-dom/client';
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import App from './App.js';
// import AboutUs from './pages/AboutUS/AboutUs'
// import Home from './pages/Home/Home'
// import Error404 from './pages/Error404/Error404'
// import Lodging from './pages/Lodging/Lodging'
// import Header from './components/Header';



// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <Routes>
//       <Route exact path="/" element={<App />} />
//       <Route path="/AboutUs" element={<AboutUs />} />
//       <Route path="/Home" element={<Home />} />
//       <Route path="/Error404" element={<Error404 />} />
//       <Route path="/Lodging" element={<Lodging />} />
//       <Route path="/components" element={<Header />} />
//     </Routes>
//   </BrowserRouter>,
//document.getElementById('root')
//)

// /* /* 
//   {/* <Route exact path="/">
//         <Home />
//       </Route>
//       <Route path="/Home">
//         <Home />
//       </Route>
//       <Route path="/AboutUs">
//         <AboutUs />
//       </Route>
//       <Route path="/Error404">
//         <Error404 />
//       </Route>
//       <Route path="/Lodging">
//         <Lodging />
//       </Route>
//       <Route path="/components">
//         <Header />
//       </Route> */} */ */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);