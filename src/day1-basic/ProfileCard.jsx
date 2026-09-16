function UserImg() {
  const img = './photo.jpg';
  return(
    <img src={img} alt="profile-img" style={{width: "200px", height: "200px"}}/> 
  )
}

function UserDetails() {
  const user = {
    name: "Srijib Pal",
    role: "Web Developer",
    address: "Bankura, West Bengal, 722146"
  }

  return(
    <div style={{textAlign: "center", padding: "20px",}}>
      <h2>{user.name}</h2>
      <p>{user.role}</p>
      <span>{user.address}</span>
    </div>
  )
}

function UserSkills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
  return (
    <div style={{textAlign: "center", padding: "20px",
    display: "flex", flexDirection: "row", gap: "10px",
    textColor: "red", BackgroundColor : "yellow"}}>
      {skills.map((skill) => (
        <span key={skill}>{skill}</span>
      ))}

    </div>
  );
}

export default function ProfileCard() {
  return (
    <div className="Profile" style={{justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", border: "1px solid black", width: "300px", margin: "auto", marginTop: "20px"}}>
      <header className="Profile-header">
        <UserImg />
        <UserDetails />
        <UserSkills />  
      </header>
    </div>
  );
}