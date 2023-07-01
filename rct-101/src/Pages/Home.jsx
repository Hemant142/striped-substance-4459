import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack,Text,Image, Center, } from "@chakra-ui/react";
import { Link as RouterLink } from '@chakra-ui/react'
import Footer from "../Components/Footer";
export default function Home(){
    return(<Box>
        <div>Home Page</div>
        <Box w="95%"  margin="auto">
                <Box borderRadius="10px" h="500px" backgroundImage="url('https://cdn.pixabay.com/photo/2022/06/21/21/15/audio-7276511_640.jpg')" backgroundPosition="center">
                    <Heading pr="40px" pt="30px" color="#FAFAFA" fontFamily="revert">HEADPHONE</Heading>
                    <RouterLink to="/products">
                    <Button mr="40px" mt="300px" colorScheme='white' color="white" variant='outline' >
                      Shop Now
                    </Button>
                    </RouterLink> 
                </Box>
            </Box>
            <Footer/>
         
      

 


        </Box>
    )
}