// import React from 'react';
// import ServiceCard from './ServiceCard';
// import './Services.css';

// const services = [
//   { title: 'Presentation Design', description: 'Lorem ipsum dolor sit amet...', image: '/images/presentation.png' },
//   { title: 'Audio - Visual Production', description: 'Lorem ipsum dolor sit amet...', image: '/images/audio-visual.png' },
//   { title: 'Translation Services', description: 'Lorem ipsum dolor sit amet...', image: '/images/translation.png' },
//   { title: 'Graphic Design', description: 'Lorem ipsum dolor sit amet...', image: '/images/graphic-design.png' },
//   { title: 'Research & Analytics', description: 'Lorem ipsum dolor sit amet...', image: '/images/research.png' },
//   { title: 'Data Processing', description: 'Lorem ipsum dolor sit amet...', image: '/images/data-processing.png' },
// ];

// function Services() {
//   return (
//     <div className="services">
//       {services.map((service, index) => (
//         <ServiceCard
//           key={index}
//           title={service.title}
//           description={service.description}
//           image={service.image}
//         />
//       ))}
//     </div>
//   );
// }

// export default Services;

import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css';
// import ezlogo from './Assets/Images/ezlogo.png'


const services = [
  { title: 'Presentation Design', description: 'Lorem ipsum dolor sit amet...', image: '/images/presentation.png' },
  // <img src={ezlogo} alt="EZ Works Logo" />
  { title: 'Audio - Visual Production', description: 'Lorem ipsum dolor sit amet...', image: '/images/audio-visual.png' },
  { title: 'Translation Services', description: 'Lorem ipsum dolor sit amet...', image: '/images/translation.png' },
  { title: 'Graphic Design', description: 'Lorem ipsum dolor sit amet...', image: '/images/graphic-design.png' },
  { title: 'Research & Analytics', description: 'Lorem ipsum dolor sit amet...', image: '/images/research.png' },
  { title: 'Data Processing', description: 'Lorem ipsum dolor sit amet...', image: '/images/data-processing.png' },
];

function Services() {
  return (
    <div className="services">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          image={service.image}
        />
      ))}
    </div>
  );
}

export default Services;
