import { Card, CardHeader, CardBody, CardText, CardTitle } from 'reactstrap';
import './styles.scss'

const SpaceShipCard = spaceShip =>
    <Card className="spaceship-card">
        <CardHeader className="spaceship-card-header">{spaceShip.name}</CardHeader>
        <hr/>
        <CardBody>
            <CardTitle className="spaceship-card-title">{spaceShip.name}</CardTitle>
            <CardText className="spaceship-card-text">Spaceship Roles:&emsp;{spaceShip.roles}</CardText>
            {spaceShip.successful_landings &&
                <CardText className="spaceship-card-text">Successful Landings:&emsp;{spaceShip.successful_landings}</CardText>
            }
            {!spaceShip.successful_landings &&
                <CardText className="spaceship-card-text">Successful Landings:&emsp; Null</CardText>
            }
        </CardBody>
    </Card>


export default SpaceShipCard
