import { noop } from 'lodash';
import Router from 'next/router';
const optionsPanelItems = props => {
  let subscriberOptions;

  if (props.logged) {
    subscriberOptions = [
      {
        name: props.loginInfo.get('first_name'),
        handler: () => console.log('LOGIN'),
        avatar: props.loginInfo.getIn(['picture', 'data', 'url']),
        child: [
          {
            name: 'Panel de Control',
            handler: () => (window.location = 'https://enterprise.tovi.com.ar')
          },
          {
            name: 'Cerrar Sesión',
            handler: props.logout.bind(this, props.provider)
          }
        ]
      }
    ];
  } else {
    subscriberOptions = [
      {
        name: 'Regístrate',
        handler: props.toggleSignup
      },
      {
        name: 'Iniciar Sesión',
        handler: () => props.toggleLogin()
      }
    ];
  }

  return [
    {
      name: 'Ayuda',
      handler: () => Router.push('/help')
    },
    {
      name: 'Empresas',
      handler: () => console.log('Empresas')
    },
    {
      name: '¿Quieres ser un anfitrión Tovi?',
      handler: () => console.log('Conviértete en guia')
    },
    ...subscriberOptions
  ];
};

export default optionsPanelItems;
