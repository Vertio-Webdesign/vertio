import { defineField, defineType } from "sanity";



export default defineType({
    type: "document",
    name: "navigation",
    title: "Navigation",
    fields: [
        defineField({
            title: "menu",
            name: "menu",
            type: "string",
        })
    ]
})