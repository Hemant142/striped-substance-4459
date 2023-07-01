
import { Box, Button, ButtonGroup, Flex, Heading, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, useColorMode } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
// import { CgSearch } from 'react-icons/cg';
import {CgSearch} from 'react-icons/cg'
import {BsHandbag} from 'react-icons/bs'
import myImage from '../images/myImage.png';
import { color } from "framer-motion";
export default function Navbar(){
console.log(myImage)
    const links=[ 
        {
            title:"Home",
            path:"/"
    },
    ,{
        title:"Shop",
        path:"/shop"
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
</Flex>
  */}
  <Flex>
    

  <Box>
 <Tabs size='md' variant='enclosed' width="158.5%" >
  <TabList  justifyContent="space-between"  >
    <Box display="flex" >
    <Box><img src={myImage} alt="" width="100%" height="100%"/></Box>
    <Tab><RouterLink to="/">Home</RouterLink></Tab>
    <Tab><RouterLink to="/products">Shop</RouterLink></Tab>
    <Tab><RouterLink to="/about">About Us</RouterLink></Tab>
    <Tab><RouterLink to="/blog">Blog</RouterLink></Tab>
    <Tab><RouterLink to="/contactus">Contact Us</RouterLink></Tab>
    {/* <Spacer /> */}
    </Box>
    <Box display="flex">
    <Tab><RouterLink to="/"><CgSearch /></RouterLink></Tab>
    <Tab><RouterLink to="/login">LogIn</RouterLink></Tab>
    <Tab> <RouterLink to="/addtocard"><BsHandbag/></RouterLink></Tab>
    </Box>
  </TabList>
</Tabs>
</Box>  
</Flex>
  </Box>
            
       
    )
}