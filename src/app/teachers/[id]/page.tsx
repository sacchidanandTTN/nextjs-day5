async function getStudents(id: string) {
  const res = await fetch(
    `http://localhost:3001/api/teachers/${id}/students`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch students");

  return res.json();
}

export default async function TeacherStudentsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const students = await getStudents(id);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Students Under Teacher {id}</h1>

      <ul>
        {students.map((student: any) => (
          <li key={student.id}>
            {student.name} (Age: {student.age})
          </li>
        ))}
      </ul>
    </div>
  );
}