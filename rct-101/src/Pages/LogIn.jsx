import { Box, Button, ButtonGroup, Center, Flex, FormControl, FormLabel, Heading, Input,Image } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
let initState = {
    email: "",
    password: "",
}

export default function LogIn(){
    const [email, setEmail] = useState(initState.email)
    const [password, setPassword] = useState(initState.password)
    const [userData, setUserData] = useState([])
    const Auth = useContext(AuthContext)

    const navigate = useNavigate()

    function UserData() {
        axios.get(`https://reactmonkeyapi.onrender.com/users`)
            .then((res) => {
                setUserData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function handleSubmit(e) {
        e.preventDefault()
        let foundUser = false;
        userData.forEach((user) => {
            if (user.email === email && user.password === password) {
                foundUser = true
                Auth.loginUser()
            }
        });
        if (foundUser) {
            navigate("/")
        } else {
            alert("User does not exist or password is incorrect");
        }
    }

    useEffect(() => {
        UserData()
    }, [])
    return(
        <>
            <Center>
            <Flex >

                <Box w="630px" h="550px" mt="50px" boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} p="50px"  >


                    <Heading mb="20px" >Log In</Heading>

                    <FormControl w="550px" isRequired>
                        <FormLabel >Email address</FormLabel>
                        <Input type='email' value={email} onChange={(e) => (setEmail(e.target.value))} bg="white" />
                        <FormLabel>Password</FormLabel>
                        <Input type='password' value={password} onChange={(e) => (setPassword(e.target.value))} />

                        <ButtonGroup mt="60px">
                            <Button variant='solid' colorScheme='green' onClick={handleSubmit}>Submit</Button>
                            <Button variant='outline' colorScheme='green' onClick={() => (navigate("/signup"))}>Not signed up yet?</Button>
                        </ButtonGroup>
                    </FormControl>

                </Box>

                <Box w="500px" mt="50px" >
                    <Image w="800px" h="550px" borderRadius={"10px"} src="https://media.istockphoto.com/id/1191234454/photo/asian-girl-wear-vr-glasses.jpg?s=612x612&w=0&k=20&c=_IahGPgMCymcDRMrfgdmPLBpWV-idAjpkBjBr6iqc_E=" />
                </Box>

            </Flex >
        </Center >
        </>
    )
}