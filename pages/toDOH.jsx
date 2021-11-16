import { useState } from "react";
import Header from "../components/Header";
import ToDOHModal from "../components/Modal";
import { IconButton } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { SunIcon, CheckIcon } from "@chakra-ui/icons";
import styled from "styled-components";


const toDOHs = [
  {
    id: 1,
    name: "Male das Pony",
    inside: true,
    description1:
      "Hol dir ein Blatt Papier und einen Stift und male ein Pony, das eine Möhre Kaut und einen Hut auf hat",
    description2: "Setze deinen Handy-Timer auf 15 Minuten",
  },
  {
    id: 2,
    name: "Putze dein Küchenfenster",
    inside: true,
    description1:
      "Schnapp dir einen Lappen, Glasspiritus und einen Abzieher und gönn dir den Putz",
    description2: "Setze deinen Handy-Timer auf 15 Minuten",
  },
  {
    id: 3,
    name: "Hüpf nach draußen und bringe drei kleine Blumen wieder mit",
    inside: false,
    description1:
      "Pack eine Gartenschere ein und suche draußen 3 hübsche Zweige oder Blümchen",
    description2:
      "Setze deinen Handy-Timer auf 15 Minuten und pack die armen Blumen in die Vase!",
  },
  {
    id: 4,
    name: "Klingelstreich",
    inside: false,
    description1:
      "Klingele bei einem Nachbarn deiner Wahl und frag ihn, wie es so geht",
    description2: "Smalltalk incoming",
  },{
    id: 5,
    name: "OriGamiHASE",
    inside: true,
    description1:"https://www.youtube.com/watch?v=JgsjWspFy-o",
    description2: "schnapp dir ein Blatt Papier und bastele diesen wunderschönen Hasen mit YouTube.",
  },
];

function YourRandomToDOH({ inside, id }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isInsideToDOH, setIsInsideToDOH] = useState();

  const getRandomToDOH = (items) => {
    const randomItemNr = Math.floor(Math.random() * items.length);
    return items[randomItemNr];
  };

  const insideToDOHs = () => {
    return toDOHs.filter((toDOH) => toDOH.inside);
  };

  const outsideToDOHs = () => {
    return toDOHs.filter((toDOH) => !toDOH.inside);
  };

  const getOneRandomToDOH = () => {
    const filteredToDOHs = isInsideToDOH ? insideToDOHs : outsideToDOHs;
    return getRandomToDOH(filteredToDOHs);
  };

  const onClickInside = () => {
    setIsInsideToDOH(true);
    getOneRandomToDOH();
    setModalIsOpen(true);
  };

  const onClickOutside = () => {
    setIsInsideToDOH(false);
    getOneRandomToDOH();
    setModalIsOpen(true);
  };

  return (
    <>
      <Header />
      <Body>
        <Flex
          flex-direction="row"
          justifyItems="center"
          bgColor="#5DC8A8"
        >
          <ToDOHModal
            toDOH={getOneRandomToDOH(true)}
            isOpen={modalIsOpen}
            onClose={() => {
              setModalIsOpen(false);
            }}
          />
          <div>
            <IconButton
              icon={<CheckIcon />}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              boxSize={150}
              bgColor="#499890"
              color="#FFC12C"
              size="lg"
              onClick={onClickInside}
              title="get a random inside toDOH"
            />
          </div>
          <div>
            <IconButton
              icon={<SunIcon />}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              bgColor="#499890"
              color="#FFC12C"
              size="lg"
              boxSize={150}
              onClick={onClickOutside}
              title="get a random outside toDOH"
            />
          </div>
        </Flex>
      </Body>
    </>
  );
}
const Body = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20rem;
  background-color: #5dc8a8;
  font-family: "Lekton";
  color: white;
  div {
    display: flex;
    justify-content: center;
    
  }
`;
export default YourRandomToDOH;
