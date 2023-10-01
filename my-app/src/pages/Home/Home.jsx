import { Box, Button, Center, Divider, Flex, Grid, Heading, Image, List, ListItem, Text, border } from "@chakra-ui/react"
import "./home.css"
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { datafetch } from "./action"

const dummy = [
    {
        "id": 1,
        "title": "HomePod mini",
        "image": "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5507951bbfbe_homepad-mini-min.png",
        "price": 239.00,
        "color": "Table with air purifier, stained veneer/black",
        "rating": 4
    },
    {
        "id": 2,
        "title": "Instax Mini 9",
        "image": "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5537881bbfcf_instax%20mini%209-min.png",
        "price": 99.00,
        "color": "Selfie mode and selfie mirror, Macro mode",
        "rating": 5
    },
    {
        "id": 3,
        "title": "Base Camp Duffel M",
        "image": "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e48b497e63cc46b800_base%20camp%20duffel%2002-min.png",
        "price": 159.00,
        "color": "Table with air purifier, stained veneer/black",
        "rating": 3
    },
    {
        "id": 4,
        "title": "Tote Medium",
        "image": "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e7e006821d3b04db74_Tote%20Medium-min.png",
        "price": 239.00,
        "color": "Canvas, full grain leather",
        "rating": 5,


    },
    {
        "id": 5,
        "title": "Headphone",
        "image": "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e54b76914b262f2448_headphone-min.png",
        "price": 239.00,
        "color": "Table with air purifier, stained veneer/black",
        "rating": 4
    }
]


