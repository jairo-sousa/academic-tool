import { Flex } from "@chakra-ui/react";
import { EventCard } from "./EventCard";
import { RegressiveCounter } from "./RegressiveCounter";

export function NextClass() {
	return (
		<Flex direction="column" w="112rem" gap="1.5rem">
			<RegressiveCounter />
			<EventCard />
		</Flex>
	);
}
