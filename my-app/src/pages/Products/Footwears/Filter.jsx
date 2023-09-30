import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Select, Flex , Box} from "@chakra-ui/react";


const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let initialCategory = searchParams.get("category");
  let initialOrder = searchParams.get("order");
  const [order, setOrder] = useState(initialOrder || "");
  const [category, setCategory] = useState(initialCategory || "");

  useEffect(() => {
    let params = {};
    category && (params.category = category);
    order && (params.order = order);
    setSearchParams(params);
  }, [category, order, searchParams]);

  return (
    <Flex marginBottom={"20px"}>
 

      <Box>
        <Select
          onChange={(e) => setOrder(e.target.value)}
          value={order}
          bg="#003d29"
          color="white"
          border={"none"}
          padding={"5px"}
          borderRadius={"1rem"}
          outline={"none"}
          cursor={"pointer"}
        >
          <option value="" style={{ color: "gray" }}>Select order</option>
          <option value="asc" style={{ color: "white",background: "black" }}>Ascending</option>
          <option value="desc" style={{ color: "white",background: "black" }}>Descending</option>
        </Select>
      </Box>
      <Box>
        <Select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          bg="#003d29"
          color="white"
          border={"none"}
          padding={"5px"}
          borderRadius={"1rem"}
          outline={"none"}
          cursor={"pointer"}
        >
          <option value="" style={{ color: "gray" }}>Select Category</option>
          <option value="Shoes" style={{ color: "white",background: "black" }}>Shoes</option>
          <option value="Sandals" style={{ color: "white",background: "black" }}>Sandals</option>
          <option value="Slippers" style={{ color: "white",background: "black" }}>Slippers</option>
        
        </Select>
      </Box>
    </Flex>
  );
};

export default Filter;