import { defineField, defineType } from "sanity"
import { BiNews } from "react-icons/bi";


export default defineType({
    title: "news",
    name: "news",
    type: "document",
    icon: BiNews,
    fields: [
        defineField({
            type: "string",
            name: "heading",
            title: "Heading",
        }),
        defineField({
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                maxLength: 46,
                source: "heading",
            }
        }),
        defineField({
            name: "imageBlock",
            title: "Bilde",
            type: "imageBlock"
        }),
        defineField({
            title: "Kategory",
            name: "parents",
            type: "array",
            of: [{type: "reference", to:[{type:"category"}]}],
            options: {
                layout: "tags",
            },
        }),
        defineField({
            type: "string",
            name: "description",
            title: "Description",
        }),
        defineField({
            name: "text",
            title: "Text",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        }),
        defineField({
            title: "Author",
            name: "author",
            type: "array",
            of: [{type: "reference", to:[{type: "author"}]}],
            options: {
                layout: "tags",
            }
        }),
        defineField({
            title: 'Release date',
            name: 'releaseDate',
            type: 'date'
        }),
    ]
})