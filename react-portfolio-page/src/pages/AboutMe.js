import React from 'react';
import Card from 'react-bootstrap/Card';

function AboutMe() {
    return (
        
          ['Success'].map((variant, idx) => (
        <Card
      bg={variant.toLowerCase()}
      key={idx}
      text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
      style={{ width: '18rem' }}
      className="mb-2"
        >
      <Card.Body>
        <Card.Title>{variant} About Me</Card.Title>
        <Card.Text>
        <p>
            My full name is Khanh Truong and i moved to the United State in 2009. I countinued my education as a Freshman at Lincoln High School located in Tacoma,Washington state. After i graduated from Lincoln High School, i attened to Universty of Washington at Tacoma campus. I got great learning experiences at the univeristy but for some personaly and family problems, i stopped attending to school on my second year of the University. 
        </p>

        <p>
            After i dropped out from the University, i started working on different jobs for the last 10 years. I worked as waitor and chef at different restaurant around my living area. I also started working for rideshare companies such as Uber and Lyft as my secondary job. I think being a ride share driver was an extraordinary experience. I had opportunies to talk to different passengers came from many different backgrounds. As most of my dirving time is in Seattle area where big technologies companies are, alot of my passengers have a background in  computer enginer.
        </p>
        <p>
            Talking to sotf-ware enginers from different companies inspired me to take a step into coding career. After the pandemic broke out, i had to stop driving and i thought that its time for me to change my caeer. I did alot of researches and i decided to attend to the Coding Boot camp of University of Washington which partnered with Trilogy Education Services.
        </p>
        </Card.Text>
      </Card.Body>
        </Card>))

    
    )
}

export default AboutMe;