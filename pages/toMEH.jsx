import React, { useState } from "react";
import {
  Checkbox,
  Flex,
  Button,
  Input,
  HStack,
  VStack,
} from "@chakra-ui/react";
import styled from "styled-components";
import { post } from "../lib/api/apiClient";
import { sanitizeToDOH } from "../utils/SanitizeToDOH";
import { useToast } from "@chakra-ui/react";
import Header from "../components/Header";

const AddToMEH = () => {
  const [value, setValue] = useState({
    name: "",
    content: "",
    description: "",
    isInside: true,
    isDone: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const handleValueChange = (event) => {
    const _value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    // UseState setter-function uses previuos value(s) as parameter to *fuck*useState-setter-function-paramter-function-paremter (SIC!)
    setValue((previousValue) => ({
      ...previousValue,
      [event.target.name]: _value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const answer = await post("toDOH", sanitizeToDOH(value));
    if (answer.acknowledged) {
      toast({
        title: "Yeah!",
        description: "Now you have to DOH it!",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "top",
      });

      // reset current toDOH and all input fields
      setValue({
        name: "",
        content: "",
        description: "",
        isInside: true,
        isDone: false,
      });
    }
    setIsLoading(false);
  };

  return (
    <>
      <Header title="WHAT DOH toMEH" />
      <Flex m="auto" padding="30" justify="center">
        <Form onSubmit={handleSubmit} autoComplete="off">
          <VStack spacing="1rem" align="end">
            <HStack spacing="1rem">
              <Label>Name toDOH!</Label>
              <Input
                name="name"
                required
                onChange={handleValueChange}
                focusBorderColor="#FFC12C"
                size="lg"
                value={value.name}
              ></Input>
            </HStack>
            <HStack spacing="1rem">
              <Label>What toDOH?</Label>
              <Input
                name="content"
                required
                onChange={handleValueChange}
                focusBorderColor="#FFC12C"
                size="lg"
                value={value.content}
              ></Input>
            </HStack>
            <HStack spacing="1rem">
              <Label>HoW toDOH?</Label>
              <Input
                name="description"
                required
                onChange={handleValueChange}
                focusBorderColor="#FFC12C"
                size="lg"
                value={value.description}
              ></Input>
            </HStack>
            <HStack>
              <Checkbox
                name="isInside"
                size="lg"
                colorScheme="teal"
                isChecked={value.isInside}
                onChange={handleValueChange}
              >
                wanna DOH it inside?
              </Checkbox>
            </HStack>
            <HStack mb="2rem">
              <Checkbox
                name="isDone"
                colorScheme="teal"
                isChecked={value.isDone}
                onChange={handleValueChange}
                size="lg"
              >
                already DOHne it?
              </Checkbox>
            </HStack>
            <Button
              padding="2em 1em"
              fontSize="1.5em"
              fontWeight="bold"
              focusBorderColor="#FFC12C"
              type="submit"
              value="Submit"
              background="linear-gradient(310deg, rgba(255, 184, 12, 0.53) 1.53%, #f09f1B 110%)"
              isLoading={isLoading}
            >
              give DOH in
            </Button>
          </VStack>
        </Form>
      </Flex>
    </>
  );
};
const Form = styled.form`
  font-size: 1.2em;
`;
const Label = styled.section``;

export default AddToMEH;
