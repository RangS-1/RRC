import '../assets/css/Footer.css'

function Footer(props) {
    return (
        <>
        <footer>&copy; {new Date().getFullYear()} {props.footerc}</footer>
        </>
    );
}

export default Footer