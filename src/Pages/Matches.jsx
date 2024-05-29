import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react';
export default function Highlights() {

    const [video, setVideo] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://free-football-soccer-videos.p.rapidapi.com/',
                headers: {
                  'x-rapidapi-key': 'process.env.rapidApi',
                  'x-rapidapi-host': 'free-football-soccer-videos.p.rapidapi.com'
                }
              };
              
              try {
                  const response = await axios.request(options);
                  console.log(response.data);
                  setVideo(response.data);
              } catch (error) {
                  console.error(error);
              }
        }

    fetchData()
    },[])

    return (
    <div>
      <h1 className='text-3xl text-bold w-11/12 mx-auto bg-white p-16 pb-0'>Matches</h1>
      {video.map((item, index)=>(
          <div key={index} className='flex flex-col items-center p-5'>
            <h1 className='p-6 text-2xl font-bold'>{item.title}</h1>
            <h1 className='p-6 text-xl flex flex-row'><p className='font-bold'>League :</p><a href={item.competition.url}>{ item.competition.name}</a></h1>
            <p className='font-bold'>Date: {item.date.split('T')[0]} Time: {item.date.split('T')[1].split('+')[0]} GMT</p>
            <iframe width="1000" height="500" src={item['url']} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
            <a href={item.url} target = "_blank" className='p-6 text-xl flex flex-row text-blue-800'>Watch on: {item.url}</a>
            <div className='text-center'>
              <p>Home Team: <a href={item.side1.url}>{item.side1.name}</a><br/> <a href={item.side2.url}>Away Team: {item.side2.name}</a></p>
            </div>
          </div>
        )
      )}
    </div>
  )
}
