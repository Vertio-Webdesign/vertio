import { client } from "@/app/utils/sanity/client";
import { articleBySlugQuery } from "@/app/utils/sanity/querys";
import { notFound } from "next/navigation";




interface PageProps {
    params: { slug: string };
  }
  

export default async function getArticleSlugRoute(props: PageProps) {
  const { params } = props;

  const data = await client.fetch(
    articleBySlugQuery, { slug: params.slug },
    {
      next: {
        revalidate: 10,
      },
    }
  );

  if (!data) {
    return notFound();
  }

  return(
    <div>
        <pre>
            {JSON.stringify(data, undefined, 2)}
        </pre>
    </div>
  )
} 