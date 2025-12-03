import { sanityClient } from "../sanity";
import { Social } from "../typings";
import { groq } from "next-sanity";
import { mockSocials } from "./mockData";

const query = groq`
  *[_type == "social"]
`;

export const fetchSocials = async () => {
  try {
    const res = await sanityClient.fetch(query);
    return res?.length > 0 ? res : mockSocials;
  } catch (error) {
    console.error("Error fetching socials:", error);
    return mockSocials;
  }
};
