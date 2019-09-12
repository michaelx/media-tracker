import React from 'react';
import { Segment } from 'semantic-ui-react';

const Footer = () => (
  <Segment basic>
    &copy; <a href="https://github.com/michaelx/media-tracker" rel="noopener">media-tracker</a> &middot; This product uses the <a href="https://www.themoviedb.org/documentation/api" rel="noopener">TMDb API</a> but is not endorsed or certified by TMDb.
  </Segment>
);

export default Footer;
