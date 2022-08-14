import Body from './Body'; 

import {useEffect,useState} from 'react'
import '../App.css'
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://newscatcher.p.rapidapi.com/v1/search_enterprise',
  params: {q: 'CNN', lang: 'en', sort_by: 'relevancy', page: '1', media: 'True'},
  headers: {
    'X-RapidAPI-Key': 'e8ab5297camshdfbb47b9ac7d130p1efe56jsnddad2a502ad0',
    'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
  }
};
function Homepage() {
const [news,setNews] =useState([]);
const [isLoaded, setIsLoaded] = useState(false);
const [inputed,setInputed] = useState('');

const onChange = (e) => {
setInputed( e.target.value)
}



// Go through the data 
//locate the author
//target the content in an input


  useEffect(() => {
   axios.request(options).then(function (response) {
    setIsLoaded(true);
    
      setNews(response.data.articles)
    
      
    }).catch(function (error) {
      console.error(error);
    });

  },[])
     


  const newsElements = news.filter(newsss => {
    if (inputed === ''){
 return newsss;
   }else if (newsss.author.toLowerCase().includes(inputed.toLowerCase())){
     return newsss
   }
 } 
  ).map((newq) => {
    return <Body 
    value={newq.author}
    summary={newq.summary.slice(0,307)}
    key={newq._id}
    link={newq.link}
    />
  })
 // filter through articles and return anyone with the inputed author
 
  

  return (
    <div className='home-page'>
      <input type='text' placeholder='search by author' inputed={inputed} onChange={onChange} />
        
        
      <div>{ !isLoaded && <p>loading...</p>}</div> 
     
     
        
         


      
   
   <div>{newsElements}</div> 
    
      
 </div>
 
  );
}


export default Homepage;
