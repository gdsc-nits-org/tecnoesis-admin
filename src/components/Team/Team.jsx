const Team = ({ team }) => {
  return (
    <div className="team">
      <h3 style={{paddingLeft: "1rem"}}>Team: {team.teamName}</h3>
      <hr />
      <div className="members">
        {team.members.map((member, index) => (
          <div className="member" key={index}>
            <div className="member-details"><span>Name:</span> {member.user.firstName}</div>
            <div className="member-details"><span>Email:</span> {member.user.email}</div>
            <div className="member-details"><span>Phone:</span> {member.user.phoneNumber}</div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Team;
