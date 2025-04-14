import "./EV.css";

export const EventHandling=()=>{

    // function handleButtonClick(){
    //     alert("hello js");
    // }

    const handleButtonClick=(event)=>{
        console.log(event.target);
        alert("hello js from event click");
    }

    const handleWelcomeButton=(name)=>{
        console.log(`hello , I'm ${name}`)
    }
    return (
        <>
        {/* function component with Named function */}
        <button onClick={handleButtonClick}> Click me
        </button>
        <br />
        <button onClick={(event)=>handleButtonClick(event)}> click me 2</button>
        <br />

        {/* inline handler */}

        <button onClick={(event)=>console.log(event.target)}>Inline handler</button>
        <br />
        {/* function component with Inline Arrow function */}

        <button onClick={()=>alert("hey , this is inline function")}>
            Inline arrow function
        </button>
       

      {/* passing argument to event handler */}

    <button onClick={(event)=>{handleWelcomeButton("Eram")}}> click me to see your name</button>
    </> 
    )
}