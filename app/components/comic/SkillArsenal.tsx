export default function SkillArsenal() {
  return (
    <section id="skill-arsenal" className="comic-panel panel-skewed">
      <div className="panel-header speech-bubble-alt center">
        <h2
          className="section-title bangers-text"
          data-text="SKILL ARSENAL"
        >
          SKILL ARSENAL
        </h2>
      </div>

      <ul className="skills-list">
        <li
          className="skill-item"
          style={{ "--skill-power": "90%", "--skill-color": "#FF4500" } as React.CSSProperties}
        >
          <span className="skill-name permanent-marker-text">HTML & CSS</span>
          <div className="power-bar">
            <div className="power-fill"></div>
          </div>
          <span className="skill-effect" data-text="SLASH!">
            <span>SLASH!</span>
          </span>
        </li>

        <li
          className="skill-item"
          style={{ "--skill-power": "80%", "--skill-color": "#1E90FF" } as React.CSSProperties}
        >
          <span className="skill-name permanent-marker-text">JavaScript</span>
          <div className="power-bar">
            <div className="power-fill"></div>
          </div>
          <span className="skill-effect" data-text="ZAP!">
            <span>ZAP!</span>
          </span>
        </li>

        <li
          className="skill-item"
          style={{ "--skill-power": "70%", "--skill-color": "#32CD32" } as React.CSSProperties}
        >
          <span className="skill-name permanent-marker-text">[Your Skill Here]</span>
          <div className="power-bar">
            <div className="power-fill"></div>
          </div>
          <span className="skill-effect" data-text="SMASH!">
            <span>SMASH!</span>
          </span>
        </li>

        <li
          className="skill-item"
          style={{ "--skill-power": "95%", "--skill-color": "#FFD700" } as React.CSSProperties}
        >
          <span className="skill-name permanent-marker-text">CREATIVE CHAOS</span>
          <div className="power-bar">
            <div className="power-fill"></div>
          </div>
          <span className="skill-effect" data-text="UNLEASH!">
            <span>UNLEASH!</span>
          </span>
        </li>
      </ul>
    </section>
  );
}
