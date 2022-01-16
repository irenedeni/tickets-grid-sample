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
  highlightedPrice?: boolean
}

interface IProps {
  title?: string
  subtitle?: string
}

const TicketsPanel = (props: IProps) => {

  const [data, setData] = useState<ITicket[]>([])

  const getData = () => {
    fetch('data.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    // Alternatively: 
    // fetch('https://next.tnw-staging.com/next-api/tickets.json')
    .then(function(res){
      return res.json()
    })
    .then(function(json) {
      const ticketGroup:ITicket[] = json.data[1].tickets
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
      <TitleBlock>
        <Title>{props.title || "Get your access pass now"}</Title>
        <Subtitle>
          {props.subtitle || "Join us on June 16 and 17, 2022, for the 16th edition of our flagship event. Order your Business Pass or Startup Program Pass today."}
        </Subtitle>
      </TitleBlock> 
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
                    return  <TicketMain perk perkText={thisPerksOnly[i]} key={i}/>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0px;
  background-color: ${({ theme }) => theme.lightGrey};
  @media (max-width: 700px) {
    padding: 50px 0px;
  }
`

const TitleBlock = styled.div`
  margin-bottom: 15px;
  margin: 30px 0px 60px 0px;
  max-width: 60%;
  text-align: center;
  word-break: break-word;
  @media (max-width: 1050px) {
    max-width: 80%;
    margin: 30px 0px;
  }
  @media (max-width: 700px) {
    max-width: 100%;
    margin: 30px 30px 60px 30px;
  }
`

const Title = styled.h1`
  margin-bottom: 30px;
`

const Subtitle = styled.h4``

const Slice = styled.div`
  margin: 0px 120px;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  box-shadow: ${({ theme }) => theme.boxShadowPanel};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1520px;
  height: 100%;
  padding: 70px 0px;
  @media (max-width: 1420px) {
    margin: 0px 100px;
  }
  @media (max-width: 1200px) {
    margin: 0px 30px;
  }
  @media (max-width: 1050px) {
    padding: 0px;
    margin-top: 70px;
  }
`

const GridContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  box-sizing: border-box;
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
  padding: 10px 15px 10px 10px;
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
  box-sizing: border-box;
  padding-top: 40px;
  z-index: ${props => props.highlighted && "10"};
  :nth-child(2), :nth-child(3), :nth-child(4){
    border-right: ${({ theme }) => props => !props.highlighted && `1px solid ${theme.mediumGrey}`};
    @media (max-width: 1050px) {
      border-right: 0px;
    }
  }
  @media (max-width: 1050px) {
    border-top: 1px solid ${({ theme }) => theme.mediumGrey};
  }
`

export default TicketsPanel