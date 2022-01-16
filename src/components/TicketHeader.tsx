import styled from "styled-components"
import { ITicket, ITicketStyle } from "../slices/TicketsPanel"


const TicketHeader = (props: ITicket) => {
  return (
    <GridHeader>
      {props.ticketHighlighted &&
        <HighlightedLabel highlighted={props.ticketHighlighted}>Popular choice</HighlightedLabel>
      }
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
  padding: 0px;
  justify-items: center;
  text-align: center;
  align-items: stretch;
  height: 350px;
  position: relative;
`

const H6 = styled.h6`
  padding: 0px 15px;
`
const Description = styled.div`
  height: 200px;
  padding: 0px 15px;
`

const P = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  letter-spacing: -0.14px;
  line-height: 22px;
`
const HighlightedLabel = styled.div<ITicketStyle>`
  display: block;
  width: 100%;
  color: ${({ theme }) => theme.white};
  font-family: "Shentox";
  text-transform: uppercase;
  letter-spacing: 1.12px;
  font-size: 14px;
  text-align: center;
  padding: 8px 0px;
  background: ${({ theme }) => theme.gradient};
  position: absolute;
  top: -60px;
  left: 0px;
  box-shadow: ${({ theme }) => props => props.highlighted && theme.boxShadow};
`

export const PriceDiv = styled.div`
  display: flex;
  padding: 0px 15px;
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
