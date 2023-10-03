import React from "react";
import {
  Card,
  CardBody,
  Heading,
  Stack,
  Image,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ElectronicsCard = ({id,title, image, price, description, category, quantity,brand}) => {

  const generateRandomColor = () => {
    let randomColor;
    do {
      randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    } while (isColorTooCloseToWhite(randomColor));
    return randomColor;
  };
  
  const isColorTooCloseToWhite = (color) => {
    const threshold = 100;
    const whiteColor = "#FFFFFF";
  
    const r1 = parseInt(color.slice(1, 3), 16);
    const g1 = parseInt(color.slice(3, 5), 16);
    const b1 = parseInt(color.slice(5, 7), 16);
  
    const r2 = parseInt(whiteColor.slice(1, 3), 16);
    const g2 = parseInt(whiteColor.slice(3, 5), 16);
    const b2 = parseInt(whiteColor.slice(5, 7), 16);
  
    const distance = Math.sqrt(
      Math.pow(r2 - r1, 2) +
      Math.pow(g2 - g1, 2) +
      Math.pow(b2 - b1, 2)
    );
  
    return distance < threshold;
  };

  return (
    <Card maxW="sm" width="90%" >
      <CardBody >
        <Link to= {`/product/${id}`}>
          <Image src={image} borderRadius="lg" alt="Image" height="200px" margin="auto"/>
        </Link>
        <Flex justifyContent={"space-between"}>
         <Box  >
         <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text color="orange.500" fontSize="2xl">
            ${price}
          </Text>
          <Text color="black" fontSize="2xl">
           {brand}
          </Text>
        </Stack>
        </Box>
        <Box>
        <Flex marginTop={"30px"} justifyContent={"space-between"} w={"45px"}>
          <Box h={"10px"} w={"10px"} borderRadius={"50px"} bg={generateRandomColor}></Box>
          <Box h={"10px"} w={"10px"} borderRadius={"50px"} bg={generateRandomColor}></Box>
          <Box h={"10px"} w={"10px"} borderRadius={"50px"} bg={generateRandomColor}></Box>
        </Flex>
        </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ElectronicsCard;