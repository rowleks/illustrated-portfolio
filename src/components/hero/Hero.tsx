import "./hero.scss";
import Socials from "../socials/Socials";


function Hero() {
return (
    <section id="heros" className="hero">
        <img className="hero__img" src="/hero-illstr-mb.png" alt="hero-img" />

        <div className="hero-left">
            <div className="hero__info">
                <p>Hello I'm <span className="span--bold">Rowland Momoh.</span></p>
                <p><span className="span--bold">Frontend</span>  <span className="span--transparent">Developer </span></p>
                <p>Based in <span className="span--bold">Nigeria</span></p>
            </div>

            <div className="hero__desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi architecto nisi magni quos sit recusandae numquam provident at minima iste, commodi harum? Est consequatur repudiandae fugiat molestias consectetur eos ipsum?</p>
            </div>

            <Socials />
        </div>



    </section>
)
}

export default Hero
