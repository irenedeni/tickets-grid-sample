import { useState, useEffect } from "react"
import styled from "styled-components"
import { TicketHeader, TicketMain, TicketFooter } from "../components"
import { GridHeader } from "../components/TicketHeader"

export interface ITicket {
  ticketActualPrice: string
  ticketButtonLabel: string
  ticketButtonLink: string
  ticketDescription: string
  ticketDiscount?: string
  ticketHighlighted?: boolean
  ticketName: string
  ticketPerks: Array<string | any>
  ticketStrikethroughPrice?: string;
  ticketTopLabel?: string
}

export interface ITicketStyle {
  highlighted?: boolean
  disabledBtn?: boolean
}

const TicketsPanel = () => {

  const [data, setData] = useState<ITicket[]>([])

  const getData = () => {
    fetch('data.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(function(res){
      console.log(res)
      return res.json()
    })
    .then(function(json) {
      // Given the following:
      // 1. In this case, the data and the structure passed by JSON is not going to change;
      // 2. We are only interested in a specific ticket group, the “In-person + Digital”;
      // I am assigning to the ticketGroup variable the second item of the data array 
      // (specifically, the array "tickets" property only).
      const ticketGroup:ITicket[] = json.data[1].tickets

      console.log("json.data", json.data)
      setData(ticketGroup)
    })
  }

  useEffect(() => {
    getData()
  },[])

  const allPerks:string[] = []
  console.log("data", data)

  const findAllPerks = () => {
    data?.length > 0 && data.map((ticket:ITicket) => {
      const perks = ticket.ticketPerks
      for(let i = 0; i < perks.length; i++){
        if(!allPerks.includes(perks[i].ticketPerk)){
          allPerks.push(perks[i].ticketPerk)
        }
      }
    })
  }
  findAllPerks()

  return (
    <Container>
      <Slice>
        <GridContainer>
          <FirstColumn>
            <GridHeader style={{ borderRight: "0px" }}/>
            {allPerks?.length > 0 && allPerks.map((perk, index) => (
              <AllPerks key={index}>
                {perk}
              </AllPerks>
            ))}
          </FirstColumn>
          {data?.length > 0 && data.map((ticket:ITicket, index) => {
            const perks = ticket.ticketPerks
            for(let i = 0; i < perks.length; i++){
              if(!allPerks.includes(perks[i].ticketPerk)){
                allPerks.push(perks[i].ticketPerk)
              }
            }
            
            const thisPerksOnly = perks.map(p => p.ticketPerk)

            return (
              <TicketColumn key={index} highlighted={ticket.ticketHighlighted}>
                <TicketHeader {...ticket}/>
                {allPerks?.length > 0 && allPerks.map((currentPerk, i) => {
                  if(thisPerksOnly.includes(currentPerk)){
                    return  <TicketMain perk={true} perkText={thisPerksOnly[i]} key={i}/>
                  } else {
                    return <TicketMain perk={false} perkText={thisPerksOnly[i]} key={i}/>
                  }
                })}
                <TicketFooter {...ticket}/>
              </TicketColumn>
            )
          })}
        </GridContainer>
      </Slice>
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const Slice = styled.div`
  margin: 0px 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1520px;
  width: 100%;
  height: 100%;
  padding: 70px 0px;
  @media (max-width: 1250px) {
    margin: 0px 100px;
  }
  @media (max-width: 1100px) {
    margin: 0px 30px;
  }
`
const GridContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  justify-items: start;
  grid-template-columns: [col1] 20% [col2] 20% [col3] 20% [col4] 20% [col5] 20%;
  @media (max-width: 1050px) {
    display: flex;
    flex-direction: column;
  }
`
const AllPerks = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Graphik-Regular";
  flex-wrap: wrap;
  text-align: right;
  height: 35px;
  padding: 10px;
  justify-content: center;
  letter-spacing: -0.21px;
  :nth-child(odd){
    background-color: ${({ theme }) => theme.lightGrey};
  }
  :last-child{
    border-bottom: 1px solid ${({ theme }) => theme.mediumGrey};
  }
`

const FirstColumn = styled.div`
  padding-top: 40px;
  @media (max-width: 1050px) {
    display: none;
  }
`

const TicketColumn = styled.div<ITicketStyle>`
  box-shadow: ${({ theme }) => props => props.highlighted && theme.boxShadow};
  padding-top: 40px;
  :nth-child(2), :nth-child(3), :nth-child(4){
    border-right: 1px solid ${({ theme }) => theme.mediumGrey};
    @media (max-width: 1050px) {
      border-right: 0px;
    }
  }
  @media (max-width: 1050px) {
    border-top: 1px solid ${({ theme }) => theme.mediumGrey};
  }
`

export default TicketsPanel