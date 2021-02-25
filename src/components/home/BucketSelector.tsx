import * as React from "react";
import { CustomBucketParams } from "../../generated/graphql";
import { useState } from "react";
import {
  Button,
  Drawer,
  HStack,
  Text,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  FormLabel,
  Input,
  FormControl,
} from "@chakra-ui/react";

export const BucketSelector = ({
  bucket,
  onSet,
}: {
  onSet: (bucket: CustomBucketParams | undefined) => void;
  bucket: CustomBucketParams | undefined;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack w="100%" justifyContent={"flex-end"}>
        <Text>
          {bucket
            ? `Using custom bucket: ${bucket.bucketName}`
            : "Using API's default bucket"}
        </Text>
        <Button colorScheme="pink" size="sm" onClick={onOpen}>
          Change
        </Button>
      </HStack>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent p={8}>
            <DrawerCloseButton />
            <FormControl isRequired={true}>
              <Box pb={4}>
                <FormLabel>Name</FormLabel>
                <Input id="bucketName" placeholder="my_bucket" />
              </Box>
              <Box pb={4}>
                <FormLabel>Region</FormLabel>
                <Input id="region" placeholder="eu-west-2" />
              </Box>
              <Box pb={4}>
                <FormLabel>Access ID</FormLabel>
                <Input id="accessKeyId" placeholder="ABC" />
              </Box>
              <Box pb={4}>
                <FormLabel>Access Secret</FormLabel>
                <Input id="accessKeySecret" placeholder="XYZ" />
              </Box>
              <Button mt={4} colorScheme="teal" type="submit">
                Submit
              </Button>
            </FormControl>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
