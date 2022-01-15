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
        // Given the following:
        // 1. In this case, the data and the structure passed by JSON is not going to change;
        // 2. We are only interested in a specific ticket group, the “In-person + Digital”;
        // I am assigning to the ticketGroup variable the second item of the data array 
        // (specifically, the array "tickets" property only).
        const ticketGroup:ITicket[] = json.data[1].tickets
        setData(ticketGroup)
      })
  }

  useEffect(() => {
    getData()
  },[])

  console.log("data!!!",data)
  const allPerks:string[] = []

  return (
    <>
      {data.length && data.map((ticket:ITicket, index) => {
        const perks = ticket.ticketPerks
        for(let i = 0; i < perks.length; i++){
          if(!allPerks.includes(perks[i].ticketPerk)){
            allPerks.push(perks[i].ticketPerk)
          }
        }
        return (
          <Ticket 
            key={index}
            ticketName={ticket?.ticketName}
            ticketActualPrice={ticket?.ticketActualPrice}
            ticketButtonLabel={ticket?.ticketButtonLabel}
            ticketButtonLink={ticket?.ticketButtonLink}
            ticketDescription={ticket?.ticketDescription}
            ticketHighlighted={ticket?.ticketHighlighted}
            ticketPerks={ticket?.ticketPerks}
            ticketDiscount={ticket?.ticketDiscount}
            ticketStrikethroughPrice={ticket?.ticketStrikethroughPrice}
            ticketTopLabel={ticket?.ticketTopLabel}
          />
        )
        })}
    </>
    
  )
}


export default TicketsSlice