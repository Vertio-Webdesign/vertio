import { notFound } from "next/navigation";
import { client } from "../utils/sanity/client";
import { pagesBySlugQuery } from "../utils/sanity/querys";

interface PageProps {
  params: { slug: string };
}

export default async function PageSlugRoute(props: PageProps) {
  const { params } = props;

  const data = await client.fetch(
    pagesBySlugQuery, { slug: params.slug },
    {
      next: {
        revalidate: 10,
      },
    }
  );

  if (!data) {
    return notFound();
  }

  return (
    <>
      {data?.sections && data?.sections.map((section: any) => {
          switch (section._type) {
            case "hero":
                return <pre>{JSON.stringify(section)}</pre>
          }
        })}
        <pre>
            {JSON.stringify(data, undefined, 2)}
        </pre>
    </>
  );
}
