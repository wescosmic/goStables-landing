import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FeatureCard from '../components/feature-card'
import Slide from '../components/slide'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>goStables</title>
        <meta property="og:title" content="goStables" />
      </Helmet>
      <Navbar
        image_src="/playground_assets/gostables-logo-alt-1500h.png"
        image_src1="/playground_assets/gostables-logo-alt-1500h.png"
        rootClassName="navbar-root-class-name"
      ></Navbar>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-content-container">
            <div className="home-content-container">
              <h1 className="home-text">
                <span>
                  Decentralized
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text02">Stablecoins</span>
                <span> For The Caribbean</span>
              </h1>
              <div className="home-features-container">
                <div className="home-feature">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text04">
                    Transact in local and regional stablecoins on the Tron
                    Blockchain
                  </span>
                </div>
                <div className="home-feature1">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon2"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text05">
                    Accept gXCD, gTTD, gBBD, gJMD and more at your online shops
                  </span>
                </div>
                <div className="home-feature2">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon4"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text06">
                    Exchange your gStables for USDD anytime
                  </span>
                </div>
              </div>
              <div className="home-input-container">
                <button className="home-button button-primary button">
                  Get started
                </button>
                <button className="home-button1 button-primary button">
                  How it Works
                </button>
              </div>
            </div>
            <div className="home-image-container">
              <img
                alt="image"
                src="/playground_assets/hero%20image-500w.png"
                className="home-image"
              />
            </div>
          </div>
        </div>
        <div className="home-stats">
          <div className="home-stat">
            <h1 className="home-text07">$6,000,789</h1>
            <span className="home-text08">Total Volume</span>
          </div>
          <div className="home-stat1">
            <h1 className="home-text09">$4,693,089</h1>
            <span className="home-text10">Total Supply</span>
          </div>
          <div className="home-stat2">
            <h1 className="home-text11">990,023</h1>
            <span className="home-text12">Transactions</span>
          </div>
        </div>
        <div className="home-section-one section-container">
          <div className="home-max-width1 max-content-container">
            <h2 className="home-text13">
              <span className="home-text14">
                Accelerating economic growth &amp; inclusion
              </span>
              <br className="heading2"></br>
              <span className="heading2">
                with collateral backed stablecoins
              </span>
              <br className="heading2"></br>
              <span className="heading2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h2>
            <div className="home-container01">
              <div className="home-container02">
                <div className="home-container03">
                  <div className="home-container04">
                    <div className="home-container05">
                      <img
                        alt="image"
                        src="/playground_assets/xcdd-200h.png"
                        className="home-image01"
                      />
                    </div>
                    <img
                      alt="image"
                      src="/playground_assets/ttdd-200h.png"
                      className="home-image02"
                    />
                  </div>
                  <img
                    alt="image"
                    src="/playground_assets/bbdd-200h.png"
                    className="home-image03"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/jmdd-200h.png"
                    className="home-image04"
                  />
                </div>
                <img
                  alt="image"
                  src="/playground_assets/bsdd-200h.png"
                  className="home-image05"
                />
                <img
                  alt="image"
                  src="/playground_assets/awgd-200h.png"
                  className="home-image06"
                />
              </div>
              <img
                alt="image"
                src="/playground_assets/cupd-200h.png"
                className="home-image07"
              />
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width2 max-content-container">
            <div className="home-image-container1">
              <img
                alt="image"
                src="/playground_assets/section-image1-1200w.png"
                className="home-image08"
              />
            </div>
            <div className="home-content-container1">
              <h1 className="home-text19">
                <span className="heading2">Introd</span>
                <span className="heading2">uc</span>
                <span className="heading2">
                  ing
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text23 heading2">g</span>
                <span className="home-text24">Stables</span>
              </h1>
              <span className="home-text25">
                <span>
                  gStables are decentralized stablecoins on the Tron Blockchain,
                  tracking the price of real-world currencies. Powered by the
                  goStables Protocol.
                </span>
                <br></br>
                <br></br>
                <span>gStables are over-collateralized with USDD.</span>
                <br></br>
                <br></br>
                <span>
                  gStables can be swapped from/to USDD anytime, at their
                  real-world exchange rate
                </span>
                <span className="home-text33">*</span>
                <br></br>
                <br></br>
                <br></br>
                <span className="home-text37">*+ 0.3% </span>
                <span className="home-text38">Protocol fee</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-content-container2">
              <h1 className="home-text40">
                <span className="home-text41">Over-collateralized</span>
                <span> with USDD</span>
              </h1>
              <div className="home-container06">
                <div className="home-container07">
                  <div className="home-container08">
                    <div className="home-container09"></div>
                  </div>
                </div>
              </div>
              <span className="home-text43">
                <span>
                  US Decentralized Dollar (USDD) is pegged 1:1 with the price of
                  USD and is over-collateralized with a basket of crypto assets
                  including:
                </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </span>
              <div className="home-container10">
                <img
                  alt="BTC"
                  src="/playground_assets/btc-200h.png"
                  className="home-image09"
                />
                <img
                  alt="TRX"
                  src="/playground_assets/trx-200h.png"
                  className="home-image10"
                />
                <img
                  alt="USDT"
                  src="/playground_assets/usdt-200h.png"
                  className="home-image11"
                />
                <img
                  alt="USDC"
                  src="/playground_assets/usdc-200w.png"
                  className="home-image12"
                />
                <img
                  alt="TUSD"
                  src="/playground_assets/tusd-200h.png"
                  className="home-image13"
                />
              </div>
              <span className="home-text48">
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  USDD can be swapped for other popular crypto assets and
                  stablecoins anytime, across multiple blockchains.
                </span>
                <br></br>
                <br></br>
                <a
                  href="https://tdr.org"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                  Learn more about TronDAO Reserve &gt;
                </a>
                <br></br>
              </span>
            </div>
            <div className="home-image-container2">
              <img
                alt="image"
                src="/playground_assets/section-image2-1200w.png"
                className="home-image14"
              />
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width4 max-content-container">
            <div className="home-image-container3">
              <img
                alt="image"
                src="/playground_assets/section-image1-1200w.png"
                className="home-image15"
              />
            </div>
            <div className="home-container11">
              <div className="home-content-container3">
                <h1 className="home-text55">
                  <span className="heading2">Earn with</span>
                  <br className="heading2"></br>
                  <span className="heading2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text59 heading2">g</span>
                  <span className="home-text60">Stable Vaults</span>
                </h1>
                <span className="home-text61">
                  <span>Add your USDD or USDJ</span>
                  <span> to a gStable Vault, freezing it for 30 days.</span>
                  <br></br>
                  <br></br>
                  <span className="home-text66">Get up to 70%</span>
                  <span>
                    {' '}
                    of your Vault&apos;s value in the equivalent gStable.
                  </span>
                  <br></br>
                  <br></br>
                  <span className="home-text70">Earn 30%</span>
                  <span>
                    {' '}
                    of the protocol&apos;s fees in gStables. Sent to your wallet
                    every 28 days.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Return your gStables to the Vault anytime after it unfreezes
                    to withdraw your added USDD or USDJ
                  </span>
                  <span className="home-text75">*</span>
                  <br></br>
                  <br></br>
                  <br></br>
                  <span className="home-text79">
                    * USDJ available for gStable Vaults only
                  </span>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </span>
              </div>
              <button className="home-button2 button">Launch App</button>
            </div>
          </div>
        </div>
        <div className="home-features">
          <h1 className="home-text84">
            <span className="home-text85">Use Cases</span>
            <span> </span>
            <span className="home-text87">at a glance</span>
          </h1>
          <div className="home-container12">
            <FeatureCard
              title="Buy and Sell"
              description="Buy gStables with their fiat equivalent and sell them back to fiat"
              rootClassName="rootClassName"
            ></FeatureCard>
            <FeatureCard
              title="Exchange"
              description="Trade gStables for any other crypto asset with little to no price impact"
              rootClassName="rootClassName3"
            ></FeatureCard>
            <FeatureCard
              title="Payment and Remittance"
              description="Send to anyone,  accept gStables for new and existing products/services - boosting local and inter-regional commerce"
              rootClassName="rootClassName2"
            ></FeatureCard>
            <FeatureCard
              title="Build and Earn"
              description="Use gStable Vaults to kickstart online businesses and earn as the protocol grows"
              rootClassName="rootClassName1"
            ></FeatureCard>
            <FeatureCard
              title="Liquidity Provisioning"
              description="Expand your liquidity depth by pairing gStables with other stablecoins and crypto assets in localised markets"
              rootClassName="rootClassName1"
            ></FeatureCard>
            <FeatureCard
              title="Decentralized Banking"
              description="Integrate gStables with other onchain protocols to enable sustainable yield generation"
              rootClassName="rootClassName1"
            ></FeatureCard>
          </div>
          <span className="home-text88">
            <span className="home-text89">Limitless</span>
            <span> Possibilites...</span>
          </span>
        </div>
        <div className="home-section-four section-container">
          <div className="home-max-width5 max-content-container">
            <h2 className="home-text91">
              <span>Our </span>
              <span className="home-text93">Vision</span>
            </h2>
          </div>
          <div data-type="slider" className="home-slider">
            <Slide rootClassName="slide-root-class-name2"></Slide>
            <Slide
              Role="DESIGN DIRECTOR"
              Author="Bill Smith"
              Vision='“Stunning app! I use it everyday since I discovered it and love it every since. It really makes newsreading a pleasure. I enjoy all the customization options available, super highly recommended!"'
              image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              Testimonial2="Super highly recommended!”"
              rootClassName="slide-root-class-name"
            ></Slide>
            <Slide
              Role="FREELANCE WRITER"
              Author="Julia Xang"
              Vision="“Feedbox is very easy to use and flexible! I especially like the pre-made templates that are accessible; they're extraordinary for monitoring a few feed sources and various RSS Feeds together.”"
              image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              rootClassName="slide-root-class-name1"
            ></Slide>
          </div>
        </div>
        <div className="home-section-five section-container">
          <div className="home-banner">
            <h1 className="home-text94">
              <span className="home-text95">Join</span>
              <span> The Community</span>
            </h1>
            <span className="home-text97">
              Become part of this journey. Let&apos;s see where we can take this
              together. 
            </span>
            <div className="home-btn-group">
              <button className="home-button3 button">Launch App</button>
              <button className="home-button4 button">Github</button>
              <button className="home-button5 button">Telegram</button>
              <button className="home-button6 button">Twitter</button>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Home
