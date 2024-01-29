import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";



const config  = defineConfig({

    projectId: 'nj8kgzsc',
    dataset: 'production',

    title: "Portfolio website",

    apiVersion: "2024-01-29",

    basePath: "/admin",

    plugins: [deskTool()],
    schema:{types:schemas}

})

export default config;