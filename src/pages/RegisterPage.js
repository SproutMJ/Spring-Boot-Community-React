import Row from "react-bootstrap/Row";
import Navigation from "../components/common/Navigation";
import SearchBar from "../components/common/SearchBar";
import Col from "react-bootstrap/Col";

const RegisterPage = ()=>{
    return (
        <>
            <Row>
                <Navigation></Navigation>
            </Row>
            <Row>
                <SearchBar></SearchBar>
            </Row>
            <hr/>
            <Row className="md-3">
                <Col>

                </Col>
                <Col md={6}>
                    <h4>
                        회원가입
                    </h4>
                </Col>
                <Col >

                </Col>
            </Row>


        </>
    )
};

export default RegisterPage;