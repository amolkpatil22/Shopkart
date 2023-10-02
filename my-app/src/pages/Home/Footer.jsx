import { Box, Button, Center, Divider, Flex, Grid, Heading, Image, List, ListItem, Spinner, Text, border } from "@chakra-ui/react"
import "./home.css"
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { datafetch, postdata } from "./action"
import { loginReducer } from "../Login/LoginReducer"
import axios from "axios"


export const Footer = () => {

    return (
        <>
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

        </>
    )
}