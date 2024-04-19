import connectDB from "@/app/helper/db";
import { ExperienceModel } from "@/app/models/experienceModel";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectDB();
    const experiences = await ExperienceModel.find();
    return NextResponse.json({ experiences });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const {
      jobTitle,
      company,
      companyLink,
      isIntern,
      description,
      techStack,
      startDate,
      endDate,
    } = await request.json();

    const newExperience = new ExperienceModel({
      jobTitle,
      company,
      companyLink,
      isIntern,
      description,
      techStack,
      startDate,
      endDate,
    });

    await newExperience.save();

    return NextResponse.json({ message: "Experience added successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export function DELETE() {}
export function PUT() {}
