import { Flex, Link, Text } from "@chakra-ui/react";

export function Footer() {
	return (
		<Flex
			as="footer"
			h="10rem"
			bg="#202024"
			align="center"
			justify="center"
			gap="0.6rem"
		>
			<Text>Created by </Text>
			<Link
				href="https://github.com/jairo-sousa"
				target="_blank"
				rel="noreferrer noopener"
				fontWeight={700}
			>
				Jairo Sousa
			</Link>
		</Flex>
	);
}
