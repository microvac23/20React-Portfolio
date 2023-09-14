import React from 'react';

export default function Project() {
  const imageStyle = {
    maxHeight: 200,
    maxWidth: 300
  }

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Projects Page</h1>
      <div className='row '>
      <ul className='col-lg-4 col-md-6 col-sm-6'>
        <li>Play Trade</li>
        <li style={{listStyleType:'none'}}>GitHub Link: <a href='https://github.com/Project2Team2/Play-Trade'>here</a></li>
        <li style={{listStyleType:'none'}}>Live Link: <a href='https://play-trade-3e0a6365bb54.herokuapp.com/login'>here</a></li>

        <img style={imageStyle} src='/images/play-trade.png' alt='play-trade website screenshot'></img>
      </ul>
      <ul className='col-lg-4 col-md-6 col-sm-6'>
        <li>Zen4You</li>
        <li style={{listStyleType:'none'}}>GitHub Link: <a href='https://github.com/Project01Team03/Zen4You'>here</a></li>
        <li style={{listStyleType:'none'}}>Live Link: <a href='https://project01team03.github.io/Zen4You/'>here</a></li>

        <img style={imageStyle} src='/images/zen4you.png' alt='zen4you website screenshot'></img>
      </ul>
      <ul className='col-lg-4 col-md-6 col-sm-6'>
        <li>Pet Posts</li>
        <li style={{listStyleType:'none'}}>GitHub Link: <a href='https://github.com/Project03Team04/Pet-Posts'>here</a></li>
        <li style={{listStyleType:'none'}}>Live Link: <a href='https://pure-bastion-75691-8de8d2af8e5c.herokuapp.com/'>here</a></li>

        <img style={imageStyle} src='/images/pet-posts.png' alt='pet posts website screenshot'></img>
      </ul>
      <ul className='col-lg-4 col-md-6 col-sm-6'>
        <li>E-Commerce Backend App</li>
        <li style={{listStyleType:'none'}}>GitHub Link: <a href='https://github.com/microvac23/13E-Commerce-Back-End'>here</a></li>

        <img style={imageStyle} src='/images/e-commerce.png' alt='e-commerce app screenshot'></img>
      </ul>
      <ul className='col-lg-4 col-md-6 col-sm-6'>
        <li>Weather Dashboard</li>
        <li style={{listStyleType:'none'}}>GitHub Link: <a href='https://github.com/microvac23/06Weather-Dashboard'>here</a></li>
        <li style={{listStyleType:'none'}}>Live Link: <a href='https://microvac23.github.io/06Weather-Dashboard/'>here</a></li>

        <img style={imageStyle} src='/images/weather-dashboard.png' alt='weather dashboard website screenshot'></img>
      </ul>
      <ul className='col-lg-4 col-md-6 col-sm-6'>
        <li>Text Editor App</li>
        <li style={{listStyleType:'none'}}>GitHub Link: <a href='https://github.com/microvac23/19Text-Editor'>here</a></li>
        <li style={{listStyleType:'none'}}>Live Link: <a href='https://obscure-stream-62783-6a8711a42e49.herokuapp.com/'>here</a></li>

        <img style={imageStyle} src='/images/jate.png' alt='text editor website screenshot'></img>
      </ul>
      
      </div>
    </div>
  );
}
