import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react';
import Dropdown from '../Components/Dropdown';

export default function Highlights() {

    const [video, setVideo] = useState([
      {
          "title": "Yokohama F. Marinos - Kashiwa Reysol",
          "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:calc(56.25% + 335px);' class='_scorebatEmbeddedPlayerW_'><iframe src='https:\/\/www.scorebat.com\/embed\/g\/1486146\/?utm_source=api&utm_medium=match&utm_campaign=dflt' frameborder='0' width='560' height='650' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;' class='_scorebatEmbeddedPlayer_'><\/iframe><\/div>",
          "url": "https:\/\/www.scorebat.com\/kashiwa-reysol-vs-yokohama-f-marinos-live-stream\/",
          "thumbnail": "https:\/\/www.scorebat.com\/og\/m\/og1486146.jpeg",
          "date": "2024-05-29T10:00:00+0000",
          "side1": {
              "name": "Yokohama F. Marinos",
              "url": "https:\/\/www.scorebat.com\/live-stream\/yokohama-f-marinos\/"
          },
          "side2": {
              "name": "Kashiwa Reysol",
              "url": "https:\/\/www.scorebat.com\/live-stream\/kashiwa-reysol\/"
          },
          "competition": {
              "name": "JAPAN: J-League",
              "id": 748,
              "url": "https:\/\/www.scorebat.com\/japan-jleague-live-scores\/"
          },
          "videos": [
              {
                  "title": "Highlights",
                  "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;background:#000;'><iframe src='https:\/\/www.scorebat.com\/embed\/v\/665721475e152\/?utm_source=api&utm_medium=video&utm_campaign=dflt' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'><\/iframe><\/div>"
              }
          ]
      },
      {
          "title": "Philippine Army - Manila Montet",
          "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:calc(56.25% + 335px);' class='_scorebatEmbeddedPlayerW_'><iframe src='https:\/\/www.scorebat.com\/embed\/g\/1519523\/?utm_source=api&utm_medium=match&utm_campaign=dflt' frameborder='0' width='560' height='650' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;' class='_scorebatEmbeddedPlayer_'><\/iframe><\/div>",
          "url": "https:\/\/www.scorebat.com\/manila-montet-vs-philippine-army-live-stream\/",
          "thumbnail": "https:\/\/www.scorebat.com\/og\/m\/og1519523.jpeg",
          "date": "2024-05-29T12:30:00+0000",
          "side1": {
              "name": "Philippine Army",
              "url": "https:\/\/www.scorebat.com\/live-stream\/philippine-army\/"
          },
          "side2": {
              "name": "Manila Montet",
              "url": "https:\/\/www.scorebat.com\/live-stream\/manila-montet\/"
          },
          "competition": {
              "name": "PHILIPPINES: PFL",
              "id": 4536,
              "url": "https:\/\/www.scorebat.com\/philippines-pfl-live-scores\/"
          },
          "videos": [
              {
                  "title": "Live Stream",
                  "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;background:#000;'><iframe src='https:\/\/www.scorebat.com\/embed\/v\/6656d1a03ed43\/?utm_source=api&utm_medium=video&utm_campaign=dflt' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'><\/iframe><\/div>"
              }
          ]
      },
      {
          "title": "North Star - Pine Hills",
          "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:calc(56.25% + 335px);' class='_scorebatEmbeddedPlayerW_'><iframe src='https:\/\/www.scorebat.com\/embed\/g\/1489573\/?utm_source=api&utm_medium=match&utm_campaign=dflt' frameborder='0' width='560' height='650' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;' class='_scorebatEmbeddedPlayer_'><\/iframe><\/div>",
          "url": "https:\/\/www.scorebat.com\/north-star-vs-pine-hills-live-stream\/",
          "thumbnail": "https:\/\/www.scorebat.com\/og\/m\/og1489573.jpeg",
          "date": "2024-05-29T10:30:00+0000",
          "side1": {
              "name": "North Star",
              "url": "https:\/\/www.scorebat.com\/live-stream\/north-star\/"
          },
          "side2": {
              "name": "Pine Hills",
              "url": "https:\/\/www.scorebat.com\/live-stream\/pine-hills\/"
          },
          "competition": {
              "name": "AUSTRALIA: Queensland Premier League 2",
              "id": 1382,
              "url": "https:\/\/www.scorebat.com\/australia-queensland-premier-league-2-live-scores\/"
          },
          "videos": [
              {
                  "title": "Live Stream",
                  "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;background:#000;'><iframe src='https:\/\/www.scorebat.com\/embed\/v\/665702d489261\/?utm_source=api&utm_medium=video&utm_campaign=dflt' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'><\/iframe><\/div>"
              }
          ]
      },
      {
          "title": "Central Coast Mariners-2 - St George Saints",
          "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:calc(56.25% + 335px);' class='_scorebatEmbeddedPlayerW_'><iframe src='https:\/\/www.scorebat.com\/embed\/g\/1483029\/?utm_source=api&utm_medium=match&utm_campaign=dflt' frameborder='0' width='560' height='650' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;' class='_scorebatEmbeddedPlayer_'><\/iframe><\/div>",
          "url": "https:\/\/www.scorebat.com\/central-coast-mariners2-vs-st-george-saints-live-stream\/",
          "thumbnail": "https:\/\/www.scorebat.com\/og\/m\/og1483029.jpeg",
          "date": "2024-05-29T10:15:00+0000",
          "side1": {
              "name": "Central Coast Mariners-2",
              "url": "https:\/\/www.scorebat.com\/live-stream\/central-coast-mariners2\/"
          },
          "side2": {
              "name": "St George Saints",
              "url": "https:\/\/www.scorebat.com\/live-stream\/st-george-saints\/"
          },
          "competition": {
              "name": "AUSTRALIA: NPL New South Wales",
              "id": 3050,
              "url": "https:\/\/www.scorebat.com\/australia-npl-new-south-wales-live-scores\/"
          },
          "videos": [
              {
                  "title": "Live Stream",
                  "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;background:#000;'><iframe src='https:\/\/www.scorebat.com\/embed\/v\/663de84a0e7ff\/?utm_source=api&utm_medium=video&utm_campaign=dflt' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'><\/iframe><\/div>"
              }
          ]
      },
      {
          "title": "Sheikh Russel - Bashundhara Kings",
          "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:calc(56.25% + 335px);' class='_scorebatEmbeddedPlayerW_'><iframe src='https:\/\/www.scorebat.com\/embed\/g\/1507291\/?utm_source=api&utm_medium=match&utm_campaign=dflt' frameborder='0' width='560' height='650' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;' class='_scorebatEmbeddedPlayer_'><\/iframe><\/div>",
          "url": "https:\/\/www.scorebat.com\/bashundhara-kings-vs-sheikh-russel-live-stream\/",
          "thumbnail": "https:\/\/www.scorebat.com\/og\/m\/og1507291.jpeg",
          "date": "2024-05-29T10:00:00+0000",
          "side1": {
              "name": "Sheikh Russel",
              "url": "https:\/\/www.scorebat.com\/live-stream\/sheikh-russel\/"
          },
          "side2": {
              "name": "Bashundhara Kings",
              "url": "https:\/\/www.scorebat.com\/live-stream\/bashundhara-kings\/"
          },
          "competition": {
              "name": "BANGLADESH: Premier League",
              "id": 3163,
              "url": "https:\/\/www.scorebat.com\/bangladesh-premier-league-live-scores\/"
          },
          "videos": [
              {
                  "title": "Live Stream",
                  "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;background:#000;'><iframe src='https:\/\/www.scorebat.com\/embed\/v\/6656fbcc07ce5\/?utm_source=api&utm_medium=video&utm_campaign=dflt' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'><\/iframe><\/div>"
              }
          ]
      },
      {
          "title": "Kaya - Tuloy",
          "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:calc(56.25% + 335px);' class='_scorebatEmbeddedPlayerW_'><iframe src='https:\/\/www.scorebat.com\/embed\/g\/1519522\/?utm_source=api&utm_medium=match&utm_campaign=dflt' frameborder='0' width='560' height='650' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;' class='_scorebatEmbeddedPlayer_'><\/iframe><\/div>",
          "url": "https:\/\/www.scorebat.com\/kaya-vs-tuloy-live-stream\/",
          "thumbnail": "https:\/\/www.scorebat.com\/og\/m\/og1519522.jpeg",
          "date": "2024-05-29T09:45:00+0000",
          "side1": {
              "name": "Kaya",
              "url": "https:\/\/www.scorebat.com\/live-stream\/kaya\/"
          },
          "side2": {
              "name": "Tuloy",
              "url": "https:\/\/www.scorebat.com\/live-stream\/tuloy\/"
          },
          "competition": {
              "name": "PHILIPPINES: PFL",
              "id": 4536,
              "url": "https:\/\/www.scorebat.com\/philippines-pfl-live-scores\/"
          },
          "videos": [
              {
                  "title": "Live Stream",
                  "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;background:#000;'><iframe src='https:\/\/www.scorebat.com\/embed\/v\/6656d1a03ef84\/?utm_source=api&utm_medium=video&utm_campaign=dflt' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'><\/iframe><\/div>"
              }
          ]
      },
      {
          "title": "Taguig - Maharlika",
          "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:calc(56.25% + 335px);' class='_scorebatEmbeddedPlayerW_'><iframe src='https:\/\/www.scorebat.com\/embed\/g\/1519521\/?utm_source=api&utm_medium=match&utm_campaign=dflt' frameborder='0' width='560' height='650' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;' class='_scorebatEmbeddedPlayer_'><\/iframe><\/div>",
          "url": "https:\/\/www.scorebat.com\/maharlika-vs-taguig-live-stream\/",
          "thumbnail": "https:\/\/www.scorebat.com\/og\/m\/og1519521.jpeg",
          "date": "2024-05-29T07:00:00+0000",
          "side1": {
              "name": "Taguig",
              "url": "https:\/\/www.scorebat.com\/live-stream\/taguig\/"
          },
          "side2": {
              "name": "Maharlika",
              "url": "https:\/\/www.scorebat.com\/live-stream\/maharlika\/"
          },
          "competition": {
              "name": "PHILIPPINES: PFL",
              "id": 4536,
              "url": "https:\/\/www.scorebat.com\/philippines-pfl-live-scores\/"
          },
          "videos": [
              {
                  "title": "Live Stream",
                  "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;background:#000;'><iframe src='https:\/\/www.scorebat.com\/embed\/v\/6656d1a03f086\/?utm_source=api&utm_medium=video&utm_campaign=dflt' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'><\/iframe><\/div>"
              }
          ]
      },
      {
          "title": "Corinthians - Racing Montevideo",
          "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:calc(56.25% + 335px);' class='_scorebatEmbeddedPlayerW_'><iframe src='https:\/\/www.scorebat.com\/embed\/g\/1513969\/?utm_source=api&utm_medium=match&utm_campaign=dflt' frameborder='0' width='560' height='650' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;' class='_scorebatEmbeddedPlayer_'><\/iframe><\/div>",
          "url": "https:\/\/www.scorebat.com\/corinthians-vs-racing-montevideo-live-stream\/",
          "thumbnail": "https:\/\/www.scorebat.com\/og\/m\/og1513969.jpeg",
          "date": "2024-05-28T22:00:00+0000",
          "side1": {
              "name": "Corinthians",
              "url": "https:\/\/www.scorebat.com\/live-stream\/corinthians\/"
          },
          "side2": {
              "name": "Racing Montevideo",
              "url": "https:\/\/www.scorebat.com\/live-stream\/racing-montevideo\/"
          },
          "competition": {
              "name": "CONMEBOL: Copa Sudamericana, Group stage",
              "id": 5663,
              "url": "https:\/\/www.scorebat.com\/conmebol-copa-sudamericana-group-stage-live-scores\/"
          },
          "videos": [
              {
                  "title": "Highlights",
                  "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;background:#000;'><iframe src='https:\/\/www.scorebat.com\/embed\/v\/6656c18ea3f13\/?utm_source=api&utm_medium=video&utm_campaign=dflt' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'><\/iframe><\/div>"
              }
          ]
      },
      {
          "title": "Argentinos Juniors - Nacional Asuncion",
          "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:calc(56.25% + 335px);' class='_scorebatEmbeddedPlayerW_'><iframe src='https:\/\/www.scorebat.com\/embed\/g\/1513968\/?utm_source=api&utm_medium=match&utm_campaign=dflt' frameborder='0' width='560' height='650' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;' class='_scorebatEmbeddedPlayer_'><\/iframe><\/div>",
          "url": "https:\/\/www.scorebat.com\/argentinos-juniors-vs-nacional-asuncion-live-stream\/",
          "thumbnail": "https:\/\/www.scorebat.com\/og\/m\/og1513968.jpeg",
          "date": "2024-05-28T22:00:00+0000",
          "side1": {
              "name": "Argentinos Juniors",
              "url": "https:\/\/www.scorebat.com\/live-stream\/argentinos-juniors\/"
          },
          "side2": {
              "name": "Nacional Asuncion",
              "url": "https:\/\/www.scorebat.com\/live-stream\/nacional-asuncion\/"
          },
          "competition": {
              "name": "CONMEBOL: Copa Sudamericana, Group stage",
              "id": 5663,
              "url": "https:\/\/www.scorebat.com\/conmebol-copa-sudamericana-group-stage-live-scores\/"
          },
          "videos": [
              {
                  "title": "Highlights",
                  "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;background:#000;'><iframe src='https:\/\/www.scorebat.com\/embed\/v\/6656c17cd3ff6\/?utm_source=api&utm_medium=video&utm_campaign=dflt' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'><\/iframe><\/div>"
              }
          ]
      },
      {
          "title": "Delfin - Tomayapo",
          "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:calc(56.25% + 335px);' class='_scorebatEmbeddedPlayerW_'><iframe src='https:\/\/www.scorebat.com\/embed\/g\/1513973\/?utm_source=api&utm_medium=match&utm_campaign=dflt' frameborder='0' width='560' height='650' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;' class='_scorebatEmbeddedPlayer_'><\/iframe><\/div>",
          "url": "https:\/\/www.scorebat.com\/delfin-vs-tomayapo-live-stream\/",
          "thumbnail": "https:\/\/www.scorebat.com\/og\/m\/og1513973.jpeg",
          "date": "2024-05-29T00:30:00+0000",
          "side1": {
              "name": "Delfin",
              "url": "https:\/\/www.scorebat.com\/live-stream\/delfin\/"
          },
          "side2": {
              "name": "Tomayapo",
              "url": "https:\/\/www.scorebat.com\/live-stream\/tomayapo\/"
          },
          "competition": {
              "name": "CONMEBOL: Copa Sudamericana, Group stage",
              "id": 5663,
              "url": "https:\/\/www.scorebat.com\/conmebol-copa-sudamericana-group-stage-live-scores\/"
          },
          "videos": [
              {
                  "title": "Highlights",
                  "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;background:#000;'><iframe src='https:\/\/www.scorebat.com\/embed\/v\/6656b126bf295\/?utm_source=api&utm_medium=video&utm_campaign=dflt' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'><\/iframe><\/div>"
              }
          ]
      },
      {
          "title": "Deportivo San Lorenzo - Rubio Nu",
          "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:calc(56.25% + 335px);' class='_scorebatEmbeddedPlayerW_'><iframe src='https:\/\/www.scorebat.com\/embed\/g\/1530283\/?utm_source=api&utm_medium=match&utm_campaign=dflt' frameborder='0' width='560' height='650' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;' class='_scorebatEmbeddedPlayer_'><\/iframe><\/div>",
          "url": "https:\/\/www.scorebat.com\/deportivo-san-lorenzo-vs-rubio-nu-live-stream\/",
          "thumbnail": "https:\/\/www.scorebat.com\/og\/m\/og1530283.jpeg",
          "date": "2024-05-28T23:30:00+0000",
          "side1": {
              "name": "Deportivo San Lorenzo",
              "url": "https:\/\/www.scorebat.com\/live-stream\/deportivo-san-lorenzo\/"
          },
          "side2": {
              "name": "Rubio Nu",
              "url": "https:\/\/www.scorebat.com\/live-stream\/rubio-nu\/"
          },
          "competition": {
              "name": "PARAGUAY: Division Intermedia",
              "id": 3194,
              "url": "https:\/\/www.scorebat.com\/paraguay-division-intermedia-live-scores\/"
          },
          "videos": [
              {
                  "title": "Highlights",
                  "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;background:#000;'><iframe src='https:\/\/www.scorebat.com\/embed\/v\/6656a987b245d\/?utm_source=api&utm_medium=video&utm_campaign=dflt' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'><\/iframe><\/div>"
              }
          ]
      },
      {
          "title": "Real Cartagena - Atletico Huila",
          "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:calc(56.25% + 335px);' class='_scorebatEmbeddedPlayerW_'><iframe src='https:\/\/www.scorebat.com\/embed\/g\/1531215\/?utm_source=api&utm_medium=match&utm_campaign=dflt' frameborder='0' width='560' height='650' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;' class='_scorebatEmbeddedPlayer_'><\/iframe><\/div>",
          "url": "https:\/\/www.scorebat.com\/atletico-huila-vs-real-cartagena-live-stream\/",
          "thumbnail": "https:\/\/www.scorebat.com\/og\/m\/og1531215.jpeg",
          "date": "2024-05-29T00:30:00+0000",
          "side1": {
              "name": "Real Cartagena",
              "url": "https:\/\/www.scorebat.com\/live-stream\/real-cartagena\/"
          },
          "side2": {
              "name": "Atletico Huila",
              "url": "https:\/\/www.scorebat.com\/live-stream\/atletico-huila\/"
          },
          "competition": {
              "name": "COLOMBIA: Primera B, Apertura Quadrangular",
              "id": 6315,
              "url": "https:\/\/www.scorebat.com\/colombia-primera-b-apertura-quadrangular-live-scores\/"
          },
          "videos": [
              {
                  "title": "Highlights",
                  "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;background:#000;'><iframe src='https:\/\/www.scorebat.com\/embed\/v\/6656a30d57051\/?utm_source=api&utm_medium=video&utm_campaign=dflt' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'><\/iframe><\/div>"
              },
              {
                  "title": "All Goals",
                  "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;background:#000;'><iframe src='https:\/\/www.scorebat.com\/embed\/v\/6656a30d52b33\/?utm_source=api&utm_medium=video&utm_campaign=dflt' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'><\/iframe><\/div>"
              }
          ]
      },
      {
          "title": "Internacional - Belgrano Cordoba",
          "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:calc(56.25% + 335px);' class='_scorebatEmbeddedPlayerW_'><iframe src='https:\/\/www.scorebat.com\/embed\/g\/1513972\/?utm_source=api&utm_medium=match&utm_campaign=dflt' frameborder='0' width='560' height='650' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;' class='_scorebatEmbeddedPlayer_'><\/iframe><\/div>",
          "url": "https:\/\/www.scorebat.com\/belgrano-cordoba-vs-internacional-live-stream\/",
          "thumbnail": "https:\/\/www.scorebat.com\/og\/m\/og1513972.jpeg",
          "date": "2024-05-29T00:30:00+0000",
          "side1": {
              "name": "Internacional",
              "url": "https:\/\/www.scorebat.com\/live-stream\/internacional\/"
          },
          "side2": {
              "name": "Belgrano Cordoba",
              "url": "https:\/\/www.scorebat.com\/live-stream\/belgrano-cordoba\/"
          },
          "competition": {
              "name": "CONMEBOL: Copa Sudamericana, Group stage",
              "id": 5663,
              "url": "https:\/\/www.scorebat.com\/conmebol-copa-sudamericana-group-stage-live-scores\/"
          },
          "videos": [
              {
                  "title": "Highlights",
                  "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;background:#000;'><iframe src='https:\/\/www.scorebat.com\/embed\/v\/66569f4565026\/?utm_source=api&utm_medium=video&utm_campaign=dflt' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'><\/iframe><\/div>"
              }
          ]
      },
      {
          "title": "Coquimbo Unido - RB Bragantino",
          "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:calc(56.25% + 335px);' class='_scorebatEmbeddedPlayerW_'><iframe src='https:\/\/www.scorebat.com\/embed\/g\/1513970\/?utm_source=api&utm_medium=match&utm_campaign=dflt' frameborder='0' width='560' height='650' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;' class='_scorebatEmbeddedPlayer_'><\/iframe><\/div>",
          "url": "https:\/\/www.scorebat.com\/coquimbo-unido-vs-rb-bragantino-live-stream\/",
          "thumbnail": "https:\/\/www.scorebat.com\/og\/m\/og1513970.jpeg",
          "date": "2024-05-29T00:30:00+0000",
          "side1": {
              "name": "Coquimbo Unido",
              "url": "https:\/\/www.scorebat.com\/live-stream\/coquimbo-unido\/"
          },
          "side2": {
              "name": "RB Bragantino",
              "url": "https:\/\/www.scorebat.com\/live-stream\/rb-bragantino\/"
          },
          "competition": {
              "name": "CONMEBOL: Copa Sudamericana, Group stage",
              "id": 5663,
              "url": "https:\/\/www.scorebat.com\/conmebol-copa-sudamericana-group-stage-live-scores\/"
          },
          "videos": [
              {
                  "title": "Highlights",
                  "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;background:#000;'><iframe src='https:\/\/www.scorebat.com\/embed\/v\/66569f4564deb\/?utm_source=api&utm_medium=video&utm_campaign=dflt' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'><\/iframe><\/div>"
              }
          ]
      },
      {
          "title": "Bolivar - Palestino",
          "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:calc(56.25% + 335px);' class='_scorebatEmbeddedPlayerW_'><iframe src='https:\/\/www.scorebat.com\/embed\/g\/1513903\/?utm_source=api&utm_medium=match&utm_campaign=dflt' frameborder='0' width='560' height='650' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;' class='_scorebatEmbeddedPlayer_'><\/iframe><\/div>",
          "url": "https:\/\/www.scorebat.com\/bolivar-vs-palestino-live-stream\/",
          "thumbnail": "https:\/\/www.scorebat.com\/og\/m\/og1513903.jpeg",
          "date": "2024-05-29T00:00:00+0000",
          "side1": {
              "name": "Bolivar",
              "url": "https:\/\/www.scorebat.com\/live-stream\/bolivar\/"
          },
          "side2": {
              "name": "Palestino",
              "url": "https:\/\/www.scorebat.com\/live-stream\/palestino\/"
          },
          "competition": {
              "name": "COPA LIBERTADORES: Group Stage",
              "id": 763,
              "url": "https:\/\/www.scorebat.com\/copa-libertadores-group-stage-live-scores\/"
          },
          "videos": [
              {
                  "title": "Highlights",
                  "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;background:#000;'><iframe src='https:\/\/www.scorebat.com\/embed\/v\/66569b7d78aa3\/?utm_source=api&utm_medium=video&utm_campaign=dflt' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'><\/iframe><\/div>"
              }
          ]
      },
  ])

  const [competition, setCompetition] = useState([])
  const [selected, setSelected] = useState()
  const [filteredData, setFilterData] = useState(video)
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

    // fetchData()
    },[])

    const extractData = () => {
      const comp = ['All'];
      const seen = new Set();
    
      video.forEach((item) => {
        const competitionName = item.competition.name;
        if (!seen.has(competitionName)) {
          seen.add(competitionName);
          comp.push(competitionName);
        }
      });
      setCompetition(comp);
    };
    console.log(competition)

    useEffect(() => {
      extractData()
    },[])


    const filterData = (data) => {
      const newData = []
      if(data === 'All'){
        video.forEach((item) => {
          newData.push(item)
        });
      }
      video.forEach((item) => {
        const competitionName = item.competition.name;
        console.log(competitionName === data)
        if(competitionName === data){
          newData.push(item)
        }
      });
      setFilterData(newData)
    }

    const selectedData = (data) => {
      setSelected(data)
      filterData(data)
    }

    return (
      <div className='bg-slate-100 min-h-screen mx-auto'>
          <div className='w-11/12 bg-white min-h-screen mx-auto p-10'>
          <h1 className='text-3xl text-bold w-11/12 mx-auto bg-white p-6 pb-0'>Live Matches and Highlights</h1>
          <div className='p-20 flex justify-center'>
            <p className='font-bold text-md'>League : </p><Dropdown competition = {competition} selectedData={selectedData}/>
          </div>
          {filteredData.map((item, index)=>(
              <div key={index} className='flex flex-col items-center p-5 border-2 border border-black m-4 rounded-md'>
                <h1 className='p-6 text-2xl font-bold'>{item.title}</h1>
                <h1 className='p-6 text-xl flex flex-row'><p className='font-bold'>League :</p><a href={item.competition.url}>{ item.competition.name}</a></h1>
                <p className='font-bold'>Date: {item.date.split('T')[0]} Time: {item.date.split('T')[1].split('+')[0]} GMT</p>
                <iframe width="90%" height="500" src={item['url']} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <a href={item.url} target = "_blank" className='p-6 text-xl flex flex-row text-blue-800'>Watch on: {item.url}</a>
                <div className='text-center'>
                  <p>Home Team: <a href={item.side1.url}>{item.side1.name}</a><br/> <a href={item.side2.url}>Away Team: {item.side2.name}</a></p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
  )
}
