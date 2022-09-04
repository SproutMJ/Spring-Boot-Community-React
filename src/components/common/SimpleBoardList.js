import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";

const SimpleBoardList = ({title}, {toHref}) => {
    return (
        <Container className={"h-75"}>
            <h5><a href="/">{title}</a></h5>
        </Container>

    )
}

export default SimpleBoardList