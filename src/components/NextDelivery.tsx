import { Flex } from "@chakra-ui/react";
import { DeliveryCard } from "./DeliveryCard";
import { RegressiveCounter } from "./RegressiveCounter";

export function NextDelivery() {
	return (
		<Flex direction="column" w="112rem" gap="1.5rem">
			<RegressiveCounter />
			<Flex w="100%" justify="space-between" flexWrap="wrap">
				<DeliveryCard />
				<DeliveryCard />
				<DeliveryCard />
			</Flex>
		</Flex>
	);
}
