import {
  Image,
  Flex,
  Box,
  Text,
  Heading,
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  background,
  Badge,
  Checkbox,
} from "@chakra-ui/react";
import { Card, CardBody, Stack, CardFooter, Center } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search2Icon, StarIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement, Select } from "@chakra-ui/react";
export default function Shop() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("");
  const [cartData, setCartData] = useState([]);
  const [name,setName]=useState("")
  const [category,setCategory]=useState("")
  const [isToggled, setIsToggled] = useState(false);
const [c,setC]=useState(false)
let url = `https://reactmonkeyapi.onrender.com/products?q=${search}&_sort=price&_order=${order}`;
  function Products() {
    

    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    Products();
    MycartData();
  }, []);
console.log(name,category)
  useEffect(() => {
    if(name&& category){
        url=url+`&name=${name}&category=${category}`
    }
    Products();
  }, [search, order, name,category]);

  function MycartData() {
    axios
      .get(`https://reactmonkeyapi.onrender.com/cart`)
      .then((res) => {
        setCartData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCart(el) {
    console.log("entered");
    if (cartData.length > 0) {
      cartData.forEach((product) => {
        if (product.id === el.id) {
          alert("Already in Cart");
        } else {
          axios
            .post(`https://reactmonkeyapi.onrender.com/cart`, {
              ...el,
              quantity: 1,
            })
            .then((res) => {
              alert("Product added to Cart");
              MycartData();
            })
            .catch((err) => {
              console.log("Not working", err);
            });
        }
      });
    } else {
      axios
        .post(`https://reactmonkeyapi.onrender.com/cart`, {
          ...el,
          quantity: 1,
        })
        .then((res) => {
          alert("Product added to Cart");
          MycartData();
        })
        .catch((err) => {
          console.log("Not working", err);
        });
    }
  }
   function handleReset(){
setName("")
setCategory("")
setOrder("")
   }

   function handleName(value){
    setIsToggled(!isToggled);
    // Perform actions when toggle changes state
    if (!isToggled) {
      console.log('Toggle is ON');
      setName(value)
      // Additional actions when toggle is ON
    } else {
      console.log('Toggle is OFF');
      // Additional actions when toggle is OFF
      setName("")
      setCategory("")
    }
   }

   function handleCategory(value){
    setC(!c);
    // Perform actions when toggle changes state
    if (!c) {
      console.log('Toggle is ON');
      setCategory(value)
      // Additional actions when toggle is ON
    } else {
      console.log('Toggle is OFF');
      // Additional actions when toggle is OFF
     
      setCategory("")
    }
   }
  return (
    <>
      {/* <Center>
        <Flex gap={"50px"} w="1000px">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Search2Icon color="#263238" />}
            />
            <Input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
          <Select
            placeholder="Sort By Price"
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value="asc">Sort in Ascending Order</option>
            <option value="desc">Sort in Descending Order</option>
          </Select>
        </Flex>
      </Center> */}
      <Flex>
      <Box border="2px solid red" height="500px" >

      <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Search2Icon color="#263238" />}
            />
            <Input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
      <select style={{color:"#304b62",font:"30px", fontWeight:"bold",marginTop:"35px"}} onChange={(e) => setOrder(e.target.value)}  >
       <option value=''>Filter By Price</option>
       <option value='asc'>Low to High </option>
       <option value='desc'>Hight to Low</option>
      </select>


<Box>
<Checkbox
      value= "Ear phone"
      onChange={(e)=>handleName(e.target.value)}
       isChecked={name== "Ear phone"}
      >
        Ear Phone
      </Checkbox>
      <Stack pl={6} mt={1} spacing={1}>
        <Checkbox
         value="Wired"
         isChecked={category=="Wired"}
         onChange={(e)=>handleCategory(e.target.value)}
        >
         Wired 
        </Checkbox>
        <Checkbox
        value="Wire less"
 onChange={(e)=>handleCategory(e.target.value)}
 isChecked={category=="Wire less"}
        >
         Wire Less
        </Checkbox>
      </Stack>
</Box>

      <Button bg='#304b62' color="white" marginTop="28px" onClick={handleReset}>Reset Filters</Button>
    
      </Box>

      <Grid templateColumns="repeat(3, 1fr)" gap="10px">
        {data.map((el) => (
          // <ProductCard key={el.id} name={el.name} avatar={el.avatar} price={el.price} />
          <Box key={el.id}>
            {/* <Card maxW='xm' mt="50px">
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
            </Card > */}
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              marginTop="30px"
            >
              <Image
                margin="auto"
                height="200px"
                src={el.avatar}
                alt={el.name}
                borderRadius="lg"
              />

              <Box p="6" textAlign="left">
                <Box display="flex" alignItems="baseline">
                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    New
                  </Badge>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  >
                    {el.name} &bull; {el.category}
                  </Box>
                </Box>

                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                >
                  {el.about}
                </Box>

                <Box>
                  Price:₹{el.price}
                  <Box as="span" color="gray.600" fontSize="sm"></Box>
                </Box>

                <Box display="flex" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < el.rating ? "teal.500" : "gray.300"}
                      />
                    ))}
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {el.review} reviews
                  </Box>
                </Box>
                <ButtonGroup spacing="2">
                  <Button
                    variant="ghost"
                    colorScheme="green"
                    bg="#E8F5E9"
                    onClick={() => handleCart(el)}
                  >
                    Add to cart
                  </Button>
                  <Button
                    variant="outline"
                    colorScheme="green"
                    onClick={() => "clicked"}
                  >
                    <Link to={`/products/${el.id}`}>More Details</Link>
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>
          </Box>
        ))}
      </Grid>
      </Flex>
    </>
  );
}
