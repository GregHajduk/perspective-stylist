export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "date",
      type: "date",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
    },
    {
      name: "description",
      type: "text",
    },
  ],
};
