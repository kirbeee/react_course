function App(){
    const handleClick = () => {
        console.log("Adding an animal");
    }
    return <h1>
        <button onClick={handleClick}>Add Animal</button>
    </h1>;
}

export default App;