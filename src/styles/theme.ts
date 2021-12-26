import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "500": "#FFBA08",
    },
    gray: {
      "200": "#F5F8FA", //LightHeadings and Text
      "900": "#47585B", //DarkHeadings and Text
      "600": "#999999", //DarkInfo
      "400": "#DADADA", //LightInfo
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "white",
      },
    },
  },
});
