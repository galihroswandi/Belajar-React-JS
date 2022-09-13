import { Carousel } from "react-bootstrap";
import Hero1 from "./../assets/Hero (1).jpg";
import Hero2 from "./../assets/Hero (2).jpg";
import Hero3 from "./../assets/Hero (3).jpg";

const Hero = () => {
    return (
        <Carousel style={{maxHeight : "100vh"}}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Hero1}
                alt="First slide"
                style={{maxHeight : "92.3vh", backgroundSize : "cover"}}
                />
                <Carousel.Caption>
                <h3>Kelulusan Jurusan Teknik Informatika</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Hero2}
                alt="Second slide"
                style={{maxHeight : "92.3vh", backgroundSize : "cover"}}
                />

                <Carousel.Caption>
                <h3>Sidang Kelulusan Cuy Universe</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Hero3}
                alt="Third slide"
                style={{maxHeight : "92.3vh", backgroundSize : "cover"}}
                />

                <Carousel.Caption>
                <h3>Bootcamp Perusahaan Shopee</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Hero;