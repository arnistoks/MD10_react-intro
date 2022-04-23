import { FC } from 'react';
import './buttons1234.scss';

type Buttons1234Props = {
  id: number
  name: string
  backgroundColor: string
}

const Buttons1234: FC<Buttons1234Props> = ({ id, name, backgroundColor }) => (
  <div className="container__button">
    <button
      className="button1234"
      style={{ backgroundColor }}
    >
      { name }
    </button>
  </div>
);

export default Buttons1234;
