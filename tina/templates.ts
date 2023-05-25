import type { TinaField } from "tinacms";
export function dataFields() {
  return [
    {
      name: 'draft',
      label: 'Brouillon',
      type: 'boolean',
      required: true,
      description: 'Cochez de champ pour cacher le véhicule en ligne',
    },
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
      label: "Ajoutée le",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
      description: 'Ne pas modifier ce champ.',
    },
  ] as TinaField[];
}
