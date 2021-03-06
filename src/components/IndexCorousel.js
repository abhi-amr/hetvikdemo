import React, {Component} from 'react';
import { Carousel } from 'react-bootstrap';


class IndexCorousel extends Component{
  render() {
    return (
      <div>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/CHgTjYS/pexels-pixabay-2478.jpg"
                alt="Patna University"
                />
                <Carousel.Caption>
                <h3>Patna University</h3>
                <p>Patna University, the first university in Bihar, was established on 1 October 1917 during the British Raj, and is the eleventh oldest university of the Indian subcontinent. The university oversaw examinations for educational institutions ranging from school finals to the postgraduate levels.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/MZdHmsL/pexels-meliani-idriss-29824.jpg"
                alt="Patliputra University"
                />

                <Carousel.Caption>
                <h3>Patliputra University</h3>
                <p>Patliputra University is an institution of higher education in Bodh Gaya, Bihar, India. It is recognized by the University Grants Commission. The university is now governed by the Bihar State University Act 1976.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/cb2c16j/pexels-mary-taylor-589657.jpg"
                alt="Open University"
                />

                <Carousel.Caption>
                <h3>Nalanda Open University</h3>
                <p>The Nalanda Open University is the only University in the State of Bihar meant for imparting learning exclusively through the system of distance education.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
      </div>
    );
  }
}

export default IndexCorousel;


