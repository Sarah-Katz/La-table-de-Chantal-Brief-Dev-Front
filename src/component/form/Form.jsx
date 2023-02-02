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
        <form onSubmit={handleSubmit}>
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
            <div className="contact-infos">
                <p><i class="fa-solid fa-house"></i> 42 rue de la bonne bouffe, 59200 Tourcoing</p>
                <p><i class="fa-solid fa-phone"></i> 03.27.00.00.00 - 06.06.06.06.06</p>
                <iframe className="contact-map" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.10944152363!2d3.1480728172760815!3d50.736459005276224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32edc87b2b5ad%3A0xa2d9eec091e57342!2sLa%20table%20de%20Chantal!5e0!3m2!1sfr!2sfr!4v1675326091205!5m2!1sfr!2sfr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </form>
    );
};
