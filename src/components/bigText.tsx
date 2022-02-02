
type nameProps = {
    name: string;
}


export const BigText = (props: nameProps) => {
    return(
        <div>
            <h1>Hello! {props.name}</h1>
        </div>
    )
}


