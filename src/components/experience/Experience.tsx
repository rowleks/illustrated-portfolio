import "./experience.scss";

function Experience() {
  return (
    <section className="experience">
        <h2>My <span className="span--bold">Experience</span></h2>

        <div className="xp xp--google">
          <div className="xp__title">
            <img src="/google-icon.png" alt="google" />
            <span className="span--s-bold">Lead Software Engineer at Google</span>
          </div>

          <div className="xp--desc">
            <p>Nov 2019 - Present</p>
            <p>As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
          </div>
        </div>

        <div className="xp xp--youtube">
          <div className="xp__title">
            <img src="/youtube-icon.png" alt="youtube" />
            <span className="span--s-bold">Software Engineer at Youtube</span>
          </div>

          <div className="xp--desc">
            <p>Jan 2017 - Oct 2019</p>
            <p>At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.</p>
          </div>
        </div>

        <div className="xp xp--apple">
          <div className="xp__title">
            <img src="/apple-icon.png" alt="apple" />
            <span className="span--s-bold">Junior Software Engineer at Apple</span>
          </div>

          <div className="xp--desc">
            <p>Jan 2016 - Dec 2017</p>
            <p>During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.</p>
          </div>
        </div>

      
      
    </section>
  )
}

export default Experience
