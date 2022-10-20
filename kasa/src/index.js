import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./scss/normalize.css"
import "./scss/index.scss";


// avec render : je veux que tu affiche mon composant App
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);