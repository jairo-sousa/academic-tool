import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Nav } from "./Nav";

export function Header() {
	return (
		<Flex
			as="header"
			justify="space-between"
			w="100%"
			h="11.6rem"
			p="0 12rem"
			bg="#202024"
			align="center"
		>
			<Logo />
			<Nav />
			<p>Profile</p>
		</Flex>
	);
}
