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
          <option value="Sofa" style={{ color: "white",background: "black" }}>Sofa</option>
          <option value="Bed" style={{ color: "white",background: "black" }}>Bed</option>
          <option value="Cupboard" style={{ color: "white",background: "black" }}>Cupboard</option>
        
        </Select>
      </Box>
    </Flex>
  );
};

export default Filter;