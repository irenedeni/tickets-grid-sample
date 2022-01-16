import styled from "styled-components"

interface IPerk {
  perk: any
}

const TicketMain = (props: IPerk) => {
  return (
    <GridMain>
      {props.perk ?
        <SymbolDiv><Icon src="./icons/check-icon.png"/></SymbolDiv> 
        : <SymbolDiv><Icon src="./icons/dash-icon.png"/></SymbolDiv> 
      }
    </GridMain>
  )
}

const GridMain = styled.div`
  justify-self: center;
  text-align: center;
  vertical-align: middle;
  text-align: center;
  padding: 0px 10px;
  justify-items: center;
  align-self: center;
  :nth-child(odd) {
    background-color: ${({ theme }) => theme.lightGrey};
  }
  :nth-last-child(2) {
    border-bottom: 1px solid ${({ theme }) => theme.mediumGrey};
  }
`
const SymbolDiv = styled.div`
  display: flex;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  height: 35px;
`
const Icon = styled.img`
  width: 12px;
  height: 12px;
  max-width: 12px;
  max-height: 12px;
`

export default TicketMain