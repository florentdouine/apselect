import { defineConfig } from "tinacms";
import { dataFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "3bf9c221-44b3-47ce-9198-45c66fbc39ce", // Get this from tina.io
  token: "8242b6891f03a1a7af182d47b108413e138ee3ce", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "uploads",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "uploads",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Véhicules",
        name: "v_hicules",
        path: "_cars",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...dataFields(),
        ],
      },
    ],
  },
});
