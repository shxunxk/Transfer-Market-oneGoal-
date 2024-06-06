import FaceCard from '../Components/Card.jsx'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import NewsSlider from '../Components/NewsSlider.jsx';

export default function Home(){

  const [response, setResponse] = useState({
    "news": [
      {
        "id": "400061",
        "newsHeadline": "Eigengewächs mit meisten Profiminuten: Novoa bei RB Leipzig Vorreiter für andere Talente?",
        "timestamp": 1645023621,
        "newsSecondImage": "https://tmssl.akamaized.net/images/wappen/homepageSmall/23826.png?lm=1619431624",
        "newsDate": "16.02.2022",
        "fullNewsDate": "Mittwoch, 16. Februar 2022",
        "newsTime": "16:00",
        "newsSource": "Transfermarkt.de",
        "newsStartPageFlag": "1",
        "newsShortMessageFlag": "0",
        "newsTeaser": "„Er hat das gewisse Etwas“",
        "newsFirstImage": "https://img.a.transfermarkt.technology/portrait/medium/668276-1606146927.jpg?lm=1",
        "newsSpotlightFirstImage": "https://tmssl.akamaized.net/images/foto/homepage/hugo-novoa-rb-leipzig-2022-1644581161-80065.jpg?lm=1644581181",
        "newsSpotlightSecondImage": "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
        "newsCategoryID": "129",
        "newsCategoryTag": "Porträts",
        "newsTickerFlag": "0",
        "newsUpdateFlag": "0",
        "spotlightPriority": 2
      },
      {
        "id": "400286",
        "newsHeadline": "Andrich „möchte gerne für Deutschland spielen“ – War in Berlin „zu häufig unterwegs“",
        "timestamp": 1645019228,
        "newsSecondImage": "https://tmssl.akamaized.net/images/wappen/homepageSmall/3262.png?lm=1622018129",
        "newsDate": "16.02.2022",
        "fullNewsDate": "Mittwoch, 16. Februar 2022",
        "newsTime": "14:47",
        "newsSource": "Sport Bild/TM/dpa",
        "newsStartPageFlag": "1",
        "newsShortMessageFlag": "0",
        "newsTeaser": "Spätstarter war „zu unprofessionell“",
        "newsFirstImage": "https://img.a.transfermarkt.technology/portrait/medium/159088-1642608477.jpg?lm=1",
        "newsSpotlightFirstImage": "https://tmssl.akamaized.net/images/foto/homepage/robert-andrich-bayer-04-leverkusen-2021-1633614474-72322.jpg?lm=1633614493",
        "newsSpotlightSecondImage": "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
        "newsCategoryID": "0",
        "newsCategoryTag": "News",
        "newsTickerFlag": "0",
        "newsUpdateFlag": "0",
        "spotlightPriority": 1
      },
      {
        "id": "400272",
        "newsHeadline": "ÖFB buhlt um FC Bayerns Top-Talent Wanner: „Geht darum, dass alles seriös abläuft“",
        "timestamp": 1645016367,
        "newsSecondImage": "https://tmssl.akamaized.net/images/wappen/homepageSmall/3383.png?lm=1622018717",
        "newsDate": "16.02.2022",
        "fullNewsDate": "Mittwoch, 16. Februar 2022",
        "newsTime": "13:59",
        "newsSource": "Kicker/Transfermarkt",
        "newsStartPageFlag": "1",
        "newsShortMessageFlag": "0",
        "newsTeaser": "Gebürtiger Österreicher",
        "newsFirstImage": "https://img.a.transfermarkt.technology/portrait/medium/900909-1641462904.jpg?lm=1",
        "newsSpotlightFirstImage": "https://tmssl.akamaized.net/images/foto/homepage/paul-wanner-fc-bayern-2022-1641630796-78213.jpg?lm=1641630830",
        "newsSpotlightSecondImage": "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
        "newsCategoryID": "0",
        "newsCategoryTag": "News",
        "newsTickerFlag": "0",
        "newsUpdateFlag": "0",
        "spotlightPriority": 4
      },
      {
        "id": "400287",
        "newsHeadline": "MOL Fehérvár ernennt Boris als Szabics-Nachfolger: 3. Wechsel nach Ungarn",
        "timestamp": 1645016166,
        "newsSecondImage": "https://tmssl.akamaized.net/images/wappen/homepageSmall/11107.png?lm=1582047467",
        "newsDate": "16.02.2022",
        "fullNewsDate": "Mittwoch, 16. Februar 2022",
        "newsTime": "13:56",
        "newsSource": "MOL Fehérvár FC",
        "newsStartPageFlag": "1",
        "newsShortMessageFlag": "0",
        "newsTeaser": "Drei Monate nach Aus in Dänemark",
        "newsFirstImage": "https://img.a.transfermarkt.technology/portrait/medium/2710-1611946974.jpeg?lm=1",
        "newsSpotlightFirstImage": "",
        "newsSpotlightSecondImage": "",
        "newsCategoryID": "0",
        "newsCategoryTag": "News",
        "newsTickerFlag": "1",
        "newsUpdateFlag": "0",
        "spotlightPriority": ""
      },
      {
        "id": "400284",
        "newsHeadline": "TSG Hoffenheim holt französisches Talent Mokwa Ntusu vom FC Sochaux",
        "timestamp": 1645015497,
        "newsSecondImage": "https://tmssl.akamaized.net/images/wappen/homepageSmall/750.png?lm=1439104427",
        "newsDate": "16.02.2022",
        "fullNewsDate": "Mittwoch, 16. Februar 2022",
        "newsTime": "13:44",
        "newsSource": "TSG Hoffenheim/Fabrizio Romano",
        "newsStartPageFlag": "1",
        "newsShortMessageFlag": "0",
        "newsTeaser": "Zunächst für U19 eingeplant",
        "newsFirstImage": "https://tmssl.akamaized.net/images/wappen/normal/533.png?lm=1458907862",
        "newsSpotlightFirstImage": "",
        "newsSpotlightSecondImage": "",
        "newsCategoryID": "0",
        "newsCategoryTag": "News",
        "newsTickerFlag": "1",
        "newsUpdateFlag": "0",
        "spotlightPriority": ""
      },
      {
        "id": "400252",
        "newsHeadline": "Mainz 05 lässt Szalai in Richtung Basel ziehen: „Wollten ihm diesen Weg nicht verbauen“",
        "timestamp": 1645012577,
        "newsSecondImage": "https://tmssl.akamaized.net/images/wappen/homepageSmall/26.png?lm=1644348126",
        "newsDate": "16.02.2022",
        "fullNewsDate": "Mittwoch, 16. Februar 2022",
        "newsTime": "12:56",
        "newsSource": "1. FSV Mainz 05/FC Basel 1893",
        "newsStartPageFlag": "1",
        "newsShortMessageFlag": "0",
        "newsTeaser": "Auch Monacos Pavlovic kommt",
        "newsFirstImage": "https://img.a.transfermarkt.technology/portrait/medium/39106-1628597308.jpg?lm=1",
        "newsSpotlightFirstImage": "",
        "newsSpotlightSecondImage": "",
        "newsCategoryID": "0",
        "newsCategoryTag": "News",
        "newsTickerFlag": "1",
        "newsUpdateFlag": "0",
        "spotlightPriority": ""
      },
      {
        "id": "400280",
        "newsHeadline": "KAS Eupen trennt sich von Trainer Krämer: Nur ein Ligasieg nach Tabellenführung im Oktober",
        "timestamp": 1645012522,
        "newsSecondImage": "https://tmssl.akamaized.net/images/wappen/homepageSmall/1245.png?lm=1464260524",
        "newsDate": "16.02.2022",
        "fullNewsDate": "Mittwoch, 16. Februar 2022",
        "newsTime": "12:55",
        "newsSource": "KAS Eupen",
        "newsStartPageFlag": "1",
        "newsShortMessageFlag": "0",
        "newsTeaser": "Offiziell",
        "newsFirstImage": "https://img.a.transfermarkt.technology/portrait/medium/4744-1531407132.jpg?lm=1",
        "newsSpotlightFirstImage": "",
        "newsSpotlightSecondImage": "",
        "newsCategoryID": "0",
        "newsCategoryTag": "News",
        "newsTickerFlag": "1",
        "newsUpdateFlag": "0",
        "spotlightPriority": ""
      },
      {
        "id": "400277",
        "newsHeadline": "Holstein macht Verlängerungs-Hattrick perfekt: Auch van den Bergh bleibt bei der KSV",
        "timestamp": 1645009932,
        "newsSecondImage": "https://tmssl.akamaized.net/images/wappen/homepageSmall/269.png?lm=1544480289",
        "newsDate": "16.02.2022",
        "fullNewsDate": "Mittwoch, 16. Februar 2022",
        "newsTime": "12:12",
        "newsSource": "Holstein Kiel",
        "newsStartPageFlag": "1",
        "newsShortMessageFlag": "0",
        "newsTeaser": "Nach Bartels und Sander",
        "newsFirstImage": "https://img.a.transfermarkt.technology/portrait/medium/31218-1643897218.png?lm=1",
        "newsSpotlightFirstImage": "",
        "newsSpotlightSecondImage": "",
        "newsCategoryID": "0",
        "newsCategoryTag": "News",
        "newsTickerFlag": "1",
        "newsUpdateFlag": "0",
        "spotlightPriority": ""
      },
      {
        "id": "400244",
        "newsHeadline": "Agüero über geplatzten Bayern-Transfer: „Ich spielte schrecklich, sie kauften Sosa“",
        "timestamp": 1645009200,
        "newsSecondImage": "https://tmssl.akamaized.net/images/wappen/homepageSmall/27.png?lm=1498251238",
        "newsDate": "16.02.2022",
        "fullNewsDate": "Mittwoch, 16. Februar 2022",
        "newsTime": "12:00",
        "newsSource": "twitter.com/aguerosergiokun",
        "newsStartPageFlag": "1",
        "newsShortMessageFlag": "0",
        "newsTeaser": "Argentinier fiel durch",
        "newsFirstImage": "https://img.a.transfermarkt.technology/portrait/medium/26399-1580460866.jpg?lm=1",
        "newsSpotlightFirstImage": "https://tmssl.akamaized.net/images/foto/homepage/sergio-aguero-2007-1587482249-36831.jpg?lm=1587482267",
        "newsSpotlightSecondImage": "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
        "newsCategoryID": "106",
        "newsCategoryTag": "Beinahe-Transfers",
        "newsTickerFlag": "0",
        "newsUpdateFlag": "0",
        "spotlightPriority": 7
      },
      {
        "id": "400275",
        "newsHeadline": "Windhorst sieht Investment bei Hertha als Fehler: „Hat mir bislang nur Nachteile gebracht“",
        "timestamp": 1645009110,
        "newsSecondImage": "https://tmssl.akamaized.net/images/wappen/homepageSmall/44.png?lm=1534505742",
        "newsDate": "16.02.2022",
        "fullNewsDate": "Mittwoch, 16. Februar 2022",
        "newsTime": "11:58",
        "newsSource": "dpa/Capital",
        "newsStartPageFlag": "1",
        "newsShortMessageFlag": "0",
        "newsTeaser": "Zu viel „Machterhalt und Klüngelei“",
        "newsFirstImage": "https://img.a.transfermarkt.technology/portrait/medium/80675-1591348171.jpg?lm=1",
        "newsSpotlightFirstImage": "https://tmssl.akamaized.net/images/foto/homepage/lars-windhorst-hertha-bsc-2020-1633858132-72442.jpg?lm=1633858142",
        "newsSpotlightSecondImage": "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
        "newsCategoryID": "0",
        "newsCategoryTag": "News",
        "newsTickerFlag": "0",
        "newsUpdateFlag": "0",
        "spotlightPriority": 3
      },
      {
        "id": "400271",
        "newsHeadline": "„Bild“: BVB an Ekitike von Stade Reims dran – Bester U21-Torjäger in Top-5-Ligen",
        "timestamp": 1645007081,
        "newsSecondImage": "https://tmssl.akamaized.net/images/wappen/homepageSmall/16.png?lm=1396275280",
        "newsDate": "16.02.2022",
        "fullNewsDate": "Mittwoch, 16. Februar 2022",
        "newsTime": "11:24",
        "newsSource": "Bild/TM/Foot Mercato/L’Équipe",
        "newsStartPageFlag": "1",
        "newsShortMessageFlag": "0",
        "newsTeaser": "Angebot von Newcastle abgelehnt",
        "newsFirstImage": "https://img.a.transfermarkt.technology/portrait/medium/709726-1639672689.png?lm=1",
        "newsSpotlightFirstImage": "https://tmssl.akamaized.net/images/foto/homepage/hugo-ekitike-stade-reims-2022-1645008603-80347.jpg?lm=1645008637",
        "newsSpotlightSecondImage": "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
        "newsCategoryID": "0",
        "newsCategoryTag": "News",
        "newsTickerFlag": "0",
        "newsUpdateFlag": "0",
        "spotlightPriority": 5
      },
      {
        "id": "400266",
        "newsHeadline": "„Sport1“: Transfer von Bayern-Talent Wenig zu Frankfurt fix – Auch BVB war interessiert",
        "timestamp": 1645003161,
        "newsSecondImage": "https://tmssl.akamaized.net/images/wappen/homepageSmall/24.png?lm=1403806187",
        "newsDate": "16.02.2022",
        "fullNewsDate": "Mittwoch, 16. Februar 2022",
        "newsTime": "10:19",
        "newsSource": "Sport1/Transfermarkt",
        "newsStartPageFlag": "1",
        "newsShortMessageFlag": "0",
        "newsTeaser": "Neue SGE-Reserve als Pluspunkt",
        "newsFirstImage": "https://img.a.transfermarkt.technology/portrait/medium/654872-1633436890.jpg?lm=1",
        "newsSpotlightFirstImage": "",
        "newsSpotlightSecondImage": "",
        "newsCategoryID": "0",
        "newsCategoryTag": "News",
        "newsTickerFlag": "0",
        "newsUpdateFlag": "0",
        "spotlightPriority": ""
      },
      {
        "id": "400238",
        "newsHeadline": "Nagelsmann: Reibung fehlt wegen Transferpolitik – „Gemeinschaftlicher Konsens war nicht da“",
        "timestamp": 1645000243,
        "newsSecondImage": "https://tmssl.akamaized.net/images/wappen/homepageSmall/27.png?lm=1498251238",
        "newsDate": "16.02.2022",
        "fullNewsDate": "Mittwoch, 16. Februar 2022",
        "newsTime": "09:30",
        "newsSource": "dpa/Bild",
        "newsStartPageFlag": "1",
        "newsShortMessageFlag": "0",
        "newsTeaser": "Bayern an „Ehre gekitzelt“",
        "newsFirstImage": "https://img.a.transfermarkt.technology/portrait/medium/8402-1532691946.jpg?lm=1",
        "newsSpotlightFirstImage": "",
        "newsSpotlightSecondImage": "",
        "newsCategoryID": "0",
        "newsCategoryTag": "News",
        "newsTickerFlag": "0",
        "newsUpdateFlag": "0",
        "spotlightPriority": ""
      },
      {
        "id": "400260",
        "newsHeadline": "Bericht: Mourinho in Kontakt mit Ginter – Könnte Gehalt bei AS Rom mindestens verdoppeln",
        "timestamp": 1644997009,
        "newsSecondImage": "https://tmssl.akamaized.net/images/wappen/homepageSmall/12.png?lm=1533302889",
        "newsDate": "16.02.2022",
        "fullNewsDate": "Mittwoch, 16. Februar 2022",
        "newsTime": "08:36",
        "newsSource": "Sport Bild/Transfermarkt",
        "newsStartPageFlag": "1",
        "newsShortMessageFlag": "0",
        "newsTeaser": "7. Deutscher nach Rüdiger & Co.",
        "newsFirstImage": "https://img.a.transfermarkt.technology/portrait/medium/124502-1627996998.jpg?lm=1",
        "newsSpotlightFirstImage": "https://tmssl.akamaized.net/images/foto/homepage/matthias-ginter-borussia-monchengladbach-2021-1634286357-72887.jpg?lm=1634286366",
        "newsSpotlightSecondImage": "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
        "newsCategoryID": "0",
        "newsCategoryTag": "News",
        "newsTickerFlag": "0",
        "newsUpdateFlag": "0",
        "spotlightPriority": 6
      },
      {
        "id": "400259",
        "newsHeadline": "Real Sociedad will RB-Leihgabe Sörloth halten – Einkaufspreis dank Option fast wieder drin",
        "timestamp": 1644992564,
        "newsSecondImage": "https://tmssl.akamaized.net/images/wappen/homepageSmall/681.png?lm=1614795530",
        "newsDate": "16.02.2022",
        "fullNewsDate": "Mittwoch, 16. Februar 2022",
        "newsTime": "07:22",
        "newsSource": "Bild/Transfermarkt",
        "newsStartPageFlag": "1",
        "newsShortMessageFlag": "0",
        "newsTeaser": "Direktes Duell am Donnerstag",
        "newsFirstImage": "https://img.a.transfermarkt.technology/portrait/medium/238407-1613998075.jpg?lm=1",
        "newsSpotlightFirstImage": "",
        "newsSpotlightSecondImage": "",
        "newsCategoryID": "0",
        "newsCategoryTag": "News",
        "newsTickerFlag": "0",
        "newsUpdateFlag": "0",
        "spotlightPriority": ""
      }
    ]
  });

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://transfermarket.p.rapidapi.com/news/list-latest',
        params: {domain: 'de'},
        headers: {
          'X-RapidAPI-Key': 'process.env.rapidApi',
          'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com'
        }
      };
      
      try {
        const resp = await axios.request(options);
        console.log(resp.data);
        setResponse(resp.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(response)
  return (
    <div>
      {/* <div>
        <NewsSlider/>
      </div> */}
      <div className='bg-slate-100 min-h-screen'>
        <h1 className='text-3xl text-bold w-11/12 mx-auto bg-white p-16'>Latest News</h1>
        <div className='grid grid-cols-3 w-11/12 mx-auto bg-white min-h-screen p-16 gap-10'>
          {response.news.length > 0 && response.news.map((item, index) => (
              <div key={index} id='news'>
                <Link to={`./news/${item.id}`} key={index} id='news'>
                <FaceCard image={item.newsSpotlightFirstImage||item.newsSpotlightSecondImage} name={item.newsTeaser} description={item.newsHeadline} date={item.newsDate} source={item.newsSource}/>
                </Link>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}
