import { HiHome } from "react-icons/hi";


export const deskStructure = (S: any, context: any) => 
    S.list()
    	.title("Vertio")
        .items([
            S.listItem()
                .title("Sider")
                .child(
                    S.list()
                        .title("Hjemmesider")
                        .items([
                            S.documentTypeListItem("page").title("Hjemmesider"),
                        ]),
                ),
            S.divider(),
        ])