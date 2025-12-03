const participants = ["User1", "User2", "User3", "User4"];

export default function Participants() {
    return (
        <div style={{ padding: "2rem" }}>
            <h1>Participants</h1>
            <ul>
                {participants.map((nom) => (
                    <li key={nom}>{nom}</li>
                ))}
            </ul>
        </div>
    );
}
