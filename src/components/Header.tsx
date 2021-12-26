import { Flex } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

interface HeaderProps {
  needBackward: boolean;
}

export default function Header({ needBackward }: HeaderProps) {
  return (
    <Flex
      as="header"
      w="100%"
      minHeight="100px"
      alignItems="center"
      justifyContent="center"
    >
      {needBackward && (
        <Flex as="div" float="left">
          <ChevronLeftIcon w={8} h={8} />
        </Flex>
      )}

      <img src="/images/Logo.svg" alt="Logo" />
    </Flex>
  );
}
