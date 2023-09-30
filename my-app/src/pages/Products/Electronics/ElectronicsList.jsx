import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchElectronics} from "../ProductReducer/action"
import { useSearchParams } from "react-router-dom";
import Filter from "./Filter";
import ElectronicsCard from "../Electronics/ElectronicsCard"
import { Grid, Box, Heading , Image ,Flex} from "@chakra-ui/react";

const ElectronicsList = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const electronics = useSelector((store) => store.productReducer.electronics);

  useEffect(() => {
    let obj = {
      params: {
        _sort: searchParams.get("order") && "price",
        _order: searchParams.get("order"),
        category: searchParams.get("category"),
      },
    };

    dispatch(fetchElectronics(obj));
  }, [searchParams]);

   console.log(electronics);

  return (
    <Box >
     
      <Box>
        <Filter />
        <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={1}>
          {electronics.length > 0 &&
            electronics.map((el) => {
              return <ElectronicsCard key={el.id} {...el} />;
            })}
        </Grid>
      </Box>
    </Box>
  );
};

export default ElectronicsList;