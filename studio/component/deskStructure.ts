import { RiPagesLine } from "react-icons/ri";


export const deskStructure = (S: any, context: any) => 
    S.list()
    	.title("Vertio")
        .items([
            S.listItem()
                .title("Sider")
                .icon(RiPagesLine)
                .child(
                    S.list()
                        .title("Sider")
                        .items([
                            S.documentTypeListItem("home").title("Landingsside"),
                            S.documentTypeListItem("blog").title("Slug Sider"),
                        ])
                ),
            S.divider(),
            S.listItem()
                .title("Nyheter")
                .child(
                    S.list()
                        .title("Nyheter")
                        .items([
                            S.documentTypeListItem("category").title("Kategorier"),
                            S.documentTypeListItem("news").title("Nyhet"),
                            S.documentTypeListItem("author").title("Author"),
                        ])
                ),
        ]);
