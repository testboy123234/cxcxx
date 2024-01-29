import { Project } from "@/app/types/Projects";
import { createClient, groq } from "next-sanity"

export async function getProjects(): Promise<Project[]> {

    const client = createClient({

        projectId: 'nj8kgzsc',
        dataset: 'production',

        apiVersion: "2024-01-29",
        useCdn: false,
    });

    return client.fetch(
        groq`*[_type == 'project']{

            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset -> url,
            url,
            content

        }`
    )


}