import styled from "styled-components"

interface IPerk {
  perk: any
}

const TicketMain = (props: IPerk) => {
  return (
    <GridMain>
      {props.perk ?
        <span>✔️</span> 
        : <span>-</span> 
      }
      
    </GridMain>
  )
}

const GridMain = styled.div`
  justify-self: center;
  text-align: center;
  vertical-align: middle;
  text-align: center;
  justify-items: center;
  align-self: center;
  padding: 10px;
  background-color: #fafafa;
  width: 100%;
`

export default TicketMain