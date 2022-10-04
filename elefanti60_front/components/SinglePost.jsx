const SinglePost = ({title, desc, id}) => {
    return (<div className="post" id = {id}>
       <h5>{title}</h5>
       <p>{desc}</p>

    </div>)
}
export default SinglePost;