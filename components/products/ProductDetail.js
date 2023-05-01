import Card from "../ui/Card";
import classes from "./ProductDetail.module.css";

const ProductDetail = (props) => {
  return (
    <div className={classes["product-detail"]}>
      <Card>
        <div className={classes.header}>
          <div className={classes.model}>
            <p className={classes.brand}>{props.brand}</p>
            <p className={classes.product}>{props.product}</p>
          </div>
          <div className={classes.popularity}>
            <p className={classes.rating}>Rating: {props.rating}</p>
            <p className={classes.badge}>{props.badge}</p>
          </div>
        </div>
        <div className={classes.image}>
          <img src={props.image} alt={props.product} />
        </div>
        <div className={classes.storage}>
          <p>Kapasite seçenekleri:</p>
          <div className={classes.options}>
            {props.storageOptions.map((storageOption) => (
              <button>{storageOption}</button>
            ))}
          </div>
        </div>
        <div className={classes.prices}>
          <p className={classes.seller}>
            {props.seller} satıcı içinde kargo dahil en ucuz fiyat!
          </p>
          <p className={classes.price}>{props.price} TL</p>
          {props.freeShipping && (
            <p className={classes.shipping}>Ücretsiz kargo</p>
          )}
          <p className={classes.status}>Son güncelleme: {props.lastUpdate}</p>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetail;
