import Head from "next/head";
import { Fragment } from "react";
import ProductDetail from "../../components/products/ProductDetail";

const ProductDetailsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>
          {props.productData.brand} - {props.productData.product}
        </title>
        <meta name="description" content={props.productData.product} />
      </Head>
      <ProductDetail
        brand={props.productData.brand}
        product={props.productData.product}
        badge={props.productData.badge}
        rating={props.productData.rating}
        image={props.productData.image}
        storageOptions={props.productData.storageOptions}
        seller={props.productData.seller}
        price={props.productData.price}
        freeShipping={props.productData.freeShipping}
        lastUpdate={props.productData.lastUpdate}
      />
    </Fragment>
  );
};

export default ProductDetailsPage;

export const getStaticPaths = async () => {
  const response = await fetch(
    "https://mocki.io/v1/59906f35-d5d5-40f7-8d44-53fd26eb3a05"
  );
  const responseData = await response.json();
  const products = responseData.result.products;

  return {
    fallback: "blocking",
    paths: products.map((product) => ({
      params: {
        productId: product.code.toString(),
      },
    })),
  };
};

export const getStaticProps = async (context) => {
  const productId = context.params.productId;

  const response = await fetch(
    `https://mocki.io/v1/1a1fb542-22d1-4919-914a-750114879775?code=${productId}`
  );

  const responseData = await response.json();

  return {
    props: {
      productData: {
        brand: responseData.result.mkName,
        product: responseData.result.productName,
        badge: responseData.result.badge,
        rating: responseData.result.rating,
        image: responseData.result.imageUrl,
        storageOptions: responseData.result.storageOptions,
        seller: responseData.result.countOfPrices,
        price: responseData.result.price,
        freeShipping: responseData.result.freeShipping,
        lastUpdate: responseData.result.lastUpdate,
      },
    },
  };
};
