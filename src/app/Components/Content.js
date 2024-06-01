"use client"
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Button, Card, Stack, Typography } from "@mui/material";

const Content = () => {

    const {data , setData , handleButtonClick} = useContext(AppContext)
    return ( 
        <>

        <Stack flexDirection='column'>
           {
(data.resultdata) ? (
    <>
<Stack flexDirection='column'>
<Typography>{data.recentprompt}</Typography>
<Typography>{data.resultdata}</Typography>
</Stack>
    </>
) : (
<>
<Card>card1</Card>
    <Card>card2</Card>
    <Card>card3</Card>
</>
)
           }
        </Stack>

        <input type="text" value={data.input} onChange={(e)=>{
            e.preventDefault()
            setData((prevData)=>({...prevData , input:e.target.value}))
        }} />
        <Button onClick={()=> handleButtonClick()}>Send</Button>
        </>
     );
}
 
export default Content;