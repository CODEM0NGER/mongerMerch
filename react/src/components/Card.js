import { Link } from 'react-router-dom'

const Card =(props)=> {

    return (
        <div className="col">
            <div className="card">
                <img src={props.imgUrl} alt={props.name} className="img-fluid image card-img-top" />
                <div className="card-top">
                    <h3 className="card-title">{props.name}</h3>
                    <p className="card-text">{props.price}</p>
                    <Link to={`/${props.path}/${props.id}`} className="btn btn-primary" >View Product</Link>
                </div>
            </div>
        </div>
    )
}

export default Card