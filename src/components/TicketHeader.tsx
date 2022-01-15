import styled from "styled-components"
import { ITicket } from "../slices/TicketsSlice"


const TicketHeader = (props: ITicket) => {
  return (
    <GridHeader>
      <H6>{props.ticketName}</H6>
      <P>{props.ticketDescription}</P>
    </GridHeader>
  )
}

export const GridHeader = styled.div`
  padding: 10px;
  justify-self: center;
  justify-items: center;
  text-align: center;
  align-self: center;
  height: 200px;
`

const H6 = styled.h6``
const P = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  letter-spacing: -0.14px;
  line-height: 22px;
`

export default TicketHeader