/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type File = {
  __typename?: 'File';
  /** The name of the bucket. */
  bucketName: Scalars['String']['output'];
  /** The path to the file in the bucket. */
  bucketPath: Scalars['String']['output'];
  /** The date when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The name of the file. */
  fileName: Scalars['String']['output'];
  /** The unique plattform identifier of the file. */
  id: Scalars['ID']['output'];
  /** The mime type of the file. */
  mimeType: Scalars['String']['output'];
  /** The original name of the file. */
  originalName: Scalars['String']['output'];
  /** The size of the file in bytes. */
  size: Scalars['Int']['output'];
  /** The date when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  fileById: File;
  fileUrlById: Scalars['String']['output'];
  files: Array<File>;
};


export type QueryFileByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFileUrlByIdArgs = {
  id: Scalars['String']['input'];
};
