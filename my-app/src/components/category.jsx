
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,  
    Button,
    Heading,
    Grid,
    Image,

} from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons"
import { Link } from 'react-router-dom'


export const Category = () => {
    return (
        <Menu >
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Category
            </MenuButton>
            <MenuList padding={"20px"}>
                <Heading size={"m"}>Popular Categories</Heading>
                <Grid gridTemplateColumns={"repeat(2,1fr)"} marginTop={"20px"} columnGap={"50px"}>
                    <MenuItem minH='40px'>
                        <Image
                            boxSize='3.5rem'
                            borderRadius={"10px"}
                            src='https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052dc39b839500c1f8a_Rectangle%201436.png'
                            mr='12px'
                        />
                        <Link to="/product?category=furnitures"> <Heading size={"m"}>Furniture</Heading></Link>
                    </MenuItem>
                    <MenuItem minH='40px'>
                        <Image
                            boxSize='3.5rem'
                            borderRadius={"10px"}
                            src='https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6053e5b15cfafd550cbb_Rectangle%201436-3.png'
                            mr='12px'
                        />
                        <Link to="/product?category=electronics"> <Heading size={"m"}>Electronics</Heading></Link>
                    </MenuItem>
                    <MenuItem minH='40px'>
                        <Image
                            boxSize='3.5rem'
                            borderRadius={"10px"}
                            src='https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec622235f3f730c0de8c3f_Rectangle%201436-5.png'
                            mr='12px'
                        />
                        <Heading size={"m"}>Books</Heading>
                    </MenuItem>
                    <MenuItem minH='40px'>
                        <Image
                            boxSize='3.5rem'
                            borderRadius={"10px"}
                            src='https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052f0ed215b864af96e_Rectangle%201436-1.png'
                            mr='12px'
                        />
                        <Link to="/product?category=footwear">  <Heading size={"m"}>FootWear</Heading></Link>
                    </MenuItem>
                    <MenuItem minH='40px'>
                        <Image
                            boxSize='3.5rem'
                            borderRadius={"10px"}
                            src='https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec605386e48004f02ee6a8_Rectangle%201436-4.png'
                            mr='12px'
                        />
                        <Heading size={"m"}>Handbags</Heading>
                    </MenuItem>
                    <MenuItem minH='40px'>
                        <Image
                            boxSize='3.5rem'
                            borderRadius={"10px"}
                            src='https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052f3741a4f87af0f6d_Rectangle%201436-2.png'
                            mr='12px'
                        />
                        <Heading size={"m"}>Laptop</Heading>
                    </MenuItem>
                </Grid>
            </MenuList>
        </Menu>
    )
}