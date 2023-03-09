import { Box, Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Nav } from "./Nav";

export function Header() {
	return (
		<Flex
			as="header"
			justify="space-between"
			w="100%"
			h="10rem"
			bg="#202024"
			align="center"
			pos="relative"
		>
			<Logo />
			<Nav />
			<Box
				pos="absolute"
				right="12rem"
				bg="#D9D9D9"
				w="5.2rem"
				h="5.2rem"
				borderRadius="50%"
			></Box>
		</Flex>
	);
}
