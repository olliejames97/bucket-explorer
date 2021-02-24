import * as React from "react";
import { Center, Text } from "@chakra-ui/react";
import { gql, useQuery } from "@apollo/client";
import { FilesQuery } from "../../generated/graphql";
const query = gql`
  query FilesQuery {
    files {
      name
      size
      lastModified
      link
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery<FilesQuery>(query);
  if (loading) {
    return (
      <Center>
        <Text>loading</Text>
      </Center>
    );
  }
  if (error) {
    console.error(error);
    return (
      <Center>
        <Text>{error.message}</Text>
      </Center>
    );
  }

  return (
    <>
      {data?.files.map((f) => (
        <Text>{f?.name}</Text>
      ))}
    </>
  );
};

export default Home;
