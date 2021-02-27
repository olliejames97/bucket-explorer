import * as React from "react";
import { Box, BoxProps, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { FilesQuery_files } from "../../generated/graphql";
import filesize from "filesize";

interface Props {
  files: Array<FilesQuery_files>;
}

type FieldName = keyof FilesQuery_files;
const fieldSpans: Record<FieldName, BoxProps["gridColumn"]> = {
  name: "span 4",
  lastModified: "span 3",
  size: "span 2",
  link: "span 3",
  __typename: undefined,
};
export const FileGrid = ({ files }: Props) => {
  return (
    <SimpleGrid
      columns={12}
      columnGap={2}
      pos="relative"
      w="100%"
      fontSize={["xs", "l", "l"]}
    >
      {(Object.keys(fieldSpans) as Array<FieldName>).map((title) =>
        fieldSpans[title] ? (
          <Text
            noOfLines={1}
            key={title}
            gridColumn={fieldSpans[title]}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            pb={0}
          >
            {title}
          </Text>
        ) : null
      )}
      {files.map((file) => (
        <FileRow key={file.name} file={file} />
      ))}
    </SimpleGrid>
  );
};

const FileRow = ({ file }: { file: FilesQuery_files }) => (
  <>
    <Box gridColumn={fieldSpans.name} overflow={"hidden"} pt={2}>
      <Text textOverflow={"ellipsis"} noOfLines={1}>
        {file.name}
      </Text>
    </Box>
    <Box gridColumn={fieldSpans.lastModified} overflow={"hidden"} pt={2}>
      <Text textOverflow={"ellipsis"} noOfLines={1}>
        {file.lastModified}
      </Text>
    </Box>
    <Box gridColumn={fieldSpans.size} overflow={"hidden"} pt={2}>
      <Text textOverflow={"ellipsis"} noOfLines={1}>
        {file.size && filesize(file.size)}
      </Text>
    </Box>
    <Box gridColumn={fieldSpans.link} pt={2}>
      <a
        href={file.link}
        download
        target={"_blank"}
        rel="noreferrer"
        data-cy="DownloadAnchor"
      >
        <Button size="xs" colorScheme={"teal"} data-cy="DownloadButton">
          Download
        </Button>
      </a>
    </Box>
  </>
);
