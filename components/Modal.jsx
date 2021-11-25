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
import { put } from "../lib/api/apiClient";

function ToDOHModal({ isOpen, onClose, toDOH }) {
  const [isLoading, setIsLoading] = useState(false);
  const [animClass, setAnimClass] = useState("");

  const changeDoneState = async () => {
    setIsLoading(true);
    setAnimClass("is-doing");
    toDOH.isDone = true;
    const result = await put("toDOH", toDOH);
    setIsLoading(false);
    if (result.acknowledged) {
      setAnimClass("is-done");
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  };

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
        w={350}
        h={550}
        border="5px solid white"
      >
        <ModalHeader>
          {toDOH.name}
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody fontSize={21}>
          <p>{toDOH.content}</p>
          <p>{toDOH.description}</p>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={changeDoneState}
            background="linear-gradient(310deg, rgba(255, 184, 12, 0.53) 1.53%, #f09f1B 110%)"
            mr={5}
            padding="1em 0.5em"
            isLoading={isLoading}
          >
            DONE YES
          </Button>
          <Button colorScheme="teal" mr={3} onClick={onClose}>
            nah!
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ToDOHModal;
