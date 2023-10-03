import { Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Portal, Select, Stack, Text, Textarea, useToast } from "@chakra-ui/react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react'
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

let shippingdata = {
    first_name: "",
    last_name: "",
    country: "",
    city: "",
    mobile: "",
    address: ""
}

let intpassword = {
    old_password: "",
    new_password: "",
    confirm_password: "",
}

export const Profile = () => {
    let navigate = useNavigate()
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
    let [section, setsection] = useState("account")
    let [localshipping, setlocalshipping] = useState(shippingdata)
    let [localpassword, setlocalpassword] = useState(intpassword)
    const toast = useToast()
    const sectionControll = (e) => {
        setsection(e.target.name)
    }


    const shippingControll = (e) => {
        setlocalshipping({ ...localshipping, [e.target.name]: e.target.value })
    }

    const submitShipping = () => {
        axios.patch(`https://shopkart-payload.onrender.com/userdata/${isAuth}`, { shipping: localshipping })
            .then((res) => {
                toast({
                    title: 'Details Updated Successfully',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
                setlocalshipping(shippingdata)
            })
            .catch((err) => {
                toast({
                    title: 'Error While Updating Data, Please Try Again',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            })

    }

    const passwordControl = (e) => {
        setlocalpassword({ ...localpassword, [e.target.name]: e.target.value })
    }

    const submitPassword = () => {
        if (localpassword.old_password == userSuccessData.password) {
            axios.patch(`https://shopkart-payload.onrender.com/userdata/${isAuth}`, { password: localpassword.new_password })
                .then((res) => {
                    toast({
                        title: 'Password Updated Successfully',
                        status: 'success',
                        duration: 3000,
                        isClosable: true,
                    });
                    setlocalpassword(intpassword)
                })
                .catch((err) => {
                    toast({
                        title: 'Error While Updating Password, Please Try Again',
                        status: 'error',
                        duration: 3000,
                        isClosable: true,
                    });
                })

        } else {
            toast({
                title: 'Incorrect Password',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    }


    const deleteAccount = () => {
        axios.delete(`https://shopkart-payload.onrender.com/userdata/${isAuth}`)
            .then((res) => {
                toast({
                    title: 'Account Deleted Successfully',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
                localStorage.setItem("user", JSON.stringify(false))
                navigate("/")
                dispatch({ type: "loggedout" })
            })
    }

    const logoutControll = () => {
        localStorage.setItem("user", JSON.stringify(false))
        dispatch({ type: "loggedout" });        
        navigate("/");
        toast({
            title: 'Logged Out Successfully',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    }

    return (
        <Box padding={"50px"} width={"80%"} margin={"auto"}>
            <Flex justifyContent={"center"} alignItems={"center"} >
                <Box width={"20%"}  >
                    <Image marginBottom={"10px"} src="data:image/png;base64,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" ></Image>

                    <Heading marginBottom={"10px"} fontSize={"xl"}>{`${userSuccessData.first_name} ${userSuccessData.last_name}`}</Heading>
                    <Text marginBottom={"20px"}>{userSuccessData.email}</Text>
                    <Button onClick={logoutControll} bgColor={"rgb(0,61,41)"} colorScheme="green">LOGOUT</Button>
                </Box>
                <Box>
                    <Flex gap={"20px"} marginBottom={"20px"}>
                        <Button bgColor={"rgb(0,61,41)"} colorScheme="green" name="account" onClick={sectionControll}>ACCOUNT DETAILS</Button>
                        <Button bgColor={"rgb(0,61,41)"} colorScheme="green" name="password" onClick={sectionControll}>CHANGE PASSWORD</Button>
                        <Button bgColor={"rgb(0,61,41)"} colorScheme="green" name="delete" onClick={sectionControll}>DELETE ACCOUNT</Button>
                    </Flex>
                    {section == "account" && <Box>
                        <Stack>
                            <Heading marginBottom={"20px"} fontSize={"xl"}>Shipping Details:</Heading>
                            <Flex gap={"10px"} marginBottom={"10px"}>
                                <FormControl>
                                    <FormLabel htmlFor="first-name">First Name:</FormLabel>
                                    <Input value={localshipping?.first_name} type="text" id="first-name" name="first_name" onChange={shippingControll} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="last-name">Last Name:</FormLabel>
                                    <Input value={localshipping?.last_name} type="text" id="last-name" name="last_name" onChange={shippingControll} />
                                </FormControl>
                            </Flex>
                            <Flex gap={"10px"} marginBottom={"10px"}>
                                <FormControl>
                                    <FormLabel htmlFor="country">Country</FormLabel>
                                    <Select value={localshipping?.country} id="country" name="country" onChange={shippingControll}>
                                        <option value="India">India</option>
                                        <option value="China">China</option>
                                        <option value="USA">USA</option>
                                    </Select>
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor="city">City</FormLabel>
                                    <Select value={localshipping?.city} id="city" name="city" onChange={shippingControll}>
                                        <option value="Mumbai">Mumbai</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Chennai">Chennai</option>
                                    </Select>
                                </FormControl>
                            </Flex>
                            <Flex Flex gap={"10px"} marginBottom={"10px"}>
                                <FormControl>
                                    <FormLabel htmlFor="mobile">Mobile:</FormLabel>
                                    <Input value={localshipping?.mobile} type="number" id="mobile" name="mobile" onChange={shippingControll} />
                                </FormControl>
                            </Flex>
                            <Flex Flex gap={"10px"} marginBottom={"10px"}>
                                <FormControl>
                                    <FormLabel htmlFor="address">Address</FormLabel>
                                    <Textarea value={localshipping?.address} id="address" name="address" onChange={shippingControll} />
                                </FormControl>
                            </Flex>
                            <Button width={"50%"} margin={"auto"} bgColor={"rgb(0,61,41)"} colorScheme="green" onClick={submitShipping}>Submit</Button>
                        </Stack>
                    </Box>}
                    {section == "password" && <Box>
                        <Heading marginBottom={"20px"} fontSize={"xl"}>Change Password:</Heading>
                        <Stack spacing={4}>
                            <FormControl>
                                <FormLabel htmlFor="old-password">Old Password:</FormLabel>
                                <Input value={localpassword.old_password} type="password" id="old-password" name="old_password" onChange={passwordControl} />
                            </FormControl>

                            <FormControl>
                                <FormLabel htmlFor="new-password">New Password:</FormLabel>
                                <Input value={localpassword.new_password} type="password" id="new-password" name="new_password" onChange={passwordControl} />
                            </FormControl>

                            <FormControl>
                                <FormLabel htmlFor="confirm-password">Confirm Password:</FormLabel>
                                <Input value={localpassword.confirm_password} type="password" id="confirm-password" name="confirm_password" onChange={passwordControl} />
                            </FormControl>

                            <Button onClick={submitPassword} width={"50%"} margin={"auto"} marginTop={"20px"} bgColor={"rgb(0,61,41)"} colorScheme="green">Submit</Button>
                        </Stack>
                    </Box>}
                    {section == "delete" && <Box>
                        <Heading marginBottom={"10px"} fontSize={"xl"}>Delete Account:</Heading>
                        <Text marginLeft={"5px"} marginBottom={"20px"} width={"550px"}  >< Text fontWeight={"bold"} color={"red"}>Caution:</Text> Once you delete your account, this action is irreversible. All your data, settings, and activity associated with this account will be permanently erased. Are you sure you want to proceed with account deletion?</Text>
                        <Popover >
                            <PopoverTrigger >
                                <Button colorScheme='red'>DELETE</Button>
                            </PopoverTrigger>
                            <Portal>
                                <PopoverContent>
                                    <PopoverArrow />
                                    <PopoverHeader>Click Confirm to Delete Account</PopoverHeader>
                                    <PopoverCloseButton />
                                    <PopoverBody textAlign={"center"}>
                                        <Button onClick={deleteAccount} width={"100%"} colorScheme='red'>Confirm</Button>
                                    </PopoverBody>
                                </PopoverContent>
                            </Portal>
                        </Popover>
                    </Box>}
                </Box>
            </Flex>
        </Box>
    )
}