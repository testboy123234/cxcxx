import { Project } from "@/app/types/Projects";
import { createClient, groq } from "next-sanity"

export async function getProjects(): Promise<Project[]> {
    try {
        const client = createClient({

            projectId: 'nj8kgzsc',
            dataset: 'production',

            apiVersion: "2024-01-29",
            useCdn: false,
        });

        return client.fetch(
            groq`*[_type == "project"]{
                    _id,
                    _createdAt,
                    name,
                    "slug": slug.current,
                    "image": image.asset->url,
                    url,
                    content
                }
            `);
    } catch (error) {
        console.error("Error fetching projects:", error);
        return []; // Return an empty array or handle the error as needed
    }
}