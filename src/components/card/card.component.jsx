import './card.styles.css'

const Card=({robot})=>{
        const {id,name,email}=robot;
        return(
            <div className='card-container' key={id}>
                <img alt={`robot ${name}`} src={`https://api.dicebear.com/7.x/bottts/svg?seed=${name}`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )

    
}
export default Card;