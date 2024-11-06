import './App.css'

function App() {
  async function onLoad() {
    const fonts = ['Bubble Garden', 'Sushi Moshi', 'Nabla', 'Pixelify Sans', 'Ginto', 'Snowy Christa', 'Fizzy Soda', 'Romantic Party'];
    let title = document.getElementById('title');
    if (!title) return;
    console.log(title);
    title.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
  }
  return (
    <>
      <header>
        <h1 id="title" onClick={onLoad}>WebyMajigs</h1>
      </header>
      <main>
        <div className="grid">
          <div className="grid-item" onClick={() => window.open('https://barxilly.github.io/profile-judge-build/')}>
            <div className="item-image"><img className="item-image" src="images/judge.png" alt="judge" /><h3 className="hover-open">Open</h3></div>
            <h2 className="item-title">Github Profile Judge</h2>
            <p className="item-desc">A super-advanced AI supercomputer that will provide an expert analysis of your Github profile.</p>
            <div className="item-tags">
              <span className="tag">#Tag</span>
              <span className="tag-separator">•</span>
              <span className="tag">#Tag</span>
            </div>
          </div>
          <div className="grid-item" onClick={() => window.open('https://barxilly.github.io/profile-judge-build/')}>
            <div className="item-image"><img className="item-image" src="images/judge.png" alt="judge" /><h3 className="hover-open">Open</h3></div>
            <h2 className="item-title">Github Profile Judge</h2>
            <p className="item-desc">A super-advanced AI supercomputer that will provide an expert analysis of your Github profile.</p>
            <div className="item-tags">
              <span className="tag">#Tag</span>
              <span className="tag-separator">•</span>
              <span className="tag">#Tag</span>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Ben J. Smith. All rights reserved.</p>
      </footer>
    </>
  )
}


export default App