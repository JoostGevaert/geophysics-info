import { extendTheme } from "@chakra-ui/react";
import Table from "./components/table";
import styles from "./styles";

const overrides = {
	styles,
	components: {
		Table,
	},
};

export default extendTheme(overrides);
