import "./gopro.styles.scss";
import Trophy from "../../assets/trophy.svg";

const GoPro = () => {
  return (
    <div className={"main"}>
      <img src={Trophy} alt="A golden trophy" />
      <p className={"text goProText"}>Go Pro Upgrade Now</p>
      <div className={"amountContainer"}>
        <p className={"text amountText"}>$1</p>
      </div>
    </div>
  );
};

export default GoPro;
