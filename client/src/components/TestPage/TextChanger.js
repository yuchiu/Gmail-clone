import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { testAction } from "@/actions";
import Text from "./Text";

class TextChanger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.displayText = this.displayText.bind(this);
  }

  handleChange = e => {
    this.setState({ inputVal: e.target.value });
  };

  displayText = () => {
    this.props.fetchText(this.state.inputVal);
  };

  render() {
    const { text } = this.props;
    return (
      <div className="text-changer">
        <input onChange={this.handleChange} />
        <button onClick={this.displayText}>Change Display Text</button>
        <Text text={text} />
      </div>
    );
  }
}

TextChanger.propTypes = {
  text: PropTypes.string,
  fetchText: PropTypes.func
};

const stateToProps = state => ({ text: state.testReducer.text });

const dispatchToProps = dispatch => ({
  fetchText: text => dispatch(testAction.fetchText(text))
});

export default connect(
  stateToProps,
  dispatchToProps
)(TextChanger);
