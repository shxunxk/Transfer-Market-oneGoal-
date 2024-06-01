import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

export default function MatchDetail() {

    const { id } = useParams();

    const [matchData, setMatchData] = useState({
        "state": "100",
        "minute": "",
        "goalsHome": "3",
        "goalsAway": "3",
        "halftimeGoalsHome": "1",
        "halftimeGoalsAway": "2",
        "hasMatchSheet": true
      })

      useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://transfermarket.p.rapidapi.com/matches/get-result',
                params: {
                  id: '3330713',
                  domain: 'de'
                },
                headers: {
                  'X-RapidAPI-Key': 'process.env.rapidApi',
                  'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com'
                }
              };
              
              try {
                  const response = await axios.request(options);
                  console.log(response.data);
              } catch (error) {
                  console.error(error);
              }
        }
        // fetchData()
        },[])

  return (
    <div className='bg-slate-100 min-h-screen mx-auto'>
        <div className='w-11/12 bg-white min-h-screen mx-auto p-10'>
            <h1 className='text-3xl text-bold w-11/12 mx-auto bg-white p-16 pb-0'>Match Details</h1>
                {/* {matchData.map((item, index)=>(
                    <div>
                        <p>Hi</p>
                    </div>
                ))} */}
        </div>
    </div>
  )
}
