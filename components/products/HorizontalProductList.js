import classes from "./HorizontalProductList.module.css";
import Card from "../ui/Card";
import HorizontalProductItem from "./HorizontalProductItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HorizontalProductList = (props) => {
  const { products } = props;

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <div>
      <Card className={classes.card}>
        <Slider {...settings}>
          {products.map((product) =>
            <HorizontalProductItem 
              key={product.code}
              id={product.code}
              image={product.imageUrl}
              name={product.name}
              price={product.price}
              seller={product.countOfPrices}
              follower={product.followCount}
              discount={product.dropRatio}
            />
          )}
        </Slider>
      </Card>
    </div>
  );
};

export default HorizontalProductList;