import React , {useState} from "react"
import { Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreditCardForm.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";


const CreditCardForm = () => {

  const [values, setValues] = useState({
    cardName: '',
    cardNumber: '',
    cardExpirationMonth: '',
    cardExpirationYear: '',
    cardSecurityCode: '',
    focus: ''
})

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
        ...values,
        [name]: value
    })
  }

  const handleNumChange = e => {
    var { name, value } = e.target
    if(e.nativeEvent.data !== null){
      if(value.length === 4 || value.length === 9 || value.length === 14){
        value += " "
      }
    }
    
    setValues({
        ...values,
        [name]: value
    })
  }

  const handleFocus = (e) => {
    setValues({ 
        ...values,
        focus: (e.target.name === 'cardSecurityCode') ? 'cvc' : ""
    });
  }

  return (
    <div>
      <div className="container">
        <div className="box justify-content-center align-items-center">
          <div className="formDiv">
          <div className="creditCard">
          <Cards
            cvc={values.cardSecurityCode}
            expiry={values.cardExpirationMonth + values.cardExpirationYear}
            focused={values.focus}
            name={values.cardName}
            number={values.cardNumber}
          />
          </div>
          <Form onSubmit={handleSubmit}>

            <Form.Group>
              <Form.Label style={{fontSize : "14px"}}>Card Number</Form.Label>
              <Form.Control
                type="text"
                maxLength="19"
                id="cardNumber"
                name="cardNumber"
                placeholder="Card Number"
                value={values.cardNumber}
                onChange={handleNumChange}
                onFocus={handleFocus}
                required = {true}
              />
            </Form.Group>

            <Form.Group>
            <Form.Label style={{fontSize : "14px"}}>Card Name</Form.Label>
              <Form.Control
                type="text"
                id="cardName"
                name="cardName"
                placeholder="Card Name"
                value={values.cardName}
                onChange={handleChange}
                onFocus={handleFocus}
                required = {true}
              />
            </Form.Group>
            
            <Row>
              <Col>
              <div className="form-group">
              <Form.Label style={{fontSize : "12px"}}>Expiry Month</Form.Label>
                <select className="form-control" id="cardExpiration"
                    name="cardExpirationMonth"
                    value={values.cardExpirationMonth}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    required = {true}
                >
                  <option value = "">Month</option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
              </Col>

              <Col>
              <div className="form-group">
              <Form.Label style={{fontSize : "12px"}}>Expiry Year</Form.Label>
                <select className="form-control" id="cardExpiration"
                    name="cardExpirationYear"
                    value={values.cardExpirationYear}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    required = {true}
                >
                  <option value = "">Year</option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                  <option>2029</option>
                  <option>2030</option>
                  <option>2031</option>
                </select>
              </div>
              </Col>
              
              <Col>
                <Form.Group>
              <Form.Label style={{fontSize : "13px"}}>CVV</Form.Label>
                  <Form.Control
                    type="text"
                    maxLength="4"
                    id="cardSecurityCode"
                    name="cardSecurityCode"
                    placeholder="CVV"
                    value={values.cardSecurityCode}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    required = {true}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button
              size={"block"}
              id="validateButton"
              type="submit"
            >
              Submit
            </Button>
          </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;
