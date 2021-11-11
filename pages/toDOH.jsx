import {
    useColorMode,
    Switch,
    Flex,
    Button,
    IconButton,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
  import NextLink from "next/link";

  const toDOHs =[
    {
        id:1,
        name: "Male das Pony",
        condition: "drinnen",
        description1: "Hol dir ein Blatt Papier und einen Stift und male ein Pony, das eine Möhre Kaut und einen Hut auf hat",
        description2: "Setze deinen Handy-Timer auf 15 Minuten"
    },
    {
        id:2,
        name: "Putze dein Küchenfenster",
        condition: "drinnen",
        description1: "Schnapp dir einen Lappen, Glasspiritus und einen Abzieher und gönn dir den Putz",
        description2: "Setze deinen Handy-Timer auf 15 Minuten"
    },
    {
        id:3,
        name: "Hüpf nach draußen und bringe drei kleine Blumen wiedeer mit",
        condition: "draußen",
        description1: "Hol dir ein Blatt Papier und einen Stift und male ein Pony, das eine Möhre Kaut und einen Hut auf hat",
        description2: "Setze deinen Handy-Timer auf 15 Minuten und pack die armen Blumen in die Vase!"
    }
];
  
function toDOHOutput({ name, id }) {
    return (
      <ul>
        {toDOHs.map((toDOH) => (
          <li >{toDOH.name} {toDOH.description1} {toDOH.description2}</li>
        ))}
      </ul>
    )
  }
  
  
  export default toDOHOutput;