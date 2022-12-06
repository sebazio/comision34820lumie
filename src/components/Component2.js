const Component2 = () => {

    const handleClick = (e) => {
        console.log(e)
        e.stopPropagation()
        console.log('hice click en el hijo')
    }

    return (
        <div 
            style={{ background: 'pink'}}
            onClick={handleClick}
        >
            <h1>Componente hijo</h1>
        </div>
    )
}

export default Component2