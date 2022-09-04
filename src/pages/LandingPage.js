import Navigation from "../components/common/Navigation.js"
import SearchBar from "../components/common/SearchBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AuthForm from "../components/auth/AuthForm";
import {Link} from "react-router-dom";
import SimpleBoardList from "../components/common/SimpleBoardList";

const style = {
    width: "1400px"
}

const backGround = {
}
const LandingPage = ()=>{
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
                    <SimpleBoardList title={"새로운 글"}/>
                    <SimpleBoardList title={"새로운 글"}/>
                    <SimpleBoardList title={"새로운 글"}/>
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

export default LandingPage;