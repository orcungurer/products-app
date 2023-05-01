import Head from "next/head";
import { Fragment } from "react";
import ProductList from "@/components/products/ProductList";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Products App</title>
        <meta name="description" content="Browse a list of products!" />
      </Head>
      <ProductList products={props.products} nextPage={props.nextPage} />
    </Fragment>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const response = await fetch(
    "https://mocki.io/v1/59906f35-d5d5-40f7-8d44-53fd26eb3a05"
  );

  const responseData = await response.json();

  return {
    props: {
      products: responseData.result.products,
      nextPage: responseData.result.nextUrl,
    },
    revalidate: 1,
  };
};
