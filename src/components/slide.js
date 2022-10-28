import React from 'react'

import PropTypes from 'prop-types'

import './slide.css'

const Slide = (props) => {
  return (
    <div
      data-type="slide"
      className={`slide-slide slide ${props.rootClassName} `}
    >
      <div className="slide-max-width max-content-container">
        <div className="slide-left-side">
          <div className="slide-decorations-container">
            <img
              alt="image"
              src="/playground_assets/union-200h.png"
              className="slide-dots"
            />
            <div className="slide-squares-container">
              <div className="slide-light-green"></div>
              <div className="slide-orange"></div>
            </div>
          </div>
          <div className="slide-image-container">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="slide-image"
            />
          </div>
        </div>
        <div className="slide-right-side">
          <span className="slide-testimonial">{props.Vision}</span>
          <span className="slide-author">{props.Author}</span>
          <span className="slide-role">{props.Role}</span>
        </div>
      </div>
    </div>
  )
}

Slide.defaultProps = {
  Author: 'goStables Team',
  Vision:
    '"The goStables Protocol serves as a building block on Tron\'s DeFi Infrastructure. Starting within the Caribbean, the protocol enables broader access to stablecoins and the greater blockchain/Web3 economy. This opens the gateway for many to accept payments online easily along with an access route to foreign currencies (via USDD)."',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDUxfHxzbWlsZXxlbnwwfHx8fDE2NDM0MDc4MTE&ixlib=rb-1.2.1&w=700',
  image_alt: 'image',
  Role: 'eAntarctica',
}

Slide.propTypes = {
  Author: PropTypes.string,
  Vision: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  Role: PropTypes.string,
}

export default Slide
