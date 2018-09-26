import React from "react";
import { Form, Input, Button, Modal, TextArea } from "semantic-ui-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { InlineError } from "@/components/common";
import { validateForm } from "@/utils";
import { errorSelector } from "@/reducers/selectors";

class ComposeMailModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientError: {},
      recipient: "",
      subject: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async () => {
    const { onClose } = this.props;
    const clientError = validateForm.composeMail(this.state);
    this.setState({ clientError });

    // proceed to send data to server if there's no error
    if (Object.keys(clientError).length === 0) {
      this.setState({
        clientError: {},
        recipient: "",
        subject: "",
        message: ""
      });
      onClose();
    }
  };

  handleClose = e => {
    const { onClose } = this.props;
    e.preventDefault();
    this.setState({
      clientError: {},
      recipient: "",
      subject: "",
      message: ""
    });
    onClose();
  };

  render() {
    const { isOpen } = this.props;
    const { recipient, subject, message, clientError } = this.state;

    return (
      <Modal size="large" open={isOpen} onClose={this.handleClose}>
        <Modal.Header>Compose Email</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>To:</label>
              {clientError.recipient && (
                <InlineError text={clientError.recipient} />
              )}
              <Input
                value={recipient}
                onChange={this.handleChange}
                name="recipient"
                fluid
                placeholder="recipient"
              />
            </Form.Field>
            <Form.Field>
              {clientError.subject && (
                <InlineError text={clientError.subject} />
              )}
              <Input
                value={subject}
                onChange={this.handleChange}
                name="subject"
                fluid
                placeholder="subject"
              />
            </Form.Field>
            <Form.Field>
              {clientError.message && (
                <InlineError text={clientError.message} />
              )}
              <TextArea
                value={message}
                onChange={this.handleChange}
                name="message"
                rows={10}
                placeholder="email body"
              />
            </Form.Field>
            <br />
            <Form.Group widths="equal">
              <Button type="button" onClick={this.handleSubmit} fluid>
                Send
              </Button>
              <Button type="button" fluid onClick={this.handleClose}>
                Cancel
              </Button>
            </Form.Group>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

const stateToProps = state => ({
  error: errorSelector.getError(state)
});

const dispatchToProps = dispatch => ({});
ComposeMailModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default connect(
  stateToProps,
  dispatchToProps
)(ComposeMailModal);
