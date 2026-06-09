import '../assets/css/Card.css'

function Card(props) {
    
    return (
        <div className="card">
            <h2>{props.cardtitle}</h2>
            <p>{props.content}</p>
        </div>
    );
}

export default Card