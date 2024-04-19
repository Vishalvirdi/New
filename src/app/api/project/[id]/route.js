import connectDB from "@/app/helper/db";
import { ProjectModel } from "@/app/models/projectModel";
import { NextResponse } from "next/server";



export async function GET(request,{params}) {

    try {
        await connectDB();
        const {id} = params;
        const project = await ProjectModel.findOne({_id:id});
        return NextResponse.json({ project });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}