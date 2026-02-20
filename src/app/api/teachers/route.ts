import { NextResponse } from "next/server";
import teachers from "@/data/teachers.json";

export async function GET() {
  return NextResponse.json(teachers);
}