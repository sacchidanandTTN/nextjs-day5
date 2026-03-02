import students from "@/data/students.json"
import { NextResponse } from "next/server";


export async function GET(request: Request,{
    params
}:{
    params : Promise<{id:string}>
}) {

    try{
        const {id} = await params;
        if(!id){
            return NextResponse.json({message:"Teacher Id is required"},
                {status:400}
            )
        }

        const filteredStudents = students.filter((p)=>p.teacherId === id);
        if(filteredStudents.length === 0){
            return NextResponse.json(
                {message:"No student found for this teacher"},
                {status:404}
            )
        }

        return NextResponse.json(filteredStudents);
    }catch(err){
        return NextResponse.json(
            {message:"Failed to fetch student for teachere"},
            {status:500}
        )
    }
}

