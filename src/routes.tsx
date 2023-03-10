import { App } from "./App";

import { Home } from "./routes/Home";
import { Classes } from "./routes/Classes";
import { Deliveries } from "./routes/Deliveries";
import { Grades } from "./routes/Grades";

import { ErrorPage } from "./routes/ErrorPage";

import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
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
