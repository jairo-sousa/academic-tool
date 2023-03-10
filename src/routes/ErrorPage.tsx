import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
export const ErrorPage = () => {
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
				Something went wrong
			</Heading>
		</Flex>
	);
};
