'use server'

import { ProjectDTO } from "@/models/project";
import { cookies } from "next/headers";

export async function getProjects(){
    var projects:ProjectDTO[] = [];
    var company_id:string | undefined = cookies().get("session")?.value;
    
    await fetch(`${process.env.BASE_URL_COMMANDER}/projects?company_id=${company_id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(res => res.json()) //Convert response to readable data
    .then(data => {
        console.log(data.data)
        projects = data.data;
    })

    return projects
}