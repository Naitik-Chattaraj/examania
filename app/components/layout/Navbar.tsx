import Link from "next/link";

export function Navbar() {
  return (
    <header id="title-sequence">
        <div className="logo-container">
            <h1 className="main-title title-panel-bg" data-content="[YOUR ARTIST NAME]">
                <span>[YOUR ARTIST NAME]</span>
            </h1>
            <p className="subtitle comic-text">// VOL. 01: THE ORIGIN STORY //</p>
        </div>
        <nav id="chapter-select">
            <ul>
                <li><a href="#character-file" className="nav-link " data-hover-sound="WHOOSH!">PROFILE</a></li>
                <li><a href="#story-arcs" className="nav-link" data-hover-sound="SWIPE!">CREATIONS</a></li>
                <li><a href="#skill-arsenal" className="nav-link" data-hover-sound="POWER UP!">SKILLS</a></li>
                <li><a href="#transmit-signal" className="nav-link" data-hover-sound="PING!">CONTACT</a></li>
            </ul>
        </nav>
    </header>
  );
}
