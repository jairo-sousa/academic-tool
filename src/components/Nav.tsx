import { Flex } from "@chakra-ui/react";

import { NavbarLink } from "./NavbarLink";

export function Nav() {
	const routes = [
		{
			name: "HOME",
			to: "/",
		},
		{
			name: "CLASSES",
			to: "/classes",
		},
		{
			name: "DELIVERIES",
			to: "/deliveries",
		},
		{
			name: "GRADES",
			to: "/grades",
		},
	];
	return (
		<Flex as="nav" h="100%" w="100%" justify="center">
			<Flex as="ul" h="100%" cursor="pointer">
				{routes.map((route, i) => {
					return <NavbarLink key={`${route.name} - ${i}`} route={route} />;
				})}
			</Flex>
		</Flex>
	);
}
