import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Details() {

    const [team, getTeam] = useState({
        "internationalTeamFlag": "",
        "mainFacts": {
          "id": "631",
          "fullName": "Chelsea Football Club",
          "street": "Fulham Road",
          "postalCode": "SW6 1HS",
          "city": "London",
          "phone": "+44 (20) 73869",
          "fax": "+44 (20) 73814",
          "homepage": "www.chelseafc.com",
          "founding": "10.03.1905",
          "members": "30000",
          "membersDate": "14.03.2018",
          "countryName": "England",
          "countryID": "189",
          "countryImage": "https://tmssl.akamaized.net/images/flagge/verysmall/189.png?lm=1520611569",
          "avgAge": "27.10",
          "squadSize": "27",
          "legionaries": "19",
          "internationalRank": "",
          "nationalPlayer": 16
        },
        "stadium": {
          "id": "414",
          "name": "Stamford Bridge",
          "street": "Fulham Road",
          "postalCode": "SW6 1HS",
          "city": "London",
          "phoneTicketCenter": "+44 207 915 2900",
          "faxTicketCenter": "",
          "homepage": "",
          "ticketCenter": "www.chelseafc.com/page/TicketsHome/0,,10268,00.html",
          "constructionYear": "1877",
          "totalCapacity": "40853",
          "standingRoom": "0",
          "seats": "40853",
          "image": "https://tmssl.akamaized.net/images/foto/stadionnormal/fc-chelsea-stamford-bridge-2021-1629208490-69136.jpg?lm=1629208513"
        },
        "historicImages": [
          "https://tmssl.akamaized.net/images/wappen/medium/631_1400764022.png?lm=1400764020",
          "https://tmssl.akamaized.net/images/wappen/medium/631_1400764080.png?lm=1400764078",
          "https://tmssl.akamaized.net/images/wappen/medium/631_1400764132.png?lm=1400764130",
          "https://tmssl.akamaized.net/images/wappen/medium/631_1462278625.png?lm=1462278625",
          "https://tmssl.akamaized.net/images/wappen/medium/631_1628083076.png?lm=1628083076"
        ],
        "successes": [
          {
            "number": "6",
            "name": "Englischer Meister",
            "id": "12",
            "additionalData": {
              "competitionId": "GB1",
              "competitionTypeId": "1",
              "cycle": null,
              "seasonIds": [
                "2016",
                "2014",
                "2009",
                "2005",
                "2004",
                "1954"
              ]
            }
          },
          {
            "number": "2",
            "name": "Champions League-Sieger",
            "id": "4",
            "additionalData": {
              "competitionId": "CL",
              "competitionTypeId": "10",
              "cycle": null,
              "seasonIds": [
                "2020",
                "2011"
              ]
            }
          },
          {
            "number": "8",
            "name": "Englischer Pokalsieger",
            "id": "29",
            "additionalData": {
              "competitionId": "FAC",
              "competitionTypeId": "8",
              "cycle": null,
              "seasonIds": [
                "2017",
                "2011",
                "2009",
                "2008",
                "2006",
                "1999",
                "1996",
                "1969"
              ]
            }
          },
          {
            "number": "5",
            "name": "Englischer Ligapokalsieger",
            "id": "47",
            "additionalData": {
              "competitionId": "CGB",
              "competitionTypeId": "8",
              "cycle": null,
              "seasonIds": [
                "2014",
                "2006",
                "2004",
                "1997",
                "1964"
              ]
            }
          },
          {
            "number": "1",
            "name": "FIFA-Klub-Weltmeister",
            "id": "318",
            "additionalData": {
              "competitionId": "KLUB",
              "competitionTypeId": "13",
              "cycle": null,
              "seasonIds": [
                "2021"
              ]
            }
          },
          {
            "number": "2",
            "name": "Europa-League-Sieger",
            "id": "264",
            "additionalData": {
              "competitionId": "EL",
              "competitionTypeId": "10",
              "cycle": null,
              "seasonIds": [
                "2018",
                "2012"
              ]
            }
          },
          {
            "number": "2",
            "name": "Europapokal-der-Pokalsieger-Sieger",
            "id": "53",
            "additionalData": {
              "competitionId": "EPP",
              "competitionTypeId": "10",
              "cycle": null,
              "seasonIds": [
                "1997",
                "1970"
              ]
            }
          },
          {
            "number": "2",
            "name": "UEFA-Supercup-Sieger",
            "id": "354",
            "additionalData": {
              "competitionId": "USC",
              "competitionTypeId": "13",
              "cycle": null,
              "seasonIds": [
                "2021",
                "1998"
              ]
            }
          },
          {
            "number": "4",
            "name": "Englischer Superpokalsieger",
            "id": "316",
            "additionalData": {
              "competitionId": "GBCS",
              "competitionTypeId": "9",
              "cycle": null,
              "seasonIds": [
                "2009",
                "2005",
                "2000",
                "1955"
              ]
            }
          }
        ],
        "additionalTeams": [
          {
            "image": "https://tmssl.akamaized.net/images/wappen/medium/631.png?lm=1628160548",
            "name": "FC Chelsea",
            "id": "631"
          },
          {
            "image": "https://tmssl.akamaized.net/images/wappen/medium/9250.png?lm=1628074311",
            "name": "FC Chelsea U23",
            "id": "9250"
          },
          {
            "image": "https://tmssl.akamaized.net/images/wappen/medium/6918.png?lm=1628160548",
            "name": "FC Chelsea U18",
            "id": "6918"
          },
          {
            "image": "https://tmssl.akamaized.net/images/wappen/medium/41573.png?lm=1628160548",
            "name": "FC Chelsea UEFA U19",
            "id": "41573"
          },
          {
            "image": "https://tmssl.akamaized.net/images/wappen/medium/50677.png?lm=1628074311",
            "name": "FC Chelsea Jugend",
            "id": "50677"
          }
        ],
        "share": {
          "title": "Vereinsprofil FC Chelsea",
          "url": "https://www.transfermarkt.de/fc-chelsea/startseite/verein/631",
          "description": "Dies ist die Vereins-Startseite. Hier gibt es neben dem aktuellen Kader vereinsrelevante News, aktuelle Gerüchte und alle wichtigen Infos rund um den Spielbetrieb des Klubs."
        }
      })

      const [player, setPlayer] = useState({
        "share": {
          "title": "Mario Götze - Spielerprofil",
          "url": "https://www.transfermarkt.de/mario-gotze/profil/spieler/74842",
          "description": "Das ist das Spielerprofil von Mario Götze."
        },
        "playerProfile": {
          "playerID": "74842",
          "playerImage": "https://img.a.transfermarkt.technology/portrait/medium/74842-1612898267.jpg?lm=1",
          "playerName": "Mario Götze",
          "playerFullName": "Mario Götze",
          "birthplace": "Memmingen",
          "dateOfBirth": "03.06.1992",
          "dateOfDeath": null,
          "playerShirtNumber": "27",
          "birthplaceCountry": "Deutschland",
          "birthplaceCountryImage": "https://tmssl.akamaized.net/images/flagge/verysmall/40.png?lm=1520612525",
          "age": "29",
          "height": "1,76",
          "foot": "rechts",
          "internationalTeam": "Deutschland",
          "internationalTeamImage": "https://tmssl.akamaized.net/images/flagge/verysmall/40.png?lm=1520612525",
          "internationalTeamStatus": "Ehem. Nationalspieler",
          "internationalGames": "63",
          "internationalGoals": "17",
          "internationalTeamShortTag": "A",
          "internationalShirtNumber": "19",
          "internationalWmMember": false,
          "internationalValueRank": 186,
          "country": "Deutschland",
          "countryImage": "https://tmssl.akamaized.net/images/flagge/verysmall/40.png?lm=1520612525",
          "countryShortName": "GER",
          "secondCountry": "",
          "secondCountryImage": "",
          "league": "Eredivisie",
          "leagueLogo": "https://tmssl.akamaized.net/images/logo/normal/nl1.png?lm=1629726381",
          "clubImage": "https://tmssl.akamaized.net/images/wappen/medium/383.png?lm=1626929299",
          "club": "PSV Eindhoven",
          "clubID": "383",
          "loan": {
            "loan": "",
            "loanStart": "",
            "loanUntil": "",
            "contractOptions": "",
            "ownerName": "",
            "ownerID": "",
            "ownerImage": "",
            "ownerContractUntil": ""
          },
          "contractExpiryDate": "30.06.2024",
          "agent": "Sports360 GmbH",
          "agentId": "199",
          "outfitter": "",
          "positionGroup": "Mittelfeld",
          "playerMainPosition": "Offensives Mittelfeld",
          "playerSecondPosition": "Rechtsaußen",
          "playerThirdPosition": "Linksaußen",
          "marketValue": "12,00",
          "marketValueCurrency": "€",
          "marketValueNumeral": "Mio.",
          "marketValueLastChange": "05.01.2021",
          "relatedness": [
            {
              "id": "35203",
              "personName": "Fabian Götze",
              "personGroup": "spieler",
              "personID": "32919",
              "degreeOfRelationship": "Bruder"
            },
            {
              "id": "330635",
              "personName": "Felix Götze",
              "personGroup": "spieler",
              "personID": "369268",
              "degreeOfRelationship": "Bruder"
            }
          ],
          "injury": {
            "id": "",
            "title": "",
            "until": "-",
            "rehabilitationFlag": ""
          },
          "absence": {
            "id": "",
            "title": "",
            "until": "-",
            "competitionID": "",
            "matches": ""
          },
          "allSuspensions": []
        },
        "performanceSeasons": [
          {
            "key": "2021",
            "title": "21/22"
          },
          {
            "key": "2020",
            "title": "20/21"
          },
          {
            "key": "2019",
            "title": "19/20"
          },
          {
            "key": "2018",
            "title": "18/19"
          },
          {
            "key": "2017",
            "title": "17/18"
          },
          {
            "key": "2016",
            "title": "16/17"
          },
          {
            "key": "2015",
            "title": "15/16"
          },
          {
            "key": "2014",
            "title": "14/15"
          },
          {
            "key": "2013",
            "title": "13/14"
          },
          {
            "key": "2012",
            "title": "12/13"
          },
          {
            "key": "2011",
            "title": "11/12"
          },
          {
            "key": "2010",
            "title": "10/11"
          },
          {
            "key": "2009",
            "title": "09/10"
          },
          {
            "key": "2008",
            "title": "08/09"
          },
          {
            "key": "2007",
            "title": "07/08"
          },
          {
            "key": "2006",
            "title": "06/07"
          }
        ],
        "heroImages": [
          {
            "id": "78639",
            "url": "https://tmssl.akamaized.net/images/foto/normal/mario-gotze-psv-eindhoven-2022-1642355598-78639.jpg?lm=1642355611",
            "source": "imago images"
          },
          {
            "id": "70452",
            "url": "https://tmssl.akamaized.net/images/foto/normal/mario-gotze-psv-eindhoven-2021-1630908878-70452.jpg?lm=1630908887",
            "source": "imago images"
          },
          {
            "id": "50810",
            "url": "https://tmssl.akamaized.net/images/foto/normal/mario-gotze-psv-endhoven-1604911166-50810.jpg?lm=1604911184",
            "source": "imago images"
          },
          {
            "id": "49405",
            "url": "https://tmssl.akamaized.net/images/foto/normal/mario-gotze-psv-eindhoven-1603039280-49405.jpg?lm=1603039291",
            "source": "imago images"
          },
          {
            "id": "48751",
            "url": "https://tmssl.akamaized.net/images/foto/normal/mario-gotze-psv-eindhoven-prasentation-1602164085-48751.jpg?lm=1602164121",
            "source": "imago images"
          },
          {
            "id": "48285",
            "url": "https://tmssl.akamaized.net/images/foto/normal/mario-gotze-borussia-dortmund-bvb-2019-1601640976-48285.jpg?lm=1601640998",
            "source": "imago images"
          },
          {
            "id": "32104",
            "url": "https://tmssl.akamaized.net/images/foto/normal/mario-gotze-bvb-2020-1582276276-32104.jpg?lm=1582276289",
            "source": "imago images"
          },
          {
            "id": "20784",
            "url": "https://tmssl.akamaized.net/images/foto/normal/mario-gotze-borussia-dortmund-1551521035-20784.jpg?lm=1551521044",
            "source": "imago images"
          },
          {
            "id": "981",
            "url": "https://tmssl.akamaized.net/images/foto/normal/mario-gotze-1404399353-981.jpg?lm=1483605537",
            "source": "Getty Images"
          },
          {
            "id": "12797",
            "url": "https://tmssl.akamaized.net/images/foto/normal/mario-gtze-borussia-dortmund-1511090764-12797.jpg?lm=1511090784",
            "source": "imago images"
          },
          {
            "id": "8497",
            "url": "https://tmssl.akamaized.net/images/foto/normal/gtze-draxler-1487599779-8497.jpg?lm=1487599805",
            "source": "imago images"
          },
          {
            "id": "5050",
            "url": "https://tmssl.akamaized.net/images/foto/normal/mario-gotze-1457018379-5050.jpg?lm=1483606025",
            "source": "imago images"
          },
          {
            "id": "5049",
            "url": "https://tmssl.akamaized.net/images/foto/normal/mario-gotze-1457018318-5049.jpg?lm=1483606025",
            "source": "imago images"
          },
          {
            "id": "5048",
            "url": "https://tmssl.akamaized.net/images/foto/normal/mario-gotze-1457018271-5048.jpg?lm=1483606025",
            "source": "imago images"
          },
          {
            "id": "5047",
            "url": "https://tmssl.akamaized.net/images/foto/normal/mario-gotze-1457018247-5047.jpg?lm=1483606025",
            "source": "imago images"
          },
          {
            "id": "980",
            "url": "https://tmssl.akamaized.net/images/foto/normal/mario-gotze-1404399251-980.jpg?lm=1483605537",
            "source": "Getty Images"
          },
          {
            "id": "979",
            "url": "https://tmssl.akamaized.net/images/foto/normal/mario-gotze-1404399210-979.jpg?lm=1483605537",
            "source": "Getty Images"
          },
          {
            "id": "978",
            "url": "https://tmssl.akamaized.net/images/foto/normal/mario-gotze-1404399171-978.jpg?lm=1483605537",
            "source": "Getty Images"
          },
          {
            "id": "977",
            "url": "https://tmssl.akamaized.net/images/foto/normal/mario-gotze-1404399139-977.jpg?lm=1483605537",
            "source": "Getty Images"
          },
          {
            "id": "741",
            "url": "https://tmssl.akamaized.net/images/foto/normal/mario-gotze-1402672588-741.jpg?lm=1483605517",
            "source": "Getty Images"
          },
          {
            "id": "5924",
            "url": "https://tmssl.akamaized.net/images/foto/normal/mario-gotze-1471947283-5924.jpg?lm=1483606124",
            "source": "imago images"
          }
        ]
      })

    useEffect(()=>{
        const fetchData1 = async () => {
        const options = {
            method: 'GET',
            url: 'https://transfermarket.p.rapidapi.com/players/get-market-value',
            params: {
              id: '74842',
              domain: 'de'
            },
            headers: {
              'x-rapidapi-key': '967332803emshd909649f900ece9p125faejsn66de147a2a93',
              'x-rapidapi-host': 'transfermarket.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
          } catch (error) {
              console.error(error);
          }
    }
    const fetchData2 = async () => {

        const options = {
        method: 'GET',
        url: 'https://transfermarket.p.rapidapi.com/clubs/get-profile',
        params: {
            id: '631',
            domain: 'de'
        },
        headers: {
            'x-rapidapi-key': '967332803emshd909649f900ece9p125faejsn66de147a2a93',
            'x-rapidapi-host': 'transfermarket.p.rapidapi.com'
        }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    // fetchData1()
    // fetchData2()
},[])

const [cond, setCond] = useState([]);

  useEffect(() => {
    if (team && team.successes && team.successes.additionalData && team.successes.additionalData.seasonIds) {
      setCond(new Array(team.successes.additionalData.seasonIds.length).fill(false));
    }
  }, [team]);
  

  return (
    <div>
      {/* <div>
        <NewsSlider/>
      </div> */}
      <div className='bg-slate-100 min-h-screen'>
        <h1 className='text-3xl text-bold w-11/12 mx-auto bg-white p-16 pb-0'>Player Details</h1>
        <div className='flex flex-col w-11/12 bg-white p-16 mx-auto gap-20'>
          <div className='flex'>
          <div className='flex flex-col w-1/4 justify-center'>
                <img src={player.playerProfile.playerImage||team.mainFacts.countryImage} className='w-11/12'/>
                <h3 className='font-bold text-xl'>{player.playerProfile.playerFullName||team.mainFacts.fullName}<img src={player.playerProfile.internationalTeamImage||team.mainFacts.countryImage}/></h3>
          </div>
          {<div className='flex-1 flex flex-col gap-5 font-bold'>
          <p>Base: {team.mainFacts.street}, {team.mainFacts.postalCode}, {team.mainFacts.city}</p>
          <p>Phone: {team.mainFacts.phone}</p>
          <p>Fax: {team.mainFacts.fax}</p>
          <p>Website: {team.mainFacts.homepage}</p>
          <p>Founding: {team.mainFacts.founding}</p>
          <p>Country: {team.mainFacts.countryName}</p>
          </div>}
          </div>
          <div className='flex flex-col'>
            <p className='font-bold text-xl'>Stadium</p>
            <img src = {team.stadium.image} className='w-full'/>
          <div>
            <p className='font-bold text-lg'>{team.stadium.name}, {team.stadium.city}</p>
            <p className='text-sm'>Since {team.stadium.constructionYear}</p>
            <p className='text-sm'>Capacity: {team.stadium.totalCapacity} (Standing: {team.stadium.standingRoom} Seating: {team.stadium.seats})</p>
          </div>
        </div>
        <div>
            <h3 className='font-bold text-xl'>Successful Campaigns</h3>
            <div className='flex flex-col py-10 gap-10 text-md text-center'>
                {team.successes.map((item, index)=>(
                    <div key={index} onClick={()=>{setCond(prevState => {
                    const newState = [...prevState];
                    newState[index] = !newState[index];
                    return newState;
                    });}}>
                        {item.number} times {item.name}
                        {cond[index] && 
                        <div>
                            {item.additionalData.seasonIds.map((item, index)=>(
                                <p key = {index}>{item} champions</p>
                            ))}
                        </div>
                        }
                    </div>
                ))}
            </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}