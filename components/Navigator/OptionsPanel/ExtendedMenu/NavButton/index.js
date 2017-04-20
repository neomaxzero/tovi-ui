import { ButtonWrapper, Avatar } from './styles';

const NavButton = ({ onClick, children, avatar }) => (
    <ButtonWrapper onClick={onClick}>
      <span> {children} </span>
      { avatar && <Avatar src={avatar} alt="avatar" /> }
    </ButtonWrapper>
);

export default NavButton;