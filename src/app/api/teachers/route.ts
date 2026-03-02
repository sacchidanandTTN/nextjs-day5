import { NextResponse } from "next/server";
import teachers from "@/data/teachers.json";

export async function GET() {

  try {
    if (!teachers) {
      return NextResponse.json(
        { message: "Teacheres data not found" },
        { status: 500 }
      );
    }
    return NextResponse.json(teachers, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to fetch teachers data"
    },
      {
        status: 500
      })
  }
}