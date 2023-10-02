import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchElectronics } from "../ProductReducer/action"
// import { useSearchParams } from "react-router-dom";
// import Filter from "./Filter";
import ElectronicsCard from "../Electronics/ElectronicsCard"
import { Grid, Box, Heading, Image, Flex, Select, FormControl, FormLabel } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const ElectronicsList = () => {
  let [searchParams, setSearchParams] = useSearchParams()
  const [filterCategory, setFilterCategory] = useState(searchParams.get("subcategory") || "");
  const [sortBy, setSortBy] = useState(searchParams.get("_sort") || "");
  let [category, setcategory] = useState(searchParams.get("category") || "")

  // const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const electronics = useSelector((store) => store.productReducer.product);


  useEffect(() => {
    let params = { category: category }

    if (filterCategory && sortBy) {
      params = { category: category, subcategory: filterCategory, _sort: sortBy }
    }
    else if (filterCategory) {
      params = { category: category, subcategory: filterCategory }
    }
    else if (sortBy) {
      params = { category: category, _sort: sortBy }
    }

    setSearchParams(params)
    dispatch(fetchElectronics(params))

  }, [category, sortBy, filterCategory]);


  useEffect(() => {
    setcategory(searchParams.get("category"))
  }, [searchParams])



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
            <option value="">All</option>
            {category == "electronics" && <option value="Mobile">Mobile</option>}
            {category == "electronics" && <option value="TV">TV</option>}
            {category == "electronics" && <option value="Headphones">Headphones</option>}


            {category == "furnitures" && <option value="Sofa">Sofa</option>}
            {category == "furnitures" && <option value="Bed">Bed</option>}
            {category == "furnitures" && <option value="Cupboard">Cupboard</option>}

            {category == "footwear" && <option value="Sandals">Sandals</option>}
            {category == "footwear" && <option value="Slippers">Slippers</option>}
            {category == "footwear" && <option value="Shoes">Shoes</option>}

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
      <br />
      <Box marginLeft="50px">

        <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={1} >
          {
            electronics?.map((el) => {
              return <ElectronicsCard key={el.id} {...el} />;
            })}
        </Grid>
      </Box>
    </Box>
  );
};

export default ElectronicsList;