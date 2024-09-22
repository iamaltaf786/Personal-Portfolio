import React from 'react';
import arrow from '../assets/arrow.png';

const ExperienceSection = () => {
  return (
    <section className="experience">
      <p className="para">Explore My Skills</p>
      <div className="listing_start">
        <h1>Tech Skills</h1>
        <div className="listOf">
          <ul>
            {/* Languages */}
            <li>
              <div className="skills">
                <div className="skill_topics">
                  <p>Languages</p>
                </div>
                <div className="skill-topics-list">
                  <ul>
                    <li>
                      <img src="https://skillicons.dev/icons?i=html" alt="html" title="html" />
                      <img src="https://skillicons.dev/icons?i=css" alt="css" title="css" />
                      <img src="https://skillicons.dev/icons?i=js" alt="javascript" title="javascript" />
                      <img src="https://skillicons.dev/icons?i=c" alt="c" title="c" />
                      <img src="https://skillicons.dev/icons?i=cpp" alt="cpp" title="cpp" />
                      <img src="https://skillicons.dev/icons?i=java" alt="java" title="java" />
                      <img src="https://skillicons.dev/icons?i=sqlite" alt="sql" title="sql" />
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Developer Tools */}
            <li>
              <div className="skills">
                <div className="skill_topics">
                  <p>Developer Tools</p>
                </div>
                <div className="skill-topics-list">
                  <ul>
                    <li>
                      <img src="https://skillicons.dev/icons?i=vscode" alt="vscode" title="vscode" />
                      <img src="https://skillicons.dev/icons?i=git" alt="git" title="git" />
                      <img src="https://skillicons.dev/icons?i=github" alt="github" title="github" />
                      <img src="https://skillicons.dev/icons?i=mysql" alt="mysql" title="mysql" />
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Libraries */}
            <li>
              <div className="skills">
                <div className="skill_topics">
                  <p>Library</p>
                </div>
                <div className="skill-topics-list">
                  <ul>
                    <li>
                      <img src="https://skillicons.dev/icons?i=bootstrap" alt="bootstrap" title="bootstrap" />
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <img src={arrow} alt="Arrow icon" className="icon arrow" onClick={() => window.location.href='./#projects'} />
    </section>
  );
};

export default ExperienceSection;
