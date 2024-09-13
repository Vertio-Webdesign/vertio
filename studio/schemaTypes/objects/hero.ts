import { MdHomeWork } from "react-icons/md";
import { defineField, defineType } from "sanity";

export default defineType({
    name: "hero",
    title: "Hero",
    type: "object",
    icon: MdHomeWork,
    fields: [
        defineField({
            name: "tag",
            title: "Tag",
            type: "string",
        }),
        defineField({
            name: "title",
            title: "Title",
            type: "string",
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
            name: "heroImg",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            }
        })
    ]
})