import Image from "next/image";
import { client } from "./utils/sanity/client";
import { homeSectionsQuery } from "./utils/sanity/querys";



export default async function getHomePageRoute() {
  const data = await client.fetch(homeSectionsQuery, {
  });

  return(
    <div>
      <pre>
        {JSON.stringify(data, undefined, 2)}
      </pre>
    </div>
  )
}