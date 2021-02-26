import * as React from "react";
import { CustomBucketParams } from "../../generated/graphql";
import {
  Button,
  Drawer,
  HStack,
  Text,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  FormLabel,
  Input,
  FormControl,
  Checkbox,
} from "@chakra-ui/react";
import { Field, FieldProps, Form, Formik } from "formik";

export const BucketSelector = ({
  bucket,
  onSet,
}: {
  onSet: (bucket: CustomBucketParams | undefined, shouldStore: boolean) => void;
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
            <Formik
              initialValues={
                bucket
                  ? { ...bucket, shouldStore: false }
                  : {
                      bucketName: "",
                      region: "",
                      accessKeyId: "",
                      accessKeySecret: "",
                      shouldStore: false,
                    }
              }
              onSubmit={(d) => {
                const { shouldStore, ...bucket } = d;
                onClose();

                onSet(bucket, shouldStore);
              }}
            >
              <Form>
                <Field name="bucketName">
                  {({ field }: FieldProps<string>) => (
                    <FormControl isRequired={true} pb={4}>
                      <FormLabel htmlFor="Bucket Name">Bucket Name</FormLabel>
                      <Input
                        {...field}
                        id="bucketName"
                        placeholder="my-bucket"
                      />
                    </FormControl>
                  )}
                </Field>

                <Field name="region">
                  {({ field }: FieldProps<string>) => (
                    <FormControl isRequired={true} pb={4}>
                      <FormLabel htmlFor="Region">Region</FormLabel>
                      <Input {...field} id="region" placeholder="eu-west-2" />
                    </FormControl>
                  )}
                </Field>

                <Field name="accessKeyId">
                  {({ field }: FieldProps<string>) => (
                    <FormControl isRequired={true} pb={4}>
                      <FormLabel htmlFor="Access ID">Access ID</FormLabel>
                      <Input {...field} id="accessKeyId" placeholder="ABC" />
                    </FormControl>
                  )}
                </Field>

                <Field name="accessKeySecret">
                  {({ field }: FieldProps<string>) => (
                    <FormControl isRequired={true} pb={4}>
                      <FormLabel htmlFor="Access Secret">
                        Access Secret
                      </FormLabel>
                      <Input
                        {...field}
                        id="accessKeySecret"
                        placeholder="XYZ"
                      />
                    </FormControl>
                  )}
                </Field>

                <Field name="shouldStore">
                  {({ field }: FieldProps<string>) => (
                    <FormControl pb={4}>
                      <FormLabel htmlFor="should store">
                        Remember these details?
                      </FormLabel>
                      <Checkbox {...field} id="shouldStore" placeholder="XYZ" />
                    </FormControl>
                  )}
                </Field>

                <FormControl pb={4}>
                  <Button
                    m={2}
                    colorScheme="pink"
                    display="inline"
                    onClick={() => {
                      onClose();
                      onSet(undefined, true);
                    }}
                  >
                    Reset
                  </Button>
                  <Button mt={4} colorScheme="teal" type="submit" m={2}>
                    Submit
                  </Button>
                </FormControl>
              </Form>
            </Formik>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
