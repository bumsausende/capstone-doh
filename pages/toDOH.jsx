import { useState } from "react";
import ToDOHModal from "../components/Modal";
import { Button } from "@chakra-ui/button";
import { Flex, Grid,  Heading } from "@chakra-ui/layout";
import styled from "styled-components";
import { get } from "../lib/api/apiClient";

function YourRandomToDOH({ toDOHs }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [currentToDOH, setCurrentToDOH] = useState(null);

  const getRandomToDOH = (items) => {
    const randomItemNr = Math.floor(Math.random() * items.length);
    return items[randomItemNr];
  };

  //const insideToDOHs = toDOHs.filter(({isInside})=> isInside);
  const insideToDOHs = () => {
    return toDOHs.filter(({ isInside }) => isInside);
  };

  //const outsideToDOHs = toDOHs.filter(({isInside}) =>!isInside);
  const outsideToDOHs = () => {
    return toDOHs.filter(({ isInside }) => !isInside);
  };

  const getOneRandomToDOH = (isInsideToDOH) => {
    const filteredToDOHs = isInsideToDOH
      ? insideToDOHs(toDOHs)
      : outsideToDOHs(toDOHs);
    return getRandomToDOH(filteredToDOHs);
  };

  const onClickInside = () => {
    const t = getOneRandomToDOH(true);
    setCurrentToDOH(t);
    setModalIsOpen(true);
  };

  const onClickOutside = () => {
    const t = getOneRandomToDOH(false);
    setCurrentToDOH(t);
    setModalIsOpen(true);
  };

  return (
    <>
      <Body>
        <Heading color="#FFC12C"> choose your DOH</Heading>
        <Grid>
          {modalIsOpen && (
            <ToDOHModal
              toDOH={currentToDOH}
              isOpen={modalIsOpen}
              onClose={() => {
                setModalIsOpen(false);
              }}
            />
          )}
          <Flex m="2rem" justify="flex-start">
            <Button
              bgImage="/images/buttoninside.svg"
              width={187}
              height={160}
              color="#FFC12C"
              bgColor="#5DC8A8"
              variant="unstyled"
              onClick={onClickInside}
              title="get a random inside toDOH"
            >
              {" "}
            </Button> <Flex m="2rem">sit down, take a breath</Flex>
          </Flex>
          <Flex m="1rem" justify="flex-start"
          > <Flex m="0.5rem" justify="center">put on jacket and don&apos;t forget sandals</Flex>
            <Button
              bgImage="./images/buttonoutside.svg"
              bgColor="#5DC8A8"
              color="#FFC12C"
              variant="unstyled"
              width={187}
              height={160}
              onClick={onClickOutside}
              title="get a random outside toDOH"
            />
          </Flex>
        </Grid>
      </Body>
    </>
  );
}
const Body = styled.section`
  width: 100%;
  height: 100%;
  margin: 3rem;
  
  color: white;
`;

export async function getServerSideProps(context) {
  const toDOHs = await get('toDOH');

  return {
    props: { toDOHs },
  };
}

export default YourRandomToDOH;
