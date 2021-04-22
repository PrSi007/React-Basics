import * as react from "react-bootstrap";
import {Image} from "react-bootstrap";
import './login.css'
import loginimg from './7566.jpg'
const Login = () => {

    return (
        <div>
            <react.Row className="rows">
                <react.Col className="columns">
                    <react.Form>
                        <react.Form.Group controlId="formBasicEmail">
                            <react.Form.Label>Email address</react.Form.Label>
                            <react.Form.Control type="email" placeholder="Enter email" />
                            <react.Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </react.Form.Text>
                        </react.Form.Group>

                        <react.Form.Group controlId="formBasicPassword">
                            <react.Form.Label>Password</react.Form.Label>
                            <react.Form.Control type="password" placeholder="Password" />
                        </react.Form.Group>
                        <react.Form.Group controlId="formBasicCheckbox">
                            <react.Form.Check type="checkbox" label="Check me out" />
                        </react.Form.Group>
                        <react.Button variant="primary" type="submit">
                            Submit
                        </react.Button>
                    </react.Form>
                </react.Col >
                <react.Col className="columns">
                    <Image src={loginimg} alt="..." className="later"/>
                </react.Col>

            </react.Row>
        </div>
    )
}
export default Login;