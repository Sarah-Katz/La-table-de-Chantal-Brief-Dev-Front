import { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        subject: "",
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
        validateInput(event.target.name, event.target.value);
    };

    const validateInput = (name, value) => {
        switch (name) {
            case "name":
                setErrors({
                    ...errors,
                    name: /^[a-zA-Z ]{2,30}$/.test(value) ? "" : "Nom invalide, seulement des lettres, max 30 caractères",
                });
                break;
            case "subject":
                setErrors({
                    ...errors,
                    subject:
                        value.length > 100
                            ? "Sujet trop long (max 100 caractères)"
                            : "",
                });
                break;
            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!errors.name && !errors.subject && formData.message.length <= 800) {
            // Traitement de l'envoi de données
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-input">
                <label htmlFor="name">Nom:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div className="form-input">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-input">
                <label htmlFor="subject">Sujet:</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                />
                {errors.subject && <p>{errors.subject}</p>}
            </div>
            <div className="form-input">
                <label htmlFor="message">Contenu:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
                {formData.message.length > 800 && (
                    <p>Message trop long (max 800 caractères)</p>
                )}
            </div>
            <button className="form-button" type="submit">Envoyer</button>
        </form>
    );
};
