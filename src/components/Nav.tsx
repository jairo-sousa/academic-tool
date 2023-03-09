import { Box, Flex } from "@chakra-ui/react";

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
					return (
						<Flex
							key={`${route.name} - ${i}`}
							as="li"
							listStyleType="none"
							h="100%"
							p="0 3.3rem"
							borderBottom={route.isActive ? "0.1rem solid #8257E6" : ""}
							justify="center"
							align="center"
						>
							{route.name}
						</Flex>
					);
				})}
			</Flex>
		</Flex>
	);
}
