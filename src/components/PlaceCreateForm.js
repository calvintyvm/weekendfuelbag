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

        <FormHeader>
          ORGANISATION APPLICATION FORM
        </FormHeader>

        <FormContent>
          <LeftPanel>
            <FormInput>
              <div className='form-label'>
                <span> Name </span>
              </div>
              <input type="text"
                     value={this.state.name}
                     onChange={this.handleNameChange}/>
            </FormInput>

            <FormInput>
              <div className='form-label'>
                <span> Category </span>
              </div>
              <input type="text"
                     value={this.state.category}
                     onChange={this.handleCategoryChange}/>
            </FormInput>

            <FormInput>
              <div className='form-label'>
                <span> Address </span>
              </div>
              <input type="text"
                     value={this.state.address}
                     onChange={this.handleAddressChange}/>
            </FormInput>

            <FormInput>
              <div className='form-label'>
                <span>Email</span>
              </div>
              <input type="text"
                     value={this.state.email}
                     onChange={this.handleEmailChange}/>
            </FormInput>

            <FormInput>
              <div className='form-label'
                   style={{height: 120}}>
                <span>Description</span>
              </div>
              <textarea type="text"
                        rows="5"
                        value={this.state.description}
                        onChange={this.handleDescriptionChange}/>
            </FormInput>

          </LeftPanel>
          <RightPanel>
            <FormInput>
              <div className='form-label'>
                <span> Website URL </span>
              </div>
              <input type="text"
                     value={this.state.website}
                     onChange={this.handleWebsiteChange}/>
            </FormInput>

            <FormInput>
              <div className='form-label'>
                <span>Phone Number</span>
              </div>
              <input type="text"
                     value={this.state.phone}
                     onChange={this.handlePhoneChange}/>
            </FormInput>

            <FormInput>
              <div className='form-label'>
                <span> Min Age </span>
              </div>
              <input type="text"
                     value={this.state.minAge}
                     onChange={this.handleMinAgeChange}/>
            </FormInput>

            <FormInput>
              <div className='form-label'>
                <span> Max Age </span>
              </div>
              <input type="text"
                     value={this.state.maxAge}
                     onChange={this.handleMaxAgeChange}/>
            </FormInput>

            <FormInput>
              <div className='form-label'>
                <span>Image URL</span>
              </div>
              <input type="text"
                     value={this.state.imageURL}
                     onChange={this.handleImageURLChange}/>
            </FormInput>
          </RightPanel>
        </FormContent>

        <FormActions>
          <input type="submit"
                 className="submit-btn"
                 value="Submit"/>
        </FormActions>

      </Form>
    );
  }
}

export default PlaceCreateForm;

const FormHeader = styled.div`
  text-align: center;
  font-size: 30px;
  margin-bottom: 30px;
  font-family: sans-serif;
  color: white;
  font-weight: bolder;
`;

const FormContent = styled.div`
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
   margin-bottom: 30px;
`;

const FormActions = styled.div`
text-align: center;

.submit-btn {

  padding: 10px;

  background-color:#f5a531; 
  color: white;
  font-size: 20px;
  font-weight: bold;
}
`;

const LeftPanel = styled.div`
  
  flex: 1 1 50%;
  
 display: flex;
 flex-flow: column nowrap;
`;

const RightPanel = styled.div`


  flex: 1 1 50%;

 display: flex;
 flex-flow: column nowrap;
`;

const Form = styled.form`

  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
 
  label {
  padding: 10px;
  }
  
  font-family: sans-serif;
  
  .form-label {
  
  display: flex;
    align-items: center;
    justify-content: center;
  
    width: 200px;
    height: 40px;
    
    color:white;
    text-align: center;
    background-color:#f5a531; 
    font-weight: bold;
    
    span {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  
`;

const FormInput = styled.div`
  padding: 10px;
  font-size: 18; 
  font-family: sans-serif; 
  
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  
  input {
  height: 40px;
  font-size: 18px;
  padding-left: 10px;
  }
  
  textarea {
   font-size: 18px;
  padding-left: 10px;
  }
`;

