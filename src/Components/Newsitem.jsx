

const Newsitem = ({title,src,url,description}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3  text-center " style={{maxWidth:"360px"}}>
    <img src={src} style={{height:"200px", width:"360px"}} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text">{description?description.slice(0,90):"No Description Fom The Author"}</p>
      <a href={url} className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  )
}

export default Newsitem
