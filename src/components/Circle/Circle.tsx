import './circle.scss';
import Carimage1 from './Images/carlogo1.png';
import Carimage2 from './Images/carlogo2.png';
import Carimage3 from './Images/carlogo3.png';
import Carimage4 from './Images/carlogo4.png';

const Circle = () => (
  <div className="container__button">
    <div className="circle">
      <img src={Carimage1} className="carlogo" alt="Logo" />
    </div>
    <div className="circle">
      <img src={Carimage2} className="carlogo" alt="Logo" />
    </div>
    <div className="circle">
      <img src={Carimage3} className="carlogo" alt="Logo" />
    </div>
    <div className="circle">
      <img src={Carimage4} className="carlogo" alt="Logo" />
    </div>
  </div>
);

export default Circle;
