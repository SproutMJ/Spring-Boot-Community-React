import Row from "react-bootstrap/Row";
import Navigation from "../components/common/Navigation";
import SearchBar from "../components/common/SearchBar";
import Col from "react-bootstrap/Col";
import Carousel from 'react-bootstrap/Carousel';
import AuthForm from "../components/auth/AuthForm";
import {useState} from "react";
import {Pagination} from "react-bootstrap";



const BoardListPage = ({category})=>{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Row>
                <Navigation></Navigation>
            </Row>
            <Row>
                <SearchBar></SearchBar>
            </Row>
            <hr/>
            <Row>
                <Col>
                    <hr/>
                    <div>즐겨찾는 카테고리</div>
                    <hr/>
                    <div>카테고리</div>
                    <hr/>
                </Col>
                <Col md={6}>
                    <h3>현재 카테고리</h3>
                    <h5>최근 카테고리</h5>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=First slide&bg=373940"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Second slide&bg=282c34"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Third slide&bg=20232a"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <hr/>
                    <h5>전체, 핫글, 공지, 즐겨찾기, 카테고리 내부 카테고리, 글 개수(슬라이드), 글쓰기 버튼</h5>
                    <hr/>
                    <h5>글번호, 카테고리, 제목, 글쓴이, 작성일, 조회수, 추천수</h5>
                    <hr/>
                    <h5>글목록</h5>
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item disabled>{14}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
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

export default BoardListPage;