import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchFurnitures} from "../ProductReducer/action"
import { useSearchParams } from "react-router-dom";
import Filter from "./Filter";
import { Grid, Box, Heading , Image ,Flex} from "@chakra-ui/react";
import FurnituresCard from "./FurnituresCard";

const FurnituresList= () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const furnitures = useSelector((store) => store.productReducer.furnitures);

  useEffect(() => {
    let obj = {
      params: {
        _sort: searchParams.get("order") && "price",
        _order: searchParams.get("order"),
        category: searchParams.get("category"),
      },
    };

    dispatch(fetchFurnitures(obj));
  }, [searchParams]);

   console.log(furnitures);

  return (
    <Box >
     
      <Box>
        <Filter />
        <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={1}>
          {furnitures.length > 0 &&
            furnitures.map((el) => {
              return <FurnituresCard key={el.id} {...el} />;
            })}
        </Grid>
      </Box>
    </Box>
  );
};

export default FurnituresList;