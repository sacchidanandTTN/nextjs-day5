import Link from "next/link";

const BASE_URL ="http://localhost:3001/api/students" 
async function getStudents() {
  const res = await fetch(BASE_URL, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch students");

  return res.json();
}

export default async function TeachersPage() {
  const students = await getStudents();
console.log(students)
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{textAlign:"center",marginBottom:"16px"}}>Students</h1>

      <ul style={{display:"grid" ,
         gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "24px",
          listStyle: "none",
          padding: 0, textAlign:"center"
         }}>
        {students.map((student: any) => (
          <li style={{border:"2px solid red" , borderRadius:"16px"}} key={student.id}>
            <h1>Name : {student.name}</h1>
            <h2>Age : {student.age}</h2>
            <h3>TeacherId : {student.teacherId}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}