import { ButtonWrapper } from './styles';

const NavButton = ({ onClick, children }) => (
    <ButtonWrapper onClick={onClick}>
      <span> {children} </span>
    </ButtonWrapper>
);

export default NavButton;