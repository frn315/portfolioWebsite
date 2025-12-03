import { sanityClient } from "../sanity";
import { Experience } from "../typings";
import { groq } from "next-sanity";
import { mockExperiences } from "./mockData";

const query = groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  }
`;

export const fetchExperiences = async () => {
  try {
    const res = await sanityClient.fetch(query);
    return res?.length > 0 ? res : mockExperiences;
  } catch (error) {
    console.error("Error fetching experiences:", error);
    return mockExperiences;
  }
};