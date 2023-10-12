import {
  SummaryItemContainer,
  SummaryItemTitle,
  SummaryItemQuantity,
  SummaryItemPrice,
  SummaryImage,
} from "./SummaryStyled";

const SummaryItem = ({ title, quantity, price, img }) => {
  return (
    <SummaryItemContainer>
      <SummaryImage>
        <SummaryItemTitle>{title}</SummaryItemTitle>
        <img src={img} alt="" />
      </SummaryImage>
      <SummaryItemQuantity> x {quantity}</SummaryItemQuantity>
      <SummaryItemPrice>AR$ {price * quantity}</SummaryItemPrice>
    </SummaryItemContainer>
  );
};

export default SummaryItem;
