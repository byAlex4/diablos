import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Producto1() {
    return (
        <> <br />
            <body style={{ maxWidth: '95%', marginLeft: ' 10%', marginRight: ' 10%', marginBottom: "2%" }} >
                <Row>
                    <Col style={{ marginTop: '5%', maxWidth:"70%"}}>
                        <img src='https://scontent.fagu3-1.fna.fbcdn.net/v/t39.30808-6/273470375_361709379290845_7710972166740404850_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=RLkzBdbpztMAX84X8S3&tn=SgumeXodIHRY6rhb&_nc_ht=scontent.fagu3-1.fna&oh=00_AfD4NJncQ9QHvbez90hK1ujcBj0zQcGqHEcdhjqT30k5dA&oe=6387357F'
                        alt='producto' width="90%"/>
                    </Col>
                    <Col style={{maxWidth:"35%"}}>
                        <h1>Casco básico DS</h1>
                        <table>
                            <tr>
                                <td><h4>$2,000.00</h4></td>
                                <td><strike>$2,500.00</strike></td>
                            </tr>
                        </table>
                        <p>Impuesto incluido. Gastos de envío calculados en la compra </p>
                        <hr />

                        <h3>Descripcion:</h3>
                        Casco básico de muy buena calidad. 
                        <ul>
                            <li> Material del plástico rígido </li>
                            <li> Barra de acero tipo 1 </li>
                            <li> Candados de plástico suave </li>
                            <li> Peso de 1.45 Kg </li>
                            <li> Barbiquejo de goma </li>
                            <li> Carcaza de plástico rígido</li>
                        </ul>
                        <p>En Stock.</p>

                        <div className="d-grid gap-2">
                            <Button variant="danger" size="lg">
                                Añadir al carrito
                            </Button>
                            <Button variant="danger" size="lg">
                                Comprar ahora
                            </Button>
                        </div>
                    </Col>
                </Row>
                <br />
            </body>
        </>
    );
}

export default Producto1;