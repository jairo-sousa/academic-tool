import { Box, Flex } from "@chakra-ui/react";
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
			<Box bg="#D9D9D9" w="6rem" h="6rem" borderRadius="50%"></Box>
		</Flex>
	);
}
