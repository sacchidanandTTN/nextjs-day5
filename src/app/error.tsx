"use client"

export default function Error({
    error,
    reset
    
}:{
    error:Error;
    reset:()=>void;
}){

    return (
        <div style={{textAlign:"center",padding:"40px"}}>
            <h2>
                Something went wrong
            </h2>
            <p>{error.message}</p>
            <button onClick={()=>reset()}>Try again</button>
        </div>
    )
}