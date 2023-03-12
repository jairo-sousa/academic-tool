import { Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getClasses } from "../utils/getClasses";

import { Class } from "../types/Class";

export function Classes() {
	const [classes, setClasses] = useState<Class[]>();
	useEffect(() => {
		getClasses(setClasses);
	}, []);
	return (
		<Flex
			height="100%"
			w="85%"
			pt="6rem"
			direction="column"
			align="center"
			gap="6rem"
		>
			{classes?.map((cls) => {
				return (
					<Heading as="h3" fontSize="3rem" key={cls.id}>
						{cls.title}
					</Heading>
				);
			})}
		</Flex>
	);
}
