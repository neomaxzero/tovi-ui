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
            handler: () => (window.location = 'http://enterprise.tovi.com.ar'),
          },
          {
            name: 'Cerrar Sesión',
            handler: props.logout.bind(this, props.provider),
          },
        ],
      },
    ];
  } else {
    subscriberOptions = [
      {
        name: 'Regístrate',
        handler: props.toggleSignup,
      },
      {
        name: 'Iniciar Sesión',
        handler: () => props.toggleLogin(),
      },
    ];
  }

  return [
    {
      name: '¿Qué es Tovi?',
      handler: () => Router.push('/about'),
    },
    ...subscriberOptions,
  ];
};

export default optionsPanelItems;
