import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Ticket } from "../components"
import { ITicket } from "../components/Ticket"


const TicketsSlice = () => {

  const [data, setData] = useState<ITicket[]>([])

  const getData = () => {
    fetch('data.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(function(res){
        console.log(res)
        return res.json()
      })
      .then(function(json) {
        const ticketGroup:ITicket[] = json.data[1].tickets
        setData(ticketGroup)
      })
  }

  useEffect(() => {
    getData()
  },[])

  console.log("data!!!",data)

  return (
    <>
      {data.length && data.map((ticket:ITicket, index) => 
        <Ticket 
          key={index}
          ticketName={ticket?.ticketName}
        />
      )}
    </>
    
  )
}


export default TicketsSlice