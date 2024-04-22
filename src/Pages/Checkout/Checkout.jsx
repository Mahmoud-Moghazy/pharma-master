import React from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";
import { CardElement } from "@stripe/react-stripe-js";
// import axios from "../../Components/axios/axios";
// import { useNavigate } from "react-router-dom";
const Checkout = () => {
  // const navigate = useNavigate();
  // const [clientSecret, setClientSecret] = useState();
  // const [error, setError] = useState(null);
  // const [succeeded, setSucceeded] = useState(false);
  // const [disabled, setDisabled] = useState(true);
  // const [processing, setProcessing] = useState("");
  // const stripe = useStripe();
  // const elements = useElements();

  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  // -----------------------------------
  // useEffect(() => {
  //   const getClientSecret = async () => {
  //     const response = await axios.post("/checkout/create", {
  //       total: totalAmount,
  //     });
  //     setClientSecret(response.data.clientSecret);
  //     return response;
  //   };
  //   getClientSecret();
  // }, [totalAmount]);
  // ----------------------
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setProcessing(true);
  //   const payload = await stripe
  //     .confirmCardPayment(clientSecret, {
  //       payment_method: {
  //         card: elements.getElement(CardElement),
  //       },
  //     })
  //     .then((paymentIntent) => {
  //       setSucceeded(true);
  //       setError(null);
  //       setProcessing(false);
  //       navigate("/order", { replace: true });
  //     });
  // };
  // -----------------------------
  // const handleChange = (e) => {
  //   setDisabled(e.empty);
  //   setError(error ? error.message : "");
  // };

  return (
    <div className="payment">
      <div className="container">
        <form>
          <CardElement />
          <div className="payment__details">
            <h3>Payment Method</h3>
            <div className="payment__price">
              <div className="price">
                <h5>
                  Order Total: <span>{totalAmount} £</span>
                </h5>
                <h5>
                  Quantity: <span>{totalQuantity}</span>
                </h5>
              </div>

              <button
                type="submit"
                // disabled={processing || disabled || succeeded}
              >
                <span>Buy Now</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
// import React from "react";

// const Checkout = () => {
//   return <div>Checkout</div>;
// };

// export default Checkout;
