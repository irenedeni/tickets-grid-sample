import React, { useState, useEffect } from "react"
import styled from "styled-components"

export interface ITicket {
  ticketActualPrice: string
  ticketButtonLabel: string
  ticketButtonLink: string
  ticketDescription: string
  ticketDiscount?: string
  ticketHighlighted: boolean
  ticketName: string
  ticketPerks: Array<string | any>
  ticketStrikethroughPrice?: string;
  ticketTopLabel?: string
}

interface ITicketPerk {
  ticketPerks: string
}


const Ticket = (props: ITicket) => {
console.log("TicketPerks per ticket", props.ticketPerks)
  return (
    <TestDiv>
      {props.ticketActualPrice}
      {props.ticketButtonLabel}
      {props.ticketButtonLink}
      {props.ticketDescription}
      {props.ticketHighlighted}
      {props.ticketName}
      {props.ticketPerks.map((perk, ind) => 
        <div style={{color: "black"}} key={ind}>{perk.ticketPerk}</div>
      )}
      {props.ticketDiscount &&
        props.ticketDiscount
      }
      {props.ticketStrikethroughPrice &&
        props.ticketStrikethroughPrice
      }
      {props.ticketTopLabel &&
        props.ticketTopLabel
      }
    </TestDiv>
  )
}

const TestDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  text-align: center;
  color: ${({theme})=> theme.primary};
  padding: 50px;
  min-height: 50px;
  box-shadow: 0px 5px 15px ${({theme})=> theme.boxShadow};
`

export default Ticket