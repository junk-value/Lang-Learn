import './Card.css';

const Card=({title,content,children})=>(
    <div className="card">
        <h3>{title}</h3>
        <p>{content}</p>
        {children}
    </div>
);
export default Card;
