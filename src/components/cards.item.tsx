import React from 'react';
import {Card, CardGroup} from "react-bootstrap";
// @ts-ignore
import logo from "./UI/300168.jpg"

const CardsItem = ({...props}) => {

    const title: string = props.lessons.title
    const path: string = props.lessons.path
    const description: string = props.lessons.description

    return (
        <div>
            <Card>
                <Card.Img variant="bottom"
                          src={logo}>
                </Card.Img>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Link href={path}>Перейти к уроку</Card.Link>
                    {/*<small className="text-muted">Last updated 3 mins ago</small>*/}
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CardsItem;
