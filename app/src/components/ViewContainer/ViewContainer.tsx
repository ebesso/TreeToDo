import React, { PropsWithChildren } from "react"
import { Container, Row, Col} from "react-bootstrap"

export default function ViewContainer(props: PropsWithChildren){

    const containerStyle = {
        // marginTop: '2em',
        // marginBottom: '2em',
        // backgroundColor: 'white',
        // borderRadius: '0.7em',
        // boxShadow: '0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        // height: '100%'
    }

    return (
        <Container>
            <Row className="justify-content-lg-center">
                <Col style={containerStyle} md={10}>
                    <Row className="justify-content-lg-center" style={{marginTop: '1em', marginBottom: '1em'}}>
                        <Col md={12}>{props.children}</Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )

}