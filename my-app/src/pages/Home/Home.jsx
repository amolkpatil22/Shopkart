import { Box, Button, Center, Flex, Grid, Heading, Image, Text, border } from "@chakra-ui/react"
import "./home.css"

const dummy = [
    {
        "id": 1,
        "title": "HomePod mini",
        "image": "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5507951bbfbe_homepad-mini-min.png",
        "price": 239.00,
        "color": "Table with air purifier, stained veneer/black",
        "rating": {
            "stars": 5,
            "total": 121
        }
    },
    {
        "id": 2,
        "title": "Instax Mini 9",
        "image": "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5537881bbfcf_instax%20mini%209-min.png",
        "price": 99.00,
        "color": "Selfie mode and selfie mirror, Macro mode",
        "rating": {
            "stars": 5,
            "total": 121
        }
    },
    {
        "id": 3,
        "title": "Base Camp Duffel M",
        "image": "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e48b497e63cc46b800_base%20camp%20duffel%2002-min.png",
        "price": 159.00,
        "color": "Table with air purifier, stained veneer/black",
        "rating": {
            "stars": 5,
            "total": 121
        }
    },
    {
        "id": 4,
        "title": "Tote Medium",
        "image": "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e7e006821d3b04db74_Tote%20Medium-min.png",
        "price": 239.00,
        "color": "Canvas, full grain leather",
        "rating": {
            "stars": 5,
            "total": 121
        }
    },
    {
        "id": 5,
        "title": "Headphone",
        "image": "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e54b76914b262f2448_headphone-min.png",
        "price": 239.00,
        "color": "Table with air purifier, stained veneer/black",
        "rating": {
            "stars": 5,
            "total": 121
        }
    }
]


export const Home = () => {

    return (
        <Box >
            <Box id="banner">
                <Box marginLeft={"150px"} >
                    <Heading color={"rgb(0,61,41)"} size={"4xl"} marginBottom={"20px"} >Shopping And</Heading>
                    <Heading color={"rgb(0,61,41)"} size={"4xl"} marginBottom={"20px"}>Department Store</Heading>
                    <Text marginBottom={"30px"} marginTop={"40px"} fontSize={"xl"} width={"40%"}>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</Text>
                    <Button id="learnmore" size={"lg"} colorScheme="green" backgroundColor={"rgb(0,61,41)"} color={"white"} borderRadius={"30px"} marginBottom={"20px"}>Learn More</Button>
                </Box>
            </Box>

            <Box marginTop={"100px"} >
                <Heading fontSize={"3xl"} marginLeft={"9%"} marginBottom={"40px"}>Shop Our Top Categories</Heading>
                <Flex width={"90%"} margin={"auto"} justifyContent={"center"} gap={"20px"} >
                    <Heading className="categoryHeading" bgImage={"url(https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png)"} fontSize={"2xl"} >Furniture</Heading>
                    <Heading className="categoryHeading" bgImage={"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e52d6553668075697e_hand%20bag-min.png"} fontSize={"2xl"}>Hand Bag</Heading>
                    <Heading className="categoryHeading" bgImage={"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc22b7ea53520_books-min.png"} fontSize={"2xl"}>Books</Heading>
                    <Heading className="categoryHeading" bgImage={"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e754ac2e32897cb53b_tech-min.png"} fontSize={"2xl"}>Tech</Heading>
                    <Heading className="categoryHeading" bgImage={"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64b769118272f244f_sneakers-min.png"} fontSize={"2xl"} >Sneakers</Heading>
                    <Heading className="categoryHeading" bgImage={"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e71eb4ad6d07e7568f_travel-min.png"} fontSize={"2xl"} >Travel</Heading>
                </Flex>
            </Box>


            <Box marginTop={"100px"}>
                <Heading fontSize={"3xl"} marginLeft={"9%"} marginBottom={"40px"}>Todays Best Deals for you!</Heading>
                <Grid className="itemgrid">
                    {dummy?.map((e) => {
                        return (
                            <Box className="itembox" >
                                <Image src={e.image} />
                                <h4>{e.title}</h4>
                                <Text></Text>
                                <Button>Add to Cart</Button>
                            </Box>
                        )
                    })}
                </Grid>
            </Box>



            <Box marginTop={"100px"}>
                <Heading fontSize={"3xl"} marginLeft={"9%"} marginBottom={"40px"}>Todays Best Deals for you!</Heading>
                <Grid gridTemplateColumns={"repeat(5,1fr)"} overflowX={"auto"} gap={"20px"} >
                    {dummy?.map((e) => {
                        return (
                            <Box display={"flex"} flexDirection={"column"} border={"solid red"} width={"400px"} alignItems={"center"} >
                                <Image src={e.image} />
                                <h4>{e.title}</h4>
                                <Text></Text>
                                <Button>Add to Cart</Button>
                            </Box>
                        )
                    })}
                </Grid>
            </Box>


        </Box>
    )
}







