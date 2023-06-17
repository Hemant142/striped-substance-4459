import { Box, Button, Heading, Text, Center, Square, CardBody, Card, Stack } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'
import {MdLocalShipping} from 'react-icons/md';
import money from '../images/money.png';
import shipping from '../images/shipping.png';
import online from '../images/online.png'
import secure from '../images/secure.png'
import { Grid, GridItem } from '@chakra-ui/react'
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <Box>
      <div>Home Page</div>
      <Box marginLeft="15px" marginRight="15px">
        <Box
          borderRadius="10px"
          h="500px"
          backgroundImage="url('https://c1.wallpaperflare.com/preview/108/284/9/music-headphones-earphones-audio.jpg')"
          backgroundPosition="center"
        >
          <Heading pr="40px" pt="30px" color="#FAFAFA" fontFamily="revert">
            HEADPHONE
          </Heading>
          {/* <h1 style={{textShadow:"bold"}}>Discription</h1> */}
          {/* <Text fontSize='3xl' color="#FAFAFA" paddingTop="200px" paddingLeft="900px">Discription</Text> */}
          <Button
            mr="40px"
            mt="300px"
            colorScheme="white"
            color="white"
            variant="outline"
          >
            Shop by Category
          </Button>
        </Box>
      </Box>
   
{/* <-------------------------------------------------Products 1------------------------------------------------> */}
      <Box marginTop="80px" marginLeft="20px" marginRight="20px">
      <Heading as='h2' size='xl' marginBottom="70px">
    Productss 
  </Heading>
        <Flex color="white" gap="10px">
          
      <Box   w="350px">
        <Box
      
          borderRadius="10px"
          h="250px"
          backgroundImage="url('https://png.pngtree.com/thumb_back/fh260/background/20230425/pngtree-image-of-an-earphones-up-to-your-ear-image_2550813.png')"
          backgroundPosition="center"
        >
          <Heading pr="40px" pt="30px" color="#FAFAFA" fontFamily="revert">
        EarPhone
          </Heading>
          <Button
            mr="40px"
            mt="100px"
            colorScheme="white"
            color="white"
            variant="outline"
          >
            Shop by Category
          </Button>
        </Box>
      </Box>

      <Box  w="350px" >
        <Box
         
          borderRadius="10px"
          h="250px"
          w='full'
          backgroundImage="url('https://img.joomcdn.net/1535f9f692e6444c561fb452fb0fa4d672be2232_original.jpeg')"
          backgroundPosition="center"
        >
          <Heading pr="40px" pt="30px" color="#FAFAFA" fontFamily="revert">
       Watches
          </Heading>
          <Button
            mr="40px"
            mt="100px"
            colorScheme="white"
            color="white"
            variant="outline"
          >
            Shop by Category
          </Button>
        </Box>
      </Box>

      <Box  w="550px" >
        <Box
       
          borderRadius="10px"
          h="250px"
          backgroundImage="url('https://i.pcmag.com/imagery/articles/04LNBRxN4cZhAUzsZ7Ai6Y8-1.fit_lim.size_1600x900.v1603125449.jpg')"
          backgroundPosition="center"
          backgroundSize='380px'
        >
          <Heading pr="40px" pt="30px" color="#FAFAFA" fontFamily="revert" _hover='black'>
        LAPTOP
          </Heading>
          <Button
            mr="40px"
            mt="100px"
            colorScheme="white"
            color="white"
            variant="outline"
          >
            Shop by Category
          </Button>
        </Box>
      </Box>
        </Flex>
      </Box>

      {/* <-------------------------------------------------Products 2------------------------------------------------> */}
      <Box marginTop="20px" marginLeft="20px" marginRight="20px">
        <Flex color="white" gap="10px">
          
      <Box   w="550px">
        <Box
          borderRadius="10px"
          h="250px"
          backgroundImage="url('https://assets.xboxservices.com/assets/87/7a/877a7487-aa48-4a08-b2a7-64ef2608f25b.jpg?n=Xbox-Series-X_Superhero-1084_Dream-Particles_1920x1080_02.jpg')"
          backgroundPosition="center"
          backgroundSize='380px'
        >
          <Heading pr="40px" pt="30px" color="#FAFAFA" fontFamily="revert">
        Gaming Console
          </Heading>
          <Button
            mr="40px"
            mt="100px"
            colorScheme="white"
            color="white"
            variant="outline"
          >
            Shop by Category
          </Button>
        </Box>
      </Box>

      <Box  w="350px" >
        <Box
         
          borderRadius="10px"
          h="250px"
          w='full'
          backgroundImage="url('https://a.storyblok.com/f/106061/2560x1446/2fa10839b7/into-the-metaverse-how-ar-vr-are-revolutionising-gaming.jpg/m/3840x0/filters:quality(75)')"
          backgroundPosition="center"
          backgroundSize='380px'
        >
          <Heading pr="40px" pt="30px" color="#FAFAFA" fontFamily="revert">
          Gaming Oculus
          </Heading>
          <Button
            mr="40px"
            mt="100px"
            colorScheme="white"
            color="white"
            variant="outline"
          >
            Shop by Category
          </Button>
        </Box>
      </Box>

      <Box  w="350px" >
        <Box
       
          borderRadius="10px"
          h="250px"
          backgroundImage="url('https://assets.hongkiat.com/uploads/cool-creative-speakers/Anker-Soundcore-Flare.jpg?newedit')"
          backgroundPosition="center"
          backgroundSize='380px'
        >
          <Heading pr="40px" pt="30px" color="#FAFAFA" fontFamily="revert" _hover='black'>
       SPEAKER
          </Heading>
          <Button
            mr="40px"
            mt="100px"
            colorScheme="white"
            color="white"
            variant="outline"
          >
            Shop by Category
          </Button>
        </Box>
      </Box>
        </Flex>
      </Box>

