import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Dropdown from 'react-bootstrap/Dropdown';
import {DropdownButton, FormGroup, InputGroup} from "react-bootstrap";


const controlStyle = {
    display: "inline-block"
};

const size = {
    width: "1200px"
}

const SearchBar = () => {
    return(
        <Form>
                <Row className="d-flex justify-content-center text-center">
                    <Col md={4} >
                        <InputGroup>
                            <Form.Select aria-label="Default select example" md={1}>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                            </Form.Select>
                            <Form.Control placeholder="" style={controlStyle}/>
                            <Button variant="primary" type="submit" style={controlStyle}>
                                검색
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>

        </Form>
    );
};
export default SearchBar;