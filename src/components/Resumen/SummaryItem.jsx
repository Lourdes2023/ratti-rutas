import {
  SummaryItemContainer,
  SummaryItemTitle,
  SummaryItemPrice,
  SummaryImage,
} from "./SummaryStyled";

const SummaryItem = ({ total, _id,status}) => {


  return (
    <SummaryItemContainer onClick={()=> Navigate("")}>
      <SummaryImage>
        <SummaryItemTitle>N° de Orden: {_id.slice(0,7)}</SummaryItemTitle>
        <img src={img} alt="" />
      </SummaryImage>
      <SummaryItemTitle>Estado: {status}</SummaryItemTitle>
      <SummaryItemPrice>AR$ {total}</SummaryItemPrice>
    </SummaryItemContainer>
  );
};

export default SummaryItem;
