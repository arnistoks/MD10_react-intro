import './buttons1234.scss';

const ButtonDetails = [
  {
    id: 1,
    title: 'Button 1',
    backgroundColor: 'orange',
  },
  {
    id: 2,
    title: 'Button 2',
    backgroundColor: 'blue',
  },
  {
    id: 3,
    title: 'Button 3',
    backgroundColor: 'green',
  },
  {
    id: 4,
    title: 'Button 4',
    backgroundColor: 'teal',
  },
];

type Buttons1234Props = {
  id: number,
  name: string,
  backgroundColor: string
}

const Buttons1234 = () => (
  <div className="container__button">
    <button className="button1234">
      Button 1
    </button>
  </div>
);

export default Buttons1234;
