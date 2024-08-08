import Accordion from "./components/Accordion";

function App(){
    const items = [
    {
        id:'1',
        label: "What is React?",
        content: "React is a front end JavaScript framework"
    },
    {
        id:'2',
        label: "Why use React?",
        content: "React is a favorite JS library among engineers"
    },
    {
        id:'3',
        label: "How do you use React?",
        content: "You use React by creating components"
    }
    ]
    return <Accordion items={items}/>
}

export default App