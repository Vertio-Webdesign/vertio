import { defineArrayMember, defineField, defineType } from "sanity";
import { MdEditDocument } from "react-icons/md";

export default defineType({
    name: "page",
    title: "Pages",
    type: "document",
    icon: MdEditDocument,
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
            title: "Slug",
            name: "slug",
            type: "slug",
            description: "The link which the blog page will be at",
            options: {
                source: "title",
                maxLength: 96,
            },
            group: "page",
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
                defineArrayMember({ type: "videoBlogPost"}),
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