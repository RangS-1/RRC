import '../assets/css/Card.css'

function Card(props) {
    
    return (
        <div className="card">
            <h2 className="text">{props.cardtitle}</h2>
            <p className="text">{props.content}</p>
        </div>
    );
}

export default Card