import { noop } from 'lodash';
import Router from 'next/router';

const optionsPanelItems = (actions) => ([
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
  {
    name: 'Registrate',
    handler: () => (console.log('Registrate'))
  },       
  {
    name: 'Iniciar Sesion',
    handler: actions.toggleLogin,
  },      
]);

export default optionsPanelItems;