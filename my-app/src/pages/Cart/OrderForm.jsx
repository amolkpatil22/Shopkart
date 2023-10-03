import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useToast,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom"; // Import useHistory for navigation
import { useNavigate } from 'react-router-dom';


export const OrderForm=()=> {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const toast = useToast(); // Create a toast instance
  //const history = useHistory(); // Create a history instance for navigation
  let navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handlePayment = () => {
    // You can implement your payment processing logic here.
    // For this example, we'll simulate a successful payment after a delay.
    setTimeout(() => {
      setPaymentSuccess(true);

      // Show toast message
      toast({
        title: "Order Placed",
        description: "Your payment was successful.",
        status: "success",
        duration: 4000, // Toast message duration in milliseconds
        isClosable: true,
      });

      // Navigate to the home page after a successful payment
      navigate ("/");
    }, 2000);
  };

  return (
    <Box maxW="40%" mx="auto" mt="4" p="4">
      {paymentSuccess ? (
        <Alert status="success">
          <AlertIcon />
          <AlertTitle>Payment Successful</AlertTitle>
          <AlertDescription>Your payment was successful.</AlertDescription>
        </Alert>
      ) : (
        <form>
          <Input
            type="text"
            name="name"
            placeholder="Name on Card"
            value={formData.name}
            onChange={handleChange}
            mb="2"
          />
          <Input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={handleChange}
            mb="2"
          />
          <Input
            type="text"
            name="expirationDate"
            placeholder="Expiration Date"
            value={formData.expirationDate}
            onChange={handleChange}
            mb="2"
          />
          <Input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={formData.cvv}
            onChange={handleChange}
            mb="2"
          />
          <Button
            colorScheme="teal"
            onClick={handlePayment}
            mt="4"
            isFullWidth
          >
            Make Payment
          </Button>
        </form>
      )}
    </Box>
  );
}

