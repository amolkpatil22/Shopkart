import { Box, Button, Center, Divider, Flex, Grid, Heading, Image, List, ListItem, Spinner, Text, border, useToast } from "@chakra-ui/react"
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { datafetch, postdata } from "../Home/action"


import React from 'react'
import "./deal.css"


export const Deal = () => {
    let ref = useRef(null)
    let toast = useToast()
    let navigate = useNavigate()
    let [data, setdata] = useState([])
    let [offerData, setOfferData] = useState([])
    let [minOfferData, setMinOfferData] = useState([])
    let [fortyOfferData, setFortyOfferData] = useState([])
    let dispatch = useDispatch()
    let { isLoading, isError, product, isAuth, userSuccessData } = useSelector((store) => {
        return {
            isLoading: store.HomeReducer.isLoading,
            isError: store.HomeReducer.isError,
            product: store.HomeReducer.product,
            isAuth: store.loginReducer.isAuth,
            userSuccessData: store.loginReducer.userSuccessData,
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
                    if (num == 29) {
                        num = num - 1
                    }
                    else {
                        num = num + 1
                    }
                }
                newdata.push(product[num])
                prev = num
            })
            setdata(newdata)
        }
    }, [product])

    useEffect(() => {
        if (product.length !== 0) {
            let newdata = []
            let prev = -1
            let newarr = new Array(8).fill(0)
            newarr.forEach((e) => {
                let num = Math.floor(Math.random() * 30)
                if (num == prev) {
                    if (num == 29) {
                        num = num - 1
                    }
                    else {
                        num = num + 1
                    }
                }
                newdata.push(product[num])
                prev = num
            })
            setOfferData(newdata)
        }
    }, [product])


    useEffect(() => {
        if (product.length !== 0) {
            let newdata = []
            let prev = -1
            let newarr = new Array(8).fill(0)
            newarr.forEach((e) => {
                let num = Math.floor(Math.random() * 30)
                if (num == prev) {
                    if (num == 29) {
                        num = num - 1
                    }
                    else {
                        num = num + 1
                    }
                }
                newdata.push(product[num])
                prev = num
            })
            setMinOfferData(newdata)
        }
    }, [product])
    useEffect(() => {
        if (product.length !== 0) {
            let newdata = []
            let prev = -1
            let newarr = new Array(8).fill(0)
            newarr.forEach((e) => {
                let num = Math.floor(Math.random() * 30)
                if (num == prev) {
                    if (num == 29) {
                        num = num - 1
                    }
                    else {
                        num = num + 1
                    }
                }
                newdata.push(product[num])
                prev = num
            })
            setFortyOfferData(newdata)
        }
    }, [product])


    const datapost = (e, price) => {
        if (isAuth == false) {
            return navigate("/login")
        }
        else {
            let newdata = userSuccessData
            let flag = false
            newdata.cart.map((a) => {
                if (a.id == e.id) {
                    flag = true
                    toast({
                        title: 'Item Already In Cart',
                        status: 'warning',
                        duration: 2000,
                        isClosable: true,
                    });
                    return
                }
            })
            if (flag == false) {
                let updated = { ...e, price: price }
                newdata.cart.push(updated)
                dispatch(postdata(isAuth, newdata.cart))
                toast({
                    title: 'Item Added To The Cart',
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                });
            }
        }

    }



    return (
        <div>

            <Box className="banner"></Box>

            <Box marginTop={"100px"}  >
                <Heading fontSize={"3xl"} marginLeft={"9%"} marginBottom={"40px"}>Todays Best Deals for you!</Heading>
                <Grid className="itemgrid" ref={ref}>
                    <ChevronLeftIcon className="icon" id="previcon" onClick={handle} />
                    {data == undefined && <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='green.500'
                        size='xl'
                    />}
                    {data?.map((e) => {
                        const offer = Math.floor(Math.random() * (90 - 70 + 1)) + 40;
                        return (
                            <Box key={e?.id * Math.random()} className="itembox" padding={"20px"}  >
                                <Image padding={'10px'} borderRadius={"20px"} height={"350px"} src={e?.image} width={"90%"} />
                                <Flex justifyContent={"space-between"} width={"90%"} marginBottom={"10px"}>
                                    <Heading className="offer" borderRadius={"10px"} fontSize={"xs"} backgroundColor={"rgb(232, 59, 59)"} padding="10px" color={'white'} >Up to {offer}% Off</Heading>
                                    <Heading className="offer" fontSize={"xs"} backgroundColor={"rgb(232, 59, 59)"} padding="10px" color={'white'} border-radius='10%'>Hot Deal</Heading>
                                </Flex >
                                <Flex gap={"10px"} width={"90%"} marginBottom={"10px"}>
                                    <Heading fontSize={"l"}>{e?.title}</Heading>
                                    <Box className="cross-between">
                                        <Heading color={"orange"} fontSize={"xl"}>${e?.price}</Heading>
                                    </Box>

                                </Flex >
                                <p className="description" >{e?.description}</p>
                                <Heading borderRadius={"10px"} color={"green"} fontSize={"l"} backgroundColor={"rgb(239, 194, 123)"} padding="10px">Offer Price: ${Math.floor(e.price - (e.price * offer / 100))}</Heading>
                                <br />
                                <Button onClick={() => { datapost(e, Math.floor(e.price - (e.price * offer / 100))) }} size={"lg"} colorScheme="green" backgroundColor={"rgb(0,61,41)"} width={"150px"} borderRadius={"30px"} padding={'10px'}>Add to Cart</Button>
                            </Box>
                        )
                    })}
                    <ChevronRightIcon className="icon" id="nexticon" onClick={handle} />
                </Grid>
            </Box>


            <Box marginTop={"100px"}  >
                <Heading fontSize={"3xl"} marginLeft={"9%"} marginBottom={"40px"}>Lowest Price Since Launch!</Heading>
                <Grid className="itemgrid2" marginTop={"50px"}>
                    {offerData == undefined && <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='green.500'
                        size='xl'
                    />}
                    {offerData?.map((e) => {
                        const offer = Math.floor(Math.random() * (90 - 70 + 1)) + 70;
                        return (
                            <Box key={e?.id * Math.random()} className="itembox2" padding={"20px"}  >
                                <Image className="dealimg" src={e?.image} height={"200px"} borderRadius={"20px"} width={"90%"} />
                                <Flex justifyContent={"space-between"} width={"90%"} marginBottom={"10px"}>
                                    <Heading className="offer" fontSize={"xs"} backgroundColor={"rgb(232, 59, 59)"} padding="10px" color={'white'} border-radius='10%'>Up to {offer}% Off</Heading>
                                    <Heading className="offer" fontSize={"xs"} backgroundColor={"rgb(232, 59, 59)"} padding="10px" color={'white'} border-radius='10%'>Hot Deal</Heading>
                                </Flex >
                                <Flex gap={"10px"} width={"90%"} marginBottom={"10px"}>
                                    <Heading overflow={"hidden"} maxHeight={"20px"} fontSize={"lg"}>{e?.title}</Heading>
                                    <Heading className="cross-between" color={"orange"} fontSize={"xl"}>${e?.price}</Heading>
                                </Flex >
                                <Text overflow={"hidden"} height={"45px"} width={"90%"} marginBottom={"10px"}>Exclusive discount, don't miss out!</Text>
                                <Heading borderRadius={"10px"} fontSize={"l"} backgroundColor={"rgb(239, 194, 123)"} padding="10px" color={'green'}>Offer Price: ${Math.floor(e.price - (e.price * offer / 100))}</Heading>
                                <br />
                                <Button onClick={() => { datapost(e, Math.floor(e.price - (e.price * offer / 100))) }} size={"lg"} colorScheme="green" backgroundColor={"rgb(0,61,41)"} width={"150px"} borderRadius={"30px"}>Add to Cart</Button>
                            </Box>
                        )
                    })}
                </Grid>
            </Box>



            <Box marginTop={"100px"}  >
                <Heading fontSize={"3xl"} marginLeft={"9%"} marginBottom={"40px"} color={'rgb(174, 8, 8)'}>Get Up To 60% Off</Heading>
                <Grid className="itemgrid2" >
                    {minOfferData?.map((e) => {
                        const offer = Math.floor(Math.random() * (60 - 40 + 1)) + 40;
                        return (
                            <Box key={e?.id * Math.random()} className="itembox2" padding={"20px"}  >
                                <Image className="dealimg" padding={'10px'} src={e.image} width={"90%"} />
                                <Flex justifyContent={"space-between"} width={"90%"} marginBottom={"10px"}>
                                    <Heading className="offer" fontSize={"xs"} backgroundColor={"rgb(232, 59, 59)"} padding="10px" color={'white'}>Up to {offer}% Off</Heading>
                                    <Heading className="offer" fontSize={"xs"} backgroundColor={"rgb(232, 59, 59)"} padding="10px" color={'white'}>Best Deal</Heading>
                                </Flex >
                                <Flex gap={"10px"} width={"90%"} marginBottom={"10px"}>
                                    <Heading overflow={"hidden"} maxHeight={"20px"} fontSize={"l"}>{e.title}</Heading>
                                    <Heading className="cross-between" color={"orange"} fontSize={"xl"}>${e.price}</Heading>
                                </Flex >
                                <Text textOverflow={"clip"} width={"90%"} marginBottom={"10px"}>Exclusive discount, don't miss out!</Text>
                                <Heading borderRadius={"10px"} fontSize={"l"} backgroundColor={"rgb(239, 194, 123)"} padding="10px" color={'green'}>Offer Price: ${Math.floor(e.price - (e.price * offer / 100))}</Heading>
                                <Text overflow={"hidden"} width={"90%"} marginBottom={"10px"}>{e.color}</Text>
                                <Button onClick={() => { datapost(e, Math.floor(e.price - (e.price * offer / 100))) }} size={"lg"} colorScheme="green" backgroundColor={"rgb(0,61,41)"} width={"150px"} borderRadius={"30px"}>Add to Cart</Button>
                            </Box>
                        )
                    })}
                </Grid>
            </Box>




            <Box marginTop={"100px"}  >
                <Heading fontSize={"3xl"} marginLeft={"9%"} marginBottom={"40px"} color={'rgb(245, 74, 74)'} >Get Up To 40% Off</Heading>
                <Grid className="itemgrid2" >
                    {fortyOfferData?.map((e) => {
                        const offer = Math.floor(Math.random() * 40)
                        return (
                            <Box key={e?.id * Math.random()} className="itembox2" padding={"20px"}  >
                                <Image className="dealimg" padding={'10px'} src={e.image} width={"90%"} />
                                <Flex justifyContent={"space-between"} width={"90%"} marginBottom={"10px"}>
                                    <Heading className="offer" fontSize={"xs"} backgroundColor={"rgb(232, 59, 59)"} padding="10px" color={'white'}>Up to {offer}% Off</Heading>
                                    <Heading className="offer" fontSize={"xs"} backgroundColor={"rgb(232, 59, 59)"} padding="10px" color={'white'}>Inclusive Deal</Heading>
                                </Flex >
                                <Flex gap={"10px"} width={"90%"} marginBottom={"10px"}>
                                    <Heading overflow={"hidden"} maxHeight={"20px"} fontSize={"xl"}>{e.title}</Heading>
                                    <Heading className="cross-between" color={"orange"} fontSize={"xl"}>${e.price}</Heading>
                                </Flex >
                                <Text textOverflow={"clip"} width={"90%"} marginBottom={"10px"}>Limited-time deal: Grab it now!</Text>
                                <Heading borderRadius={"10px"} fontSize={"l"} backgroundColor={"rgb(239, 194, 123)"} padding="10px" color={'green'}>Offer Price: ${Math.floor(e.price - (e.price * offer / 100))}</Heading>
                                <Text overflow={"hidden"} width={"90%"} marginBottom={"10px"}>{e.color}</Text>
                                <Button onClick={() => { datapost(e, Math.floor(e.price - (e.price * offer / 100))) }} size={"lg"} colorScheme="green" backgroundColor={"rgb(0,61,41)"} width={"150px"} borderRadius={"30px"}>Add to Cart</Button>
                            </Box>
                        )
                    })}
                </Grid>
            </Box>



        </div>
    )
}