export const Home = () => {
    let ref = useRef(null)
    let [data, setdata] = useState([])
    let dispatch = useDispatch()
    let { isLoading, isError, product } = useSelector((store) => {
        return {
            isLoading: store.HomeReducer.isLoading,
            isError: store.HomeReducer.isError,
            product: store.HomeReducer.product,
        }
    }, shallowEqual)

    const handle = (e) => {
        let itemgrid = ref.current
        if (e.target.id == "previcon") {
            itemgrid.scrollBy({ left: -500, behavior: "smooth" })
        }
        else {
            itemgrid.scrollBy({ left: 500, behavior: "smooth" })
        }
    }

    useEffect(() => {
        dispatch(datafetch())
    }, [])


    useEffect(() => {
        if (product.length !== 0) {
            let newdata = []
            let prev = -1
            let newarr = new Array(9).fill(0)
            newarr.forEach((e) => {
                let num = Math.floor(Math.random() * 30)
                if (num == prev) {
                    num = num + 1
                }
                newdata.push(product[num])
                prev = num
            })
            setdata(newdata)
        }
    }, [product])
    console.log(data)


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
                    <Link to={"/furnitureslist"}> <Heading className="categoryHeading" bgImage={"url(https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png)"} fontSize={"2xl"} >Furniture</Heading></Link>
                    <Heading className="categoryHeading" bgImage={"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e52d6553668075697e_hand%20bag-min.png"} fontSize={"2xl"}>Hand Bag</Heading>
                    <Heading className="categoryHeading" bgImage={"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc22b7ea53520_books-min.png"} fontSize={"2xl"}>Books</Heading>
                    <Link to={"/electronicslist"}><Heading className="categoryHeading" bgImage={"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e754ac2e32897cb53b_tech-min.png"} fontSize={"2xl"}>Tech</Heading></Link>
                    <Link to={"/footwearslist"}><Heading className="categoryHeading" bgImage={"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64b769118272f244f_sneakers-min.png"} fontSize={"2xl"} >Sneakers</Heading></Link>
                    <Heading className="categoryHeading" bgImage={"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e71eb4ad6d07e7568f_travel-min.png"} fontSize={"2xl"} >Travel</Heading>
                </Flex>
            </Box>


            <Box marginTop={"100px"}  >
                <Heading fontSize={"3xl"} marginLeft={"9%"} marginBottom={"40px"}>Todays Best Deals for you!</Heading>
                <Grid className="itemgrid" ref={ref}>
                    <ChevronLeftIcon className="icon" id="previcon" onClick={handle} />
                    {data?.map((e, ind) => {
                        return (
                            <Box key={ind} className="itembox" padding={"20px"}  >
                                <Image src={e.image} width={"90%"} />
                                <Flex justifyContent={"space-between"} width={"90%"} marginBottom={"10px"}>
                                    <Heading fontSize={"xl"}>{e.title}</Heading>
                                    <Heading fontSize={"xl"}>${e.price}</Heading>
                                </Flex >
                                <Text textOverflow={"clip"} overflow={"hidden"} width={"90%"} marginBottom={"10px"}>{e.description}</Text>

                                <Button size={"lg"} colorScheme="green" backgroundColor={"rgb(0,61,41)"} width={"150px"} borderRadius={"30px"}>Add to Cart</Button>
                            </Box>
                        )
                    })}
                    <ChevronRightIcon className="icon" id="nexticon" onClick={handle} />
                </Grid>
            </Box>


            <Box marginTop={"100px"}  >
                <Heading fontSize={"3xl"} marginLeft={"9%"} marginBottom={"40px"}>Choose By Brand</Heading>
                <Grid id="brandgrid">
                    <Flex gap={"15px"} className="branditem">
                        <Image src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e560afc2c49da53521_brand%20(3)-min.png" />
                        <Box>
                            <Heading fontSize={"xl"}>Staples</Heading>
                            <Text>Delivery with in 24 hours</Text>
                        </Box>
                    </Flex>
                    <Flex gap={"15px"} className="branditem">
                        <Image src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e58b497e41aa46b801_brand%20(8)-min.png" />
                        <Box>
                            <Heading fontSize={"xl"}>Sprouts</Heading>
                            <Text>Delivery with in 24 hours</Text>
                        </Box>
                    </Flex>
                    <Flex gap={"15px"} className="branditem">
                        <Image src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e5eaf8533b0958cefe_brand%20(5)-min.png" />
                        <Box>
                            <Heading fontSize={"xl"}>Grocery outlet</Heading>
                            <Text>Delivery with in 24 hours</Text>
                        </Box>
                    </Flex>
                    <Flex gap={"15px"} className="branditem">
                        <Image src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e454ac2e9d497cb531_brand%20(6)-min.png" />
                        <Box>
                            <Heading fontSize={"xl"}>Mollie stones</Heading>
                            <Text>Delivery with in 24 hours</Text>
                        </Box>
                    </Flex>
                    <Flex gap={"15px"} className="branditem">
                        <Image src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4707380971125e685_brand%20(4)-min.png" />
                        <Box>
                            <Heading fontSize={"xl"}>Sports Basement</Heading>
                            <Text>Delivery with in 24 hours</Text>
                        </Box>
                    </Flex>
                    <Flex gap={"15px"} className="branditem">
                        <Image src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc2193aa53511_brand%20(2)-min.png" />
                        <Box>
                            <Heading fontSize={"xl"}>Container Store</Heading>
                            <Text>Delivery with in 24 hours</Text>
                        </Box>
                    </Flex>
                    <Flex gap={"15px"} className="branditem">
                        <Image src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4c21faa5e03c209c5_brand%20(1)-min.png" />
                        <Box>
                            <Heading fontSize={"xl"}>Target</Heading>
                            <Text>Delivery with in 24 hours</Text>
                        </Box>
                    </Flex>
                    <Flex gap={"15px"} className="branditem">
                        <Image src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e51eb4ad92a3e75673_brand%20(7)-min.png" />
                        <Box>
                            <Heading fontSize={"xl"}>Bevmo</Heading>
                            <Text>Delivery with in 24 hours</Text>
                        </Box>
                    </Flex>

                </Grid>
            </Box>


            <Box marginTop={"100px"}  >
                <Heading fontSize={"3xl"} marginLeft={"9%"} marginBottom={"40px"}>Get Up To 70% Off</Heading>
                <Grid className="discountgrid">
                    <Box className="discountbox"  >
                        <Box bgColor={"rgb(242,228,217)"} padding={"30px"}>
                            <Heading fontSize={"2xl"} marginBottom={"10px"}>Save</Heading>
                            <Flex marginBottom={"10px"} color={"rgb(203,153,23)"} ><Text fontWeight={"bold"} fontSize={"2xl"}>$</Text><Heading fontWeight={"extrabold"}>100</Heading></Flex>
                            <Text marginBottom={"10px"}>Explore Our Furniture & Home Furnishing Range</Text>
                        </Box>
                        <Box overflow={"hidden"}>
                            <Image className="discountimg" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6cd367817e964f756_sofa-min.png"></Image>
                        </Box>
                    </Box>
                    <Box className="discountbox"  >
                        <Box bgColor={"rgb(249,220,220)"} padding={"30px"}>
                            <Heading fontSize={"2xl"} marginBottom={"10px"}>Save</Heading>
                            <Flex marginBottom={"10px"} color={"rgb(150,31,31)"} ><Text fontWeight={"bold"} fontSize={"2xl"}>$</Text><Heading fontWeight={"extrabold"}>29</Heading></Flex>
                            <Text marginBottom={"10px"}>Explore Our Furniture & Home Furnishing Range</Text>
                        </Box>
                        <Box overflow={"hidden"}>
                            <Image className="discountimg" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4e006822af104db61_book-min.png"></Image>
                        </Box>
                    </Box>
                    <Box className="discountbox"  >
                        <Box bgColor={"rgb(242,228,217)"} padding={"30px"}>
                            <Heading fontSize={"2xl"} marginBottom={"10px"}>Save</Heading>
                            <Flex marginBottom={"10px"} color={"rgb(148,98,60)"} ><Text fontWeight={"bold"} fontSize={"2xl"}>$</Text><Heading fontWeight={"extrabold"}>67</Heading></Flex>
                            <Text marginBottom={"10px"}>Explore Our Furniture & Home Furnishing Range</Text>
                        </Box>
                        <Box overflow={"hidden"}>
                            <Image className="discountimg" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e61a7c20076aec5fe7_shirt-min.png"></Image>
                        </Box>
                    </Box>
                    <Box className="discountbox"  >
                        <Box bgColor={"rgb(210,247,236)"} padding={"30px"}>
                            <Heading fontSize={"2xl"} marginBottom={"10px"}>Save</Heading>
                            <Flex marginBottom={"10px"} color={"rgb(0,61,41)"} ><Text fontWeight={"bold"} fontSize={"2xl"}>$</Text><Heading fontWeight={"extrabold"}>59</Heading></Flex>
                            <Text marginBottom={"10px"}>Explore Our Furniture & Home Furnishing Range</Text>
                        </Box>
                        <Box overflow={"hidden"}>
                            <Image className="discountimg" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e53f7127592743f6be_bug%20%26%20book-min.png"></Image>
                        </Box>
                    </Box>

                </Grid>
            </Box>



            <Box marginTop={"100px"} id="middlebanner" bgImage={"url(https://img.freepik.com/premium-photo/living-room-modern-style-with-sofa-chair-yellow-green-wall-background_258219-553.jpg?w=996)"}>
                <Box id="middlebox">
                    <Heading marginBottom={"20px"} fontSize={"6xl"}>Get 5% Cash Back On $200</Heading>
                    <Text marginBottom={"40px"} fontSize={"xl"}>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</Text>
                    <Button colorScheme="green" border={"white solid 1px "} color={"white"} bgColor={"transparent"} size={"lg"} borderRadius={"50px"}>Learn More</Button>
                </Box>
            </Box>



            <Box marginTop={"100px"}  >
                <Heading fontSize={"3xl"} marginLeft={"9%"} marginBottom={"40px"}>Trending Deals for you!</Heading>
                <Flex justifyContent={"space-between"} width={"60%"} marginLeft={"10%"}>
                    <Text className="filterbtn">Gadgets</Text>
                    <Text className="filterbtn">Fashion</Text>
                    <Text className="filterbtn">Toys</Text>
                    <Text className="filterbtn">Education</Text>
                    <Text className="filterbtn">Beauty</Text>
                    <Text className="filterbtn">Fitness</Text>
                    <Text className="filterbtn">Furniture</Text>
                    <Text className="filterbtn">Sneakers</Text>
                </Flex>
                <Grid className="itemgrid2" >
                    {dummy?.map((e) => {
                        return (
                            <Box key={e.id} className="itembox2" padding={"20px"}  >
                                <Image src={e.image} width={"90%"} />
                                <Flex justifyContent={"space-between"} width={"90%"} marginBottom={"10px"}>
                                    <Heading fontSize={"xl"}>{e.title}</Heading>
                                    <Heading fontSize={"xl"}>${e.price}</Heading>
                                </Flex >
                                <Text overflow={"hidden"} width={"90%"} marginBottom={"10px"}>{e.color}</Text>
                                <Button size={"lg"} colorScheme="green" backgroundColor={"rgb(0,61,41)"} width={"150px"} borderRadius={"30px"}>Add to Cart</Button>
                            </Box>
                        )
                    })}
                </Grid>
            </Box>



            <Box marginTop={"100px"}  >
                <Heading fontSize={"3xl"} marginLeft={"9%"} marginBottom={"40px"}>Services To Help You Shop</Heading>
                <Grid className="discountgrid2">
                    <Box className="discountbox2"  >
                        <Box bgColor={"rgb(245,246,246)"} padding={"30px"}>
                            <Heading width={"70%"} fontSize={"2xl"} marginBottom={"30px"}>Frequently Asked Questions</Heading>
                            <Text width={"60%"} marginBottom={"10px"}>Updates on safe Shopping in our Stores</Text>
                        </Box>
                        <Box overflow={"hidden"}>
                            <Image className="discountimg" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55b939fea169c0292_faq-min.png"></Image>
                        </Box>
                    </Box>
                    <Box className="discountbox2"  >
                        <Box bgColor={"rgb(245,246,246)"} padding={"30px"}>
                            <Heading width={"70%"} fontSize={"2xl"} marginBottom={"30px"}>Online Payment Process</Heading>
                            <Text width={"60%"} marginBottom={"10px"}>Updates on safe Shopping in our Stores</Text>
                        </Box>
                        <Box overflow={"hidden"}>
                            <Image className="discountimg" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6707380718425e697_onlie%20payment-min.png"></Image>
                        </Box>
                    </Box>
                    <Box className="discountbox2"  >
                        <Box bgColor={"rgb(245,246,246)"} padding={"30px"}>
                            <Heading width={"70%"} fontSize={"2xl"} marginBottom={"30px"}>Home Delivery Options</Heading>
                            <Text width={"60%"} marginBottom={"10px"}>Updates on safe Shopping in our Stores</Text>
                        </Box>
                        <Box overflow={"hidden"}>
                            <Image className="discountimg" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e544663ba3d0fd2bb8_home%20delivery-min.png"></Image>
                        </Box>
                    </Box>
                </Grid>
            </Box>




            <Divider marginTop={"100px"} bgColor={"blackAlpha.900"} height={"1px"} />
            <Box marginTop={"50px"}  >
                <Flex width={"82%"} margin={"auto"} justifyContent={"space-between"}>
                    <Box width={"34%"} overflow={"hidden"}>
                        <Image marginBottom={"40px"} src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg" />
                        <Text marginBottom={"40px"}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>
                        <Box>
                            <Heading marginBottom={"30px"} fontSize={"xl"}>Accepted Payments</Heading>
                            <Grid id="paymentgrid">
                                <div><img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8816711ebecac46d8_stripe.png" alt="" /></div>
                                <div><img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce82d440b7ab84a993f_visa.png" alt="" /></div>
                                <div><img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8f032504012a5896b_Mastercard.png" alt="" /></div>
                                <div><img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e48b497e6ce846b7ff_Amazon.png" alt="" /></div>
                                <div><img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1f054e419e42aca4a9a2_Klarna.png" alt="" /></div>
                                <div><img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce7c4510cf9a55828a0_PayPal.png" alt="" /></div>
                                <div><img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4707380264b25e680_ApplePay.png" alt="" /></div>
                                <div> <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1f55dc68c5ee83d0cbf8_GooglePay.png" alt="" /></div>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className="listbox">
                        <Heading fontSize={"xl"} marginBottom={"20px"}>Department</Heading>
                        <List  >
                            <ListItem className="listitem">Fashion</ListItem>
                            <ListItem className="listitem">Education Product</ListItem>
                            <ListItem className="listitem">Frozen Food</ListItem>
                            <ListItem className="listitem">Beverages</ListItem>
                            <ListItem className="listitem">Organic Grocery</ListItem>
                            <ListItem className="listitem">Office Supplies</ListItem>
                            <ListItem className="listitem">Beauty Products</ListItem>
                            <ListItem className="listitem">Books</ListItem>
                            <ListItem className="listitem">Electronics &amp;Gadget</ListItem>
                            <ListItem className="listitem">Travel Accessories</ListItem>
                            <ListItem className="listitem">Fitness</ListItem>
                            <ListItem className="listitem">Sneakers</ListItem>
                            <ListItem className="listitem">Toys</ListItem>
                            <ListItem className="listitem">Furniture</ListItem>
                        </List>
                    </Box>

                    <Box className="listbox">
                        <Heading fontSize={"xl"} marginBottom={"20px"} >About us</Heading>
                        <List>
                            <ListItem className="listitem">About shopcart</ListItem>
                            <ListItem className="listitem">Careers</ListItem>
                            <ListItem className="listitem">News &amp;Blog</ListItem>
                            <ListItem className="listitem">Help</ListItem>
                            <ListItem className="listitem">Press Center</ListItem>
                            <ListItem className="listitem">Shop by location</ListItem>
                            <ListItem className="listitem">Shopcart brands</ListItem>
                            <ListItem className="listitem">Affiliate &amp;Partners</ListItem>
                            <ListItem className="listitem">Ideas &amp;Guides</ListItem>
                        </List>
                    </Box>
                    <Box className="listbox">
                        <Heading fontSize={"xl"} marginBottom={"20px"} >Services</Heading>
                        <List >
                            <ListItem className="listitem">Gift Card</ListItem>
                            <ListItem className="listitem">Mobile App</ListItem>
                            <ListItem className="listitem">Shipping &amp;Delivery</ListItem>
                            <ListItem className="listitem">Order Pickup</ListItem>
                            <ListItem className="listitem">Account Signup</ListItem>
                        </List>
                    </Box>
                    <Box className="listbox">
                        <Heading fontSize={"xl"} marginBottom={"20px"}>Help</Heading>
                        <List>
                            <ListItem className="listitem">Shopcart Help</ListItem>
                            <ListItem className="listitem">Returns</ListItem>
                            <ListItem className="listitem">track orders</ListItem>
                            <ListItem className="listitem">contact us</ListItem>
                            <ListItem className="listitem">feedback</ListItem>
                            <ListItem className="listitem">Security &amp;Fraud</ListItem>
                        </List>
                    </Box>
                </Flex>
            </Box>
            <Divider marginTop={"50px"} bgColor={"blackAlpha.900"} height={"1px"} />

        </Box>
    )
}





