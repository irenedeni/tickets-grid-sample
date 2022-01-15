import { useState, useEffect } from "react"
import styled from "styled-components"
import { TicketHeader, TicketMain } from "../components"
import { GridHeader } from "../components/TicketHeader"

export interface ITicket {
  ticketActualPrice: string
  ticketButtonLabel: string
  ticketButtonLink: string
  ticketDescription: string
  ticketDiscount?: string
  ticketHighlighted: boolean
  ticketName: string
  ticketPerks: Array<string | any>
  ticketStrikethroughPrice?: string;
  ticketTopLabel?: string
}

const TicketsSlice = () => {

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
      console.log("ticketGroup",ticketGroup)
      setData(ticketGroup)
    })
  }

  useEffect(() => {
    getData()
  },[])

  const allPerks:string[] = []

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
          <div>
            <GridHeader />
            {allPerks?.length > 0 && allPerks.map((perk, index) => (
              <AllPerks key={index}>
                {perk}
              </AllPerks>
            ))}
          </div>
          {data?.length > 0 && data.map((ticket:ITicket, index) => {
            const perks = ticket.ticketPerks
            for(let i = 0; i < perks.length; i++){
              if(!allPerks.includes(perks[i].ticketPerk)){
                allPerks.push(perks[i].ticketPerk)
              }
            }
            
            const thisPerksOnly = perks.map(p => p.ticketPerk)

            return (
              <div key={index}>
                <TicketHeader {...ticket} />
                {allPerks?.length > 0 && allPerks.map((currentPerk, i) => {
                  if(thisPerksOnly.includes(currentPerk)){
                    return  <TicketMain perk={true} key={i}/>
                  } else {
                    return <TicketMain perk={false} key={i}/>
                  }
                })}
              </div>
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
  margin: 0px 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1520px;
  width: 100%;
  height: 100%;
  padding: 70px 0px;
`
const GridContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  padding: 20px;
  background-color: yellow;
  justify-items: start;
  grid-template-columns: [col1] 20% [col2] 20% [col3] 20% [col4] 20% [col5] 20%;
`
const AllPerks = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #333;
  flex-wrap: wrap;
  word-break: break-all;
`
const TestDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  word-break: break-all;
  color: green;
`

export default TicketsSlice