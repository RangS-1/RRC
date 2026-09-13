import '../assets/css/Header.css'

function Header(props){
    return (
        <header>
            <h1>{props.headtitle}</h1>
            <p>{props.headsubtitle}</p>
        </header>
    );
}

export default Header