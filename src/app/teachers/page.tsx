import Link from "next/link";

const BASE_URL ="http://localhost:3001/api/teachers" 
async function getTeachers() {
  const res = await fetch(BASE_URL, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch teachers");

  return res.json();
}

export default async function TeachersPage() {
  const teachers = await getTeachers();
console.log(teachers)
  return (
    <div style={{ padding: "20px" }}>
      <h1>Teachers</h1>

      <ul>
        {teachers.map((teacher: any) => (
          <li key={teacher.id}>
            <Link href={`/teachers/${teacher.id}`}>
              {teacher.name} - {teacher.subject}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}