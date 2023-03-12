import axios from "axios";
export async function getClasses(setClasses: Function) {
	const response = axios
		.get(
			"https://my-json-server.typicode.com/jairo-sousa/academic-tool/classes"
		)
		.then((response) => response.data)
		.then((data) => setClasses(data));
}
