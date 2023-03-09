import { Flex, Heading } from "@chakra-ui/react";

export function Grades() {
	return (
		<Flex
			height="100%"
			w="85%"
			pt="6rem"
			direction="column"
			align="center"
			gap="6rem"
		>
			<Heading as="h3" fontSize="2rem">
				Grades
			</Heading>
		</Flex>
	);
}
