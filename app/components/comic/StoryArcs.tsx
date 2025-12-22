export default function StoryArcs() {
  return (
    <section id="story-arcs" className="comic-panel panel-full-bleed">
      <div className="panel-header speech-bubble left pop-out">
        <h2
          className="section-title bangers-text"
          data-text="THE 'OG' CAST"
        >
          THE 'OG' CAST
        </h2>
      </div>

      <div className="projects-grid">
        <article className="project-item">
          <div className="project-thumbnail-container">
            <img
              src="https://placehold.co/400x280/222222/FFFFFF?text=Character-1&font=bangers"
              alt="Project Alpha"
              className="project-thumbnail"
            />
            <div className="project-overlay">
              <h3 className="project-title permanent-marker-text">
                Character 1
              </h3>
              <span className="view-trigger" data-hover-sound="VIEW!">
                VIEW!
              </span>
            </div>
          </div>

          <div className="project-description handwritten-text">
            <p>
              Brief info about Character 1. Maybe their role or a catchphrase.
            </p>
            <a href="#" target="_blank" className="cta-button">
              ENTER HIS/HER WORLD <span className="arrow">&gt;</span>
            </a>
          </div>
        </article>

        <article className="project-item">
          <div className="project-thumbnail-container">
            <img
              src="https://placehold.co/400x280/1a1a1a/FF4500?text=Character-2&font=bangers"
              alt="Character-2"
              className="project-thumbnail"
            />
            <div className="project-overlay">
              <h3 className="project-title permanent-marker-text">
                Character-2
              </h3>
              <span className="view-trigger" data-hover-sound="SHHHH!">
                SHHHH!
              </span>
            </div>
          </div>

          <div className="project-description handwritten-text">
            <p>
              Behind the mystery of Character-2. What makes them tick?
            </p>
            <a href="#" target="_blank" className="cta-button">
              UNCOVER THE SECRETS <span className="arrow">&gt;</span>
            </a>
          </div>
        </article>

        <article className="project-item">
          <div className="project-thumbnail-container">
            <img
              src="https://placehold.co/400x280/000/00FF00?text=Character-3&font=bangers"
              alt="Project Gamma"
              className="project-thumbnail"
            />
            <div className="project-overlay">
              <h3 className="project-title permanent-marker-text">
                Character-3
              </h3>
              <span className="view-trigger" data-hover-sound="EXPLORE!">
                EXPLORE!
              </span>
            </div>
          </div>

          <div className="project-description handwritten-text">
            <p>
              Explore the adventures of Character-3 and their unique traits.
            </p>
            <a href="#" target="_blank" className="cta-button">
              DISCOVER HIM/HER <span className="arrow">&gt;</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
