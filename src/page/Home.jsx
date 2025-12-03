import Participants from "./Participants.jsx";

export default function Home() {
    return (
        <div style={{ padding: "2rem" }}>
            <h1>Page Home</h1>
            <p>Ceci est la page d'accueil de votre application React Router.</p>
            <a href={/participants/} style={{margin: "10px"}}>Voir les participants</a>
            <a href={/ateliers-pratique/}>Voir les Ateliers</a>
        </div>
    );
}
