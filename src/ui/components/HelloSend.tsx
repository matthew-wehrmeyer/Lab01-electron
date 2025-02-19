import { useState } from "react";

function Communicate () {
    const [showDiv, setShowDiv] = useState(true);

    const toggleDiv = ()=> {
        setShowDiv(!showDiv);
    };

    return (
        <div>
            {showDiv ? (
                <div className="HelloMessage">
                    <h2 className="helloTxt"> </h2>
                    <button className="btn btn-primary btn-lg" onClick={toggleDiv}>Hello There</button>
                </div>
            ) : (
                <div className="HelloResponse">
                    <h2 className="helloTxt">Hellow World</h2>
                    <button className="btn btn-success" onClick={toggleDiv}>Okay</button>
                </div>
            )}
        </div>
    );
}

export default Communicate;