import type { ComponentStyleConfig } from "@chakra-ui/react";

const Table: ComponentStyleConfig = {
	parts: ["table", "th"],
	baseStyle: {
		th: {
			textTransform: "capitalize",
			letterSpacing: "normal",
		},
	},
	sizes: { sm: { th: { fontSize: "md" } } },
	defaultProps: { size: "sm" },
};

export default Table;
