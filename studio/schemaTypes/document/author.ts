import { defineField, defineType } from "sanity";
import { BiCategory } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";


export default defineType({
    title: "Author",
    name: "author",
    type: "document",
    icon: IoPersonSharp,
    fields: [
        defineField({
            type: "imageBlock",
            name: "image",
            title: "Profile Picture",
        }),
        defineField({
            title: "Name",
            name: "name",
            type: "string",
            validation: (rule) => rule.required(),
        }),
    ]
})