import React, { useState, useEffect } from "react"
import styled from "styled-components"

export interface ITicket {
  ticketName?: string
}

const Ticket = (props: ITicket) => {

  return (
    <TestDiv>{props.ticketName}</TestDiv>
  )
}

const TestDiv = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: ${({theme})=> theme.primary};
  padding: 50px;
  min-height: 50px;
  box-shadow: 0px 5px 15px ${({theme})=> theme.boxShadow};
`

export default Ticket