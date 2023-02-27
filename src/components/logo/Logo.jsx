
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Logo = (props) => {
    return <>
        <AnchorLink href="#header">
            <div className="mitz-wrapper-logo">
            <img
                alt="Mitz IT logo"
                src="https://mitz-it.github.io/landing-page-mitz-it//imgs/logo_header.png"
                className="mitz-logo"
            />
            </div>
        </AnchorLink>
    </>;
};

export default Logo
