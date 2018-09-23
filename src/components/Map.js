import React, { Component } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import appConfig from '../config/app.conf';
import Marker from './Marker';
import { connect } from 'react-redux';

class Map extends Component {
  render() {
    const { mapLong, mapLat } = this.props;
    return (
      <Wrapper>
        {console.log(mapLong, mapLat)}
        <GoogleMapReact
          defaultCenter={{ lat: parseFloat(mapLat), lng: parseFloat(mapLong) }}
          defaultZoom={15.5}
          bootstrapURLKeys={{ key: appConfig.googleMapsAPIKey }}
          options={{
            disableDefaultUI: true,
            scrollwheel: false,
            gestureHandling: 'cooperative',
          }}
        >
          <Marker lat={parseFloat(mapLat)} lng={parseFloat(mapLong)} />
        </GoogleMapReact>
      </Wrapper>
    );
  }
}

export default connect(state => ({
  lat: state.form.latitude,
  long: state.form.longitude,
}))(Map);

const Wrapper = styled.div`
  height: 200px;
  width: 100%;
  padding: 20px;
`;
