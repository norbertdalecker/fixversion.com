import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { siteMetadata } from "../../gatsby-config";
if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]',{speed: 1000});
}
const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta name="author" description={siteMetadata.author} />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <link 
        href='http://fonts.googleapis.com/css?family=Arvo:400,700,400italic,700italic'
        rel='stylesheet'
        type='text/css'/>
      <link 
        href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800'
        rel='stylesheet'
        type='text/css'/>
      
      <title>{siteMetadata.title}</title>
      <link rel="icon" href="../assets/favicon.png" type="image/x-icon"/>
    </Helmet>
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
