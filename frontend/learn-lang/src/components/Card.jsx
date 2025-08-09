import './Card.css';

const Card=({title,content})=>(
    <div className="card">
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
);
export default Card;