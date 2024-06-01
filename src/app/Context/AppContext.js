"use client"
import { createContext, useEffect, useState } from "react"
import { run } from "../Components/Gemini";



export const AppContext = createContext();
export default function AppProvider({children}){

    const [data , setData] = useState({
        input:"",
        recentprompt:"",
        prevprompt:[],
        resultdata:"",
        loading:false,
        resultcheck:false
    })


    const handleButtonClick = async() => {
        
     setData((prevData)=>({
        ...prevData , resultdata:"",loading:true,resultcheck:true,recentprompt:data.input ,   prevprompt: [...prevData.prevprompt, data.input],
     }))
    console.log(data.prevprompt);
       const res = await run(data.input);
       setData((prevData)=>({
        ...prevData , resultdata:res , loading:false , input:""
       }))

      };

      useEffect(()=>{
     handleButtonClick()
      },[])
    
    const value={
        data , setData , handleButtonClick
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}