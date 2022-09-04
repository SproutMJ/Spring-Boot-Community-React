import Row from "react-bootstrap/Row";
import Navigation from "../components/common/Navigation";
import SearchBar from "../components/common/SearchBar";
import Col from "react-bootstrap/Col";
import SimpleBoardList from "../components/common/SimpleBoardList";
import AuthForm from "../components/auth/AuthForm";

const BoardPage = ()=>{
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
                    <h4>카테고리
                        최근 접근 카테고리</h4>
                    <hr/>
                    <h4>글제목, 작성일, 조회수, 추천수, 댓글수</h4>
                    <hr/>
                    <h4>글내용
                        추천, 비추천, 공유, 신고
                        첨부파일</h4>
                    <hr/>
                    <h4>댓글</h4>
                    <hr/>
                    <h4>글목록</h4>
                    <hr/>
                    <h4>글쓰기 버튼
                        페이저, 카테고리 내 검색</h4>
                    <hr/>
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

export default BoardPage;