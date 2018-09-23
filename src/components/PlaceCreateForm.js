import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from 'src/components/Button';
import styled from 'styled-components';
import axios from "axios";

class PlaceCreateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',           // name must not be empty
      address: '',
      lat: "49.274763",
      lon: "-123.081961",
      category: 'food',   // category must be valid
      email: '',
      description: '',
      website: '',
      phone: '',
      minAge: 12,
      maxAge: 18,
      imageURL: '',
      isLoading: false
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
    event.preventDefault();

    let data = {
      "name": this.state.name,
      "category": this.state.category,
      "address": "awd",
      lat: 49.274763,
      lon: -123.081961,
      "email": "",
      "description": "",
      "website": "",
      "phone": "",
      "min_age": 13,
      "max_age": 17,
      "image_url": ""
    };

    let url = 'http://localhost:8000/wfb/api/places/';

    this.setState({isLoading: true});

    axios({
      method: 'POST',
      data,
      url
    })
      .then(response => {
        console.log("Successful save: ", response);

        // re-direct the home page
        window.location.href = window.origin;

      })
      .catch(error => {
        console.log("Failed save: ", error);
      })
      .then(_ => {
        this.setState({isLoading: false});
      });
  }

  render() {
    return (
      <Form className="place-create-form"
            onSubmit={this.handleSubmit}>
        <LeftPanel>
          <label>
            <div className='form-label'> Name</div>
            <input type="text"
                   value={this.state.name}
                   onChange={this.handleNameChange}/>
          </label>

          <label>
            <div className='form-label'> Address</div>
            <input type="text"
                   value={this.state.address}
                   onChange={this.handleAddressChange}/>
          </label>


          <label>
            <div className='form-label'> Category</div>
            <input type="text"
                   value={this.state.category}
                   onChange={this.handleCategoryChange}/>
          </label>

          <label>
            <div className='form-label'> Email</div>
            <input type="text"
                   value={this.state.email}
                   onChange={this.handleEmailChange}/>
          </label>

          <label>
            <div className='form-label'> Description</div>
            <input type="text"
                   value={this.state.description}
                   onChange={this.handleDescriptionChange}/>
          </label>

        </LeftPanel>
        <RightPanel>
          <label>
            <div className='form-label'> Website</div>
            <input type="text"
                   value={this.state.website}
                   onChange={this.handleWebsiteChange}/>
          </label>

          <label>
            <div className='form-label'> Phone</div>
            <input type="text"
                   value={this.state.phone}
                   onChange={this.handlePhoneChange}/>
          </label>

          <label>
            <div className='form-label'> Min age</div>
            <input type="text"
                   value={this.state.minAge}
                   onChange={this.handleMinAgeChange}/>
          </label>

          <label>
            <div className='form-label'> Max age</div>
            <input type="text"
                   value={this.state.maxAge}
                   onChange={this.handleMaxAgeChange}/>
          </label>

          <label>
            <div className='form-label'> Image url</div>
            <input type="text"
                   value={this.state.imageURL}
                   onChange={this.handleImageURLChange}/>
          </label>
        </RightPanel>
        <input type="submit" value="Submit"/>
      </Form>
    );
  }
}

export default PlaceCreateForm;

const Form = styled.form`
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  
  label {
  padding: 10px;
  }
  
  .form-label {
  display:inline-block;
  width: 50px;
  }
`;


const LeftPanel = styled.div`
 display: flex;
 flex-flow: column nowrap;
`;

const RightPanel = styled.div`
 display: flex;
 flex-flow: column nowrap;
`;

