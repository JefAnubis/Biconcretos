import Carousel from 'react-bootstrap/Carousel'
function carousel() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block"
                    width="100%"
                    height="550px"
                    src='../assets/img/1.jpg'
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    width="100%"
                    height="550px"
                    src='../assets/img/building1.jpg'
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    width="100%"
                    height="550px"
                    src='../assets/img/bulding3.jpg'
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default carousel;