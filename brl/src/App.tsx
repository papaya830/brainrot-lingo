import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="u-clearfix u-header u-header" id="sec-f686">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <a href="#" className="u-image u-logo u-image-1">
            <img src="images/default-logo.png" className="u-logo-image u-logo-image-1"></img>
          </a>
          <nav className="u-menu u-menu-one-level u-offcanvas u-menu-1">
            <div className="menu-collapse" style={{fontSize: "1rem", letterSpacing: "0px"}}>
              <a className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                href="#">
                <svg className="u-svg-link" viewBox="0 0 24 24">
                  <use xlinkHref="#menu-hamburger"></use>
                </svg>
                <svg className="u-svg-content" version="1.1" id="menu-hamburger" viewBox="0 0 16 16" x="0px" y="0px"
                  xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <rect y="1" width="16" height="2"></rect>
                    <rect y="7" width="16" height="2"></rect>
                    <rect y="13" width="16" height="2"></rect>
                  </g>
                </svg>
              </a>
            </div>
            <div className="u-custom-menu u-nav-container">
              <ul className="u-nav u-unstyled u-nav-1">
                <li className="u-nav-item"><a
                  className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="./"
                  style={{padding: "10px 20px"}}>Home</a>
                </li>
                <li className="u-nav-item"><a
                  className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                  href="Dictionary.html" style={{padding: "10px 20px"}}>Dictionary</a>
                </li>
                <li className="u-nav-item"><a
                  className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                  href="Learn.html" style={{padding: "10px 20px"}}>Learn</a>
                </li>
              </ul>
            </div>
            <div className="u-custom-menu u-nav-container-collapse">
              <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                <div className="u-inner-container-layout u-sidenav-overflow">
                  <div className="u-menu-close"></div>
                  <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                    <li className="u-nav-item"><a className="u-button-style u-nav-link" href="./">Home</a>
                    </li>
                    <li className="u-nav-item"><a className="u-button-style u-nav-link" href="Dictionary.html">Dictionary</a>
                    </li>
                    <li className="u-nav-item"><a className="u-button-style u-nav-link" href="Learn.html">Learn</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
            </div>
          </nav>
        </div>
      </header>
      <section
        className="u-align-center u-clearfix u-container-align-center u-image u-shading u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-section-1"
        id="sec-ce7e" data-image-width="1980" data-image-height="1114">
        <div className="data-layout-selected u-clearfix u-gutter-0 u-layout-wrap u-layout-wrap-1">
          <div className="u-layout">
            <div className="u-layout-row">
              <div
                className="u-align-left u-container-align-left u-container-style u-layout-cell u-left-cell u-shape-rectangle u-size-20-lg u-size-20-xl u-size-23-md u-size-23-sm u-size-23-xs u-size-xs-60 u-layout-cell-1"
                >
                <div className="u-container-layout u-container-layout-1">
                  <h1 className="u-text u-text-body-alt-color u-text-1" data-animation-name="fadeIn"
                    data-animation-duration="1000" data-animation-direction="Left" data-animation-delay="250"> BrainRot
                    Lingo</h1>
                </div>
              </div>
              <div
                className="u-align-center u-container-align-center u-container-style u-layout-cell u-right-cell u-size-37-md u-size-37-sm u-size-37-xs u-size-40-lg u-size-40-xl u-size-xs-60 u-layout-cell-2">
                <div className="u-container-layout u-container-layout-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <footer className="u-align-center u-clearfix u-container-align-center u-footer u-grey-80 u-footer" id="sec-6fca">
        <div className="u-clearfix u-sheet u-sheet-1">
          <p className="u-small-text u-text u-text-variant u-text-1">Sample text. Click to select the Text Element.</p>
        </div>
      </footer>
      <section className="u-backlink u-clearfix u-grey-80">
        <p className="u-text">
          <span>This site was created with the </span>
          <a className="u-link" href="https://nicepage.com/" target="_blank" rel="nofollow">
            <span>Nicepage</span>
          </a>
        </p>
      </section>
    </>
  )
}

export default App
