import { NextResponse } from "next/server";
import student from "@/data/students.json"

export async function GET() {
    try {
        if (!student) {
            return NextResponse.json(
                { message: "Student data not found" },
                { status: 500 }
            );
        }

        return NextResponse.json(student)
    } catch (err) {
        return NextResponse.json(
            { message: "Failed to fetch students" },
            { status: 500 }
        );
    }

}