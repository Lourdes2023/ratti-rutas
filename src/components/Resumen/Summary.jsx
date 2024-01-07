import { useSelector } from "react-redux";
import {
  SummaryContainer,
} from "./SummaryStyled";
import SummaryItem from "./SummaryItem";

const Summary = () => {

 const {orders, loading, error} = useSelector((state) => state.orders);

 if (loading && !orders) {
   return <div>Loading...</div>;
  }
  if (error) {
    return <div><h2>{error}</h2></div>;
  }


  return (
    <SummaryContainer>
  
      {orders?.length ? (
        orders.map((order) => (
          <SummaryItem key={order._id} {...order} />
         
        ))
      ) : (
        <div>
          <h2>No hay productos en el carrito</h2>
        </div>
      )}
      
    </SummaryContainer>
  );
    
};

export default Summary;
