import { useState } from "react"; 
import Button from "./components/Button";

///////////////////////////////
///      Style Button       ///
///////////////////////////////


function App() {

  const [message, setMessage] = useState("Let's learn more about testing in React.")

  

  return (
    <div>
      <h1>Hello world!</h1>
      <p>{message}</p>
      <Button 
      onClick={()=> setMessage("New message")}>Change message</Button>
       <Button disabled={false} onClick={() => setMessage("New message2")}>change message</Button>
    </div>
  );
}



export default App;
