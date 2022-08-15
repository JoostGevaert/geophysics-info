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
				🌍 Geophysics allows us to make an image of what's inside the earth (or Mars) without digging or drilling a
				hole. Below you'll find a table that summarizes most geophysical methods and
			</Text>
			<GeophysicsTable />
		</Layout>
	);
};

export default Home;
