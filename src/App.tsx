import './App.css'

function App() {
  async function onLoad() {
    const fonts = ['Bubble Garden', 'Sushi Moshi', 'Nabla', 'Pixelify Sans', 'Ginto', 'Snowy Christa', 'Fizzy Soda', 'Romantic Party'];
    let title = document.getElementById('title');
    if (!title) return;
    console.log(title);
    title.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
  }

  async function pageloaded() {
    // Check tags
    if (window.location.search.includes('tag=')) {
      let showall = document.getElementById('showall');
      if (!showall) return;
      showall.style.display = 'flex';
      let tag = window.location.search.split('=')[1];
      let items = document.getElementsByClassName('grid-item');
      for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (item.classList.contains('tag-' + tag)) {
          item.classList.remove('tag-inactive');
        } else {
          item.classList.add('tag-inactive');
        }
      }
    }
  }
  return (
    <>
      <header>
        <h1 id="title" onClick={onLoad}>WebyMajigs</h1>
      </header>
      <main>
        <div className="item-tags" id="showall" style={{ marginBottom: "1rem", justifyContent: "center", display: "none" }}>
          <span className="tag"><a href="/" style={{ fontSize: "1rem" }}>Show All</a></span>
        </div>
        <div className="grid">
          {/* 
          * Profile Judge
          */}
          <div className="grid-item tag-react tag-ai">
            <div className="item-image" onClick={() => window.open('https://barxilly.github.io/profile-judge-build/')}><img className="item-image" src="images/judge.png" alt="judge" /><h3 className="hover-open">Open</h3></div>
            <h2 className="item-title" onClick={() => window.open('https://barxilly.github.io/profile-judge-build/')}>Github Profile Judge</h2>
            <p className="item-desc" onClick={() => window.open('https://barxilly.github.io/profile-judge-build/')}>A super-advanced AI supercomputer that will provide an expert analysis of your Github profile.</p>
            <div className="item-tags">
              <span className="tag"><a href="/?tag=react">#React</a></span>
              <span className="tag"><a href="/?tag=ai">#AI</a></span>
            </div>
          </div>

          {/*
          * FBI Game
          */}
          <div className="grid-item tag-react tag-apis">
            <div className="item-image" onClick={() => window.open('https://fbi.benjs.cfd')}><img className="item-image" src="https://cloud-jbuje803f-hack-club-bot.vercel.app/0screenshot_2024-11-07_105849.png" alt="fbi" /><h3 className="hover-open">Open</h3></div>
            <h2 className="item-title" onClick={() => window.open('https://fbi.benjs.cfd')}>Match the Mugshot</h2>
            <p className="item-desc" onClick={() => window.open('https://fbi.benjs.cfd')}>A game using the FBI and Interpol APIs where you match cases to photos.</p>
            <div className="item-tags">
              <span className="tag"><a href="/?tag=react">#React</a></span>
              <span className="tag"><a href="/?tag=apis">#APIs</a></span>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Ben J. Smith. All rights reserved.</p>
      </footer>
      <img alt="One Pixel" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png" onLoad={pageloaded} />
    </>
  )
}


export default App