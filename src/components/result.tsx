import React from 'react';
import {Card, CardGroup} from "react-bootstrap";

const Result = ({...props}) => {

    const numWords: number = props.countAllWords

    const successfully: number = props.countSuccessfully
    const successfullyPercent: number = returnSuccessfullyPercent(numWords, successfully)

    const withPrompting: number = props.countWithPrompting
    const skipWords: number = props.countSkip



    function returnSuccessfullyPercent(numWords: number, successfully: number): number {
        if (numWords !== 0 && successfully !== 0) {
            return Math.round(successfully / numWords * 100)
        } else {
            return 0
        }
    }



    return (
        <>
            <h1>Страница результата</h1>
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title>Пройдено слов</Card.Title>
                        <Card.Text>
                            {numWords}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>Успешно (без подсказки)</Card.Title>
                        <Card.Text>
                            {successfully} ({successfullyPercent}%)
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>Пропущено</Card.Title>
                        <Card.Text>
                            {skipWords}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>С подсказкой</Card.Title>
                        <Card.Text>
                            {withPrompting}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </>
    );
};

export default Result;
