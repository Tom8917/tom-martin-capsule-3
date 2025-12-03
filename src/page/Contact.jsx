import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ nom, email, message });
        navigate("/confirmation");
    };

    return (
        <div style={{ padding: "2rem", border: "solid black 1px" }}>
            <h1>Page Contact</h1>

            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    maxWidth: "400px"
                }}
            >
                <label>
                    Nom :
                    <input
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                    />
                </label>

                <label>
                    Email :
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label>
                    Message :
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>

                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}
