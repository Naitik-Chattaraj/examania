export default function StoryArcs() {
  return (
    <section id="story-arcs" className="comic-panel panel-full-bleed">
      <div className="panel-header speech-bubble left pop-out">
        <h2
          className="section-title bangers-text"
          data-text="STORY ARCS (Projects)"
        >
          STORY ARCS (Projects)
        </h2>
      </div>

      <div className="projects-grid">
        <article className="project-item">
          <div className="project-thumbnail-container">
            <img
              src="https://placehold.co/400x280/222222/FFFFFF?text=Project+Alpha:+The+Awakening&font=bangers"
              alt="Project Alpha"
              className="project-thumbnail"
            />
            <div className="project-overlay">
              <h3 className="project-title permanent-marker-text">
                Project Alpha: The Awakening
              </h3>
              <span className="view-trigger" data-hover-sound="VIEW!">
                VIEW!
              </span>
            </div>
          </div>

          <div className="project-description handwritten-text">
            <p>
              A tale of a nascent AI achieving sentience. Features dynamic blah
              blah and impactful woosh!
            </p>
            <a href="#" target="_blank" className="cta-button">
              ENTER ARC <span className="arrow">&gt;</span>
            </a>
          </div>
        </article>

        <article className="project-item">
          <div className="project-thumbnail-container">
            <img
              src="https://placehold.co/400x280/1a1a1a/FF4500?text=Project+Beta:+Cyberpunk+Chronicles&font=bangers"
              alt="Project Beta"
              className="project-thumbnail"
            />
            <div className="project-overlay">
              <h3 className="project-title permanent-marker-text">
                Cyberpunk Chronicles
              </h3>
              <span className="view-trigger" data-hover-sound="ENGAGE!">
                ENGAGE!
              </span>
            </div>
          </div>

          <div className="project-description handwritten-text">
            <p>
              Navigating the neon-drenched underbelly of a futuristic city.
              Prepare for glitch effects!
            </p>
            <a href="#" target="_blank" className="cta-button">
              JACK IN <span className="arrow">&gt;</span>
            </a>
          </div>
        </article>

        <article className="project-item">
          <div className="project-thumbnail-container">
            <img
              src="https://placehold.co/400x280/333333/00FF00?text=Project+Gamma:+Mystic+Realms&font=bangers"
              alt="Project Gamma"
              className="project-thumbnail"
            />
            <div className="project-overlay">
              <h3 className="project-title permanent-marker-text">
                Mystic Realms Online
              </h3>
              <span className="view-trigger" data-hover-sound="EXPLORE!">
                EXPLORE!
              </span>
            </div>
          </div>

          <div className="project-description handwritten-text">
            <p>
              An illustrated interface for a fantasy world. User scrolls are
              like ancient maps.
            </p>
            <a href="#" target="_blank" className="cta-button">
              DISCOVER <span className="arrow">&gt;</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
