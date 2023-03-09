import { App } from "./App";

import { Home } from "./routes/Home";
import { Classes } from "./routes/Classes";
import { Deliveries } from "./routes/Deliveries";
import { Grades } from "./routes/Grades";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/classes",
				element: <Classes />,
			},
			{
				path: "/deliveries",
				element: <Deliveries />,
			},
			{
				path: "/grades",
				element: <Grades />,
			},
		],
	},
]);
