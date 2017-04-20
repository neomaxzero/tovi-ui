import { noop } from 'lodash';
import Router from 'next/router';

const optionsPanelItems = (props) => {
let subscriberOptions;

if (props.logged) {
  subscriberOptions = [
    {
      name: props.loginInfo.get('name'),
      handler: () => (console.log('LOGIN')),
      avatar: props.loginInfo.getIn(['picture','data', 'url']),
    }
  ]
} else {
  subscriberOptions =  [
    {
      name: 'Registrate',
      handler: () => (console.log('Registrate'))
    },       
    {
      name: 'Iniciar Sesion',
      handler: props.toggleLogin,
    },
  ];
}

return [
  { 
    name: 'Ayuda', 
    handler: () => (Router.push('/help'))
  },
  {
    name: 'Empresas',
    handler: () => (console.log('Empresas'))
  },
  {
    name: 'Conviertete en guia',
    handler: () => (console.log('Conviertete en guia'))
  },
  ...subscriberOptions    
]};

export default optionsPanelItems;