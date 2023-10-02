import { Box, Flex, Image, Input, Select, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Category } from "./category"
import "./navbar.css"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { CloseIcon } from "@chakra-ui/icons"
import { datafetch } from "../pages/Home/action"
import axios from "axios"

export const Navbar = () => {
    let [searchdata, setsearchdata] = useState([])
    let [searchvalue, setsearchvalue] = useState("")
    let dispatch = useDispatch()
    const { isAuth, name, product } = useSelector((store) => {
        return {
            isAuth: store.loginReducer.isAuth,
            name: `${store.loginReducer.userSuccessData.first_name} ${store.loginReducer.userSuccessData.last_name}`,
            product: store.HomeReducer.product,
        }
    }, shallowEqual)

    useEffect(() => {
        const searchTerm = (searchvalue || '').toLowerCase();
        if (searchTerm) {
            const filteredProducts = product.filter((product) =>
                product.title && product.title.toLowerCase().includes(searchTerm)
            );
            setsearchdata(filteredProducts)
        }
    }, [searchvalue])


    useEffect(() => {
        if (isAuth) {
            axios.get(`http://localhost:8080/userdata/${isAuth}`)
                .then((res) => { dispatch({ type: "update", payload: res.data }) })
        }
    }, [isAuth])

    useEffect(() => {
        if (product.length == 0) {
            dispatch(datafetch())
        }
    }, [product])


    const erase = () => {
        setsearchvalue("")
        setsearchdata([])
    }

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

                <Box width={"25%"} >
                    <Input value={searchvalue} borderRadius={"20px"} borderColor={"grey"} onChange={(e) => setsearchvalue(e.target.value)} placeholder="Search Product"></Input>
                    {searchdata.length !== 0 && <Box className="search" >
                        {searchdata.length !== 0 && <Flex justifyContent={"right"}> <CloseIcon cursor={"pointer"} onClick={erase} fontSize={"xs"} /></Flex>}
                        {searchdata.length !== 0 && searchdata?.map((e) => {
                            return (
                                <Link key={e.id * Math.random()} to={`/product/${e.id}`} className="link">
                                    <Flex gap={"10px"} padding={"10px"} justifyContent={"left"} alignItems={"center"}>
                                        <Image width={"30px"} src={e.image}></Image>
                                        <Box textAlign={"left"}  >
                                            <Text>{e.title}</Text>
                                            <Text fontWeight={"bold"} color={"rgb(0, 61, 41)"}>in {e.category}</Text>
                                        </Box>
                                    </Flex>
                                </Link>
                            )
                        })}
                    </Box>}
                </Box>


                <Flex>
                    <Image src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb3dec9d6ee83660ebe1de_user.png" />
                    {isAuth ? <Link to="/profile">{name}</Link> : <Link to="/login">Account</Link>}
                </Flex>
                <Flex>
                    <Image src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb3dec9b865e78d4ff6b8d_shopping-cart-add.png" />
                    <Link to="/cart">Cart</Link>
                </Flex>

            </Flex>
        </Box>
    )
}