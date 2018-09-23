import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from 'src/components/Button';
import styled from 'styled-components';

class PlaceCreateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      address: '',
      lat: '',
      lon: '',
      category: '',
      email: '',
      description: '',
      website: '',
      phone: '',
      minAge: 12,
      maxAge: 18,
      imageURL: ''
    };

    // setup input handlers
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleWebsiteChange = this.handleWebsiteChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleMinAgeChange = this.handleMinAgeChange.bind(this);
    this.handleMaxAgeChange = this.handleMaxAgeChange.bind(this);
    this.handleImageURLChange = this.handleImageURLChange.bind(this);

    // setup submit handlers
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleAddressChange(event) {
    this.setState({address: event.target.value});

  }

  handleCategoryChange(event) {
    this.setState({category: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }

  handleWebsiteChange(event) {
    this.setState({website: event.target.value});
  }

  handlePhoneChange(event) {
    this.setState({phone: event.target.value});
  }

  handleMinAgeChange(event) {
    this.setState({minAge: event.target.value});
  }

  handleMaxAgeChange(event) {
    this.setState({maxAge: event.target.value});
  }

  handleImageURLChange(event) {
    this.setState({imageURL: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className="place-create-form"
            onSubmit={this.handleSubmit}>

        <label>
          Name:
          <input type="text"
                 value={this.state.name}
                 onChange={this.handleNameChange}/>
        </label>

        <label>
          Address:
          <input type="text"
                 value={this.state.address}
                 onChange={this.handleAddressChange}/>
        </label>


        <label>
          Category:
          <input type="text"
                 value={this.state.category}
                 onChange={this.handleChange}/>
        </label>

        <label>
          Email:
          <input type="text"
                 value={this.state.email}
                 onChange={this.handleEmailChange}/>
        </label>

        <label>
          Description:
          <input type="text"
                 value={this.state.description}
                 onChange={this.handleDescriptionChange}/>
        </label>

        <label>
          Website:
          <input type="text"
                 value={this.state.website}
                 onChange={this.handleWebsiteChange}/>
        </label>

        <label>
          Phone:
          <input type="text"
                 value={this.state.phone}
                 onChange={this.handlePhoneChange}/>
        </label>

        <label>
          Min age:
          <input type="text"
                 value={this.state.minAge}
                 onChange={this.handleMinAgeChange}/>
        </label>

        <label>
          Max age:
          <input type="text"
                 value={this.state.maxAge}
                 onChange={this.handleMaxAgeChange}/>
        </label>

        <label>
          Image url:
          <input type="text"
                 value={this.state.imageURL}
                 onChange={this.handleImageURLChange}/>
        </label>

        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default PlaceCreateForm;
