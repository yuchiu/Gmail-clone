import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

const InlineError = ({ text }) => (
  <span className="inline-error-span">{text || "error"}.</span>
);

InlineError.propTypes = {
  text: PropTypes.string
};

export default InlineError;
