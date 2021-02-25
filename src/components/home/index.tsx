import * as React from "react";
import { Flex, Spinner, Stack, Text } from "@chakra-ui/react";
import { gql, useQuery } from "@apollo/client";
import {
  FilesQuery,
  FilesQuery_files,
  FilesQueryVariables,
  CustomBucketParams,
} from "../../generated/graphql";
import { FileGrid } from "./FileGrid";
import { useState } from "react";
import { BucketSelector } from "./BucketSelector";

const query = gql`
  query FilesQuery($bucket: CustomBucketParams) {
    files(bucket: $bucket) {
      name
      size
      lastModified
      link
    }
  }
`;

const Home = () => {
  const [myBucket, setMyBucket] = useState<CustomBucketParams | undefined>(
    undefined
  );
  const { data, loading, error } = useQuery<FilesQuery, FilesQueryVariables>(
    query,
    {
      variables: {
        bucket: myBucket,
      },
    }
  );

  return (
    <Flex
      backgroundColor={"green.200"}
      w={"100vw"}
      h={"100vh"}
      justify={"center"}
      p={[4, 8, 16]}
    >
      <Stack
        backgroundColor={"white"}
        borderRadius={"16px"}
        flex={1}
        maxWidth={"700px"}
        p={8}
        maxHeight={"95%"}
        overflowY={"scroll"}
        spacing={8}
      >
        <BucketSelector
          bucket={myBucket}
          onSet={(b) => {
            console.log(b);
            setMyBucket(b);
          }}
        />
        <hr />

        {loading && <Spinner alignSelf={"center"} />}
        {data && data.files && (
          <FileGrid
            files={
              data.files.filter((e) => e !== null) as Array<FilesQuery_files>
            }
          />
        )}
        {error && (
          <Text>
            Error, it is likely your bucket info is bad <br />
            {error.message}
          </Text>
        )}
      </Stack>
    </Flex>
  );
};

export default Home;
