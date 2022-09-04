import Row from "react-bootstrap/Row";
import Navigation from "../components/common/Navigation";
import SearchBar from "../components/common/SearchBar";
import Col from "react-bootstrap/Col";
import SimpleBoardList from "../components/common/SimpleBoardList";
import AuthForm from "../components/auth/AuthForm";

const ErrorPage = ()=>{
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
                    <hr/>
                    <div>즐겨찾는 카테고리</div>
                    <hr/>
                    <div>카테고리</div>
                    <hr/>
                </Col>
                <Col md={6}>
                    <h4>
                        에러명
                        에러 이미지
                        해결방안
                    </h4>
                </Col>
                <Col >
                    <AuthForm></AuthForm>
                    <hr/>
                    <div>접속자 수</div>
                    <hr/>
                    <div>게시글 랭킹</div>
                    <hr/>
                    <div>해시태그 랭킹</div>
                    <hr/>
                </Col>
            </Row>


        </>
    )
};

export default ErrorPage;