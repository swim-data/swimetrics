import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    overwrite: true,
    schema: "http://localhost:3099/graphql",
    documents: "src/**/*.tsx",
    generates: {
        "src/": {
            preset: "client",
            presetConfig: {
                gqlTagName: "gql",
            },
            plugins: [],
        },
    },
    ignoreNoDocuments: true,
};

export default config;
