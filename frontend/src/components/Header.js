import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../Images/Search Gallery images.svg';

const navbarStyle = {
  backgroundColor: 'lightblue',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo alt={title} style={{ maxWidth: '200rem', maxHeight: '4rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
