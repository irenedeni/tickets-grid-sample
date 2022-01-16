import styled from "styled-components"
import { ITicket } from "../slices/TicketsPanel"

export interface ITicketStyle {
  disabled?: boolean
}

const TicketHeader = (props: ITicket) => {
  return (
    <GridHeader>
      <H6>{props.ticketName}</H6>
      <Description>
        <P>{props.ticketDescription}</P>
      </Description>
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
          disabled={props.ticketButtonLabel === "Sold out" ? true : false}
        >
          {props.ticketButtonLabel}
        </Button>
      </PriceDiv>
    </GridHeader>
  )
}

export const GridHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  justify-items: center;
  text-align: center;
  align-items: stretch;
  height: 320px;
`

const H6 = styled.h6`
  margin-bottom: 10px;
`
const Description = styled.div`
  height: 200px;
`

const P = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  letter-spacing: -0.14px;
  line-height: 22px;
`
export const PriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PriceComparison = styled.div`
  display: flex;
  justify-content: center;
`

export const StrikethroughPrice = styled.span`
  text-decoration: line-through;
  margin-right: 5px;
  font-size: 20px;
  color: ${({ theme }) => theme.darkGrey};
`

export const ActualPrice = styled.span`
  font-size: 20px;
  font-family: "Graphik-Medium";
  color: ${({ theme }) => theme.secondary};
`

export const VatInfo = styled.span`
  color: ${({ theme }) => theme.darkGrey};
  font-size: 12px;
  margin-top: 7px;
`

export const Button = styled.a<ITicketStyle>`
  margin-top: 20px;
  background-color: ${({ theme }) => props => props.disabled && theme.mediumGrey};
  cursor: ${props => props.disabled && "default"};
  pointer-events: ${props => props.disabled && "none"};
  :hover {
    background-color: ${({ theme }) => props => props.disabled && theme.mediumGrey};
  }
`

export default TicketHeader
