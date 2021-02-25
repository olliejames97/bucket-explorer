/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FilesQuery
// ====================================================

export interface FilesQuery_files {
  __typename: "File";
  name: string;
  size: number | null;
  lastModified: string | null;
  link: string;
}

export interface FilesQuery {
  files: (FilesQuery_files | null)[];
}

export interface FilesQueryVariables {
  bucket?: CustomBucketParams | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CustomBucketParams {
  bucketName: string;
  region: string;
  accessKeyId: string;
  accessKeySecret: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
