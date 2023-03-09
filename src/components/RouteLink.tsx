import { Flex } from "@chakra-ui/react";

type RouteLinkProps = {
	route: {
		name: string;
		isActive: boolean;
	};
};

export function RouteLink({ route }: RouteLinkProps) {
	return (
		<Flex
			as="li"
			listStyleType="none"
			h="100%"
			p="0 3.3rem"
			justify="center"
			align="center"
			fontSize="2rem"
			fontWeight={route.isActive ? 700 : 400}
			borderBottom={route.isActive ? "0.1rem solid #8257E6" : ""}
			color={!route.isActive ? "#737380" : ""}
		>
			{route.name}
		</Flex>
	);
}
