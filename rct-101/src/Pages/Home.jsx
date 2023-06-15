import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack,Text,Image, Center, } from "@chakra-ui/react";

export default function Home(){
    return(<Box>
        <div>Home Page</div>
        <Box w="full" >
                <Box borderRadius="10px" h="500px" backgroundImage="url('https://dy6g3i6a1660s.cloudfront.net/wMsXNGunCnVl6ICOTkCsgAeoBLA/orig.jpg')" backgroundPosition="center">
                    <Heading pr="40px" pt="30px" color="#FAFAFA" fontFamily="revert">Design meets Sustainability</Heading>
                    <Button mr="40px" mt="300px" colorScheme='white' color="white" variant='outline' >
                        Shop Now
                    </Button>
                </Box>

            </Box>



     
















        <Box>
        <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  width="98%"
  margin="auto"
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px',  width:""}}
    width='50%'
    src='https://m.media-amazon.com/images/I/615SMC0tJQL._SL1500_.jpg'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter paddingRight='500px'>
      <Button variant='solid' colorScheme='blue' >
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>
</Card>
        </Box>

 


        </Box>
    )
}