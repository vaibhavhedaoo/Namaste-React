import React from "react";

const Contactus = () =>{
    return(
        <div>

            <h1 className="font-bold p-4 m-4">
                This is Contact Us page!!!
            </h1>
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="name"/>
                <input type="text" className="border border-black p-2 m-2" placeholder="message" />
                <button className="border border-black p-2 m-2 rounded-lg bg-green-500">Submit</button>
            </form>
        </div>

    );
}



export default Contactus