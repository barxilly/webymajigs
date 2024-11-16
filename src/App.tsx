import { FaVolumeMute } from 'react-icons/fa';
import './App.css'
import { FaVolumeHigh } from 'react-icons/fa6';
import { Center } from '@mantine/core';
import '@mantine/core/styles.css';
import { useEffect } from 'react';

declare global {
  interface Window {
    iFrameResize: any;
  }
}

const bgm = new Audio('/sounds/back.mp3');
const select = new Audio('/sounds/Select.wav');

bgm.loop = true;
bgm.volume = 0.25;

function App() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "/iframeResizer.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.iFrameResize) {
        window.iFrameResize({}, document.querySelector('iframe'));
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  async function onLoad() {
    const fonts = ['Bubble Garden', 'Sushi Moshi', 'Nabla', 'Pixelify Sans', 'Ginto', 'Snowy Christa', 'Fizzy Soda', 'Romantic Party'];
    let title = document.getElementById('title');
    if (!title) return;
    console.log(title);
    title.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
  }

  async function onHover() {
    if (!bgm.paused) {
      select.play();
    }

  }

  async function toggleBgm() {
    const mute = document.getElementById('mute');
    const sound = document.getElementById('sound');
    const mutei = document.getElementById('mutei');
    if (!mute) return;
    if (!sound) return;
    if (!mutei) return;
    if (bgm.paused) {
      mutei.style.display = 'none';
      sound.style.display = 'inline';
      bgm.play();
    } else {
      mutei.style.display = 'inline';
      sound.style.display = 'none';
      bgm.pause();
    }
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

        <div id="mute" onClick={toggleBgm} >
          <FaVolumeMute id="mutei" />
          <FaVolumeHigh id="sound" style={{ display: "none" }} />
        </div>
        <div className="item-tags" id="showall" style={{ marginBottom: "1rem", justifyContent: "center", display: "none" }}>
          <span className="tag"><a href="/" style={{ fontSize: "1rem" }}>Show All</a></span>
        </div>
        <div className="grid">
          {/* 
          * Profile Judge
          */}
          <div className="grid-item tag-react tag-ai" onMouseEnter={onHover}>
            <div className="item-image" onClick={() => window.open('https://barxilly.github.io/profile-judge-build/')}><img className="item-image" src="https://techcrunch.com/wp-content/uploads/2022/07/GitHub.jpg?resize=1200,656" alt="judge" /><h3 className="hover-open">Open</h3></div>
            <h2 className="item-title" onClick={() => window.open('https://barxilly.github.io/profile-judge-build/')}>Github Profile Judge</h2>
            <p className="item-desc" onClick={() => window.open('https://barxilly.github.io/profile-judge-build/')}>A super-advanced AI supercomputer that will provide an expert analysis of your Github profile.</p>
            <div className="item-tags">
              <span className="tag"><a href="/?tag=react">#React</a></span>
              <span className="tag"><a href="/?tag=ai">#AI</a></span>
            </div>
          </div>

          {/*
          * LIVE
          * Counter
          */}
          <div className="grid-item" onMouseEnter={onHover} style={{ overflow: 'scroll', maxHeight: '35em' }}>
            <iframe onLoad={() => window.iFrameResize && window.iFrameResize({}, document.querySelector('iframe'))} src="https://c92a78ac8af14b838c7918432ad9bcc1.elf.site" style={{ border: 'none', width: '100% !important' }}></iframe>
          </div>

          {/*
          * FBI Game
          */}
          <div className="grid-item tag-react tag-apis tag-game" onMouseEnter={onHover}>
            <div className="item-image" onClick={() => window.open('https://fbi.benjs.uk')}><img className="item-image" src="https://www.fbi.gov/wanted/counterintelligence/wang-qiang/@@images/image/thumb" alt="fbi" /><h3 className="hover-open">Open</h3></div>
            <h2 className="item-title" onClick={() => window.open('https://fbi.benjs.uk')}>Match the Mugshot</h2>
            <p className="item-desc" onClick={() => window.open('https://fbi.benjs.uk')}>A game using the FBI and Interpol APIs where you match cases to photos.</p>
            <div className="item-tags">
              <span className="tag"><a href="/?tag=react">#React</a></span>
              <span className="tag"><a href="/?tag=apis">#APIs</a></span>
              <span className="tag"><a href="/?tag=game">#Game</a></span>
            </div>
          </div>


          {/*
          * Tech Personality Quiz
          */}
          <div className="grid-item tag-react tag-game" onMouseEnter={onHover}>
            <div className="item-image" onClick={() => window.open('https://quiz.benjs.uk')}><img className="item-image" src="/images/arch.png" alt="quiz" /><h3 className="hover-open">Open</h3></div>
            <h2 className="item-title" onClick={() => window.open('https://quiz.benjs.uk')}>Tech Personality Quiz</h2>
            <p className="item-desc" onClick={() => window.open('https://quiz.benjs.uk')}>A quiz game where you find out what tech personality you have.</p>
            <div className="item-tags">
              <span className="tag"><a href="/?tag=react">#React</a></span>
              <span className="tag"><a href="/?tag=game">#Game</a></span>
            </div>
          </div>

          {/*
          * To-Do React
          */}
          <div className="grid-item tag-react tag-tool" onMouseEnter={onHover}>
            <div className="item-image" onClick={() => window.open('https://todo.benjs.uk')}><img className="item-image" src="/images/todo.png" alt="quiz" /><h3 className="hover-open">Open</h3></div>
            <h2 className="item-title" onClick={() => window.open('https://todo.benjs.uk')}>To-Do React</h2>
            <p className="item-desc" onClick={() => window.open('https://todo.benjs.uk')}>My sleep deprived attempt at a to-do list app.</p>
            <div className="item-tags">
              <span className="tag"><a href="/?tag=react">#React</a></span>
              <span className="tag"><a href="/?tag=tool">#Tool</a></span>
            </div>
          </div>

          {/*
          * Blog
          */}
          <div className="grid-item tag-react tag-me" onMouseEnter={onHover}>
            <div className="item-image" onClick={() => window.open('https://blog.benjs.uk')}><img className="item-image" src="/images/b.png" alt="quiz" /><h3 className="hover-open">Open</h3></div>
            <h2 className="item-title" onClick={() => window.open('https://blog.benjs.uk')}>My Blog</h2>
            <p className="item-desc" onClick={() => window.open('https://blog.benjs.uk')}>Because I'm opinionated.</p>
            <div className="item-tags">
              <span className="tag"><a href="/?tag=react">#React</a></span>
              <span className="tag"><a href="/?tag=me">#Me</a></span>
            </div>
          </div>

          {/*
          * LIVE
          * Blog
          */}
          <div className="grid-item" onMouseEnter={onHover} style={{ overflow: 'scroll', maxHeight: '35em' }}>
            <div style={{ height: '100vh' }}>
              <iframe onLoad={() => window.iFrameResize && window.iFrameResize({}, document.querySelector('iframe'))} src="https://2cc4178243294efb8d09d6768be36fe4.elf.site" style={{ border: 'none', width: '100%', height: '100% ' }}></iframe>
            </div>
          </div>

          {/*
          * My Page
          */}
          <div className="grid-item tag-react tag-me" onMouseEnter={onHover}>
            <div className="item-image" onClick={() => window.open('https://benjs.uk')}><img className="item-image" src="/images/me.png" alt="quiz" /><h3 className="hover-open">Open</h3></div>
            <h2 className="item-title" onClick={() => window.open('https://benjs.uk')}>My Personal Website</h2>
            <p className="item-desc" onClick={() => window.open('https://benjs.uk')}>My life in one place. WIP</p>
            <div className="item-tags">
              <span className="tag"><a href="/?tag=react">#React</a></span>
              <span className="tag"><a href="/?tag=me">#Me</a></span>
            </div>
          </div>

        </div>
      </main>
      <Center style={{ marginBottom: '5em' }}>
        <h3>More Coming Soon!</h3>
      </Center>
      <footer className="footer">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
        <div className="footer-socials" style={{ fontSize: "1.5rem" }}>
          <a
            href="https://bsky.app/profile/benjs.uk"
            target="_blank"
            className="footer-social"
          >
            <i className="fa-brands fa-bluesky"></i>
          </a>
          <a
            href="https://blog.benjs.uk/rss.xml"
            target="_blank"
            className="footer-social"
          >
            <i className="fa-solid fa-rss-square"></i>
          </a>
          <a
            href="https://github.com/barxilly"
            target="_blank"
            className="footer-social"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://dev.to/bendotjs" target="_blank" className="footer-social">
            <i className="fa-brands fa-dev"></i>
          </a>
          <a
            href="https://wa.me/447495338673"
            target="_blank"
            className="footer-social"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/benjsuk/"
            target="_blank"
            className="footer-social"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:ben@benjs.uk" target="_blank" className="footer-social">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()}-{new Date().getFullYear() + 1} Ben Smith.
          All rights reserved.
        </p>
      </footer>
      <script src="https://static.elfsight.com/platform/platform.js" async></script>
      <img alt="One Pixel" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png" onLoad={pageloaded} />
    </>
  )
}


export default App

