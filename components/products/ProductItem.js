import classes from "./ProductItem.module.css";
import Card from "../ui/Card";
import { useRouter } from "next/router";

const ProductItem = (props) => {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push("/" + props.id);
  };
  
  return (
    <li className={classes.item} onClick={showDetailsHandler}>
      <Card className={classes.card}>
        {props.discount ?
          <div className={classes.badge}>%{props.discount.toFixed(0)}</div> :
          <div className={classes.nobadge}></div>
        }
        <div className={classes.image}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={classes.content}>
          <p className={classes.model}>{props.name}</p>
          <div className={classes.buyOptions}>
            <p className={classes.price}>{props.price} TL</p>
            <p className={classes.details}>
              {props.seller ? props.seller : "99"} sellers
            </p>
          </div>
          <p className={classes.details}>
            {props.follower ? props.follower : "99"} followers
          </p>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
