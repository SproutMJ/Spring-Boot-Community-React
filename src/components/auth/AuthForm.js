import styled from 'styled-components';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";

// const StyledAuthTemplate = styled.div`
//   position: absolute;
//   left: 0;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   background: gray;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;
//
// const WhiteBox = styled.div`
//   .logo-area {
//     display: block;
//     padding-bottom: 2rem;
//     text-align: center;
//     font-weight: bold;
//     letter-spacing: 2px;
//   }
//
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0, .025);
//   padding: 2rem;
//   width: 360px;
//   background: white;
//   border-radius: 2px;
// `;

const AuthForm = () => {
    return (
        <Form>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="자동로그인" />
                    </Form.Group>
                </Col>
                <Col>
                    <Button variant="primary" type="submit" size={"lg"}>
                        로그인
                    </Button>
                </Col>
            </Row>
            <Link to={"/findAccount"}>아이디 비밀번호 찾기</Link>
            <Link to={"/register"}>회원가입</Link>
        </Form>
    );
};

export default AuthForm;
