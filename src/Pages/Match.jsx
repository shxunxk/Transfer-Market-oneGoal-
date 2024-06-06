import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Match() {

  const [matches, setMatches] = useState({
    "share": {
      "title": "Liveticker Begegnungen",
      "url": "https://www.transfermarkt.de/live/index",
      "description": "Auf dieser Seite sind alle Spielbegegnungen des ausgewählten Tages, gruppiert nach Wettbewerb, aufgelistet."
    },
    "totalMatches": 16,
    "liveMatches": {
      "CL": [
        {
          "id": "3714214",
          "scoreradarID": null,
          "competitionID": "CL",
          "competitionName": "UEFA Champions League",
          "competitionImage": "https://tmssl.akamaized.net/images/logo/normal/cl.png?lm=1626810555",
          "tournamentFlag": "1",
          "round": "Achtelfinale",
          "group": "AFH",
          "matchDay": "7",
          "matchDate": "16.02.2022",
          "fullMatchDate": "Mittwoch, 16. Februar 2022",
          "matchTime": "21:00:00",
          "timestamp": 1645041600,
          "homeClubID": "409",
          "homeClubName": "RB Salzburg",
          "homeClubImage": "https://tmssl.akamaized.net/images/wappen/medium/409.png?lm=1557737354",
          "awayClubID": "27",
          "awayClubName": "FC Bayern",
          "awayClubImage": "https://tmssl.akamaized.net/images/wappen/medium/27.png?lm=1498251238",
          "result": "-:-",
          "postponed": false,
          "nextRound": "",
          "resultObject": {
            "result": "-:-",
            "goalsHome": "-",
            "goalsAway": "-",
            "minute": 0,
            "state": "",
            "destinationValue": 4,
            "destinationDescription": "Liveticker"
          }
        },
        {
          "id": "3714220",
          "scoreradarID": null,
          "competitionID": "CL",
          "competitionName": "UEFA Champions League",
          "competitionImage": "https://tmssl.akamaized.net/images/logo/normal/cl.png?lm=1626810555",
          "tournamentFlag": "1",
          "round": "Achtelfinale",
          "group": "AFH",
          "matchDay": "7",
          "matchDate": "16.02.2022",
          "fullMatchDate": "Mittwoch, 16. Februar 2022",
          "matchTime": "21:00:00",
          "timestamp": 1645041600,
          "homeClubID": "46",
          "homeClubName": "Inter Mailand",
          "homeClubImage": "https://tmssl.akamaized.net/images/wappen/medium/46.png?lm=1618900989",
          "awayClubID": "31",
          "awayClubName": "FC Liverpool",
          "awayClubImage": "https://tmssl.akamaized.net/images/wappen/medium/31.png?lm=1456567819",
          "result": "-:-",
          "postponed": false,
          "nextRound": "",
          "resultObject": {
            "result": "-:-",
            "goalsHome": "-",
            "goalsAway": "-",
            "minute": 0,
            "state": "",
            "destinationValue": 4,
            "destinationDescription": "Liveticker"
          }
        }
      ],
      "L3": [
        {
          "id": "3594329",
          "scoreradarID": null,
          "competitionID": "L3",
          "competitionName": "3. Liga",
          "competitionImage": "https://tmssl.akamaized.net/images/logo/normal/l3.png?lm=1569702802",
          "tournamentFlag": "0",
          "round": null,
          "group": "",
          "matchDay": "21",
          "matchDate": "16.02.2022",
          "fullMatchDate": "Mittwoch, 16. Februar 2022",
          "matchTime": "19:00:00",
          "timestamp": 1645034400,
          "homeClubID": "40373",
          "homeClubName": "Viktoria Berlin",
          "homeClubImage": "https://tmssl.akamaized.net/images/wappen/medium/40373.png?lm=1600709465",
          "awayClubID": "23",
          "awayClubName": "E. Braunschweig",
          "awayClubImage": "https://tmssl.akamaized.net/images/wappen/medium/23.png?lm=1545376138",
          "result": "-:-",
          "postponed": true,
          "nextRound": "",
          "resultObject": {
            "result": "-:-",
            "goalsHome": "-",
            "goalsAway": "-",
            "minute": 0,
            "state": "",
            "destinationValue": 4,
            "destinationDescription": "Liveticker"
          }
        },
        {
          "id": "3594449",
          "scoreradarID": null,
          "competitionID": "L3",
          "competitionName": "3. Liga",
          "competitionImage": "https://tmssl.akamaized.net/images/logo/normal/l3.png?lm=1569702802",
          "tournamentFlag": "0",
          "round": null,
          "group": "",
          "matchDay": "22",
          "matchDate": "16.02.2022",
          "fullMatchDate": "Mittwoch, 16. Februar 2022",
          "matchTime": "19:00:00",
          "timestamp": 1645034400,
          "homeClubID": "12456",
          "homeClubName": "Türkgücü Münch.",
          "homeClubImage": "https://tmssl.akamaized.net/images/wappen/medium/12456.png?lm=1599298983",
          "awayClubID": "72",
          "awayClubName": "1860 München",
          "awayClubImage": "https://tmssl.akamaized.net/images/wappen/medium/72.png?lm=1403081335",
          "result": "-:-",
          "postponed": true,
          "nextRound": "",
          "resultObject": {
            "result": "-:-",
            "goalsHome": "-",
            "goalsAway": "-",
            "minute": 0,
            "state": "",
            "destinationValue": 4,
            "destinationDescription": "Liveticker"
          }
        }
      ],
      "ES1": [
        {
          "id": "3610271",
          "scoreradarID": null,
          "competitionID": "ES1",
          "competitionName": "LaLiga",
          "competitionImage": "https://tmssl.akamaized.net/images/logo/normal/es1.png?lm=1557051003",
          "tournamentFlag": "0",
          "round": null,
          "group": "",
          "matchDay": "21",
          "matchDate": "16.02.2022",
          "fullMatchDate": "Mittwoch, 16. Februar 2022",
          "matchTime": "19:00:00",
          "timestamp": 1645034400,
          "homeClubID": "13",
          "homeClubName": "Atlético Madrid",
          "homeClubImage": "https://tmssl.akamaized.net/images/wappen/medium/13.png?lm=1519120744",
          "awayClubID": "3368",
          "awayClubName": "UD Levante",
          "awayClubImage": "https://tmssl.akamaized.net/images/wappen/medium/3368.png?lm=1408655062",
          "result": "-:-",
          "postponed": true,
          "nextRound": "",
          "resultObject": {
            "result": "-:-",
            "goalsHome": "-",
            "goalsAway": "-",
            "minute": "verl",
            "state": "60",
            "destinationValue": 1,
            "destinationDescription": "Vorbericht"
          }
        }
      ],
      "RLN4": [
        {
          "id": "3596798",
          "scoreradarID": null,
          "competitionID": "RLN4",
          "competitionName": "Regionalliga Nordost",
          "competitionImage": "https://tmssl.akamaized.net/images/logo/normal/rln4.png?lm=1436048476",
          "tournamentFlag": "0",
          "round": null,
          "group": "",
          "matchDay": "21",
          "matchDate": "16.02.2022",
          "fullMatchDate": "Mittwoch, 16. Februar 2022",
          "matchTime": "19:00:00",
          "timestamp": 1645034400,
          "homeClubID": "497",
          "homeClubName": "Lok Leipzig",
          "homeClubImage": "https://tmssl.akamaized.net/images/wappen/medium/497.png?lm=1403714949",
          "awayClubID": "562",
          "awayClubName": "Optik Rathenow",
          "awayClubImage": "https://tmssl.akamaized.net/images/wappen/medium/562.png?lm=1403705584",
          "result": "-:-",
          "postponed": true,
          "nextRound": "",
          "resultObject": {
            "result": "-:-",
            "goalsHome": "-",
            "goalsAway": "-",
            "minute": 0,
            "state": "",
            "destinationValue": 4,
            "destinationDescription": "Liveticker"
          }
        },
        {
          "id": "3710126",
          "scoreradarID": null,
          "competitionID": "RLN4",
          "competitionName": "Regionalliga West",
          "competitionImage": "https://tmssl.akamaized.net/images/logo/normal/rlw3.png?lm=1400765709",
          "tournamentFlag": "0",
          "round": null,
          "group": "",
          "matchDay": "20",
          "matchDate": "16.02.2022",
          "fullMatchDate": "Mittwoch, 16. Februar 2022",
          "matchTime": "19:00:00",
          "timestamp": 1645034400,
          "homeClubID": "1400",
          "homeClubName": "VfB Auerbach",
          "homeClubImage": "https://tmssl.akamaized.net/images/wappen/medium/1400.png?lm=1403715372",
          "awayClubID": "5300",
          "awayClubName": "U. Fürstenwalde",
          "awayClubImage": "https://tmssl.akamaized.net/images/wappen/medium/5300.png?lm=1522187662",
          "result": "-:-",
          "postponed": true,
          "nextRound": "",
          "resultObject": {
            "result": "-:-",
            "goalsHome": "-",
            "goalsAway": "-",
            "minute": "verl",
            "state": "60",
            "destinationValue": 1,
            "destinationDescription": "Vorbericht"
          }
        }
      ],
      "RLW3": [
        {
          "id": "3609929",
          "scoreradarID": null,
          "competitionID": "RLW3",
          "competitionName": "Regionalliga West",
          "competitionImage": "https://tmssl.akamaized.net/images/logo/normal/rlw3.png?lm=1400765709",
          "tournamentFlag": "0",
          "round": null,
          "group": "",
          "matchDay": "23",
          "matchDate": "16.02.2022",
          "fullMatchDate": "Mittwoch, 16. Februar 2022",
          "matchTime": "19:00:00",
          "timestamp": 1645034400,
          "homeClubID": "299",
          "homeClubName": "Wuppertaler SV",
          "homeClubImage": "https://tmssl.akamaized.net/images/wappen/medium/299.png?lm=1458656849",
          "awayClubID": "1068",
          "awayClubName": "SV Straelen",
          "awayClubImage": "https://tmssl.akamaized.net/images/wappen/medium/1068.png?lm=1486658446",
          "result": "-:-",
          "postponed": true,
          "nextRound": "",
          "resultObject": {
            "result": "-:-",
            "goalsHome": "-",
            "goalsAway": "-",
            "minute": "verl",
            "state": "60",
            "destinationValue": 1,
            "destinationDescription": "Vorbericht"
          }
        },
        {
          "id": "3609041",
          "scoreradarID": null,
          "competitionID": "RLW3",
          "competitionName": "Regionalliga West",
          "competitionImage": "https://tmssl.akamaized.net/images/logo/normal/rlw3.png?lm=1400765709",
          "tournamentFlag": "0",
          "round": null,
          "group": "",
          "matchDay": "19",
          "matchDate": "16.02.2022",
          "fullMatchDate": "Mittwoch, 16. Februar 2022",
          "matchTime": "19:30:00",
          "timestamp": 1645036200,
          "homeClubID": "8",
          "homeClubName": "Alem. Aachen",
          "homeClubImage": "https://tmssl.akamaized.net/images/wappen/medium/8.png?lm=1403603100",
          "awayClubID": "4840",
          "awayClubName": "VfB Homberg",
          "awayClubImage": "https://tmssl.akamaized.net/images/wappen/medium/4840.png?lm=1557072890",
          "result": "-:-",
          "postponed": true,
          "nextRound": "",
          "resultObject": {
            "result": "-:-",
            "goalsHome": "-",
            "goalsAway": "-",
            "minute": "verl",
            "state": "60",
            "destinationValue": 1,
            "destinationDescription": "Vorbericht"
          }
        }
      ],
      "BE1": [
        {
          "id": "3598333",
          "scoreradarID": null,
          "competitionID": "BE1",
          "competitionName": "Jupiler Pro League",
          "competitionImage": "https://tmssl.akamaized.net/images/logo/normal/be1.png?lm=1601478124",
          "tournamentFlag": "0",
          "round": null,
          "group": "",
          "matchDay": "24",
          "matchDate": "16.02.2022",
          "fullMatchDate": "Mittwoch, 16. Februar 2022",
          "matchTime": "18:45:00",
          "timestamp": 1645033500,
          "homeClubID": "1184",
          "homeClubName": "KRC Genk ",
          "homeClubImage": "https://tmssl.akamaized.net/images/wappen/medium/1184.png?lm=1464899410",
          "awayClubID": "354",
          "awayClubName": "KV Mechelen",
          "awayClubImage": "https://tmssl.akamaized.net/images/wappen/medium/354.png?lm=1448474451",
          "result": "-:-",
          "postponed": true,
          "nextRound": "",
          "resultObject": {
            "result": "-:-",
            "goalsHome": "-",
            "goalsAway": "-",
            "minute": 0,
            "state": "",
            "destinationValue": 4,
            "destinationDescription": "Liveticker"
          }
        }
      ],
      "GB2": [
        {
          "id": "3592573",
          "scoreradarID": null,
          "competitionID": "GB2",
          "competitionName": "Championship",
          "competitionImage": "https://tmssl.akamaized.net/images/logo/normal/gb2.png?lm=1643026970",
          "tournamentFlag": "0",
          "round": null,
          "group": "",
          "matchDay": "24",
          "matchDate": "16.02.2022",
          "fullMatchDate": "Mittwoch, 16. Februar 2022",
          "matchTime": "20:45:00",
          "timestamp": 1645040700,
          "homeClubID": "1072",
          "homeClubName": "Peterborough",
          "homeClubImage": "https://tmssl.akamaized.net/images/wappen/medium/1072.png?lm=1411463544",
          "awayClubID": "1032",
          "awayClubName": "FC Reading",
          "awayClubImage": "https://tmssl.akamaized.net/images/wappen/medium/1032.png?lm=1457723329",
          "result": "-:-",
          "postponed": true,
          "nextRound": "",
          "resultObject": {
            "result": "-:-",
            "goalsHome": "-",
            "goalsAway": "-",
            "minute": 0,
            "state": "",
            "destinationValue": 4,
            "destinationDescription": "Liveticker"
          }
        }
      ],
      "IT2": [
        {
          "id": "3625523",
          "scoreradarID": null,
          "competitionID": "IT2",
          "competitionName": "Serie B",
          "competitionImage": "https://tmssl.akamaized.net/images/logo/normal/it2.png?lm=1548242827",
          "tournamentFlag": "0",
          "round": null,
          "group": "",
          "matchDay": "23",
          "matchDate": "16.02.2022",
          "fullMatchDate": "Mittwoch, 16. Februar 2022",
          "matchTime": "18:30:00",
          "timestamp": 1645032600,
          "homeClubID": "4171",
          "homeClubName": "Benevento",
          "homeClubImage": "https://tmssl.akamaized.net/images/wappen/medium/4171.png?lm=1434444046",
          "awayClubID": "408",
          "awayClubName": "Ascoli Calcio",
          "awayClubImage": "https://tmssl.akamaized.net/images/wappen/medium/408.png?lm=1534435837",
          "result": "-:-",
          "postponed": false,
          "nextRound": "",
          "resultObject": {
            "result": "-:-",
            "goalsHome": "-",
            "goalsAway": "-",
            "minute": 0,
            "state": "",
            "destinationValue": 4,
            "destinationDescription": "Liveticker"
          }
        },
        {
          "id": "3625524",
          "scoreradarID": null,
          "competitionID": "IT2",
          "competitionName": "Serie B",
          "competitionImage": "https://tmssl.akamaized.net/images/logo/normal/it2.png?lm=1548242827",
          "tournamentFlag": "0",
          "round": null,
          "group": "",
          "matchDay": "23",
          "matchDate": "16.02.2022",
          "fullMatchDate": "Mittwoch, 16. Februar 2022",
          "matchTime": "18:30:00",
          "timestamp": 1645032600,
          "homeClubID": "4083",
          "homeClubName": "FC Crotone",
          "homeClubImage": "https://tmssl.akamaized.net/images/wappen/medium/4083.png?lm=1520933356",
          "awayClubID": "19",
          "awayClubName": "Brescia Calcio",
          "awayClubImage": "https://tmssl.akamaized.net/images/wappen/medium/19.png?lm=1511961167",
          "result": "-:-",
          "postponed": false,
          "nextRound": "",
          "resultObject": {
            "result": "-:-",
            "goalsHome": "-",
            "goalsAway": "-",
            "minute": 0,
            "state": "",
            "destinationValue": 4,
            "destinationDescription": "Liveticker"
          }
        },
        {
          "id": "3625526",
          "scoreradarID": null,
          "competitionID": "IT2",
          "competitionName": "Serie B",
          "competitionImage": "https://tmssl.akamaized.net/images/logo/normal/it2.png?lm=1548242827",
          "tournamentFlag": "0",
          "round": null,
          "group": "",
          "matchDay": "23",
          "matchDate": "16.02.2022",
          "fullMatchDate": "Mittwoch, 16. Februar 2022",
          "matchTime": "18:30:00",
          "timestamp": 1645032600,
          "homeClubID": "8970",
          "homeClubName": "Frosinone",
          "homeClubImage": "https://tmssl.akamaized.net/images/wappen/medium/8970.png?lm=1438547543",
          "awayClubID": "1047",
          "awayClubName": "Como",
          "awayClubImage": "https://tmssl.akamaized.net/images/wappen/medium/1047.png?lm=1565704078",
          "result": "-:-",
          "postponed": false,
          "nextRound": "",
          "resultObject": {
            "result": "-:-",
            "goalsHome": "-",
            "goalsAway": "-",
            "minute": 0,
            "state": "",
            "destinationValue": 4,
            "destinationDescription": "Liveticker"
          }
        },
        {
          "id": "3625528",
          "scoreradarID": null,
          "competitionID": "IT2",
          "competitionName": "Serie B",
          "competitionImage": "https://tmssl.akamaized.net/images/logo/normal/it2.png?lm=1548242827",
          "tournamentFlag": "0",
          "round": null,
          "group": "",
          "matchDay": "23",
          "matchDate": "16.02.2022",
          "fullMatchDate": "Mittwoch, 16. Februar 2022",
          "matchTime": "18:30:00",
          "timestamp": 1645032600,
          "homeClubID": "2721",
          "homeClubName": "Alessandria",
          "homeClubImage": "https://tmssl.akamaized.net/images/wappen/medium/2721.png?lm=1626245784",
          "awayClubID": "1005",
          "awayClubName": "Lecce",
          "awayClubImage": "https://tmssl.akamaized.net/images/wappen/medium/1005.png?lm=1417104356",
          "result": "-:-",
          "postponed": false,
          "nextRound": "",
          "resultObject": {
            "result": "-:-",
            "goalsHome": "-",
            "goalsAway": "-",
            "minute": 0,
            "state": "",
            "destinationValue": 4,
            "destinationDescription": "Liveticker"
          }
        }
      ],
      "GB3": [
        {
          "id": "3591909",
          "scoreradarID": null,
          "competitionID": "GB3",
          "competitionName": "League One",
          "competitionImage": "https://tmssl.akamaized.net/images/logo/normal/gb3.png?lm=1466594034",
          "tournamentFlag": "0",
          "round": null,
          "group": "",
          "matchDay": "23",
          "matchDate": "16.02.2022",
          "fullMatchDate": "Mittwoch, 16. Februar 2022",
          "matchTime": "20:45:00",
          "timestamp": 1645040700,
          "homeClubID": "1035",
          "homeClubName": "Sheff. Wed.",
          "homeClubImage": "https://tmssl.akamaized.net/images/wappen/medium/1035.png?lm=1643214896",
          "awayClubID": "3688",
          "awayClubName": "Accrington St.",
          "awayClubImage": "https://tmssl.akamaized.net/images/wappen/medium/3688.png?lm=1416652535",
          "result": "-:-",
          "postponed": true,
          "nextRound": "",
          "resultObject": {
            "result": "-:-",
            "goalsHome": "-",
            "goalsAway": "-",
            "minute": 0,
            "state": "",
            "destinationValue": 4,
            "destinationDescription": "Liveticker"
          }
        }
      ],
      "sort": [
        {
          "competitionID": "CL",
          "competitionName": "UEFA Champions League",
          "competitionImage": "https://tmssl.akamaized.net/images/logo/normal/cl.png?lm=1626810555",
          "tournamentFlag": "1",
          "sort": 0,
          "playNow": 0,
          "liveMatches": 2
        },
        {
          "competitionID": "L3",
          "competitionName": "3. Liga",
          "competitionImage": "https://tmssl.akamaized.net/images/logo/normal/l3.png?lm=1569702802",
          "tournamentFlag": "0",
          "sort": 1,
          "playNow": 0,
          "liveMatches": 2
        },
        {
          "competitionID": "ES1",
          "competitionName": "LaLiga",
          "competitionImage": "https://tmssl.akamaized.net/images/logo/normal/es1.png?lm=1557051003",
          "tournamentFlag": "0",
          "sort": 2,
          "playNow": 0,
          "liveMatches": 1
        },
        {
          "competitionID": "RLN4",
          "competitionName": "Regionalliga Nordost",
          "competitionImage": "https://tmssl.akamaized.net/images/logo/normal/rln4.png?lm=1436048476",
          "tournamentFlag": "0",
          "sort": 3,
          "playNow": 0,
          "liveMatches": 2
        },
        {
          "competitionID": "RLW3",
          "competitionName": "Regionalliga West",
          "competitionImage": "https://tmssl.akamaized.net/images/logo/normal/rlw3.png?lm=1400765709",
          "tournamentFlag": "0",
          "sort": 4,
          "playNow": 0,
          "liveMatches": 2
        },
        {
          "competitionID": "BE1",
          "competitionName": "Jupiler Pro League",
          "competitionImage": "https://tmssl.akamaized.net/images/logo/normal/be1.png?lm=1601478124",
          "tournamentFlag": "0",
          "sort": 5,
          "playNow": 0,
          "liveMatches": 1
        },
        {
          "competitionID": "GB2",
          "competitionName": "Championship",
          "competitionImage": "https://tmssl.akamaized.net/images/logo/normal/gb2.png?lm=1643026970",
          "tournamentFlag": "0",
          "sort": 6,
          "playNow": 0,
          "liveMatches": 1
        },
        {
          "competitionID": "IT2",
          "competitionName": "Serie B",
          "competitionImage": "https://tmssl.akamaized.net/images/logo/normal/it2.png?lm=1548242827",
          "tournamentFlag": "0",
          "sort": 7,
          "playNow": 0,
          "liveMatches": 4
        },
        {
          "competitionID": "GB3",
          "competitionName": "League One",
          "competitionImage": "https://tmssl.akamaized.net/images/logo/normal/gb3.png?lm=1466594034",
          "tournamentFlag": "0",
          "sort": 8,
          "playNow": 0,
          "liveMatches": 1
        }
      ]
    }
  });
  

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
              setMatches(response.data);
          } catch (error) {
              console.error(error);
          }
    }
    // fetchData()
    },[])

    console.log(matches.liveMatches.BE1[0].id)

  return (
    <div className='bg-slate-100 min-h-screen mx-auto'>
          <div className='w-11/12 bg-white min-h-screen mx-auto p-10'>
          <h1 className='text-3xl text-bold w-11/12 mx-auto bg-white p-16 pb-0'>Live Matches</h1>
      {Object.keys(matches.liveMatches).map((category,index) => (
        category !== 'sort' && (
        <div key={category} className='py-10'>
          <h2 className='mb-5 text-2xl font-bold'>{matches.liveMatches.sort[index].competitionName}</h2>
          <div className='border-2 border-black rounded-lg p-10 flex flex-col items-center justify-center gap-y-10 font-bold'>
            {matches.liveMatches[category].map(match => (
              <div key={match.id} className='w-2/3 border-2 border-black rounded-lg p-7 text-center flex flex-col items-center justify-center gap-y-10'>
                {console.log(match)}
                <h2 className='text-2xl'>{match.competitionName}</h2>
                <img src={match.competitionImage} className='h-30 w-30'/>
                <p className='font-bold flex flex-row gap-x-6 text-center items-center' ><p className='flex flex-col items-center'><img src={match.homeClubImage} className='h-16 w-16'/>{match.homeClubName}</p> <p> VS </p> <p><img src={match.awayClubImage} className='h-16 w-16'/>{match.awayClubName}</p></p>
                <p>Date: {match.matchDate}</p>
                <p>Time: {match.matchTime}</p>
                <Link to={`/matchDetails/${[match.id, match.homeClubName,match.awayClubName]}`}><p className="text-blue-800">View Details</p></Link>
              </div>
            ))}
          </div>
        </div>)
      ))}
      </div>
    </div>
  );
}
