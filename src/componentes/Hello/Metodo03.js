import React from "react";
function HelloWorld(){
    const message = ['H','e','l','l','o',' ','W','o','r','l','d',' ','0','3'];
    return <div><h1>{message.join('')}</h1> </div>
}

export default HelloWorld;