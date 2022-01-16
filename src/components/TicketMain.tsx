import styled from "styled-components"

interface IPerk {
  perk: boolean
  perkText: string
}

const TicketMain = (props: IPerk) => {
  return (
    <GridMain>
      {props.perk ?
        <SymbolDiv><Icon src="./icons/check-icon.png"/></SymbolDiv> 
        : <SymbolDiv><Icon src="./icons/dash-icon.png"/></SymbolDiv> 
      }
      {props.perkText &&
        <MobilePerks>
          <IconSpan>
            <Icon src="./icons/check-icon.png"/>
          </IconSpan>
          {props.perkText}
        </MobilePerks> 
      }
    </GridMain>
  )
}

const GridMain = styled.div`
  justify-self: center;
  text-align: center;
  vertical-align: middle;
  text-align: center;
  padding: 0px 15px;
  justify-items: center;
  align-self: center;
  :nth-child(odd) {
    background-color: ${({ theme }) => theme.lightGrey};
  }
  :nth-last-child(2) {
    border-bottom: 1px solid ${({ theme }) => theme.mediumGrey};
    @media (max-width: 1050px) {
      border-bottom: 0px;
    }
  }
`
const SymbolDiv = styled.div`
  display: flex;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  height: 35px;
  @media (max-width: 1050px) {
    display: none
  }
`
const Icon = styled.img`
  width: 12px;
  height: 12px;
  max-width: 12px;
  max-height: 12px;
`
const IconSpan = styled.span`
  margin-right: 10px;
`

const MobilePerks = styled(SymbolDiv)`
  display: none;
  @media (max-width: 1050px) {
    display: flex;
  }
`

export default TicketMain