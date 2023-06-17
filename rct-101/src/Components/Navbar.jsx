
import { Box, Button, ButtonGroup, Flex, Heading, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, useColorMode } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
// import { CgSearch } from 'react-icons/cg';
import {CgSearch} from 'react-icons/cg'
import {BsHandbag} from 'react-icons/bs'
import myImage from '../images/myImage.png';

export default function Navbar(){
// console.log(myImage)
    const links=[ 
        {
            title:"Home",
            path:"/"
    },
    ,{
        title:"Shop",
        path:"/products"
    },{
        title:"About Us",
        path:"/about"
    },{
        title:"Blog",
        path:"/blog"
    },
    {
        title:"Contact Us",
        path:"/contact"
    }, 
   
]

    return(
       
    <Box  >
       
{/* <Flex>
  <Box   width="60%">
  <Flex color="gray" justifyContent="space-around" >
   <Box height="100%"><img src={myImage} alt="" width="100%" height="100%"/></Box>
 
            {links.map((link)=>(
                 <Box onClick={{color:"black"}} >
                <RouterLink key={link.path} to={link.path} color="gray"  >{link.title}</RouterLink>
                </Box>
                ))}
        </Flex>
  </Box>
  <Spacer />

  <Box  width={80}>
  <Flex color="black" justifyContent="space-around">
<Box marginTop="10px">
<CgSearch />
</Box>
    <RouterLink to="/login">LogIn</RouterLink>
    <Box marginTop="10px">   <RouterLink to="/addtocard"><BsHandbag/></RouterLink></Box>
 
    </Flex>
  </Box>
</Flex> */}
 
  <Flex>
  <Box>
  <Tabs size='md' variant='enclosed' width="158.5%" >
  <TabList  justifyContent="space-between"  >
    <Box display="flex" >
    <Box><img src={myImage} alt="" width="100%" height="100%"/></Box>
    <RouterLink to="/"><Tab>Home</Tab></RouterLink>
   <RouterLink to="/products"> <Tab>Shop</Tab></RouterLink>
    <RouterLink to="/about"><Tab>About Us</Tab></RouterLink>
   <RouterLink to="/blog"><Tab>Blog</Tab></RouterLink>
    <RouterLink to="/contactus"><Tab>Contact Us</Tab></RouterLink>
    {/* <Spacer /> */}
    </Box>
    <Box display="flex">
    {/* <RouterLink to="/"><Tab><CgSearch /></Tab></RouterLink> */}
    <RouterLink to="/login"><Tab>LogIn</Tab></RouterLink>
    <RouterLink to="/addtocard"><Tab><Box mt="1"><BsHandbag /></Box></Tab></RouterLink>
    </Box>
  </TabList>
</Tabs>
</Box>  
</Flex>
  </Box>
            
       
    )
}