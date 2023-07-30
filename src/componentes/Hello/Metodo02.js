import React, {useState} from "react";
function HelloWorld(){
    const [message] = useState('Hello World 02');
    return <div><h1>{message}</h1> </div>
}

export default HelloWorld;