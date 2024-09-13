

interface PageProps {
    params: {slug:string};
}

export default async function PageSlugRoute(props: PageProps) {
    const { params } = props

    return(
        <>
            slug
        </>
    )
}