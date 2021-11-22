import React, { useState } from "react";
import { Checkbox, Flex, Button, Input, Heading } from "@chakra-ui/react";
import styled from "styled-components";
import Header from "../components/Header";
import { GlobalStyles } from "../styles/GlobalStyles";

 

//TESTIN IF API WORKS
export const AddToDOH = ({ name, content, description, isInside, isDone })=> {
  const [value, setValue] = useState({
    name: "",
    content: "",
    description: "",
    isInside: true,
    isDone: false,
  });

  const handleValueChange = (event) => {
    let inputValue = event.target.value;
    setValue(inputValue);
  };

  const handleSubmitToDB = async (newToDOH) => {
    try {
      const response = await fetch("./api/toDOH", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      body:JSON.stringify(newToDOH),
      });
      const answer = await response.json();
    
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <Header />
      <Heading color="#FFC12C" m="2rem">
        WHAT DOH toMEH
      </Heading>
      <Flex m="10vh" padding="30" justify="center">
        <Form onSubmit={handleSubmitToDB}>
          <Flex m="2rem">
            <Label>Name toDOH!</Label>
            <Input
              name={name}
              required
              onChange={handleValueChange}
              focusBorderColor="#FFC12C"
              size="lg"
            ></Input>
          </Flex>
          <Flex m="2rem">
            <Label>What toDOH?</Label>
            <Input
              content={content}
              required
              onChange={handleValueChange}
              focusBorderColor="#FFC12C"
              size="lg"
            ></Input>
          </Flex>
          <Flex m="2rem">
            <Label>HoW toDOH?</Label>
            <Input
              description={description}
              required
              onChange={handleValueChange}
              focusBorderColor="#FFC12C"
              size="lg"
            ></Input>
          </Flex>
          <Flex m="2rem" p="2rem">
            <Label></Label>
            <Checkbox isInside={isInside} size="lg" colorScheme="teal">
              {" "}
              wanna DOH it inside?{" "}
            </Checkbox>
            <Checkbox isDone={isDone} size="lg" colorScheme="teal">
              {" "}
              already DOHne it?{" "}
            </Checkbox>
          </Flex>
          <Flex>
            <Button onClick={handleSubmitToDB}
              m="1em"
              padding="3em"
              fontSize="1em"
              bgColor="#FFC12C"
              BorderColor="#FFC12C"
              type="submit"
            >
              {" "}
              give DOH in
            </Button>
          </Flex>
        </Form>
      </Flex>
    </>
  );
}
const Form = styled.section`
  color: white;
  font-size: 2em;
`;
const Label = styled.section``;

export default AddToDOH;

