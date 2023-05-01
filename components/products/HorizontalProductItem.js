import { useRouter } from "next/router";
import classes from "./HorizontalProductItem.module.css";

const HorizontalProductItem = (props) => {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push("/" + props.id);
  };

  return (
    <div className={classes.item}>
      {props.discount ?
        <div className={classes.badge}>%{props.discount.toFixed(0)}</div> :
        <div className={classes.nobadge}></div>
      }
      <div className={classes.product} onClick={showDetailsHandler}>
        <div className={classes.image}>
          <img src={props.image} alt={props.product} />
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
      </div>
    </div>
  );
};

export default HorizontalProductItem;