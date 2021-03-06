import React, { Component } from 'react';
import { AxiosProvider } from 'react-axios';
import axios from 'axios';
import { getJWT } from '../helpers/jwt';

const axiosInstance = axios.create({
  headers: { 'Authorization': `Bearer ${getJWT()}` }
});

class AuthenticatedComponent extends Component {

  render() {
    return (<AxiosProvider instance={axiosInstance}>
      {this.renderComponent()}
    </AxiosProvider>
    )
  }
}

export default AuthenticatedComponent;