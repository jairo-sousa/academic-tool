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
				<Flex w="50%" justify="space-between">
					<Flex direction="column">
						<Text fontSize="3rem" fontWeight={600}>
							Room 5, Block 2
						</Text>
						<Text fontSize="2.2rem" fontWeight={600}>
							Marcio Espindola
						</Text>
					</Flex>

					<Flex direction="column" align="end">
						<Text fontSize="3rem" fontWeight={600}>
							13:30 - 15:30
						</Text>
						<Text fontSize="2.2rem" fontWeight={600}>
							In 2 hours
						</Text>
					</Flex>
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
						IN 1 Day
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
}
