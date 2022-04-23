import './cards123.scss';

type CardProps = {
    title: string,
    text: string
}

const Cards123 = ({ title, text }: CardProps) => (
  <div className="cards123">
    <div>
      { title }
    </div>
    <div>
      { text }
    </div>
    <button className="action__button">Action</button>
  </div>
);

export default Cards123;
