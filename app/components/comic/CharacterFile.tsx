export default function CharacterFile() {
  return (
    <section id="character-file" className="comic-panel panel-angled-top-right">
      <div className="panel-header speech-bubble right">
        <h2
          className="section-title bangers-text"
          data-text="THE AUTHOR FILE"
        >
          THE AUTHOR FILE
        </h2>
      </div>

      <div className="panel-content about-layout">
        <div className="profile-image-container">
          <img
            src="/author.jpeg"
            alt="Your amazing sketch"
            className="profile-sketch"
          />
          <div className="impact-lines"></div>
        </div>

        <div className="bio-text">
          <p className="handwritten-text">
           Hi, I’m Sayani Das, the creator of Examania. I tell stories where classrooms
            become battlegrounds, exams feel like final bosses, and ordinary school days 
            turn into unforgettable comic moments. What began as sketches, exaggerated
             thoughts, and random ideas during school slowly evolved into a universe built
              on real experiences, emotions, and humour that every student can relate to.




          </p>

          <p className="handwritten-text">
Examania is deeply inspired by everyday school life—the pressure, the friendships, the panic, the laughter,
 and the memories that stay long after the bell rings. I enjoy blending relatable storytelling with bold 
 comic aesthetics, expressive panels, and a dramatic yet playful tone that reflects how school truly feels 
 from the inside.

          </p>
<p className="handwritten-text">
This project is my way of capturing the chaos and charm of student life and 
turning it into something fun, honest, and visually dynamic. It’s a reminder
 that even the most stressful moments can become stories worth laughing about later.

</p>
  <p className="handwritten-text">
Thanks for stepping into the world of Examania. 
The story doesn’t end here—it’s only just getting started.
  </p>
  
          <p className="screaming-text">
            <span>GET READY!</span>
          </p>
        </div>
      </div>
    </section>
  );
}
