import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import "./home.css"




export const Home = () => {
    return (
        <Box >
            <Box id="banner" >
                <Box marginLeft={"150px"}  >
                    <Heading  color={"rgb(0,61,41)"} size={"4xl"} marginBottom={"20px"} >Shopping And</Heading>
                    <Heading color={"rgb(0,61,41)"} size={"4xl"} marginBottom={"20px"}>Department Store</Heading>
                    <Text marginBottom={"30px"} marginTop={"40px"} fontSize={"xl"} width={"40%"}>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</Text>
                    <Button id="learnmore" size={"lg"} colorScheme="green" backgroundColor={"rgb(0,61,41)"} color={"white"} borderRadius={"30px"} marginBottom={"20px"}>Learn More</Button>
                </Box>
            </Box>
        </Box>
    )
}




