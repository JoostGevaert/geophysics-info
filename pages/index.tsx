import type { NextPage } from 'next'
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import { Container, Flex, VStack } from '@chakra-ui/react';
import GeophysicsTable from '../components/table';

import Date from '../components/date';
import Details from '../src/sections/details';
import Cart from '../src/sections/cart';

const IndexPage = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex 
        h={{ base: 'auto', md: '100vh' }} 
        py={[0, 10, 20]} 
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  )
}

const Home: NextPage= () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <GeophysicsTable />
    </Layout>
  )
}

export default Home;
