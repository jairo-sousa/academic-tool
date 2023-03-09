import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";

import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider>
			<RouterProvider router={routes} />
		</ChakraProvider>
	</React.StrictMode>
);
