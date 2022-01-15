import React, { useState, useEffect } from "react"
import styled from "styled-components"


const Test = () => {
  const [data, setData] = useState([])

  const getData = () => {
    fetch('data.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response.body)
        return response.json()
      })
      .then(function(myJson) {
        console.log(myJson)
        setData(myJson.data)
      })
  }

  useEffect(() => {
    getData()
  },[])

  console.log("data!!!",data)


  return (
    <TestDiv>Hola testing component!</TestDiv>
  )
}

const TestDiv = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: ${({theme})=> theme.primary};
  padding: 50px;
  min-height: 50px;
  box-shadow: 0px 5px 15px ${({theme})=> theme.boxShadow};
`

export default Test