import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Search from './Search';
import axios from 'axios';
import Result from './Result';
import Detail from './Detail';

function App() {
const [state, setState]= useState({
  search: '',
  results: [],
  selected:{}
})


const handleInput=(event)=>{
      let search=event.target.value;
      setState((prevstate)=>{
        return {...prevstate, search: search}
      })
}
const openDetail = (id) =>{
  axios.get('https://www.omdbapi.com/?i=' + id + '&apikey=a640daba')
   .then(({data}) => {
    setState((prevState) => {return {...prevState, selected:data}})
   }).catch(err => console.log(err))
}

const searchResult=(event)=>{
  if(event.key=== "Enter"){
    axios
    .get('https://www.omdbapi.com/?i=tt3896198&apikey=a640daba'+'&s='+state.search)
    .then(res=> {
      setState(prevstate =>{
        return {...prevstate,results: res.data.Search};
      })
    })
    .catch(err=> console.log(err))
  }
}
 
 const close= ()=> {
   setState((prevState)=> {return {...prevState, selected:{}}});
 }


  return (
    <div className='w-100 main-wrapper d-flex flex-column align-item-center vh-100'>
     {typeof state.selected.Title != "undefined" ? <Detail selected={state.selected} close={close}/> : 



<header className='w-100 text-center text-white my-5'>
    <h2>Movie Search</h2>
    <Search handleInput={handleInput} searchResult={searchResult}/>
    <div className='container'>
        <div className='row'>
      {
        state.results.map((result, i)=> (

          <div className='col-12 col-sm-6 col-md-3 col-lg-3 my-2'>
               <Result result= {result} openDetail={openDetail}/>

          </div>
        ))
      }

        </div>

    </div>
</header>
 }
    </div>

    
  );
}

export default App;
