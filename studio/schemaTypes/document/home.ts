import { defineArrayMember, defineField, defineType } from "sanity";
import { MdEditDocument, MdHome } from "react-icons/md";

export default defineType({
    name: "home",
    title: "Hjemmeside",
    type: "document",
    icon: MdHome,
    groups: [
        {
            title: "Page",
            name: "page",
            default: true,
        },
        {
            title: "Seo",
            name: "seo",
            default: false,
        },
    ],
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            initialValue: "Home",
        }),
        defineField({
            title: "Seo",
            name: "seo",
            type: "seoMetaFields",
            group: "seo",
        }),
        defineField({
            name: "sections",
            title: "Sections",
            type: "array",
            of: [
                defineArrayMember({ type: "hero"}),
            ],
            group: "page",
        }),
    ],
    preview: {
        select: {
            metaTitle: "seo",
        },
        prepare(selection) {
            const {metaTitle} = selection?.metaTitle || "";
            return {
                title: metaTitle || "seo",
            };
        }
    }
})