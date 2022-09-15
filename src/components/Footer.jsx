import { Container, Navbar } from "react-bootstrap";

const Footer = () => {
    return (
        <Navbar bg="dark" variant="dark" className="mt-5">
            <Container>
                <Navbar.Brand href="#home">CUY UNIVERSITY</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    &copy; galihroswandi <a href="#login" className="text-decoration-none">2022</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Footer;