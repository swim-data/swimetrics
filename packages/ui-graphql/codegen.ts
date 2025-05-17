import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    overwrite: true,
    schema: "http://localhost:3099/graphql",
    documents: "src/**/*.tsx",
    generates: {
        "src/": {
            preset: "client",
            plugins: ["typescript", "typescript-operations"],
        },
    },
    ignoreNoDocuments: true,
};

export default config;
