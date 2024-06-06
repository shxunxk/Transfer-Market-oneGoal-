import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

export default function MatchDetail() {

    const { id } = useParams();

    console.log(id)

    const names = id.split(',')

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
                  id: names[0],
                  domain: 'de'
                },
                headers: {
                  'X-RapidAPI-Key': 'process.env.rapidApi',
                  'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com'
                }
              };
              
              try {
                  const response = await axios.request(options);
                  setMatchData(response.data)
                  console.log(response.data);
              } catch (error) {
                  console.error(error);
              }
        }
        // fetchData()
        },[])

  console.log(names)
  return (
    <div className='bg-slate-100 min-h-screen mx-auto'>
        <div className='w-11/12 bg-white min-h-screen mx-auto p-10'>
            <h1 className='text-3xl text-bold w-11/12 mx-auto bg-white p-16 pb-0'>Match Details</h1>
            <div className='flex flex-row justify-between py-10 text-xl px-48 min-h-96 items-center'>
              <div className='text-center'>
                <p className='text-3xl font-bold pb-6'>{matchData.goalsHome}</p>
                <p>{names[1]}</p>
              </div>
              <div className='font-bold text-2xl text-center'>
                <p>{matchData.minute||matchData.state}</p>
                <p>VS</p>
              </div>
              <div className='text-center'>
                <p className='text-3xl font-bold pb-6'>{matchData.halftimeGoalsAway}</p>
                <p>{names[2]}</p>
              </div>
            </div>
            <div className='flex flex-col'>
              <p className='text-sm font-bold pb-6 text-center'>Half Time</p>
              <div className='flex flex-row justify-between py-1 text-xl px-48 min-h-48 items-center'>
              <div className='text-center'>
                <p className='text-xl font-bold pb-6'>{matchData.halftimeGoalsHome}</p>
                <p>{names[1]}</p>
              </div>
              <div className='font-bold text-lg text-center'>
                <p>VS</p>
              </div>
              <div className='text-center'>
                <p className='text-xl font-bold pb-6'>{matchData.goalsAway}</p>
                <p>{names[2]}</p>
              </div>
              </div>
            </div>
        </div>
    </div>
  )
}
