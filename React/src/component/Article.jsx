import '../assets/css/Article.css'

function Article(props){
    return(
        <main class="page-wrapper narrow">
            <div class="article-header">
                <div class="article-header-meta">
                    <a href="/index.html">← All Articles</a>
                    <span>·</span>
                    <span>[{props.realtag}]</span>
                    <span>·</span>
                    <span>{props.date}</span>
                    <span>·</span>
                    <span>{props.read}</span>
                </div>
                <h1 class="article-headline">{props.headline}</h1>
                <p class="article-summary">
                    {props.summary}
                </p>
            </div>

            
        </main>
    )
}

export default Article