import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function News() {
  const { id } = useParams();

  const [response, setResponse] = useState({
    "news": {
      "id": "372889",
      "headline": "Saint-Maximin verlängert vorzeitig bei Newcastle United – „Er kann es sehr weit schaffen“",
      "source": "Newcastle United",
      "timestamp": 1602695557,
      "firstImage": "https://img.a.transfermarkt.technology/portrait/medium/272642-1557495119.png?lm=1",
      "secondImage": "https://tmssl.akamaized.net/images/wappen/medium/762.png?lm=1472921161",
      "heroImage": "https://tmssl.akamaized.net/images/foto/galerie/allan-saint-maximin-newcastle-1589879184-39064.jpg?lm=1589879201",
      "heroImageSource": "imago images",
      "categoryID": "0",
      "categoryTag": "News",
      "threadUrl": "https://www.transfermarkt.de/newsforum/thread/forum/228/thread_id/127644/from/newsansicht",
      "countReplies": "4",
      "text": {
        "text-0": "<a href=\"/DE_DE/player/272642\">Allan Saint-Maximin</a> hat seinen bis 2025 laufenden Vertrag bei <a href=\"/DE_DE/club/762\">Newcastle United</a> fr&uuml;hzeitig verl&auml;ngert. Wie die &bdquo;Magpies&ldquo; am Mittwoch bekannt gaben, l&auml;uft das neue Arbeitspapier des ehemaligen <a href=\"/DE_DE/club/42\">Hannover</a>&ndash;Profis bis zum 30.06.2026.",
        "text-1": "<widget data-category=\"playerMarketValueBox\" data-id=\"playerMarketValueBox_708290537\"/>",
        "text-2": "&bdquo;Ich habe f&uuml;r eine Menge Klubs gespielt &ndash; Monaco, Nizza, in Deutschland &ndash; aber in Newcastle f&uuml;hle ich mich wirklich zuhause. Die Fans zeigen mir sehr viel Liebe, genau wie der Trainer und meine Mitspieler auf dem Feld. Das war zwar auch bei jedem anderen Verein der Fall, aber hier ist es etwas ganz besonderes. Wenn ich den Fans also mit dieser Vertragsverl&auml;ngerung etwas zur&uuml;ckgeben kann, bin ich sehr zufrieden&ldquo;, sagte der Linksau&szlig;en, der <a href=\"/DE_DE/articleDetails/372741\" target=\"_blank\">beim j&uuml;ngsten Marktwert-Update der Premier League</a> zu den gr&ouml;&szlig;ten Gewinnern z&auml;hlte.",
        "text-3": "<widget data-category=\"gallery\" data-id=\"gallery_339032155\"/>",
        "text-4": "Newcastles Trainer <a title=\"Steve Bruce\" href=\"/api/profile/AppStaff/447\">Steve Bruce</a> f&uuml;gte an: &bdquo;Wir sind sehr gl&uuml;cklich, dass er sich f&uuml;r so lange Zeit an den Klub gebunden hat. Wir sind &uuml;bergl&uuml;cklich, er ist &uuml;bergl&uuml;cklich, und ich denke auch die Fans werden froh &uuml;ber diese Nachricht sein. Allan wei&szlig; nun, worauf es in der Premier League ankommt, und hat die Welt zu seinen F&uuml;&szlig;en liegen. Er kann es sehr weit schaffen, weil er das absolute Talent dazu hat.&ldquo;",
        "text-5": "<widget data-category=\"socialBox\" data-id=\"socialBox_524840157\"/>"
      },
      "widgetData": {
        "playerMarketValueBox_708290537": {
          "player": {
            "id": "272642",
            "name": "A. Saint-Maximin",
            "image": "https://img.a.transfermarkt.technology/portrait/medium/272642-1557495119.png?lm=1",
            "position": "Linksaußen",
            "age": null,
            "contractUntil": null,
            "isGoalkeeper": false,
            "marketValue": {
              "progression": 1,
              "unformatted": 32000000,
              "value": "32,00",
              "currency": "€",
              "numeral": "Mio."
            }
          },
          "displayChart": false
        },
        "socialBox_524840157": {
          "embeddedCode": "<blockquote class=\"twitter-tweet\"><p lang=\"und\" dir=\"ltr\"> <a href=\"https://t.co/cqoiPx2s0e\">pic.twitter.com/cqoiPx2s0e</a></p>— Newcastle United FC (@NUFC) <a href=\"https://twitter.com/NUFC/status/1316423283236106241?ref_src=twsrc%5Etfw\">October 14, 2020</a></blockquote> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>"
        },
        "gallery_339032155": {
          "id": "1806",
          "url": "https://www.transfermarkt.de/die-grossten-gewinner-des-premier-league-marktwert-updates/index/galerie/1806",
          "title": "Die größten Gewinner des Premier League Marktwert-Updates",
          "images": [
            {
              "id": "47565",
              "title": "60 Matt Doherty - Tottenham - Neuer Marktwert: 20 Mio. € (+4 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/matt-doherty-tottenham-hotspur-1600607619-47565.jpg?lm=1600607630"
            },
            {
              "id": "38447",
              "title": "59 Fikayo Tomori - FC Chelsea - Neuer Marktwert: 20 Mio. € (+4 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/tomori-chelsea-1589376990-38447.jpg?lm=1589376984"
            },
            {
              "id": "26000",
              "title": "58 Eric García - Manchester City - Neuer Marktwert: 20 Mio. € (+4 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/eric-garcia-manchester-city-januar-2019-1569334924-26000.jpg?lm=1569334935"
            },
            {
              "id": "29092",
              "title": "57 Granit Xhaka - FC Arsenal - Neuer Marktwert: 28 Mio. € (+4 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/granit-xhaka-arsenal-1577954052-29092.jpg?lm=1577954069"
            },
            {
              "id": "39064",
              "title": "56 Allan Saint-Maximin - Newcastle United - Neuer Marktwert: 32 Mio. € (+4 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/allan-saint-maximin-newcastle-1589879184-39064.jpg?lm=1589879201"
            },
            {
              "id": "44427",
              "title": "55 Kieran Tierney - FC Arsenal - Neuer Marktwert: 32 Mio. € (+4 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/kieran-tierney-arsenal-fc-1596023621-44427.jpg?lm=1596023593"
            },
            {
              "id": "38561",
              "title": "54 Fabinho - FC Liverpool - Neuer Marktwert: 60 Mio. € (+4 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/fabinho-1589452334-38561.jpg?lm=1589452355"
            },
            {
              "id": "47604",
              "title": "53 Gabriel Jesus - Manchester City - Neuer Marktwert: 60 Mio. € (+4 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/gabriel-jesus-manchester-city-1600757647-47604.jpg?lm=1600757663"
            },
            {
              "id": "23446",
              "title": "52 Tyrone Mings - Aston Villa - Neuer Marktwert: 27 Mio. € (+4,5 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/tyrone-mings-aston-villa-1562605412-23446.jpg?lm=1562605442"
            },
            {
              "id": "38669",
              "title": "51 Mason Mount - FC Chelsea - Neuer Marktwert: 45 Mio. € (+4,5 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/mason-mount-vom-fc-chelsea-1589550217-38669.jpg?lm=1589550216"
            },
            {
              "id": "44608",
              "title": "50 Steven Alzate - Brighton & Hove - Neuer Marktwert: 7 Mio. € (+4,7 Mio. €)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/steven-alzate-brighton-1596211489-44608.jpg?lm=1596211445"
            },
            {
              "id": "48965",
              "title": "49 Tyrick Mitchell - Crystal Palace - Neuer Marktwert: 5 Mio. € (+5 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/tyrick-mitchell-crystal-palace-1602499082-48965.jpg?lm=1602499234"
            },
            {
              "id": "12437",
              "title": "48 Eddie Nketiah - FC Arsenal - Neuer Marktwert: 20 Mio. € (+5 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/edward-nketiah-fc-arsenal-1508913094-12437.jpg?lm=1508913142"
            },
            {
              "id": "38581",
              "title": "47 Daniel Podence - Wolverhampton - Neuer Marktwert: 22 Mio. € (+5 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/daniel-podence-1589455947-38581.jpg?lm=1589455997"
            },
            {
              "id": "48972",
              "title": "46 Pierre-Emile Höjbjerg - Tottenham - Neuer Marktwert: 25 Mio. € (+5 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/pierre-emile-hojbjerg-tottenham-hotspur-1602502399-48972.jpg?lm=1602502424"
            },
            {
              "id": "48966",
              "title": "45 Abdoulaye Doucouré - FC Everton - Neuer Marktwert: 25 Mio. € (+5 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/abdoulaye-doucoure-fc-everton-1602499380-48966.jpg?lm=1602499395"
            },
            {
              "id": "38958",
              "title": "44 Douglas Luiz - Aston Villa - Neuer Marktwert: 27 Mio. € (+5 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/douglas-luiz-von-aston-villa-1589800448-38958.jpg?lm=1589800444"
            },
            {
              "id": "46505",
              "title": "43 Adama Traoré - Wolverhampton - Neuer Marktwert: 40 Mio. € (+5 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/adama-traore-wolverhampton-wanderers-1598959842-46505.jpg?lm=1598959821"
            },
            {
              "id": "32334",
              "title": "42 Bukayo Saka - FC Arsenal - Neuer Marktwert: 40 Mio. € (+5 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/bukayo-saka-arsenal-januar-2020-1582630494-32334.jpg?lm=1582630503"
            },
            {
              "id": "33461",
              "title": "41 Jack Grealish - Aston Villa - Neuer Marktwert: 45 Mio. € (+5 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/jack-grealish-aston-villa-1583849087-33461.jpg?lm=1583849100"
            },
            {
              "id": "38668",
              "title": "40 Mateo Kovacic - FC Chelsea - Neuer Marktwert: 45 Mio. € (+5 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/mateo-kovacic-vom-fc-chelsea-1589550006-38668.jpg?lm=1589550005"
            },
            {
              "id": "43104",
              "title": "39 Mason Greenwood - Manchester United - Neuer Marktwert: 50 Mio. € (+5 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/mason-greenwood-manchester-united-1594361425-43104.jpg?lm=1594361415"
            },
            {
              "id": "37217",
              "title": "38 Facundo Pellistri - Manchester United - Neuer Marktwert: 7 Mio. € (+5,2 Mio. €) ",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/facundo-pellistri-ca-penarol-1588063526-37217.jpg?lm=1588063542"
            },
            {
              "id": "38849",
              "title": "37 Declan Rice - West Ham United - Neuer Marktwert: 55 Mio. € (+5,5 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/declan-rice-1589794490-38849.jpg?lm=1589794491"
            },
            {
              "id": "47987",
              "title": "36 Timothy Castagne - Leicester City - Neuer Marktwert: 24 Mio. € (+6 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/timothy-castagne-leicester-1601305553-47987.jpg?lm=1601305568"
            },
            {
              "id": "37643",
              "title": "35 Harvey Barnes - Leicester City - Neuer Marktwert: 28 Mio. € (+6 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/harvey-barnes-im-trikot-von-leicester-city-1588596041-37643.jpg?lm=1588596041"
            },
            {
              "id": "38823",
              "title": "34 Wilfried Zaha - Crystal Palace - Neuer Marktwert: 50 Mio. € (+6 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/wilfried-zaha-1589793273-38823.jpg?lm=1589793274"
            },
            {
              "id": "46590",
              "title": "33 Timo Werner - FC Chelsea - Neuer Marktwert: 70 Mio. € (+6 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/timo-werner-im-trikot-des-fc-chelsea-1599048868-46590.jpg?lm=1599048850"
            },
            {
              "id": "48967",
              "title": "32 Harrison Reed - FC Fulham – Neuer Marktwert: 9 Mio. € (+6,6 Mio. €)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/harrison-reed-fc-fulham-1602499838-48967.jpg?lm=1602499866"
            },
            {
              "id": "38582",
              "title": "31 Pedro Neto - Wolverhampton - Neuer Marktwert: 22 Mio. € (+7 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/pedro-neto-1589456143-38582.jpg?lm=1589456149"
            },
            {
              "id": "38449",
              "title": "30 Conor Coady - Wolverhampton - Neuer Marktwert: 25 Mio. € (+7 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/conor-coady-wolverhampton-1589377216-38449.jpg?lm=1589377210"
            },
            {
              "id": "25678",
              "title": "29 Lewis Dunk - Brighton & Hove - Neuer Marktwert: 27 Mio. € (+7 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/lewis-dunk-von-brighton-hove-albion-1568285536-25678.jpg?lm=1568285544"
            },
            {
              "id": "48968",
              "title": "28 Matty Cash - Aston Villa - Neuer Marktwert: 12 Mio. € (+7,2 Mio. €)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/matty-cash-aston-villa-1602500001-48968.jpg?lm=1602500021"
            },
            {
              "id": "46803",
              "title": "27 Grady Diangana - West Bromwich - Neuer Marktwert: 12 Mio. € (+7,5 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/grady-diangana-west-bromwich-albion-1599294378-46803.jpg?lm=1599294369"
            },
            {
              "id": "43595",
              "title": "26 Reece James - FC Chelsea - Neuer Marktwert: 30 Mio. € (+7,5 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/reece-james-im-trikot-des-chelsea-fc-1594887033-43595.jpg?lm=1594886998"
            },
            {
              "id": "39005",
              "title": "25 Michael Keane - FC Everton - Neuer Marktwert: 28 Mio. € (+8 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/michael-keane-1589804082-39005.jpg?lm=1589804090"
            },
            {
              "id": "47939",
              "title": "24 Gabriel - FC Arsenal - Neuer Marktwert: 28 Mio. € (+8 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/gabriel-arsenal-1601282272-47939.jpg?lm=1601282290"
            },
            {
              "id": "44343",
              "title": "23 James Tarkowski - FC Burnley - Neuer Marktwert: 28 Mio. € (+8 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/james-tarkowski-bei-burnley-1595942568-44343.jpg?lm=1595942536"
            },
            {
              "id": "27960",
              "title": "22 Richarlison - FC Everton - Neuer Marktwert: 60 Mio. € (+8 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/richarlison-fc-everton-1575395869-27960.jpg?lm=1575395911"
            },
            {
              "id": "41205",
              "title": "21 Alisson - FC Liverpool - Neuer Marktwert: 80 Mio. € (+8 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/alisson-abwurf-1591886153-41205.jpg?lm=1591886134"
            },
            {
              "id": "47963",
              "title": "20 Eberechi Eze - Crystal Palace - Neuer Marktwert: 18 Mio. € (+9 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/eberechi-eze-crystal-1601298457-47963.jpg?lm=1601298468"
            },
            {
              "id": "28828",
              "title": "19 Ben Godfrey - FC Everton - Neuer Marktwert: 25 Mio. € (+9 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/ben-godfrey-norwich-city-1576858224-28828.jpg?lm=1576858243"
            },
            {
              "id": "48969",
              "title": "18 Ben White - Brighton & Hove - Neuer Marktwert: 15 Mio. € (+9,5 Mio. €)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/ben-white-brighton-hove-albion-1602500305-48969.jpg?lm=1602500316"
            },
            {
              "id": "26826",
              "title": "17 Rhian Brewster - Sheffield United - Neuer Marktwert: 15 Mio. € (+9,6 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/rhian-brewster-fc-liverpool-1571823826-26826.jpg?lm=1571823834"
            },
            {
              "id": "44428",
              "title": "16 Tariq Lamptey - Brighton & Hove - Neuer Marktwert: 18 Mio. € (+10 Mio. €)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/tariq-lamptey-brighton-hove-albion-1596024460-44428.jpg?lm=1596024411"
            },
            {
              "id": "26635",
              "title": "15 Kalvin Philipps - Leeds United - Neuer Marktwert: 22 Mio. € (+10 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/kalvin-philipps-leeds-united-1571304928-26635.jpg?lm=1571304953"
            },
            {
              "id": "39875",
              "title": "14 Thomas - FC Arsenal - Neuer Marktwert: 50 Mio. € (+10 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/thomas-atletico-1590674753-39875.jpg?lm=1590674740"
            },
            {
              "id": "48022",
              "title": "13 Ben Chilwell - FC Chelsea - Neuer Marktwert: 50 Mio. € (+10 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/ben-chilwell-chelsea-1601366332-48022.jpg?lm=1601366346"
            },
            {
              "id": "33631",
              "title": "12 Bruno Fernandes - Manchester United - Neuer Marktwert: 80 Mio. € (+10 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/bruno-fernandes-manchester-united-1584088715-33631.jpg?lm=1584088726"
            },
            {
              "id": "36585",
              "title": "11 Diogo Jota - FC Liverpool - Neuer Marktwert: 40 Mio. € (+12 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/diogo-jota-im-wolverhampton-trikot-1587114795-36585.jpg?lm=1587114807"
            },
            {
              "id": "47948",
              "title": "10 Nathan Aké - Manchester City - Neuer Marktwert: 40 Mio. € (+12 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/nathan-ake-city-1601288249-47948.jpg?lm=1601288265"
            },
            {
              "id": "31263",
              "title": "9 Heung-min Son - Tottenham - Neuer Marktwert: 75 Mio. € (+11 Mio.) ",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/heung-min-son-tottenham-spurs-1580968746-31263.jpg?lm=1580968763"
            },
            {
              "id": "38558",
              "title": "8 Andrew Robertson - FC Liverpool - Neuer Marktwert: 75 Mio. € (+11 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/andrew-robertson-1589452086-38558.jpg?lm=1589452153"
            },
            {
              "id": "29376",
              "title": "7 Wesley Fofana - Leicester City - Neuer Marktwert: 22,5 Mio. € (+12,5 Mio. €)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/wesley-fofana-as-saint-etienne-1578512976-29376.jpg?lm=1578512988"
            },
            {
              "id": "48970",
              "title": "6 Edouard Mendy - FC Chelsea - Neuer Marktwert: 20 Mio. € (+13 Mio. €)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/edouard-mendy-fc-chelsea-1602500742-48970.jpg?lm=1602500761"
            },
            {
              "id": "47502",
              "title": "5 Fábio Silva - Wolverhampton - Neuer Marktwert: 25 Mio. € (+13 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/fabio-silva-wolves-1600423128-47502.jpg?lm=1600423144"
            },
            {
              "id": "48849",
              "title": "4 Rúben Dias - Manchester City - Neuer Marktwert: 50 Mio. € (+15 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/ruben-dias-portugal-1602252492-48849.jpg?lm=1602252505"
            },
            {
              "id": "48971",
              "title": "3 Dominic Calvert-Lewin - FC Everton - Neuer Marktwert: 40 Mio. € (+16 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/dominic-calvert-lewin-fc-everton-1602500885-48971.jpg?lm=1602500905"
            },
            {
              "id": "48345",
              "title": "2 Ollie Watkins - Aston Villa - Neuer Marktwert: 30 Mio. € (+18 Mio. €)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/ollie-watkins-aston-villa-1601871238-48345.jpg?lm=1601871251"
            },
            {
              "id": "43153",
              "title": "1 Phil Foden - Manchester City - Neuer Marktwert: 60 Mio. € (+20 Mio.)",
              "description": "",
              "url": "https://tmssl.akamaized.net/images/foto/galerie/phil-foden-manchester-city-1594461872-43153.jpg?lm=1594461837"
            }
          ]
        }
      },
      "author": "Lennart Gens"
    },
    "share": {
      "title": "Saint-Maximin verlängert vorzeitig bei Newcastle United – „Er kann es sehr weit schaffen“",
      "url": "https://www.transfermarkt.de/saint-maximin-verlangert-vorzeitig-bei-newcastle-united-ndash-bdquo-er-kann-es-sehr-weit-schaffen-ldquo-/view/news/372889",
      "image": "https://img.a.transfermarkt.technology/portrait/medium/272642-1557495119.png?lm=1",
      "description": null
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://transfermarket.p.rapidapi.com/news/detail',
        params: { id: id },
        headers: {
          'X-RapidAPI-Key': 'process.env.rapidApi',
          'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com'
        }
      };

      try {
        const resp = await axios.request(options);
        setResponse(resp.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  function parseHtmlToText(html) {
    var temp = document.createElement("div");
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || "";
}

  
console.log(response.news.text)
  return (
    <>
      <div className='bg-slate-100 min-h-screen mx-auto'>
        <div className='w-11/12 bg-white min-h-screen mx-auto p-10'>
          {response && <><h1 className='font-bold flex flex-row justify-center text-2xl'>{response.news.headline}</h1><p className='flex flex-row justify-center text-xl'>~{response.news.source}</p></>}
          {response && (
            <div className='w-3/5 mx-auto p-8'>
              <img src={response.news.heroImage} alt="News Image" />
              <h1 className="flex flex-row justify-end">~Image Source: {response.news.heroImageSource}</h1>
            </div>
          )}
          {Object.keys(response.news.text).map((key) => {
            const htmlString = response.news.text[key];
            const textContent = parseHtmlToText(htmlString);
            return <p key={key} className='text-lg font-semibold'>{textContent}</p>;
        })}
          <div className = 'flex flex-row p-10 justify-center'>
            {response && <img src={response.news.firstImage} alt="News Image" className='h-96 w-30 mx-auto' />}
            {response && <img src={response.news.secondImage} alt="News Image" className='h-96 w-30 mx-auto' />}
          </div>
          <h1 className='font-bold flex flex-row justify-end'>Author: {response.news.author}</h1>
        </div>
      </div>
    </>
  );
}
