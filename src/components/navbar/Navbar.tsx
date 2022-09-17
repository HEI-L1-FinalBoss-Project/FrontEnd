import React from "react";
import './Navbar.css';

function Navbar() {
    return(
        <>
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Create new event</Nav.Link>
                    <Nav.Link href="#features">event created</Nav.Link>
                    <Nav.Link href="#pricing"></Nav.Link>
                </Nav>
            </Container>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text mx-5" id="inputGroup-sizing-default">Event name :</span>
                </div>
                <input type="text" className="form-control mx-5" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default"></input>
            </div>
            <div className="mx-5">
                <p>Group :</p>
            </div>
            <div className="form-check mx-5">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                       value="option1"></input>
                <label className="form-check-label" htmlFor="exampleRadios1">
                    G1
                </label>
            </div>
            <div className="form-check mx-5">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                       value="option2"></input>
                <label className="form-check-label" htmlFor="exampleRadios2">
                    G2
                </label>
            </div>
            <div className="form-check mx-5">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3"
                       value="option3" ></input>
                <label className="form-check-label" htmlFor="exampleRadios3">
                    G3
                </label>
            </div>
            <button type="button" className="btn btn-secondary btn-lg btn-block mx-5 m-md-5">Submit</button>
        </>
        </>
    )
}

export default Navbar;