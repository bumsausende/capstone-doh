import React, { useState } from "react";
import { Checkbox, Flex, Button, Input, Heading } from "@chakra-ui/react";
import styled from "styled-components";
import { post } from "../lib/api/apiClient";

const AddToMEH = () => {
  const [value, setValue] = useState({
    name: "",
    content: "",
    description: "",
    isInside: true,
    isDone: false,
  });

  const handleValueChange = (event) => {
    const _value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
    // UseState setter-function uses previuos value(s) as parameter to *fuck*useState-setter-function-paramter-function-paremter (SIC!)
    setValue(previousValue => ({
      ...previousValue,
      [event.target.name]: _value
    }))
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const answer = await post('toDOH', value);
  };

  return (
    <>
      <Heading color="#FFC12C" m="2rem">
        WHAT DOH toMEH
      </Heading>
      <Flex m="auto" padding="30" justify="center">
        <form onSubmit={handleSubmit} autoComplete="off">
          <Flex m="2rem">
            <Label>Name toDOH!</Label>
            <Input
              name='name'
              required
              onChange={handleValueChange}
              focusBorderColor="#FFC12C"
              size="lg"
              value={value.name}
            ></Input>
          </Flex>
          <Flex m="2rem">
            <Label>What toDOH?</Label>
            <Input
              name='content'
              required
              onChange={handleValueChange}
              focusBorderColor="#FFC12C"
              size="lg"
              value={value.content}
            ></Input>
          </Flex>
          <Flex m="2rem">
            <Label>HoW toDOH?</Label>
            <Input
              name='description'
              required
              onChange={handleValueChange}
              focusBorderColor="#FFC12C"
              size="lg"
              value={value.description}
            ></Input>
          </Flex>
          <Flex m="2rem" p="2rem">
            <Label></Label>
            <Checkbox
              name='isInside'
              size="lg"
              colorScheme="teal"
              isChecked={value.isInside}
              onChange={handleValueChange}
            >
              {" "}
              wanna DOH it inside?{" "}
            </Checkbox>
            <Checkbox
              name='isDone'
              colorScheme="teal" 
              isChecked={value.isDone}
              onChange={handleValueChange}
              size="lg" 
            >
              {" "}
              already DOHne it?{" "}
            </Checkbox>
          </Flex>
          <Flex>
            <Button
              m="1em"
              padding="3em"
              fontSize="1em"
              bgColor="#FFC12C"
              focusBorderColor="#FFC12C"
              type="submit"
              value="Submit"
            >
              {" "}
              give DOH in
            </Button>
          </Flex>
        </form>
      </Flex>
    </>
  );
}
const Form = styled.section`
  color: white;
  font-size: 2em;
`;
const Label = styled.section``;

export default AddToMEH;
