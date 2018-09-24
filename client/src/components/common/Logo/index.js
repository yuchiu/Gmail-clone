import React from "react";
import PropTypes from "prop-types";

import "./index.scss";
import gmailLogo32 from "@/assets/images/logos/gmail-logo-32.png";
import gmailLogo64 from "@/assets/images/logos/gmail-logo-64.png";
import gmailLogo128 from "@/assets/images/logos/gmail-logo-128.png";

class Logo extends React.PureComponent {
  checkSize = size => {
    switch (size) {
      case "32":
        return <img src={gmailLogo32} className="logo" alt="logo" />;

      case "64":
        return <img src={gmailLogo64} className="logo" alt="logo" />;

      case "128":
        return <img src={gmailLogo128} className="logo" alt="logo" />;

      default:
        return <img src={gmailLogo32} className="logo" alt="logo" />;
    }
  };

  render() {
    const { size } = this.props;
    return (
      <React.Fragment>
        {/* return logo accordingly */}
        {this.checkSize(size)}
      </React.Fragment>
    );
  }
}
Logo.propTypes = {
  size: PropTypes.string
};

export default Logo;
