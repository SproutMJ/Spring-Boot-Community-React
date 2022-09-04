import Row from "react-bootstrap/Row";
import Navigation from "../components/common/Navigation";
import SearchBar from "../components/common/SearchBar";
import Col from "react-bootstrap/Col";
import SimpleBoardList from "../components/common/SimpleBoardList";
import AuthForm from "../components/auth/AuthForm";
import BoardList from "../components/common/BoardList";

const SearchPage = ()=>{
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
                    <Row>카테고리 목록</Row>
                    <Row>글 목록</Row>
                </Col>
                <Col >

                </Col>
            </Row>


        </>
    )
};

export default SearchPage;