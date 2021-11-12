
import { useState } from "react";
import Header from "../components/Header";
import ToDOHModal from "../components/Modal";
import { IconButton } from "@chakra-ui/button";


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
    name: "Hüpf nach draußen und bringe drei kleine Blumen wiedeer mit",
    inside: false,
    description1:
      "Hol dir ein Blatt Papier und einen Stift und male ein Pony, das eine Möhre Kaut und einen Hut auf hat",
    description2:
      "Setze deinen Handy-Timer auf 15 Minuten und pack die armen Blumen in die Vase!",
  },
];

function YourRandomToDOH({ inside, id }) {
  const [ modalIsOpen, setModalIsOpen] = useState(false);
  const [ isInsideToDOH, setIsInsideToDOH] = useState();

  

  const getRandomToDOH = (items) => {
    const randomItemNr = Math.floor(Math.random() * items.length);
    return items[randomItemNr];
  };

  const insideToDOHs = (toDOHs) => {
    return toDOHs.filter((toDOH) => toDOH.inside);
  };

  const outsideToDOHs = (toDOHs) => {
    return toDOHs.filter((toDOH) => !toDOH.inside);
  };

  const getOneRandomToDOH = () => {
    const filteredToDOHs = isInsideToDOH
      ? insideToDOHs(toDOHs)
      : outsideToDOHs(toDOHs);
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

      <ToDOHModal 
        toDOH={getOneRandomToDOH(true)} 
        isOpen={modalIsOpen} 
        onClose={() => {setModalIsOpen(false)}} 
      />

      <IconButton onClick={onClickInside} title="get a random inside toDOH" />

      <IconButton onClick={onClickOutside} title="get a random outside toDOH" />
    </>
  );
}

export default YourRandomToDOH;
