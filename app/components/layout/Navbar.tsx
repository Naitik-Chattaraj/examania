import Link from "next/link";

export function Navbar() {
  return (
    <header id="title-sequence">
        <div className="logo-container">
            <h1 className="main-title title-panel-bg tracking-[10px]" data-content="EXAMANIA">
                <span>EXAMANIA</span>
            </h1>
            <p className="subtitle comic-text">// A COMEDIC SHOWDOWN //</p>
        </div>
        <nav id="chapter-select">
            <ul>
                
                <li><a href="#story-arcs" className="nav-link" data-hover-sound="SWIPE!">MEET THE CAST</a></li>
                <li><a href="#character-file" className="nav-link " data-hover-sound="WHOOSH!">ABOUT THE AUTHOR</a></li>
                <li><a href="#skill-arsenal" className="nav-link" data-hover-sound="POWER UP!">LATEST UPDATE PREVIEW</a></li>
                <li><a href="#transmit-signal" className="nav-link" data-hover-sound="PING!">CONTACT</a></li>
            </ul>
        </nav>
    </header>
  );
}
