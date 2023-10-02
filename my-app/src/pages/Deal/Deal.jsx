import { Box, Button, Center, Divider, Flex, Grid, Heading, Image, List, ListItem, Text, border } from "@chakra-ui/react"
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { datafetch } from "../Home/action"


import React from 'react'
import "./deal.css"


export const Deal = () => {
    let ref = useRef(null)
    let [data, setdata] = useState([])
    let [offerData,setOfferData]=useState([])
    let [minOfferData,setMinOfferData]=useState([])
    let [fortyOfferData,setFortyOfferData]=useState([])
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
                    if(num==29){
                        num=num-1
                    }
                    else{
                        num=num+1
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
            let newarr = new Array(5).fill(0)
            newarr.forEach((e) => {
                let num = Math.floor(Math.random() * 30)
                if (num == prev) {
                    if(num==29){
                        num=num-1
                    }
                    else{
                        num=num+1
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
            let newarr = new Array(5).fill(0)
            newarr.forEach((e) => {
                let num = Math.floor(Math.random() * 30)
                if (num == prev) {
                    if(num==29){
                        num=num-1
                    }
                    else{
                        num=num+1
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
            let newarr = new Array(5).fill(0)
            newarr.forEach((e) => {
                let num = Math.floor(Math.random() * 30)
                if (num == prev) {
                    if(num==29){
                        num=num-1
                    }
                    else{
                        num=num+1
                    }
                }
                newdata.push(product[num])
                prev = num
            })
            setFortyOfferData(newdata)
        }
    }, [product])
    console.log(data)
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
                                <Image padding={'10px'}borderRadius={"20px"} height={"350px"} src={e?.image} width={"90%"} />
                                <Flex justifyContent={"space-between"} width={"90%"} marginBottom={"10px"}>
                                    <Heading fontSize={"xs"} backgroundColor={"rgb(232, 59, 59)"} padding="10px" color={'white'} border-radius= '10%'>Up to {offer}% Off</Heading>
                                    <Heading fontSize={"xs"} backgroundColor={"rgb(232, 59, 59)"} padding="10px" color={'white'} border-radius= '10%'>Hot Deal</Heading>
                                </Flex >
                                <Flex justifyContent={"space-between"} width={"90%"} marginBottom={"10px"}>
                                    <Heading fontSize={"xl"}>{e?.title}</Heading>
                                    <Heading color={"green"} fontSize={"xl"}>${e?.price}</Heading>
                                </Flex >
                                <p className="description" >{e?.description}</p>
                                <Heading fontSize={"l"} backgroundColor={"rgb(236, 158, 34)"} padding="10px" color={'white'}>Offer Price: ${Math.floor(e.price-(e.price*offer/100))}</Heading>
                                <br/>
                                <Button onClick={() => { datapost(e) }} size={"lg"} colorScheme="green" backgroundColor={"rgb(0,61,41)"} width={"150px"} borderRadius={"30px"} padding={'10px'}>Add to Cart</Button>
                            </Box>
                        )
                    })}
                    <ChevronRightIcon className="icon" id="nexticon" onClick={handle} />
                </Grid>
            </Box>
            

            <Box marginTop={"100px"}  >
                <Heading fontSize={"3xl"} marginLeft={"9%"} marginBottom={"40px"}>Lowest Price Sinc Launch!</Heading>
                <Grid className="itemgrid2" marginTop={"50px"}>
                    {offerData == undefined && <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='green.500'
                        size='xl'
                    />}
                    {offerData?.map((e) => {
                        const offer = Math.floor(Math.random() * (90 - 40 + 1)) + 70;
                        return (
                            <Box key={e?.id * Math.random()} className="itembox2" padding={"20px"}  >
                                <Image src={e?.image} height={"200px"} borderRadius={"20px"} width={"90%"} />
                                <Flex justifyContent={"space-between"} width={"90%"} marginBottom={"10px"}>
                                    <Heading fontSize={"xs"} backgroundColor={"rgb(232, 59, 59)"} padding="10px" color={'white'} border-radius= '10%'>Up to {offer}% Off</Heading>
                                    <Heading fontSize={"xs"} backgroundColor={"rgb(232, 59, 59)"} padding="10px" color={'white'} border-radius= '10%'>Hot Deal</Heading>
                                </Flex >
                                <Flex justifyContent={"space-between"} width={"90%"} marginBottom={"10px"}>
                                    <Heading fontSize={"xl"}>{e?.title}</Heading>
                                    <Heading fontSize={"xl"}>${e?.price}</Heading>
                                </Flex >
                                <Text overflow={"hidden"} height={"45px"} width={"90%"} marginBottom={"10px"}>Exclusive discount, don't miss out!</Text>
                                <Heading fontSize={"l"} backgroundColor={"rgb(236, 158, 34)"} padding="10px" color={'white'}>Offer Price: ${Math.floor(e.price-(e.price*offer/100))}</Heading>
                                <br/>
                                <Button onClick={() => { datapost(e) }} size={"lg"} colorScheme="green" backgroundColor={"rgb(0,61,41)"} width={"150px"} borderRadius={"30px"}>Add to Cart</Button>
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
                            <Box key={e.id} className="itembox2" padding={"20px"}  >
                                <Image padding={'10px'} src={e.image} width={"90%"} />
                                <Flex justifyContent={"space-between"} width={"90%"} marginBottom={"10px"}>
                                    <Heading fontSize={"xs"} backgroundColor={"rgb(232, 59, 59)"} padding="10px" color={'white'}>Up to {offer}% Off</Heading>
                                    <Heading fontSize={"xs"} backgroundColor={"rgb(232, 59, 59)"} padding="10px" color={'white'}>Best Deal</Heading>
                                </Flex >
                                <Flex justifyContent={"space-between"} width={"90%"} marginBottom={"10px"}>
                                    <Heading fontSize={"xl"}>{e.title}</Heading>
                                    <Heading fontSize={"xl"}>${e.price}</Heading>
                                </Flex >
                                <Text textOverflow={"clip"}  width={"90%"} marginBottom={"10px"}>Exclusive discount, don't miss out!</Text>
                                <Heading fontSize={"l"} backgroundColor={"rgb(236, 158, 34)"} padding="10px" color={'white'}>Offer Price: ${Math.floor(e.price-(e.price*offer/100))}</Heading>
                                <Text overflow={"hidden"} width={"90%"} marginBottom={"10px"}>{e.color}</Text>
                                <Button size={"lg"} colorScheme="green" backgroundColor={"rgb(0,61,41)"} width={"150px"} borderRadius={"30px"}>Add to Cart</Button>
                            </Box>
                        )
                    })}
                </Grid>
            </Box>
            

            

            <Box marginTop={"100px"}  >
                <Heading fontSize={"3xl"} marginLeft={"9%"} marginBottom={"40px"} color={'rgb(245, 74, 74)'} >Get Up To 40% Off</Heading>
                <Grid className="itemgrid2" >
                    {fortyOfferData?.map((e) => {
                        const offer=Math.floor(Math.random() * 40)
                        return (
                            <Box key={e.id} className="itembox2" padding={"20px"}  >
                                <Image padding={'10px'} src={e.image} width={"90%"} />
                                <Flex justifyContent={"space-between"} width={"90%"} marginBottom={"10px"}>
                                    <Heading fontSize={"xs"} backgroundColor={"rgb(232, 59, 59)"} padding="10px" color={'white'}>Up to {offer}% Off</Heading>
                                    <Heading fontSize={"xs"} backgroundColor={"rgb(232, 59, 59)"} padding="10px" color={'white'}>Inclusive Deal</Heading>
                                </Flex >
                                <Flex justifyContent={"space-between"} width={"90%"} marginBottom={"10px"}>
                                    <Heading fontSize={"xl"}>{e.title}</Heading>
                                    <Heading fontSize={"xl"}>${e.price}</Heading>
                                </Flex >
                                <Text textOverflow={"clip"}  width={"90%"} marginBottom={"10px"}>Limited-time deal: Grab it now!</Text>
                                <Heading fontSize={"l"} backgroundColor={"rgb(236, 158, 34)"} padding="10px" color={'white'}>Offer Price: ${Math.floor(e.price-(e.price*offer/100))}</Heading>
                                <Text overflow={"hidden"} width={"90%"} marginBottom={"10px"}>{e.color}</Text>
                                <Button size={"lg"} colorScheme="green" backgroundColor={"rgb(0,61,41)"} width={"150px"} borderRadius={"30px"}>Add to Cart</Button>
                            </Box>
                        )
                    })}
                </Grid>
            </Box>


            
    </div>
  )
}