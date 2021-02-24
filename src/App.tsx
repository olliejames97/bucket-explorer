import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { config } from "./config";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "./components/home";

const client = new ApolloClient({
  uri: config.apiUrl,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default App;
