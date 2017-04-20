import React, { PureComponent } from 'react';
import FA from 'react-fontawesome';
import FacebookSecrets from '~/config/FacebookSecrets.js';

import { FacebookButtonSc, FacebookPhrase } from './SocialLoginSc';

class FacebookButton extends PureComponent {
  constructor(props) {
    super(props);
    
  }

  fetchProfile = () => {
    FB.api('/me?fields=email, name, picture, age_range, first_name, link, gender, locale, verified', (response) => {
      this.props.onLogin(response, 'facebook');
    });
  }

  setScript = () => {
    (function (d, s, id) {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  statusChangeCallback = (response) => {
    if (response.status === 'connected') {
      this.fetchProfile();
    } else {
      FB.login((response) => {
        if (response.authResponse) this.fetchProfile();
      }, {scope: 'public_profile, email'});
    }
  }

  loginFacebook = () => {
    FB.getLoginStatus((response) => {
      this.statusChangeCallback(response);
    });
  }

  componentDidMount() {
    this.setScript();
    window.fbAsyncInit = () => {
      FB.init(FacebookSecrets);
    }
  }

  render() {
    return(
      <FacebookButtonSc onClick={this.loginFacebook}>
        <FA name="facebook" style={{color: 'white'}}/>
        <FacebookPhrase>Iniciar sesión con Facebook</FacebookPhrase>
      </FacebookButtonSc>
    )
  }
}
export default FacebookButton;