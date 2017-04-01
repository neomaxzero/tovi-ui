import { ButtonWrapper } from './styles';

const NavButton = ({ onClick, children }) => (
    <ButtonWrapper>
      <span> {children} </span>
    </ButtonWrapper>
);

export default NavButton;