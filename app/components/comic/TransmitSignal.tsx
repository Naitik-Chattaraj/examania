export default function TransmitSignal() {
  return (
    <section id="transmit-signal" className="comic-panel panel-diagonal-split">
      <div className="split-left halftone-bg">
        <div className="panel-header speech-bubble right small">
          <h2
            className="section-title bangers-text"
            data-text="TRANSMIT SIGNAL"
          >
            TRANSMIT
          </h2>
        </div>
      </div>

      <div className="split-right">
        <h2
          className="section-title bangers-text visible-mobile"
          data-text="SIGNAL"
        >
          SIGNAL
        </h2>

        <p className="handwritten-text">
          Need a hero for your next digital quest? Or just wanna share epic
          fanart?
        </p>

        <div className="contact-links">
          <a
            href="mailto:your.alias@example.com"
            className="contact-link"
            data-hover-sound="SEND!"
          >
            <span className="icon">✉️</span> EMAIL SCROLL
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            data-hover-sound="CONNECT!"
          >
            <span className="icon">✍️</span> GUEST ARTIST (LinkedIn)
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            data-hover-sound="UPLOAD!"
          >
            <span className="icon">💾</span> DATA REPOSITORY (GitHub)
          </a>
        </div>

        <div className="random-sound-container">
          <p id="random-sound-text" className="action-text">
            CLICK ME!
          </p>
        </div>
      </div>
    </section>
  );
}
