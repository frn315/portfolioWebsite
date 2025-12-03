import { sanityClient } from "../sanity";
import { Skill } from "../typings";
import { groq } from "next-sanity";
import { mockSkills } from "./mockData";

const query = groq`
  *[_type == "skill"]
`;

export const fetchSkills = async () => {
  try {
    const res = await sanityClient.fetch(query);
    return res?.length > 0 ? res : mockSkills;
  } catch (error) {
    console.error("Error fetching skills:", error);
    return mockSkills;
  }
};