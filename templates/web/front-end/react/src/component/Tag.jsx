import '../assets/css/Tag.css'

function Tag(props){
    
    return (
        <div class="article-tags-row">
            <span class="tag">#{props.tag1}</span>
            <span class="tag">#{props.tag2}</span>
            <span class="tag">#{props.tag3}</span>
            <span class="tag">#{props.tag4}</span>
            <span class="tag">#{props.tag5}</span>
        </div>
    )
}

export default Tag