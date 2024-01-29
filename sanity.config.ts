import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import project from "./sanity/schemas/project-schema";

const config  = defineConfig({

    projectId: 'nj8kgzsc',
    dataset: 'production',

    title: "Portfolio website",

    apiVersion: "2024-01-29",

    basePath: "/admin",

    plugins: [deskTool()],
    schema:{types:[project]}

})

export default config;