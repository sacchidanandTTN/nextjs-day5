
import NavButton from "@/app/components/NavButton";

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
      padding: "40px",
      color:"white"
    }}>
      <h1 style={{ marginBottom: "40px", fontSize: "3rem" }}>
        Welcome Home
      </h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <NavButton href="/teachers" label="List of Teachers" color="green" />
        <NavButton href="/students" label="List of Students" color="blue" />
      </div>
    </div>
  );
}