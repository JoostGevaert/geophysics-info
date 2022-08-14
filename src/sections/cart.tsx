import Image from "next/image";
import {
	Stack,
	VStack,
	HStack,
	Heading,
	Text,
	Button,
	AspectRatio,
	Divider,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";

const Cart = () => {
	const { toggleColorMode } = useColorMode();
	const bgColor = useColorModeValue("gray.200", "whiteAlpha.50");
	const secondaryTextColor = useColorModeValue("gray.600", "gray.300");
	return (
		<VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg={bgColor}>
			<VStack spacing={3} alignItems="flex-start">
				<Heading size="2xl">Your cart</Heading>
				<Text>If the price is too hard on your eyes, </Text>
				<Text>
					Click{" "}
					<Button onClick={toggleColorMode} variant="link">
						here
					</Button>{" "}
					to change to theme to dark mode
				</Text>
			</VStack>
			<HStack spacing={6} alignItems="center" w="full">
				<AspectRatio ratio={1} w={{ base: "20px", md: "24px" }}>
					<Image src="/images/post1.jpg" alt="Joop Gevaar" layout="fill" />
				</AspectRatio>
				<Stack spacing={0} w="full" direction="row" justifyContent="space-between" alignItems="center">
					<VStack spacing={0} alignItems="stretch" w="full">
						<Heading size={{ base: "sm", md: "md" }}>Penny board</Heading>
						<Text color={secondaryTextColor} fontSize={{ base: "sm", md: "md" }}>
							PNYCOMP27541
						</Text>
					</VStack>
					<Heading size="sm" textAlign="end">
						$119.00
					</Heading>
				</Stack>
			</HStack>
			<VStack spacing={4} alignItems="stretch" w="full">
				<HStack justifyContent="space-between">
					<Text color={secondaryTextColor}>Subtotal</Text>
					<Heading size="sm">$119.00</Heading>
				</HStack>
				<HStack justifyContent="space-between">
					<Text color={secondaryTextColor}>Shipping</Text>
					<Heading size="sm">$19.99</Heading>
				</HStack>
				<HStack justifyContent="space-between">
					<Text color={secondaryTextColor}>Taxes (estimated)</Text>
					<Heading size="sm">$23.80</Heading>
				</HStack>
			</VStack>
			<Divider />
			<HStack justifyContent="space-between" w="full">
				<Text color={secondaryTextColor}>Total</Text>
				<Heading size="lg">$162.79</Heading>
			</HStack>
		</VStack>
	);
};

export default Cart;
