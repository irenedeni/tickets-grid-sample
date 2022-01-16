import styled from "styled-components"
import { ITicket } from "../slices/TicketsPanel"
import { 
  PriceDiv, 
  PriceComparison, 
  StrikethroughPrice, 
  ActualPrice, 
  VatInfo, 
  Button } from "./TicketHeader"


const TicketFooter = (props: ITicket) => {
  return (
    <GridFooter>
      <PriceDiv>
        {props.ticketStrikethroughPrice ?
          <PriceComparison>
            <StrikethroughPrice>€ {props.ticketStrikethroughPrice}</StrikethroughPrice>
            <ActualPrice> € {props.ticketActualPrice}</ActualPrice>
          </PriceComparison>
          : <ActualPrice> € {props.ticketActualPrice}</ActualPrice>
        }
        <VatInfo>ex. 21% VAT</VatInfo>
        <Button 
          href={props.ticketButtonLink} 
          target="_blank"
          disabledBtn={props.ticketButtonLabel === "Sold out" ? true : false}
        >{props.ticketButtonLabel}
        </Button>
      </PriceDiv>
    </GridFooter>
  )
}

const GridFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 10px;
  justify-items: center;
  text-align: center;
  align-items: stretch;
  height: 120px;
`

export default TicketFooter

