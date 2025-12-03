import { sanityClient } from "../sanity";
import { PageInfo } from "../typings";
import { groq } from "next-sanity";
import { mockPageInfo } from "./mockData";

const query = groq`
  *[_type == "pageInfo"][0]
`;

export const fetchPageInfo = async () => {
  try {
    const res = await sanityClient.fetch(query);
    return res || mockPageInfo;
  } catch (error) {
    console.error("Error fetching page info:", error);
    return mockPageInfo;
  }
};