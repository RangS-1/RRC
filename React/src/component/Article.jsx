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
                    This is Your Article Summary
                </p>
                <div class="article-tags-row">
                    <span class="tag">#tips</span>
                    <span class="tag">#programming</span>
                    <span class="tag">#development</span>
                    <span class="tag">#coding</span>
                </div>
                </div>

                <div class="article-body">

                <h2>h2?</h2>

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

export default Article