import '../assets/css/Card.css'

function Card(props) {
    
    return (
        <div class="card">
            <h1>Test</h1>
            <p>Halo{props.content}</p>
        </div>
    );
}

export default Card