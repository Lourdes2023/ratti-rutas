import {
  SummaryItemContainer,
  SummaryItemTitle,
  SummaryItemPrice,
  SummaryImage,
} from "./SummaryStyled";

const SummaryItem = ({ total, _id,status}) => {


  return (
    <SummaryItemContainer>
      <SummaryImage>
        <SummaryItemTitle>N° de Orden: {_id.slice(0,9)}</SummaryItemTitle>
      </SummaryImage>
      <SummaryItemTitle>Estado: {status}</SummaryItemTitle>
      <SummaryItemPrice>AR$ {total}</SummaryItemPrice>
    </SummaryItemContainer>
  );
};

export default SummaryItem;
