import Image from 'react-bootstrap/Image'
import {Link} from 'react-router-dom'

const CardTv = props => {

    return (
        <div className="cards">
            <Link key={props.id} to={'/tv/' + props.id} {...props}>
                <Image src={'https://image.tmdb.org/t/p/original' + props.poster_path} alt={props.original_title} {...props} rounded/>
            </Link>
        </div>
    )
}

export default CardTv