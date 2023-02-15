
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Logo = (props) => {
    return <>
        <AnchorLink href="#header">
            <div className="mitz-wrapper-logo">
            <img
                alt="Mitz IT logo"
                src="https://vinialexandre.github.io/landing-page-mitz-it/playground_assets/m1i155-uiyf-200h.png"
                className="mitz-logo"
            />
            </div>
        </AnchorLink>
    </>;
};

export default Logo
