import {
  Box,
  Flex,
  Link as ChakraLink,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Link from "next/link";

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
      minHeight={{ base: "50px", md: "50px", lg: "100px", xl: "100px" }}
      alignItems="center"
      justifyContent="center"
      bgColor="gray.200"
    >
      {needBackward && (
        <Box
          ml={{ base: "2", md: "20", lg: "36" }}
          as="button"
          position="absolute"
          left="0"
        >
          <Link href="/" passHref>
            <ChakraLink>
              <ChevronLeftIcon
                h={{ base: "1rem", md: "1.5rem", lg: "8" }}
                w={{ base: "1rem", md: "1.5rem", lg: "8" }}
              />
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
