export default function CharacterFile() {
  return (
    <section id="character-file" className="comic-panel panel-angled-top-right">
      <div className="panel-header speech-bubble right">
        <h2
          className="section-title bangers-text"
          data-text="CHARACTER FILE"
        >
          CHARACTER FILE
        </h2>
      </div>

      <div className="panel-content about-layout">
        <div className="profile-image-container">
          <img
            src="https://placehold.co/300x400/e0e0e0/333333?text=Your+Cool+Sketch+Here&font=permanentmarker"
            alt="Your amazing sketch"
            className="profile-sketch"
          />
          <div className="impact-lines"></div>
        </div>

        <div className="bio-text">
          <p className="handwritten-text">
            Yo! I'm [Your Name/Alias], the artist/developer/creator behind these
            digital scrolls. I sling code like shurikens and design interfaces
            sharper than a katana (sometimes).
          </p>

          <p className="handwritten-text">
            My mission? To craft digital experiences that KICK ASS and tell a
            story. Whether it's [Your Speciality 1] or [Your Speciality 2], I
            pour my soul (and copious amounts of caffeine) into every line and
            pixel.
          </p>

          <p className="screaming-text" data-text="GET READY!">
            <span>GET READY!</span>
          </p>
        </div>
      </div>
    </section>
  );
}
