import  './App.css';
import React from 'react';


import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landing from './components/landing';
import Login from './components/user/login';
import Signup from './components/user/signup';
import Cards from './components/cards';
import Waiting from './components/waiting';
import axios from 'axios';
import { uploadFile } from 'react-s3';
import { Card } from '@material-ui/core';
//  const config = {
//     bucketName: '272projectgroup2',
//     dirName: 'Resume', 
//     region: 'us-east-1',
//     accessKeyId: aws.accessKeyId,
//     secretAccessKey: aws.secretAccessKey
// }


// import imageUpload from './components/imageUpload';
  
const answer=
[ 
  {
      "id": 41,
      "desc": null,
      "company": "Super Micro Computer, Inc.",
      "link": "https://www.indeed.com/applystart?jk=765219be7567d72f&from=vj&pos=bottom&mvj=0&spon=0&sjdu=YmZE5d5THV8u75cuc0H6Y26AwfY51UOGmh3Z9h4OvXgD1fjZ7M969Uc2IweJ4Kh0VAq81dAHm7GpE1MqdfeWCQ&vjfrom=serp&astse=c63cf552e745e9ed&assa=1360",
      "salary": "",
      "role": "Software Engineer",
      "title": "Software Engineer, Web Application",
      "keywords": "c# hadoop java javascript sql",
      "location": "San Jose,CA",
      "simscore": "27.2434332500170300"
  },
  {
      "id": 42,
      "desc": null,
      "company": "Rhombus Power",
      "link": "https://www.indeed.com/applystart?jk=1bdb4e27b810b4e2&from=vj&pos=bottom&mvj=0&spon=0&sjdu=YmZE5d5THV8u75cuc0H6Y26AwfY51UOGmh3Z9h4OvXivzH_kvLw5elCkmz2F6hpUMIfcMu539kP3i1FMxIq2rA&vjfrom=serp&astse=aadaa78f0675ad99&assa=8947",
      "salary": "",
      "role": "Software Engineer",
      "title": "Full Stack Developer, Mountain View",
      "keywords": "excel mysql php power",
      "location": "San Jose,CA",
      "simscore": "22.09472706664429900"
  },
  {
      "id": 43,
      "desc": null,
      "company": "KLA-Tencor",
      "link": "https://www.indeed.com/applystart?jk=910b953e2b0f6365&from=vj&pos=bottom&mvj=0&spon=0&sjdu=YmZE5d5THV8u75cuc0H6Y26AwfY51UOGmh3Z9h4OvXi4XWufgUB9xgg1nNtRozEtpsjbKTpre7P5gvPU7rdPPQ&vjfrom=serp&astse=4151606e2a2512b0&assa=7932",
      "salary": "Full-time",
      "role": "Software Engineer",
      "title": "Software Engineer",
      "keywords": "c# c++ r",
      "location": "San Jose,CA",
      "simscore": "14.74419561548971400"
  },
  {
      "id": 44,
      "desc": null,
      "company": "Akraya Inc.",
      "link": "https://www.indeed.com/applystart?jk=54e2b6f753b40e58&from=vj&pos=bottom&mvj=0&spon=0&sjdu=YmZE5d5THV8u75cuc0H6Y26AwfY51UOGmh3Z9h4OvXgn303E8zCWuDq7XgSOBhGhl8EZNoFLzyHkpvcd7-Y9bg&vjfrom=serp&astse=02ff0d03442690e9&assa=3721",
      "salary": "Contract",
      "role": "Software Engineer",
      "title": "Software Development Engineer (100% remote):21-07374",
      "keywords": "angular java javascript react reactjs",
      "location": "San Jose,CA",
      "simscore": "48.8864346176701100"
  }
];


export default class PersonList extends React.Component {
  

  render() {
    return (
       <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/wait" element={<Waiting />} />
          <Route exact path="/cards" element={<Cards/>}/>
          </Routes>
        </Router>
    )
  }
}