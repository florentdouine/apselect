import type { TinaField } from "tinacms";
export function dataFields() {
  return [
    {
      type: "string",
      name: "name",
      label: "Nom",
      required: true,
    },
    {
      type: "boolean",
      name: "isSold",
      label: "Véhicule vendu ?",
    },
    {
      type: "string",
      name: "brand",
      label: "Marque",
      required: true,
    },
    {
      type: "string",
      name: "model",
      label: "Modèle",
      required: true,
    },
    {
      type: "number",
      name: "year",
      label: "Année",
      required: true,
    },
    {
      type: "number",
      name: "kilometers",
      label: "Kilometrage",
      required: true,
    },
    {
      type: "string",
      name: "fuel",
      label: "Carburant",
      required: true,
    },
    {
      type: "number",
      name: "price",
      label: "Prix",
      required: true,
    },
    {
      type: "image",
      name: "photos",
      label: "Photos",
      list: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "properties",
      label: "Propriétés",
      list: true,
      fields: [
        {
          type: "string",
          name: "property",
          label: "Propriété",
        },
        {
          type: "string",
          name: "value",
          label: "Valeur",
        },
      ],
    },
    {
      type: "datetime",
      name: "creation_date",
      label: "Creation Date",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
  ] as TinaField[];
}
