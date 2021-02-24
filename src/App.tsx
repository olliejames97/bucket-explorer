import * as React from "react";
import { ChakraProvider, Text } from "@chakra-ui/react";
import { config } from "./config";
const App = () => {
  return (
    <ChakraProvider>
      <Text>Hey2</Text>
      <Text>{JSON.stringify({ config: config })}</Text>
    </ChakraProvider>
  );
};

export default App;
