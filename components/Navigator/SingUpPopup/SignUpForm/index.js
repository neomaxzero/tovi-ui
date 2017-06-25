const moment = require('moment');
import React, { Component } from 'react';
import Select from 'react-select';
import { Field, Form } from '~/components/shared/FormPopup/styled';
import FormButton from '~/components/shared/FormButton/';
import { getProvinces, getCities } from '~/services/global';
import { user } from '~/services/user';
import Validators from '~/components/shared/Validators';
import Recaptcha from 'react-recaptcha';
import SexDropDown from './sexDropDown';
import DateDropDown from './dateDropDown';
import FormField, { SelectField } from '~/components/shared/FormPopup/FormField';
import FormCheckbox from '~/components/shared/FormPopup/FormCheckbox';
import { CheckboxContainer, ErrorMsg, DropDownsInline, CaptchaContainer } from './styled';
import { capitalize } from '~/utils/string';
import { Error } from '~/components/shared/FormPopup/FormField/styled';

//import SocialLogin from '~/components/Navigator/SocialLogin';

const MESSAGE_DEFAULT = 'Campo Requerido';

export default class SignUpForm extends Component {
  state = {
    name: '',
    surname: '',
    province: '',
    city: '',
    email: '',
    pass: '',
    sex: '',
    captcha: '',
    valid: true,
    loading: false,
    provinceList: [],
    date: {
      day: '',
      month: '',
      year: '',
    },
    citySelect: {
      disabled: true,
      isLoading: false,
      List: [],
    },
    fields: {
      name: {
        valid: true,
        message: '',
      },
      surname: {
        valid: true,
        message: '',
      },
      province: {
        valid: true,
        message: '',
      },
      city: {
        valid: true,
        message: '',
      },
      email: {
        valid: true,
        message: '',
      },
      pass: {
        valid: true,
        message: '',
      },
      sex: {
        valid: true,
      },
      date: {
        valid: true,
      },
      terms: {
        valid: false,
      },
      captcha: {
        message: '',
      }
    },
    error: '',
  }

  componentDidMount() {
    getProvinces()
      .then((response) => {
        return response.data.map((prov) => ({
          label: prov.Descripcion, 
          value: prov.ProvinciaId
        }))
      })
      .then((values) => {
        this.setState({
          provinceList: values,
        })
      })
      .catch((err) => {
        console.error(err);
      })
  }

  onChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value,
      fields: {
        ...this.state.fields,
        [ev.target.name]: { valid: true, message: '' }
      }
    })    
  }
 
  selectProvince = ({ value }) => {
    this.setState({
      province: value,
      citySelect: {
        isLoading: true,
      },
      fields: {
        ...this.state.fields,
        province: {
          valid: true,
        },
      }
    });
    getCities(value)
      .then((response) => {
        return response.data.map((city) => ({
          label: city.Descripcion,
          value: city.LocalidadId,
        }))
      })
      .then((values) => {
        this.setState({          
          citySelect: {
            disabled: false,
            isLoading: false,
            List: values,
          },
        })
      })
      .catch((err) => {
        console.error(err);
      })
  }
 
  selectCity = ({ value }) => {
    this.setState({
      city: value,  
      fields: {
        ...this.state.fields,
        city: {
          valid: true,
        },
      }    
    });
  }

  selectSex = ({ value }) => {
    this.setState({
      sex: value,
      fields: {
        ...this.state.fields,
        sex: {
          valid: true,
        },
      }  
    })
  }

  selectDate = (value) => {
    this.setState({
      date: value,
      fields: {
        ...this.state.fields,
        date: {
          valid: true,
        },
      }  
    })
  }
  validateFields = () => {
    let valid = true;
    let error = '';

    const fields = {
     name: {
        valid: true,
        message: '',
      },
      surname: {
        valid: true,
        message: '',
      },
      province: {
        valid: true,
        message: '',
      },
      city: {
        valid: true,
        message: '',
      },
      email: {
        valid: true,
        message: '',
      },
      pass: {
        valid: true,
        message: '',
      },
      sex: {
        valid: true,
      },
      date: {
        valid: true,
      },
      captcha: {
        message: '',
      },
      terms: {
        valid: this.state.fields.terms.valid,
      }
    };
    if (!this.state.name) {
      fields.name.valid = false;
      fields.name.message = MESSAGE_DEFAULT;            
      valid = false;
    }

    if (!this.state.surname) {
      fields.surname.valid = false;
      fields.surname.message = MESSAGE_DEFAULT;            
      valid = false;
    }

    if (!this.state.province) {
      fields.province.valid = false;
      fields.province.message = MESSAGE_DEFAULT;            
      valid = false;
    }

    if (!this.state.city) {
      fields.city.valid = false;
      fields.city.message = MESSAGE_DEFAULT;            
      valid = false;
    }

    //Email
    if(!Validators.email(this.state.email)) {
      fields.email.valid = false;
      fields.email.message = 'Formato de email incorrecto.';                 
      valid = false;      
    }

    if (!this.state.email) {      
      fields.email.valid = false;
      fields.email.message = MESSAGE_DEFAULT;            
      valid = false;
    }

    const validatorPassword = Validators.password(this.state.pass);
    if (!validatorPassword.valid) {
      fields.pass.valid = false;
      fields.pass.message = validatorPassword.message;            
      valid = false;
    }

    if (!this.state.pass) {
      fields.pass.valid = false;
      fields.pass.message = MESSAGE_DEFAULT;            
      valid = false;
    }

    if (!this.state.sex) {
      fields.sex.valid = false;
      valid = false;
    }

    if (!this.state.date.day || !this.state.date.month || !this.state.date.year) {      
      fields.date.valid = false;
      valid = false;
    }
    const d = ("0" + this.state.date.day).slice(-2);
    const m = ("0" + this.state.date.month).slice(-2);

    const plus18 = moment(`${d}${m}${this.state.date.year}`, 'DDMMYYYY').add(18,'Y');
    if(plus18>moment()) {
      fields.date.valid = false;
      valid = false;
      error = 'Debe ser mayor a 18 años.';      
    } 

    if (!this.state.fields.terms.valid) {      
      valid = false;      
      error = "Para usar el sitio debes aceptar los terminos y condiciones";
    }

    if (!this.state.captcha) {      
      valid = false;      
      fields.captcha.message = MESSAGE_DEFAULT;      
    }

    this.setState({
      fields,
      error,
    })

    return valid;      
  }

  acceptTerms = () => {
    this.setState({
      fields: {
        ...this.state.fields,
        terms: { valid: !this.state.fields.terms.valid }
      }
    })
  }

  onSubmit = () => {
    const valid = this.validateFields();
    
    if (!valid)
      return;
    const d = ("0" + this.state.date.day).slice(-2);
    const m = ("0" + this.state.date.month).slice(-2);
    
    const date = `${d}${m}${this.state.date.year}`;
    const body = {
      Nombre: capitalize(this.state.name),
      Apellido: capitalize(this.state.surname),
      Password: this.state.pass,
      PasswordRepetir: this.state.pass,
      Email: this.state.email,
      LocalidadId: this.state.city,
      ProvinciaId: this.state.province,
      PaisId: 1,
      SexoId: this.state.sex,
      RecibeCorreosTovi: true,
      Habilitado: false,
      NombreUsuario: '',
      FechaNacimiento: moment(date, 'DDMMYYYY').format(),
      Captcha: this.state.captcha,
    };

    this.setState({
      loading: true,
    });

    user.create(body)
      .then((response) => {
        this.props.succeed()
      })
      .catch((err) => this.setState({
        loading: false,
        error: 'El correo electrónico ya fué utilizado.',
      }))
  }

  cbCaptcha = (p) => {
    this.setState({
      captcha: p,
    });    
  }

  cbExpired = (p) => {
    this.setState({
      captcha: '',
    });       
  }

  render() {
    const { 
      name,
      surname, 
      email,
      valid, 
      loading,
      city,
      provinceList,
      province,
      citySelect,
      pass,
      sex,
      date,
      fields,
      error,
    } = this.state;

    return(
      <Form>
        <FormField 
          type="text" 
          name="name" 
          placeholder="Nombres" 
          onChange={this.onChange} 
          value={name} 
          valid={fields.name.valid}
          message={fields.name.message}
        />
         <FormField 
          type="text" 
          name="surname" 
          placeholder="Apellido" 
          onChange={this.onChange} 
          value={surname} 
          valid={fields.surname.valid}
          message={fields.surname.message}
        />
        <SelectField
          name="form-field-province"
          className="selectForm"
          value={province}
          clearable={false}
          options={provinceList}
          onChange={this.selectProvince}
          placeholder="Provincia"
          valid={fields.province.valid}
          message={fields.province.message}
        />
        <SelectField
          name="form-field-city"
          className="selectForm"
          clearable={false}
          value={city}
          options={citySelect.List}
          onChange={this.selectCity}
          placeholder="Ciudad"
          disabled={citySelect.disabled}
          isLoading={citySelect.isLoading}
          valid={fields.province.valid}
          message={fields.province.message}
        />
         <FormField 
          type="text" 
          name="email" 
          placeholder="Correo electrónico" 
          onChange={this.onChange} 
          value={email} 
          valid={fields.email.valid}
          message={fields.email.message}          
        />
         <FormField 
          type="password" 
          name="pass" 
          placeholder="Contraseña" 
          onChange={this.onChange} 
          value={pass} 
          valid={fields.pass.valid}
          message={fields.pass.message}
          
        />
        <DropDownsInline>
          <SexDropDown 
          value={sex} 
          setSex={this.selectSex} 
          valid={fields.sex.valid}
          message={fields.sex.message}          
          />
          <DateDropDown 
            value={date} 
            setDate={this.selectDate} 
            valid={fields.date.valid}
          />
        </DropDownsInline>        
        <CheckboxContainer>            
          <FormCheckbox name="terms" value="terms" onPress={this.acceptTerms}>
            Acepto los terminos y condiciones del sitio
          </FormCheckbox>     
        </CheckboxContainer>
        <CaptchaContainer>
          <Recaptcha
            sitekey="6LdpHiYUAAAAAFj359ZOPi6Q0IvlkyhJ5GNGDoU5"
            render="explicit"
            verifyCallback={this.cbCaptcha}
            onloadCallback={a => a}
            expiredCallback={this.cbExpired}
          />
          { fields.captcha.message && <Error>{fields.captcha.message}</Error> }
        </CaptchaContainer>
        { error && <ErrorMsg> { error } </ErrorMsg> }        
        <FormButton name="Crear cuenta" loading={loading} onClick={this.onSubmit}/>        
      </Form>

    );
  }
}