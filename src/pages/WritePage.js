import Row from "react-bootstrap/Row";
import Navigation from "../components/common/Navigation";
import Col from "react-bootstrap/Col";
import WriteBoard from "../components/common/writeBoard";

const WritePage = ()=>{
    return (
        <>
            <Row>
                <Navigation></Navigation>
            </Row>
            <hr/>
            <Row className="md-3">
                <Col>

                </Col>
                <Col md={6}>
                    <WriteBoard/>
                </Col>
                <Col >

                </Col>
            </Row>


        </>
    )
};

export default WritePage;