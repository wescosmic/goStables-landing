import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <img
        alt={props.image_alt}
        src="/playground_assets/gostables-logo-alt21-200h.png"
        className="footer-image"
      />
      <span className="footer-text">{props.text}</span>
    </footer>
  )
}

Footer.defaultProps = {
  image_alt: 'logo',
  image_src: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  text: '© 2022 goStables, All Rights Reserved.',
}

Footer.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
}

export default Footer
