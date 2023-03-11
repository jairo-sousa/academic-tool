import { Flex, Heading } from "@chakra-ui/react";
import { NextClass } from "../components/NextClass";
import { NextDelivery } from "../components/NextDelivery";

export function Home() {
	return (
		<Flex
			height="100%"
			w="100%"
			p="2rem 0 0 0"
			direction="column"
			align="center"
			gap="2rem"
		>
			<Heading as="h3" fontSize="2rem">
				Monday Febuarry 20
			</Heading>
			<NextClass />
		</Flex>
	);
}
