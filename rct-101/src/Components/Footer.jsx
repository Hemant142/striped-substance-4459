import { Box, Text, Stack, Link, IconButton, Icon, Input, Button, Center,Image, Heading } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import myImage from '../images/myImage.png';
function Footer() {
    return (
        <Box as="footer" backgroundColor="gray" py="12" mt="80px">
            <Stack direction={{ base: "column", md: "row" }} spacing="4" align={{ base: "flex-start", md: "center" }}>

                <Box flex="1">
                <Box>
  <Image src={myImage} alt='logo' paddingLeft="30px" />
  <Box marginTop="5">
  <Text fontSize='xs'>There are many variations
passages of Lorem Ipsum availabele,
but the majority have</Text></Box>
<Box marginTop="5">
<Heading as='h5' size='sm'>
    Contact US
  </Heading>
  </Box>
  <Box>
    <Text fontSize='xs'>+99(0)101 0000 888 Patricia C.
Amedee 4401 Waldeck Street
Grapevine Nashcille, Tx 76051</Text>
  </Box>
  </Box>

                </Box>

                <Box flex="1">

                    <Stack direction={{ base: "row", md: "column" }} spacing="4">
                        <Text fontWeight="bold" fontSize="lg" mb="4">Quick Links</Text>
                        <Link href="#">Home</Link>
                        <Link href="#">Shop</Link>
                        <Link href="#">About Us</Link>
                        <Link href="#">Contact Us</Link>
                    </Stack>
                </Box>

                <Box flex="1">

                    <Stack direction="column" spacing="4">
                        <Text fontWeight="bold" fontSize="lg" mb="4">Follow Us</Text>
                        <IconButton bg="white" aria-label="Facebook" icon={<Icon as={FaFacebook} />} />
                        <IconButton bg="white" aria-label="Twitter" icon={<Icon as={FaTwitter} />} />
                        <IconButton bg="white" aria-label="Instagram" icon={<Icon as={FaInstagram} />} />
                    </Stack>
                </Box>

                <Box flex="1">

                    <form>
                        <Stack direction={{ base: "row", md: "column" }} spacing="4" >

                            <Text fontWeight="bold" fontSize="lg" mb="4" mr="100px" >Subscribe to our Newsletter</Text>
                            <Input type="email" placeholder="Enter your email address" bg="white" required w="400px" />
                            <Button type="submit" colorScheme="green" w="100px" >Subscribe</Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>

            <Box borderTop="1px solid gray" mt="8" pt="4">
                <Text textAlign="center" fontSize="sm">
                    &copy; {new Date().getFullYear()} My Skin Product Company. All rights reserved.
                </Text>
            </Box>
        </Box>
    );
}

export default Footer;
