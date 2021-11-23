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
import React from "react";
import { put } from "../lib/api/apiClient";

function ToDOHModal({ isOpen, onClose, toDOH }) {
  const changeDoneState = async () => {
    toDOH.isDone = true;
    const result = await put('toDOH', toDOH);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        bgColor="#5DC8A8"
        color="white"
        boxSize={500}
        border="5px solid white"
      >
        <ModalHeader>{toDOH.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>{toDOH.content}</p>
          <p>{toDOH.description}</p>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={changeDoneState}>DONE YES</Button>
          <Button colorScheme="teal" mr={3} onClick={onClose}>
            nah!
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
export default ToDOHModal;
