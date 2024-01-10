import styled from "styled-components";

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 50%;
  height: 100%;
  color: var(--color-Text);
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  & h2 {
    text-align: center;
    font-size: 2rem;
    margin: 1rem;
    border-bottom: var(--color-primary-blue) 2px solid;
    color: var(--color-primary-blue);
  }

  .subtotal {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;
    font-weight: bold;
  }
`;

export const SummaryLabel = styled.span`
  margin-right: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const SummaryValue = styled.span`
  margin-left: auto;
  text-align: right;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const SummaryItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 15vh;
  margin-bottom: 5rem;

  & h2 {
    font-size: 1.2rem;
    text-align: center;
    color: var(--color-primary-blue);
  }
`;

export const SummaryItemTitle = styled.span`
  text-align: center;
  margin: 1rem;
  flex: 1;
  font-weight: 14px;
`;
export const SummaryImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 140px;
  border-radius: 15px;
  border-bottom: var(--color-primary-blue) 2px solid;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SummaryItemQuantity = styled.span`
  margin: 1.5rem;
`;

export const SummaryItemPrice = styled.span`
  font-weight: bold;
`;
