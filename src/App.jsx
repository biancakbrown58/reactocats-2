import React, { Component } from 'react'
import Octocat from './components/Octocat'

export class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <nav>
            <ul>
              <li>
                <a href="#">
                  <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    width="45"
                    height="45"
                    alt="GithubLogo"
                  />
                </a>
              </li>
              <li className="octodex-logo">Octodex</li>
              <li className="home">Home</li>
              <li className="faq">FAQ</li>
            </ul>
            <ul>
              <li>Follow us on Twitter</li>
            </ul>
          </nav>
        </header>
        <main>
          <section className="images">
            <ul>
              <li>
                <Octocat
                  number="#1: "
                  name="Terracottocat"
                  src="https://octodex.github.com//images/Terracottocat_Single.png"
                  width="300"
                  height="300"
                  artistPic="https://github.com/chubbmo.png"
                ></Octocat>
              </li>
              <li>
                <Octocat
                  number="#2: "
                  name="Octogatos"
                  src="https://octodex.github.com//images/Octogatos.png"
                  width="300"
                  height="300"
                  artistPic="https://github.com/cameronfoxly.png"
                ></Octocat>
              </li>

              <li>
                <Octocat
                  number="#3: "
                  name="Sentrytocat"
                  src="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
                  width="300"
                  height="300"
                  artistPic="https://github.com/cameronmcefee.png"
                ></Octocat>
              </li>

              <li>
                <Octocat
                  number="#4: "
                  name="Boxertocat"
                  src="https://octodex.github.com//images/boxertocat_octodex.jpg"
                  width="300"
                  height="300"
                  artistPic="https://github.com/rubyjazzy.png"
                ></Octocat>
              </li>
              <li>
                <Octocat
                  number="#5: "
                  name="Surftocat"
                  src="https://octodex.github.com//images/surftocat.png"
                  width="300"
                  height="300"
                  artistPic="https://github.com/jeejkang.png"
                ></Octocat>
              </li>
              <li>
                <Octocat
                  number="#6: "
                  name="Scubatocat"
                  src="https://octodex.github.com//images/scubatocat.png"
                  width="300"
                  height="300"
                  artistPic="https://github.com/rubyjazzy.png"
                ></Octocat>
              </li>
              <li>
                <Octocat
                  number="#7: "
                  name="Dinotocat"
                  src="https://octodex.github.com//images/dinotocat.png"
                  width="300"
                  height="300"
                  artistPic="https://github.com/kimestoesta.png"
                ></Octocat>
              </li>
              <li>
                <Octocat
                  number="#8: "
                  name="Spidertocat"
                  src="https://octodex.github.com//images/spidertocat.png"
                  width="300"
                  height="300"
                  artistPic="https://github.com/jeejkang.png"
                ></Octocat>
              </li>
              <li>
                <Octocat
                  number="#9: "
                  name="Spidertocat 2.1"
                  src="https://octodex.github.com//images/spidertocat.png"
                  width="300"
                  height="300"
                  artistPic="https://github.com/jeejkang.png"
                ></Octocat>
              </li>
            </ul>
          </section>
        </main>
      </div>
    )
  }
}
