const Team = ({ team }) => {
  return (
    <div>
      <h2>Team: {teamName}</h2>
      <ul>
        {members.map((member, index) => (
          <li key={index}>
            <div>Name: {member.name}</div>
            <div>Email: {member.email}</div>
            <div>Phone: {member.phone}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Example usage:
const teamName = "Engineering Team";
const members = [
  { name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
  { name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210" },
  // Add more members as needed
];

export default Team;
