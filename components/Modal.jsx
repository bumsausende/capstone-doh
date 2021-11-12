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
import { useState } from "react";


function ToDOHModal({ isOpen, onClose, toDOH }) {
  
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{toDOH.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{toDOH.description1}</p>
            <p>{toDOH.description2}</p>
            
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost">Erledicht</Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ToDOHModal;