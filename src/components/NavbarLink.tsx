import { Flex, Link } from "@chakra-ui/react";
import { useEffect } from "react";

import { NavLink } from "react-router-dom";

type NavbarLinkProps = {
	route: {
		name: string;
		to: string;
	};
};

export function NavbarLink({ route }: NavbarLinkProps) {
	return (
		<Flex
			as="li"
			listStyleType="none"
			h="100%"
			justify="center"
			align="center"
			fontSize="2rem"
			fontWeight={400}
			color="#737380"
		>
			<Link
				as={NavLink}
				to={route.to}
				h="100%"
				p="0 3.3rem"
				display="flex"
				alignItems="center"
				_hover={{
					textDecoration: "none",
				}}
				_activeLink={{
					fontWeight: 700,
					borderBottom: "0.1rem solid #8257E6",
					color: "#ffffff",
				}}
			>
				{route.name}
			</Link>
		</Flex>
	);
}
