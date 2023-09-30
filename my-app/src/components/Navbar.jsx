import { Box, Flex, Grid, Heading, Icon, Image, Input, Select, Spacer } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Category } from "./category"
import "./navbar.css"


export const Navbar = () => {
    return (
        <Box>
            <Flex id="topbar">
                <Flex>
                    <Image src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e884fbeaf853f075555d17_Call.svg" />
                    <p >+001234567890</p>
                </Flex>
                <p>Get 50% Off on Selected Items    |    Shop Now</p>
                <Flex>
                    <Select width={"fit-content"} border={"none"} >
                        <option value="eng">Eng</option>
                        <option value="arabic">Arabic</option>
                        <option value="hindi">Hindi</option>                     
                    </Select>
                    <Select width={"fit-content"} border={"none"} >
                        <option value='option1'>India</option>
                        <option value='option2'>USA</option>
                        <option value='option3'>Dubai</option>
                    </Select>
                </Flex>
            </Flex>
            <Flex id="navbar" padding={"20px"}>
                <Image src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg"></Image>
                <Link to="/">Home</Link>
                <Category />
                <Link to={"/deals"} >Deals</Link>
                <Link to={"/new"} >What's New</Link>
                <Input width={"25%"} borderRadius={"20px"} borderColor={"grey"} placeholder="Search Product"></Input>
                <Flex>
                    <Image src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb3dec9d6ee83660ebe1de_user.png" />
                    <Link to="/login">Account</Link>
                </Flex>
                <Flex>
                    <Image src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb3dec9b865e78d4ff6b8d_shopping-cart-add.png" />
                    <Link to="/cart">Cart</Link>
                </Flex>

            </Flex>
        </Box>
    )
}