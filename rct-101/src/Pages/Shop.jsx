import { Image, Flex, Box, Text, Heading, Button, ButtonGroup, Grid, GridItem, background } from '@chakra-ui/react'
import { Card, CardBody, Stack, CardFooter, Center } from '@chakra-ui/react'
import axios from "axios"
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search2Icon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement, Select } from '@chakra-ui/react'
 export default function Shop(){
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [order, setOrder] = useState("")
    const [cartData, setCartData] = useState([])

    function Products() {
        let url = `https://reactmonkeyapi.onrender.com/products?q=${search}&_sort=price&_order=${order}`

        axios.get(url)
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    useEffect(() => {
        Products()
        MycartData()
    }, [])

    useEffect(() => {
        Products()
    }, [search, order])

    function MycartData() {
        axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart`)
            .then((res) => {
                setCartData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function handleCart(el) {
        console.log("entered")
        if (cartData.length > 0) {

            cartData.forEach((product) => {
                if (product.id === el.id) {
                    alert("Already in Cart")
                }
                else {
                    axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart`, {
                        ...el,
                        quantity: 1
                    })
                        .then((res) => {
                            alert("Product added to Cart")
                            MycartData()
                        })
                        .catch((err) => {
                            console.log("Not working", err)
                        })
                }

            });
        } else {
            axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart`, {
                ...el,
                quantity: 1
            })
                .then((res) => {
                    alert("Product added to Cart")
                    MycartData()
                })
                .catch((err) => {
                    console.log("Not working", err)
                })
        }
    }
    return(
        <>
         <Grid templateColumns='repeat(3, 1fr)' gap="10px" >

{
    data.map((el) => (

        // <ProductCard key={el.id} name={el.name} avatar={el.avatar} price={el.price} />
        < Box key={el.id} >
            <Card maxW='xm' mt="50px">
                <CardBody>
                    <Image
                    margin="auto"
                        height="200px"
                        src={el.avatar}
                        alt={el.name}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Text color='#263238' fontWeight="bold" fontSize='lg' fontFamily="arial" size='md'>{el.name}</Text>

                        <Text color='#455A64' fontSize='xl'>
                            {el.price}€
                        </Text>
                    </Stack>
                </CardBody>
                {/* <Divider /> */}
                <Center>
                    <CardFooter justifyContent={'space-evenly'}>
                        <ButtonGroup spacing='2'>
                            <Button variant='ghost' colorScheme='green' bg="#E8F5E9" onClick={() => (handleCart(el))}>
                                Add to cart
                            </Button>
                            <Button variant='outline' colorScheme='green' onClick={() => ("clicked")}  >
                                <Link to={`/products/${el.id}`} >
                                    More Details
                                </Link>
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Center>
            </Card >
        </Box >
    ))
}

</Grid >
        </>
    )
 }