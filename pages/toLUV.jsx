import { get } from "../lib/api/apiClient";
import Header from "../components/Header";
import styled from "styled-components";
import { VStack, Box } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";

function toLUV({ toDOHs }) {
  return (
    <>
      <Header title="the STUFF you have DONE" />
      <Content>
        <VStack>
          {toDOHs
            .filter((toDOH) => toDOH.isDone === true)
            .map((doneToDOH) => (
              <Box
                key={doneToDOH._id}
                p="1rem 2rem"
                w="100%"
                bg="#499890"
                borderRadius="md"
                display="flex"
              >
                <Image
                  boxSize="1.3rem"
                  alt="icon"
                  mr={2}
                  src={`/images/${
                    doneToDOH.isInside ? "home" : "outside"
                  }Button.svg`}
                />
                {doneToDOH.name}
                <CheckIcon ml={3} />
              </Box>
            ))}
        </VStack>
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
export default toLUV;
