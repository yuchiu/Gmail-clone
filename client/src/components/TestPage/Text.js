import React from "react";
import PropTypes from "prop-types";

class Text extends React.PureComponent {
  render() {
    const { text } = this.props;
    return <div>Display Text: {text}</div>;
  }
}
Text.propTypes = {
  text: PropTypes.string
};

export default Text;
