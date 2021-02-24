import { gql } from "@apollo/client";
import { ChakraProvider, Text } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";

const testQuery = gql`
  query MyFileQuery {
    files {
      name
    }
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Text>Hello chakra</Text>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
