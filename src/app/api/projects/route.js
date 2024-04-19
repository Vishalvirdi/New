import connectDB from "@/app/helper/db";
import { NextResponse } from "next/server";
import { ProjectModel } from "@/app/models/projectModel"; 

export async function GET(request) {
    try {
        await connectDB();
        const projects = await ProjectModel.find();
        return NextResponse.json({ projects });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const {
            projectName,
            projectType,
            githubLink,
            liveLink,
            techStack,
            startDate,
            endDate,
            description,
            references,
            projectImage
        } = await request.json();

        const newProject = new ProjectModel({
            projectName,
            projectType,
            githubLink,
            liveLink,
            techStack,
            startDate,
            endDate,
            description,
            references,
            projectImage
        });

        await newProject.save();

        return NextResponse.json({ message: "Project added successfully" });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export function DELETE() {}
export function PUT() {}
