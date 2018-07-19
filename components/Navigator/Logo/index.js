import { Logo, LogoContainer } from './styles';

const LogoComponent = ({ onClick }) => (
  <LogoContainer onClick={onClick}>
    <Logo src="/static/logo.png" alt="Tovi Logo" />
  </LogoContainer>
);

export default LogoComponent;
