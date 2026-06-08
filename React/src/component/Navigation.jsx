import '../assets/css/Navigation.css'

function Navigation(props){
    return (
        <nav class="main-nav">
            <a href="/" class="nav-logo">{props.webname}</a>
            <ul class="nav-links">
            <li class="linav"><a href="">{props.nav1}</a></li>
            <li class="linav"><a href="">{props.nav2}</a></li>
            <li class="linav"><a href="">{props.nav3}</a></li>
            </ul>
            <button class="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
        </nav>
    );
}

export default Navigation