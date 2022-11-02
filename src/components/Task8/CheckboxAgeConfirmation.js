import React, { Component } from 'react';
import Form from './Form';
import ValidationMessage from './ValidationMessage';

// destrukturyzacja

class CheckboxAgeConfirmation extends Component {

  state = {
    isConfirmed: false,
    isFormSubmitted: false
  }

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false
    })
  }

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <ValidationMessage txt="Możesz obejrzeć film." />
      } else {
        return <ValidationMessage txt="Nie możesz obejrzeć filmu." />
      }
    } else { return null }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log("click");
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true
      })
    }
  }

  render() {
    const { isConfirmed } = this.state

    return (
      <div>
        <hr />
        <h2 className='project'>Projekt 8</h2>
        <h4>Kup bilet na horror!</h4>
        <Form
          hange={this.handleCheckboxChange}
          submit={this.handleFormSubmit}
          checked={isConfirmed}
        />
        {this.displayMessage()}

      </div>

    )
  }
}

export default CheckboxAgeConfirmation