{/* <----------------------------------------------------------part 3------------------------------------------------> */}
    <Box marginTop="30px" marginLeft="30px">
      <Flex gap="50px">
        <Box ml="20px">
          <Flex>
          <Box><Image src={shipping} alt='Dan Abramov' /></Box>
          <Box mt="20px"> 
            <Heading as='h6' size='xs'>
                Free Shipping
           </Heading>
           <Box> <Text fontSize='xs' as='sub'>Free Shipping On All Order </Text></Box>
          </Box>
          </Flex>
        </Box>

        <Box>
          <Flex>
          <Box><Image src={money} alt='Dan Abramov' /></Box>
          <Box mt="20px"> 
            <Heading as='h6' size='xs'>
                Money Guarantee
           </Heading>
           <Box> <Text fontSize='xs' as='sub'>30 Day's Money Back</Text></Box>
          </Box>
          </Flex>  
        </Box>


        <Box>
          <Flex>
          <Box><Image src={online} alt='Dan Abramov' /></Box>
          <Box mt="20px"> 
            <Heading as='h6' size='xs'>
                Online Support 24/7
           </Heading>
           <Box> <Text fontSize='xs' as='sub'>Technical Support 24/7</Text></Box>
          </Box>
          </Flex>
        </Box>


        <Box>
          <Flex>
          <Box><Image src={secure} alt='Dan Abramov' /></Box>
          <Box mt="20px"> 
            <Heading as='h6' size='xs'>
                Secure Paytment
           </Heading>
           <Box> <Text fontSize='xs' as='sub'>All Cards Accepted</Text></Box>
          </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>

{/* <========================================================Image==================================================> */}
<Box w="90%" margin="auto" marginTop="50px"
 backgroundImage="url('https://ae01.alicdn.com/kf/Sc11186dfbec54867b36d5f31b5e12634n/Glowing-Bluetooth-Headphones-Graffiti-Wireless-Earphones-With-Mic-Noise-Cancel-Headphone-Super-HiFi-Deep-Bass-headset.png')"
 borderRadius="10px"
 h="300px"
 backgroundPosition="center"
>
        <Box
        ml="300px"
        >
            <Text fontSize='xl' color="#FAFAFA" mt="20px">Best Solo Air</Text>
          <Heading pr="40px" pt="30px" color="#FAFAFA" fontFamily="revert">
           Summer Sale
          </Heading>
          {/* <h1 style={{textShadow:"bold"}}>Discription</h1> */}
          {/* <Text fontSize='3xl' color="#FAFAFA" paddingTop="200px" paddingLeft="900px">Discription</Text> */}
          <Button
            mr="40px"
            mt="50px"
            colorScheme="red"
            color="red"
            variant="outline"
            backgroundColor="white"
            borderRadius="20px"
          >
            Shop
          </Button>
        </Box>
      </Box>


{/* <========================================================Best Seller Products===================================> */}
    
    <Box marginLeft="10px" marginRight="10px">
      <Box textAlign="center" mt="100px">
      <Heading>Best Seller Products</Heading>
      <Text fontSize='xl'>speaker There are many variations passages</Text>
      </Box>

      <Box>
      <Grid templateColumns='repeat(4, 1fr)' gap={6}>
  <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkBYYQo3acG3dl6yDqtKO4dP6voPRUbi7LNQ&usqp=CAU'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='2' spacing='3' textAlign="left">
      <Heading size='md'>Beats</Heading>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>

  
</Card>
<Card maxW='sm'>
  <CardBody>
    <Image
      src='https://www.legametal.com.tr/wp-content/uploads/2019/09/Group-1273.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      height="220px"
    />
    <Stack mt='2' spacing='3' textAlign="left">
      <Heading size='md'>Rock Mountain </Heading>
      <Text color='blue.600' fontSize='2xl'>
      $8,250
      </Text>
    </Stack>
  </CardBody>

  
</Card>


