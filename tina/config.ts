import { defineConfig } from "tinacms";
import { dataFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: "3bf9c221-44b3-47ce-9198-45c66fbc39ce", // Get this from tina.io
  token: "8242b6891f03a1a7af182d47b108413e138ee3ce", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "",
  },
  media: {
    tina: {
      mediaRoot: "./",
      publicFolder: "assets",
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
        defaultItem: () => {
          return {
            // When a new post is created the title field will be set to "New post"
            isSold: false,
            layout: 'car',
          }
        },
        ui: {
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: true,
            // Example of using a custom slugify function
            slugify: values => {
              // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
              return `${values?.name?.toLowerCase().replace(/ /g, '-')}`
            },
          },
        },
        fields: [
          ...dataFields(),
        ],
      },
    ],
  },
});
