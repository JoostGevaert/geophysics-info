import { Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import GeophysicsTable from "../components/table";

const Home: NextPage = () => {
	const pageTitle = "Geophysics Table"
	
	return (
		<Layout pageTitle={pageTitle} home>
			<Text p="8">
				🌍 Geophysics allows us to make an image of the inside of planet Earth (or Mars) without digging or drilling a
				hole. The table below gives an overview of most geophysical methods and how they can be applied in several industries (e.g. 🏗, 🚰, 🛢, 🚜).
			</Text>
			<GeophysicsTable />
		</Layout>
	);
};

export default Home;