<Card maxW='sm'>
  <CardBody>
    <Image
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgvpS5sOrpAp0U8B7wgR0T0ejdZmeamUeBVA&usqp=CAU'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      height="220px"
    />
    <Stack mt='2' spacing='3' textAlign="left">
      <Heading size='md'> Game Console Controller </Heading>
      <Text color='blue.600' fontSize='2xl'>
      $8,250
      </Text>
    </Stack>
  </CardBody>

  
</Card>

<Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?cs=srgb&dl=pexels-josh-sorenson-1334597.jpg&fm=jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      height="220px"
    />
    <Stack mt='2' spacing='3' textAlign="left">
      <Heading size='md'>EliteBook Tablet 810</Heading>
      <Text color='blue.600' fontSize='2xl'>
      $9,950
      </Text>
    </Stack>
  </CardBody>

  
</Card>




<Card maxW='sm'>
  <CardBody>
    <Image
      src='https://www.shutterstock.com/image-photo/boat-on-ear-headphones-isolated-260nw-1540423925.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      height="220px"
    />
    <Stack mt='2' spacing='3' textAlign="left">
      <Heading size='md'>Boat headphone</Heading>
      <Text color='blue.600' fontSize='2xl'>
        $ 1390
      </Text>
    </Stack>
  </CardBody>
</Card>

<Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.firstpost.com/fpimages/1200x800/fixed/jpg/2019/06/Airdopes411.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      height="220px"
    />
    <Stack mt='2' spacing='3' textAlign="left">
      <Heading size='md'>Boat Ear Phone</Heading>
      <Text color='blue.600' fontSize='2xl'>
      $ 1100
      </Text>
    </Stack>
  </CardBody>  
</Card>

<Card maxW='sm'>
  <CardBody>
    <Image
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsDuGoF6X992onrXCm-crBFwrVWKcqlUwwKRfj_THEXxl1Corolnhg4j94dw_OpTrJeEI&usqp=CAU'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      height="220px"
    />
    <Stack mt='2' spacing='3' textAlign="left">
      <Heading size='md'>Beat Head Phone </Heading>
      <Text color='blue.600' fontSize='2xl'>
      $ 8950
      </Text>
    </Stack>
  </CardBody>
</Card>

<Card maxW='sm'>
  <CardBody>
    <Image
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6RjP2sGlin-svGDXAuADJh_FrR08AwgbDg&usqp=CAU'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      height="220px"
    />
    <Stack mt='2' spacing='3' textAlign="left">
      <Heading size='md'>Smart Watch</Heading>
      <Text color='blue.600' fontSize='2xl'>
        $4500
      </Text>
    </Stack>
  </CardBody>

  
</Card>
</Grid>
      </Box>
    </Box>

{/* <=======================================================RECENT NEW =============================================> */}
    <Box  marginLeft="10px" marginRight="10px" marginTop="90px" >
    <Box textAlign="center" mt="100px">
      <Heading>RECENT NEWS</Heading>
      <Text fontSize='xl'>There are many variations passages</Text>
      </Box>


      <Box marginTop="90px">
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        <Box>
        <Box boxSize='sm'  >
  <Image width="400px"
  src='https://cdn.shopify.com/s/files/1/0103/7985/3909/files/BOTTA-Digital-Smartwatch-Blog_1024x1024.jpg?v=1611829915' alt='Dan Abramov' borderRadius='xl' />
  <Text fontSize='lg' color="gray">June 16,2023</Text>
  <Heading as='h3' size='sm'>
  How to choose perfect gadgets
  </Heading>
  <Text fontSize='md'>When, while the lovely valley teems with vapour
around me, and the meridian sun strikes the uppers...</Text>
</Box>

        </Box>
        <Box>
        <Box boxSize='sm'  >
  <Image width="400px"
  height="211px"
  src='https://thegadgetflow.com/wp-content/uploads/2020/08/Razer-Blade-15-Studio-Edition-8-Core-Laptop-01.jpg' alt='Dan Abramov' borderRadius='xl' />
  <Text fontSize='lg' color="gray">June 16,2023</Text>
  <Heading as='h3' size='sm'>
  How to choose perfect gadgets
  </Heading>
  <Text fontSize='md'>When, while the lovely valley teems with vapour
around me, and the meridian sun strikes the uppers...</Text>
</Box>

        </Box>

        <Box>
        <Box boxSize='sm'  >
  <Image width="400px"
  src='https://www.gamescreed.com/wp-content/uploads/2023/02/VR-PC-Games-860x484.jpg' alt='Dan Abramov' borderRadius='xl' />
  <Text fontSize='lg' color="gray">June 16,2023</Text>
  <Heading as='h3' size='sm'>
  How to choose perfect gadgets
  </Heading>
  <Text fontSize='md'>When, while the lovely valley teems with vapour
around me, and the meridian sun strikes the uppers...</Text>
</Box>

        </Box>

        
       
        
       
</Grid>
      </Box>

    </Box>

    {/* <=========================================================Footer================================================> */}

    <Box>
      <Footer/>
    </Box>


    </Box>
  );
}
