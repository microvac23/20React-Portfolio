import React from 'react';

export default function About() {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>About Me</h1>
      <img style={{
        maxWidth: 200,
      }} alt='selfie' src='./images/selfie.jpg'></img>
      <p>
        Hello,<br></br>
        My name is Amadeus Machuca. I am 23 years old and currently transitioning into a career of fullstack web development. I have worked 6 years in the service industry and worked as a line cook, baker, pastry chef, and now a bartender. I always had an attraction towards computers and information science so I am currently in Northwestern's Fullstack Webdevelopment Bootcamp. I am expected to graduate in Sept 2023!

      </p>
    </div>
  );
}
