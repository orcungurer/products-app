import classes from "./ProductList.module.css";
import ProductItem from "./ProductItem";
import { useState } from "react";

const ProductList = (props) => {
  const { nextPage, products } = props;

  const [url, setUrl] = useState(nextPage);
  const [list, setList] = useState(products);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreHandler = async () => {
    if (!url) {
      return;
    }

    setIsLoading(true);

    const response = await fetch(url);
    const responseData = await response.json();
    const newProducts = responseData.result.products;
    const newNextPage = responseData.result.nextUrl;

    setList((prevProducts) => [...prevProducts, ...newProducts]);

    if (newNextPage) {
      setUrl(newNextPage);
    } else {
      setUrl("");
    }

    setIsLoading(false);
  };

  return (
    <div>
      <ul className={classes.list}>
        {list.map((product) => (
          <ProductItem
            key={product.code}
            id={product.code}
            image={product.imageUrl}
            name={product.name}
            price={product.price}
            seller={product.countOfPrices}
            follower={product.followCount}
            discount={product.dropRatio}
          />
        ))}
      </ul>
      {url && (
        <button
          className={classes.button}
          onClick={loadMoreHandler}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default ProductList;
