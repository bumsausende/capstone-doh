import Router from "next/router";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";

export default function BackButton() {
  return (
    <div onClick={() => Router.back()}>
      <IconButton icon={<ArrowBackIcon />} />
    </div>
  );
}
