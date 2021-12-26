import { Flex } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1440}
      minHeight="100px"
      align="center"
      justifyContent="center"
    >
      <img src="/images/Logo.svg" alt="Logo" />
    </Flex>
  );
}
