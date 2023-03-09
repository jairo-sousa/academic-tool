import { Flex } from "@chakra-ui/react";

import { RouteLink } from "./RouteLink";

export function Nav() {
	const routes = [
		{
			name: "HOME",
			isActive: true,
		},
		{
			name: "CLASSES",
			isActive: false,
		},
		{
			name: "DELIVERIES",
			isActive: false,
		},
		{
			name: "GRADES",
			isActive: false,
		},
	];
	return (
		<Flex as="nav" h="100%" w="100%" justify="center">
			<Flex as="ul" h="100%" cursor="pointer">
				{routes.map((route, i) => {
					return <RouteLink key={`${route.name} - ${i}`} route={route} />;
				})}
			</Flex>
		</Flex>
	);
}
