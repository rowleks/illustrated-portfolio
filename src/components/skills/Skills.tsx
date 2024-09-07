import "./skills.scss";

function Skills() {
return (
    <section className="skills">

        <h2>My <span className="span--bold">Skills</span></h2>

        <div className="skills__container">

            <div className="skills__card">
                <img src="/js-icon.png" alt="" />
                <span>JavaScript</span>
            </div>

            <div className="skills__card">
                <img src="/ts-icon.svg" alt="" />
                <span>TypeScript</span>
            </div>

            <div className="skills__card">
                <img src="/sass-icon.png" alt="" />
                <span>SASS</span>
            </div>

            <div className="skills__card">
                <img src="/tailwind-icon.svg" alt="" />
                <span>Tailwind</span>
            </div>

            <div className="skills__card">
                <img src="/react-icon.svg" alt="" />
                <span>React</span>
            </div>

            <div className="skills__card">
                <img src="/nodejs-icon.svg" alt="" />
                <span>NodeJS</span>
            </div>
            <div className="skills__card">
                <img src="/next-icon.svg" alt="" />
                <span>NextJS</span>
            </div>
            <div className="skills__card">
                <img src="/postgre-icon.svg" alt="" />
                <span>PostgreSQL</span>
            </div>
        </div>
    
    </section>
)
}

export default Skills

