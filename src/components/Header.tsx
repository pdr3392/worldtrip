import {
  Box,
  Flex,
  Link as ChakraLink,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  needBackward: boolean;
}

export default function Header({ needBackward }: HeaderProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      minHeight={["50px", "100px"]}
      alignItems="center"
      justifyContent="center"
      bgColor="gray.200"
    >
      {needBackward && (
        <Box ml="36" as="button" position="absolute" left="0">
          <Link href="/" passHref>
            <ChakraLink>
              <ChevronLeftIcon h="8" w="8" />
            </ChakraLink>
          </Link>
        </Box>
      )}
      <Image
        height={isWideVersion ? "45px" : "20px"}
        width={isWideVersion ? "184px" : "81px"}
        src="/images/Logo.svg"
        alt="Logo"
      />
    </Flex>
  );
}
