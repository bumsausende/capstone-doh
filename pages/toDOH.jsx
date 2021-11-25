import { useState } from "react";
import ToDOHModal from "../components/Modal";
import { Button } from "@chakra-ui/button";
import { Flex, Grid } from "@chakra-ui/layout";
import styled from "styled-components";
import { get } from "../lib/api/apiClient";
import Header from "../components/Header";

function YourRandomToDOH({ toDOHs }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [currentToDOH, setCurrentToDOH] = useState(null);

  const getRandomToDOH = (items) => {
    const randomItemNr = Math.floor(Math.random() * items.length);
    return items[randomItemNr];
  };

  const notDoneToDOHs = () => {
    return toDOHs;
    // return toDOHs.filter(({ isDone }) => !isDone);
  };

  //const insideToDOHs = toDOHs.filter(({isInside})=> isInside);
  const insideToDOHs = () => {
    return notDoneToDOHs().filter(({ isInside }) => isInside);
  };

  //const outsideToDOHs = toDOHs.filter(({isInside}) =>!isInside);
  const outsideToDOHs = () => {
    return notDoneToDOHs().filter(({ isInside }) => !isInside);
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
      <Header title="CHOOSE YOUR DOH" />
      <Content>
        {modalIsOpen && (
          <ToDOHModal
            toDOH={currentToDOH}
            isOpen={modalIsOpen}
            onClose={() => {
              setModalIsOpen(false);
            }}
          />
        )}
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Button
            bgImage="/images/buttoninside.svg"
            backgroundSize="contain"
            backgroundRepeat="no-repeat"
            width="100%%"
            height="auto"
            color="#FFC12C"
            display="block"
            variant="unstyled"
            onClick={onClickInside}
            title="get a random inside toDOH"
            pb="100%"
          />
          <Flex alignItems="center">sit down, take a breath</Flex>
          <Flex alignItems="center">
            put on jacket and don&apos;t forget sandals
          </Flex>
          <Button
            bgImage="./images/buttonoutside.svg"
            backgroundSize="contain"
            backgroundRepeat="no-repeat"
            width="100%%"
            height="auto"
            color="#FFC12C"
            display="block"
            variant="unstyled"
            onClick={onClickOutside}
            title="get a random outside toDOH"
            pb="100%"
          />
        </Grid>
      </Content>
    </>
  );
}
const Content = styled.section`
  color: white;
  padding: 1rem;
  padding-top: 3rem;
  font-size: 1.3rem;
`;

export async function getServerSideProps(context) {
  const toDOHs = await get("toDOH");

  return {
    props: { toDOHs },
  };
}

export default YourRandomToDOH;
