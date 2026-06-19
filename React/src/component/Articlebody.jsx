import '../assets/css/Article-body.css'

function Articlebody(props){
    return(
        <main class="page-wrapper narrow">
        <h2>{props.headline}</h2>
        <div class="article-body">

                <p>
                    paragraph
                </p>
                <blockquote>
                    "."
                    <br/>
                    — RangS
                </blockquote>
        </div>
        </main>
    )
}

export default Articlebody