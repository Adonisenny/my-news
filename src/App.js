import Body from './Components/Body';
import {useEffect,useState} from 'react'
import './App.css'
import NavBar from './Components/NavBar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Contact from './Components/Contact';
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://newscatcher.p.rapidapi.com/v1/search_enterprise',
  params: {q: 'fashion', lang: 'en', sort_by: 'relevancy', page: '1', media: 'True'},
  headers: {
    'X-RapidAPI-Key': 'e8ab5297camshdfbb47b9ac7d130p1efe56jsnddad2a502ad0',
    'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
  }
};




function App() {
  const [news,setNews] =useState([]);
const [isLoaded, setIsLoaded] = useState(false);
const [inputed,setInputed] = useState('');
const onChange = (e) => {
  setInputed( e.target.value)
  }
  useEffect(() => {
    axios.request(options).then(function (response) {
     setIsLoaded(true);
     
       setNews(response.data.articles)
     
       
     }).catch(function (error) {
       console.error(error);
     });
 
   },[])
      
 
 
   const newsElements = news.filter(newq => {
     if (inputed === ''){
  return newq;
    }else if (newq.author.toLowerCase().includes(inputed.toLowerCase())){
      return newq
    }
  } 
   ).map((newq) => {
     return <Body 
     value={newq.author}
     summary={newq.summary.slice(0,500)}
     key={newq._id}
     link={newq.link}
     />
   })
  // filter through articles and return anyone with the inputed author
  
   
  
 

  return (
    <Router  >
       <div className="App">
        



        <div>{ !isLoaded && <p>loading...</p>}</div> 
       {isLoaded && <NavBar onChange={onChange} inputed={inputed}/>}
        <Switch>
       <Route exact path='/'>

       <div >{newsElements}</div> 
        </Route>
        <Route>
        <Contact path='/contact' />
        </Route>
       </Switch>
        
        
 </div>
 </Router> 




   


       
        
        
        
        
  );
}

export default App;
