import styled from "styled-components"
import { ITicket } from "../slices/TicketsSlice"


const TicketHeader = (props: ITicket) => {
  return (
    <GridHeader>
      <h5>{props.ticketName}</h5>
      <p>{props.ticketDescription}</p>
    </GridHeader>
  )
}

export const GridHeader = styled.div`
  padding: 5px;
  justify-self: center;
  justify-items: center;
  text-align: center;
  align-self: center;
  width: 100%;
  height: 200px;
`

export default TicketHeader