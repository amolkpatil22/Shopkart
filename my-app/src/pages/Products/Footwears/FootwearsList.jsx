import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchFootwears} from "../ProductReducer/action"
import { useSearchParams } from "react-router-dom";
import Filter from "./Filter";
import { Grid, Box, Heading , Image ,Flex} from "@chakra-ui/react";
import FootwearsCard from "./FootwearsCard";

const FootwearsList = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const footwears = useSelector((store) => store.productReducer.footwears);

  useEffect(() => {
    let obj = {
      params: {
        _sort: searchParams.get("order") && "price",
        _order: searchParams.get("order"),
        category: searchParams.get("category"),
      },
    };

    dispatch(fetchFootwears(obj));
  }, [searchParams]);

   console.log(footwears);

  return (
    <Box >
     
      <Box>
        <Filter />
        <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={1}>
          {footwears.length > 0 &&
            footwears.map((el) => {
              return <FootwearsCard key={el.id} {...el} />;
            })}
        </Grid>
      </Box>
    </Box>
  );
};

export default FootwearsList;