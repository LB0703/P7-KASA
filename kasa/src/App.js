// import {Route, Routes} from "react-router-dom"



// export default function App() {
//   return (
//     <div className= "App">
//       <main>
//         <Routes>
//           <Route path="/Error404">
//             </Route>
//           <Route path="/AboutUs">
//             <AboutUs />
//           </Route>
//           <Route path="/Home">
//             <Home />
//           </Route>
//           <Route path="/Lodging">
//             <Lodging />
//           </Route>  
//         </Routes>
//       </main>
        
//   {<Routes>
//     <Route path="/Error404">
//       <Error />
//     </Route>
//     <Route path="/AboutUs">
//       <AboutUs />
//     </Route>
//     <Route path="/Home">
//       <Home />
//     </Route>
//     <Route path="/Lodging">
//       <Lodging />
//     </Route>
//   </Routes>}
//     </div>
//   );
// }

// function Error() {
//   return <h2>Error404</h2>;
// }

// function AboutUs() {
//   return <h2>AboutUs</h2>;
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function Lodging() {
//   return <h2>Lodging</h2>;
// }

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
				<Route path="/lodging" element={<Lodging />} />
				<Route path="/error404" element={<Error404 />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
