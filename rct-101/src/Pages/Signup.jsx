import {
    FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Box, Center, Button, Heading, ButtonGroup, Flex, Image
} from '@chakra-ui/react'

import axios from 'axios';
import { useState } from 'react';


import React from 'react';
import { useNavigate } from 'react-router-dom';

let initState = {
    name: "",
    email: "",
    password: "",
    cPassword: ""
}


function SignUp() {


    const [name, setName] = useState(initState.name)
    const [email, setEmail] = useState(initState.email)
    const [password, setPassword] = useState(initState.password)
    const [cPassword, setcPassword] = useState(initState.cPassword)
    const navigate = useNavigate()

    function handleSubmit() {
        if (name == "" || email == "" || password == "" || cPassword == "") {
            alert("Please fill out all required fileds")
        }
        else if (password !== cPassword) {
            alert("Your Password must match confirm password")
        }
        else {
            axios.post(`https://reactmonkeyapi.onrender.com/users`, {
                name: name,
                email: email,
                password: password
            })
                .then((res) => {
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
            navigate("/login")

        }

    }






    return (<>

        
        <Center>
            <Flex>
                <Box w="700px" mt="50px" h="550px">
                    <Image w="800px" h="550px" borderRadius={"10px"} src="https://getwallpapers.com/wallpaper/full/8/8/6/1064046-laptop-hd-wallpaper-1920x1200-for-android-40.jpg" />
                </Box>
                <Box mt="50px" h="550px" boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} p="50px">
                    <Heading mb="20px" >Sign Up</Heading>
                    <FormControl w="400px" isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input type='text' value={name} onChange={(e) => (setName(e.target.value))} />

                        <FormLabel>Email address</FormLabel>
                        <Input type='email' value={email} onChange={(e) => (setEmail(e.target.value))} />

                        <FormLabel>Password</FormLabel>
                        <Input type='password' value={password} onChange={(e) => (setPassword(e.target.value))} />

                        <FormLabel>Confirm Password</FormLabel>
                        <Input type='password' value={cPassword} onChange={(e) => (setcPassword(e.target.value))} />

                        <Button mt="30px" variant='solid' colorScheme='green' onClick={handleSubmit}>Submit</Button>

                    </FormControl>
                </Box>

            </Flex>
        </Center>
        
    </>)
}






export default SignUp;