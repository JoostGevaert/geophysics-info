import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";

export default function JoopGevaar() {
	return (
		<Layout>
			<h1>Author: Joop Gevaar ⚠</h1>
			<Image src="/images/Pasfoto_Lisboa.jpeg" width={144} height={144} alt="Joop Gevaar" />
		</Layout>
	);
}
