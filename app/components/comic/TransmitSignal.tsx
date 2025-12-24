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
        </h2>

        <p className="handwritten-text">
Wanna collaborate or contribute to the comic? Reach out through any of the following channels!
        </p>

        <div className="contact-links">
          <a
            href="mailto:sayanidas7414@gmail.com"
            className="contact-link"
            data-hover-sound="SEND!"
          >
            <span className="icon">✍️</span> EMAIL SCROLL
          </a>

 <form
  action="https://buttondown.email/api/emails/embed-subscribe/naitik"
  method="post"
  target="popupwindow"
  className="newsletter-form"
>
  <label className="contact-link">
    <span className="icon">✉️</span>
    <input
      type="email"
      name="email"
      required
      placeholder="your@email.com"
      className="newsletter-input"
    /><br></br>
    <button type="submit" className="newsletter-button" data-hover-sound="SUBSCRIBE!">
      Subscribe
    </button>
  </label>
</form>


<a
  href="https://forms.gle/detWUNYbvygYueQ58"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-link"
  data-hover-sound="UPLOAD!"
>
  <span className="icon">💾</span> SHARE YOUR THOUGHTS!
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
