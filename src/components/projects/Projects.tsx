import "./projects.scss";

export default function Projects() {
return (
    <section id="projects" className="projects">
        <h2>My <span className="span--bold">Projects</span></h2>
        <div className="project__container">
            <img src="/project11.png" alt="" />
            <div className="project__info">
                <h4>01</h4>
                <h5>Blog Website Template</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora eaque, dolor at aspernatur minus quas voluptatibus saepe molestias dignissimos assumenda ipsum eius perspiciatis ipsa deleniti optio provident? Deleniti, ipsa. Fugit tempora consequatur culpa illum sint sequi beatae mollitia sapiente vero commodi, earum molestias neque ea quos suscipit odio omnis.</p>
                <img className="readmore" src="/readmore.png" alt="" />
            </div>
        </div>
        <div className="project__container">
            <img src="/project22.png" alt="" />
            <div className="project__info">
                <h4>02</h4>
                <h5>Euphoria - Ecommerce (Apparels) Website Template</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora eaque, dolor at aspernatur minus quas voluptatibus saepe molestias dignissimos assumenda ipsum eius perspiciatis ipsa deleniti optio provident? Deleniti, ipsa. Fugit tempora consequatur culpa illum sint sequi beatae mollitia sapiente vero commodi, earum molestias neque ea quos suscipit odio omnis.</p>
                <img className="readmore" src="/readmore.png" alt="" />
            </div>
        </div>
        <div className="project__container">
            <img src="/project33.png" alt="" />
            <div className="project__info">
                <h4>03</h4>
                <h5>Crypto Screener Application</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora eaque, dolor at aspernatur minus quas voluptatibus saepe molestias dignissimos assumenda ipsum eius perspiciatis ipsa deleniti optio provident? Deleniti, ipsa. Fugit tempora consequatur culpa illum sint sequi beatae mollitia sapiente vero commodi, earum molestias neque ea quos suscipit odio omnis.</p>
                <img className="readmore" src="/readmore.png" alt="" />
            </div>
        </div>
        
    </section>
)
}
