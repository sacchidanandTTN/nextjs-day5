import students from "@/data/students.json"
import { NextResponse } from "next/server";


export async function GET(request: Request,{
    params
}:{
    params : Promise<{id:string}>
}) {
    const {id} = await params;
    const filteredStudents = students.filter((p)=>p.teacherId === id);

    return NextResponse.json(filteredStudents);
}

