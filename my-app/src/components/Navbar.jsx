import { Flex, Image, Input, Select } from "@chakra-ui/react"
import { Link } from "react-router-dom"



export const Navbar = () => {
    return (
        <Flex>
            <Image src=""></Image>
            <Link to="/">Home</Link>
            <Input width={"30%"} placeholder="Search Here"></Input>
            <Link to="/login">Login</Link>
        </Flex>
    )
}