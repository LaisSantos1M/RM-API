import s from './card.module.css'

// export const Card = (props) => {
//     return(
//         <>
//         <h2>{props.name}</h2>
//         <img src={props.image} alt={props.name} />
//          <p>{props.species}</p>
//         </>
//     )
// }


export const Card = ({image, name, species}) => {
    return(
        <>
        <h2>{name}</h2>
        <img src={image} alt={name} />
         <p>{species}</p>
        </>
    )
}