import { gql } from "@apollo/client";

export const GET_FILE_BY_ID = gql`
    query GetAllFiles {
        files {
            id
            originalName
            mimeType
            size
            createdAt
            bucketPath
        }
    }
`;
