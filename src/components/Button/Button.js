const Button = (props) => {
    //{ text: 'Home', colorText='red'}
    console.log(props)
    return <button onClick={props.func} style={{ color: props.colorText}}>{props.children}</button>
}

export default Button