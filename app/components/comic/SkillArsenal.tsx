export default function SkillArsenal() {
  return (
    <section id="skill-arsenal" className="comic-panel panel-skewed">
      <div className="panel-header speech-bubble-alt center">
        <h2
          className="section-title bangers-text"
          data-text="LATEST UPDATE PREVIEW"
        >
         LATEST UPDATE PREVIEW
        </h2>
      </div>

      <ul className="skills-list">
        <li
          className="skill-item"
          style={{ "--skill-power": "90%", "--skill-color": "#FF4500" } as React.CSSProperties}
        >
          <span className="skill-name permanent-marker-text">Character Arcs</span>
          <div className="power-bar">
            <div className="power-fill"></div>
          </div>
          <span className="skill-effect" data-text="SLASH!">
            <span>SLASH!</span>
          </span>
        </li>

        <li
          className="skill-item"
          style={{ "--skill-power": "50%", "--skill-color": "#1E90FF" } as React.CSSProperties}
        >
          <span className="skill-name permanent-marker-text">Panel Layout & Flow</span>
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
          <span className="skill-name permanent-marker-text">Speech & Thought Bubbles</span>
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
