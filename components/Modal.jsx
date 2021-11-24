import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { React, useState } from "react";
import styled from "styled-components";
import { put } from "../lib/api/apiClient";

function ToDOHModal({ isOpen, onClose, toDOH }) {
  const [isLoading, setIsLoading] = useState(false);
  const [animClass, setAnimClass] = useState("");

  const changeDoneState = async () => {
    setIsLoading(true);
    setAnimClass("is-doing");
    toDOH.isDone = true;
    const result = await put('toDOH', toDOH);
    setIsLoading(false);
    if (result.acknowledged) {
      setAnimClass("is-done");
      setTimeout(() => { onClose(); }, 2000);
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        className={animClass}
        bgColor="#5DC8A8"
        bgImage="url('/images/starShadow.svg')"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="top"
        color="white"
        boxSize={500}
        border="5px solid white"
      >
        <ModalHeader>
          {toDOH.name}
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <p>{toDOH.content}</p>
          <p>{toDOH.description}</p>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={changeDoneState} isLoading={isLoading}>DONE YES</Button>
          <Button colorScheme="teal" mr={3} onClick={onClose}>
            nah!
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

const ModalClass = styled.section`
  display: none;
`;
export default ToDOHModal;
