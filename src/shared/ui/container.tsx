export function Container(props: any) {
    return(
        <div className="container py-5">
            {props.children}
        </div>
    )
}