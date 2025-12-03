import { sanityClient } from "../sanity";
import { Project } from "../typings";
import { groq } from "next-sanity";
import { mockProjects } from "./mockData";

const query = groq`
  *[_type == "project"] {
    ...,
    technologies[]->
  }
`;

export const fetchProjects = async () => {
  try {
    const res = await sanityClient.fetch(query);
    return res?.length > 0 ? res : mockProjects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return mockProjects;
  }
};