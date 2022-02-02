import styled from 'styled-components'

type cardProps = {
    url: string
}


const Card = (props: cardProps) => {
    return(
        <>
            <img src={props.url} alt="" />
        </>
    )
}






export default Card

