import './buttons123.scss';

type Buttons123Props = {
    name: string,
}

const Buttons123 = ({ name }: Buttons123Props) => (
  <button className="button123">
    { name }
  </button>
);

export default Buttons123;
