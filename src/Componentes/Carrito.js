import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';

function Carrito() {
    return (
        <>
            <body style={{ backgroundColor: "#ededed", minHeight:"80vh"}}>
                <div style={{ width: "95%", marginLeft: "3%", paddingRight: "2%", backgroundColor: "#ededed", paddingBottom: "5%" }}>
                    <Row>
                        <div style={{paddingBottom: "5px", paddingTop: "10px" }}>
                            <h1>Carrito</h1>
                        </div>
                    </Row>
                    <Row>
                        <Col style={{ width: "auto%", backgroundColor: "white", borderRadius: "10px" }}>
                            <div>
                                <Table striped>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Imagen</th>
                                            <th>Producto</th>
                                            <th>Descripcion</th>
                                            <th>Precio</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td style={{ width: "20%" }}>
                                                <img src='https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/273470375_361709379290845_7710972166740404850_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=RLkzBdbpztMAX84X8S3&tn=SgumeXodIHRY6rhb&_nc_ht=scontent.fagu3-1.fna&oh=00_AfD4NJncQ9QHvbez90hK1ujcBj0zQcGqHEcdhjqT30k5dA&oe=6387357F'
                                                    alt='producto1' width="70%" /></td>
                                            <td>Casco Riddel</td>
                                            <td>Casco Riddel de excelente calidad. </td>
                                            <td>$5,000.00</td>
                                            <td><Button variant="danger">Quitar</Button></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td style={{ width: "20%" }}>
                                                <img src='https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/273470375_361709379290845_7710972166740404850_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=RLkzBdbpztMAX84X8S3&tn=SgumeXodIHRY6rhb&_nc_ht=scontent.fagu3-1.fna&oh=00_AfD4NJncQ9QHvbez90hK1ujcBj0zQcGqHEcdhjqT30k5dA&oe=6387357F'
                                                   alt='producto2' width="70%" /></td>
                                            <td>Casco básico DS</td>
                                            <td>Casco DS básico de muy buena calidad. </td>
                                            <td>$2,000.00</td>
                                            <td><Button variant="danger">Quitar</Button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                        <Col style={{ maxWidth: "20%", marginLeft: "2%" }}>
                            <div style={{ textAlign: "center", backgroundColor: "white", paddingBottom: "5%", paddingTop: "5%", borderRadius: "15px" }}>
                                <h1>Subtotal:</h1>
                                <h2><strong>$</strong> 7,000</h2>
                                <br />
                                <h4>( <strong>2</strong> productos )</h4>
                                <div className="d-grid gap-2" style={{ marginLeft: "5%", marginRight: "5%" }}>
                                    <Button variant="danger">Comprar</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </body>
        </>
    );
}

export default Carrito;