import { Flex, Text } from "@chakra-ui/react";

export function EventCard() {
	return (
		<Flex direction="column" w="100%" bg="#202024" borderRadius="1rem">
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
				w="100%"
				h="100%"
				justify="space-between"
				align="center"
				p="1.5rem 4rem"
			>
				<Flex direction="column">
					<Text fontSize="2.2rem" fontWeight={600}>
						Marcio Espindola
					</Text>
					<Text fontSize="2.2rem" fontWeight={600}>
						Room 5, Block 2 | 13:30 - 15:30
					</Text>
					<Text fontSize="1.5rem" fontWeight={600}>
						00 days, 02 hours, 42minutes
					</Text>
				</Flex>
				<Flex
					direction="column"
					w="43rem"
					h="100%"
					bg="#29292E"
					borderRadius="1rem"
					justify="center"
					align="center"
				>
					<Text fontSize="2.2rem" fontWeight={700}>
						API Project
					</Text>
					<Text fontSize="1.5rem" fontWeight={600}>
						01 days, 02 hours, 40minutes
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
}
