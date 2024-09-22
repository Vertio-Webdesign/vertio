import { groq } from "next-sanity"


export const homeSectionsQuery = groq`
  *[_type == "home"] {
    ...,
    sections[] {
      ...,
    },
  }
`


export const pagesBySlugQuery = groq`
  *[_type == "blog" && slug.current == $slug][0] {
    ...,
    sections[] {
      ...,
    },
    "slug": slug.current,
  }
`

export const blogsBySlugQuery = groq`
  *[_type == "blog" && slug.current == $slug][0]{
    ...,
    sections[] {
      ...,
    },
    "slug": slug.current,
  }
`

export const pagePathsQuery = groq`
  *[_type == "page" && slug.current != null].slug.current
`



export const articleBySlugQuery = groq`
  *[_type == "news" && slug.current == $slug][0] {
    imageBlock,
    text,
    relaseDate,
    "slug": slug.current,
  }
`

export const getAllBlogsQuery = groq`
  *[_type == "news"] {
  parents[]-> {
    title,
  },
  description,
  heading,
  imageBlock,
}
`



export const getHomePageQuery = groq`
*[_type == 'home']
`