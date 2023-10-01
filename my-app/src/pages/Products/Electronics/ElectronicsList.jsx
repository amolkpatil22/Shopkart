import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchElectronics} from "../ProductReducer/action"
// import { useSearchParams } from "react-router-dom";
// import Filter from "./Filter";
import ElectronicsCard from "../Electronics/ElectronicsCard"
import { Grid, Box, Heading , Image ,Flex, Select, FormControl, FormLabel} from "@chakra-ui/react";

const ElectronicsList = () => {
  const [filterCategory, setFilterCategory] = useState("All"); 
  const [sortBy, setSortBy] = useState("price");
  // const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const electronics = useSelector((store) => store.productReducer.electronics);

  useEffect(() => {
   

    dispatch(fetchElectronics());
  },[filterCategory, sortBy]);

   console.log(electronics);


   const filteredProducts =
    filterCategory === "All"
      ? electronics
      : electronics.filter((product) => product.category === filterCategory);

  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price") {
      return a.price - b.price;
    } else if (sortBy === "name") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  return (
    <Box >
     <Flex>
  <FormControl marginLeft="300px">
    <FormLabel>Filter by Category:</FormLabel>
    <Select
      onChange={(e) => setFilterCategory(e.target.value)}
      value={filterCategory}
      width="150px"
    >
    
      <option value="All">All</option>
      <option value="Mobile">Mobile</option>
      <option value="TV">TV</option>
      <option value="Headphones">Headphones</option>
    </Select>
  </FormControl>

  <FormControl ml={4}>
    <FormLabel >Sort by:</FormLabel>
    <Select onChange={(e) => setSortBy(e.target.value)} value={sortBy} width="150px">
      <option value="price">Price</option>
      <option value="name">Name</option>
    </Select>
  </FormControl>
</Flex>
<br/>
      <Box marginLeft="50px">
        {/* <Filter /> */}
        <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={1} >
          {
            sortedProducts.map((el) => {
              return <ElectronicsCard key={el.id} {...el} />;
            })}
        </Grid>
      </Box>
    </Box>
  );
};

export default ElectronicsList;