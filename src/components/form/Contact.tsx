import Socials from "../socials/Socials";
import "./contact.scss";

export default function Contact() {
return (
    <section className="contact">
        <form onSubmit={(e)=> e.preventDefault()}>
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Your website (if exists)" />
            <textarea rows={10} placeholder="How can I help?*"></textarea>
            <button>Get in Touch</button>
        </form>

        <div className="contact__low">
            <Socials />
            <h3>Let's <span className="span--transparent">talk</span> for Something special</h3>
            <p>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
            <div className="contact__details">
                <h4>youremail@gmail.com</h4>
                <h4>your phone number</h4>

            </div>
        </div>

    </section>
)
}
