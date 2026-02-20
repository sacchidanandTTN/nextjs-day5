import { NextResponse } from "next/server";
import student from "@/data/students.json"

export async function GET() {
    return NextResponse.json(student)
}