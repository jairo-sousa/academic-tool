import { Flex, Text } from "@chakra-ui/react";

export function CardTitle({ title }: { title: string }) {
	return (
		<Flex bg="#182049" w="100%" borderRadius="1rem 1rem 0 0">
			<Flex
				as={Text}
				fontSize="2.5rem"
				fontWeight={600}
				h="5rem"
				w="100%"
				justify="center"
				align="center"
			>
				{title}
			</Flex>
		</Flex>
	);
}
