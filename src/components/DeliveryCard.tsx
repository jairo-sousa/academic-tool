import { Flex, Text } from "@chakra-ui/react";

export function DeliveryCard() {
	return (
		<Flex
			direction="column"
			w="55rem"
			bg="#202024"
			borderRadius="1rem"
			mb="2rem"
		>
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
					DS | Distributed systems
				</Flex>
			</Flex>
			<Flex
				direction="column"
				w="100%"
				h="100%"
				justify="space-between"
				align="center"
				p="1.5rem 4rem"
			>
				<Text fontSize="2.2rem" fontWeight={700}>
					API Project
				</Text>
				<Text fontSize="1.5rem" fontWeight={600}>
					01 days, 02 hours, 40minutes
				</Text>
			</Flex>
		</Flex>
	);
}
