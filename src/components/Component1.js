import Component2 from "./Component2"

const Component1 = () => {
    return (
        <div 
            style={{ background: 'orange', height: '100vh'}}
            onClick={() => console.log('hice click en el padre')}
        >
            <h1>Componente Padre</h1>
            <Component2 />
        </div>
    )
}

export default Component1