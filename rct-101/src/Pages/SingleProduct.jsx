import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  Center,
  CardBody,
  CardFooter,
  Stack,
  Image,
  Heading,
  Box,
  Text,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function SingleProduct(props) {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const [cartData, setCartData] = useState([]);

  console.log("data.id==========", data.id);
  function Products() {
    axios
      .get(`https://reactmonkeyapi.onrender.com/products/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  console.log("====", data);

  useEffect(() => {
    Products();
    MycartData();
  }, []);

  function handleBuyNow(data) {
    handleCart(data);
  }

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
          navigate("/addtocard");
        } else {
          axios
            .post(`https://reactmonkeyapi.onrender.com/cart`, {
              ...el,
              quantity: 1,
            })
            .then((res) => {
              setCartData(res.data);
              navigate("/addtocard");
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
          setCartData(res.data);
          navigate("/addtocard");
        })
        .catch((err) => {
          console.log("Not working", err);
        });
    }
  }

  // function BasicUsage(name, ingredients) {
  //     const { isOpen, onOpen, onClose } = useDisclosure()
  //     return (
  //         <>
  //             <Button onClick={onOpen}>{name}</Button>

  //             <Modal isOpen={isOpen} onClose={onClose}>
  //                 <ModalOverlay />
  //                 <ModalContent>
  //                     <ModalHeader>{name}</ModalHeader>
  //                     <ModalCloseButton />
  //                     <ModalBody>
  //                         <Box  >

  //                             {ingredients && ingredients.split("\n").map((line, index) => (
  //                                 <Text key={index} py='2'>{line}</Text>
  //                             ))}
  //                         </Box>
  //                     </ModalBody>

  //                     <ModalFooter>
  //                         <Button colorScheme='blue' mr={3} onClick={onClose}>
  //                             Close
  //                         </Button>

  //                     </ModalFooter>
  //                 </ModalContent>
  //             </Modal>
  //         </>
  //     )
  // }

  return (
    <>
      <Center>
        <Card
          boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
          m="40px"
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          w="1100px"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "550px" }}
            src={data.avatar}
            alt={data.name}
          />
          <Center>
            <Stack w="550px" textAlign="left">
              <CardBody>
                <Heading size="lg" mb="30px">
                  {" "}
                  {data.name}
                </Heading>
                <Heading size="lg" mb="30px">
                  Brand: {data.brand}
                </Heading>

                <Text py="2" color={"#263238"}>
                  About: {data.about}
                </Text>

                <Heading  color={"#263238"} size="md">
                  Price:₹{data.price}
                </Heading>
                {/* <Stack color={"#004D40"}  >

                                   
                                    <Spacer />
                                    <Box >
                                        {BasicUsage("How To Use", data.howToUse)}
                                    </Box>

                                </Stack> */}
                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < data.rating ? "teal.500" : "gray.300"}
                      />
                    ))}
                  <Box as="span" ml="2" color="teal.500" fontSize="sm">
                    {data.review} reviews
                  </Box>
                </Box>
              </CardBody>
              <Center>
                <CardFooter gap="40px">
                  <Button
                    variant="solid"
                    colorScheme="green"
                    w="200px"
                    onClick={() => handleBuyNow(data)}
                  >
                    Buy Now
                  </Button>
                  <Button
                    variant="outline"
                    colorScheme="green"
                    w="200px"
                    onClick={() => navigate(`/products`)}
                  >
                    Back
                  </Button>
                </CardFooter>
              </Center>
            </Stack>
          </Center>
        </Card>
      </Center>
    </>
  );
}

export default SingleProduct;
