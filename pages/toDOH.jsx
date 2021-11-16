import { useState } from "react";
import Header from "../components/Header";
import ToDOHModal from "../components/Modal";
import { IconButton } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { SunIcon, PhoneIcon } from "@chakra-ui/icons";

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
    const oneToDOH = getRandomToDOH(filteredToDOHs);
    return oneToDOH;
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
      <Flex
        flex-direction="row"
        justifyItems="center"
        mt="500"
        bgColor="#5DC8A8"
      >
        <ToDOHModal
          toDOH={getOneRandomToDOH(true)}
          isOpen={modalIsOpen}
          onClose={() => {
            setModalIsOpen(false);
          }}
        />

        <IconButton
          icon={<PhoneIcon />}
          bgColor="#499890"
          color="#FFC12C"
          size="lg"
          onClick={onClickInside}
          title="get a random inside toDOH"
        />

        <IconButton
          icon={<SunIcon />}
          bgColor="#499890"
          color="#FFC12C"
          size="lg"
          onClick={onClickOutside}
          title="get a random outside toDOH"
        />
      </Flex>
    </>
  );
}

export default YourRandomToDOH;
