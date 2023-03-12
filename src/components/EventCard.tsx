import { Flex, Text } from "@chakra-ui/react";
import { CardTitle } from "./CardTttle";

export function EventCard() {
	return (
		<Flex direction="column" w="100%" bg="#202024" borderRadius="1rem">
			<CardTitle title="Class title" />

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
