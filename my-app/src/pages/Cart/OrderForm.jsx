import { useState } from 'react';
import {
  Box,
  Heading,
  VStack,
  Input,
  Radio,
  RadioGroup,
  Button,
  useMediaQuery, // Import useMediaQuery
} from '@chakra-ui/react';

export const OrderForm = () => {
  const [isLargerThan450px] = useMediaQuery('(min-width: 450px)'); // Check screen size

  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    email: '',
    contactNumber: '',
    zipCode: '',
    paymentMethod: 'card', // Default payment method
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Add your logic here to handle the form submission
    console.log(formData);
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Order Address
      </Heading>
      <VStack spacing={4}>
        <Input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="tel"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="zipCode"
          placeholder="Zip Code"
          value={formData.zipCode}
          onChange={handleChange}
        />
        <RadioGroup
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
        >
          Payment Option
          <Radio value="card">Card</Radio>
          <Radio value="upi">UPI</Radio>
        </RadioGroup>
        <Button
          colorScheme="blue"
          onClick={handleSubmit}
          width={isLargerThan450px ? 'auto' : '100%'} // Adjust button width based on screen size
        >
          Place Order
        </Button>
      </VStack>
    </Box>
  );
};
