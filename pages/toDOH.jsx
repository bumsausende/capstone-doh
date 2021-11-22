import { useState } from "react";
import Header from "../components/Header";
import ToDOHModal from "../components/Modal";
import { IconButton, Button } from "@chakra-ui/button";
import { Flex, Grid,  Heading } from "@chakra-ui/layout";
import { SunIcon, CheckIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import Image from "next/image";

const toDOHs = [
  {
    id: 1,
    name: "Male das Pony",
    isInside: true,
    description1:
      "Hol dir ein Blatt Papier und einen Stift und male ein Pony, das eine Möhre Kaut und einen Hut auf hat",
    description2: "Setze deinen Handy-Timer auf 15 Minuten",
  },
  {
    id: 2,
    name: "Putze dein Küchenfenster",
    isInside: true,
    description1:
      "Schnapp dir einen Lappen, Glasspiritus und einen Abzieher und gönn dir den Putz",
    description2: "Setze deinen Handy-Timer auf 15 Minuten",
  },
  {
    id: 3,
    name: "Hüpf nach draußen und bringe drei kleine Blumen wieder mit",
    isInside: false,
    description1:
      "Pack eine Gartenschere ein und suche draußen 3 hübsche Zweige oder Blümchen",
    description2:
      "Setze deinen Handy-Timer auf 15 Minuten und pack die armen Blumen in die Vase!",
  },
  {
    id: 4,
    name: "Klingelstreich",
    isInside: false,
    description1:
      "Klingele bei einem Nachbarn deiner Wahl und frag ihn, wie es so geht",
    description2: "Smalltalk incoming",
  },
  {
    id: 5,
    name: "OriGamiHASE",
    isInside: true,
    description1: "https://www.youtube.com/watch?v=JgsjWspFy-o",
    description2:
      "schnapp dir ein Blatt Papier und bastele diesen wunderschönen Hasen mit YouTube.",
  },
];

function YourRandomToDOH({ isInside, id }) {
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
      <Header />
      <Body>
        <Heading color="#FFC12C"> choose your DOH</Heading>
        <Grid bgColor="#5DC8A8" >
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
  
  background-color: #5dc8a8;
  color: white;
`;
export default YourRandomToDOH;
