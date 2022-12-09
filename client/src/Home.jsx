import React from 'react'

function Home() {
  return (
    <>
    <p className='welcome'>
    Welcome to our Piano Application! Log in or create an account to access the Piano tab. <br></br>
     In the Piano tab users will be able to record songs using the piano, delete songs, and read comments.
     </p>
     <br></br>
     <img
        className="piano"
        src="https://imgs.classicfm.com/images/218395?crop=16_9&width=660&relax=1&signature=q7SbbezAL_Tgo3vNAh8Ef7mm1oU="
        alt="piano"
      />
    <div id="displaycards">
      <div class="ui cards">
        <div class="card">
          <div class="content">
            <div class="header">Adam Khodier</div>
            <div class="meta">Software Engineer</div>
            <img
              className="adam-pic"
              src="https://ca.slack-edge.com/T02MD9XTF-U040NP41CSZ-ef8b80c53d03-512"
              height={75}
              alt=""
            />
          </div>
        </div>
        <div class="card">
          <div class="content">
            <div class="header">Alexander Ju</div>
            <div class="meta">Software Engineer</div>
            <img
              className="alex-pic"
              src="https://ca.slack-edge.com/T02MD9XTF-U041VJ4NZ3M-48de262b0106-512"
              height={75}
              alt=""
            />
          </div>
        </div>
        <div class="card">
          <div class="content">
            <div class="header">Nills Svensson</div>
            <div class="meta">Software Engineer</div>
            <img
              className="nills-pic"
              src="https://ca.slack-edge.com/T02MD9XTF-U03TSA14JMA-50b5cee5b8a1-512"
              height={75}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
</>
  )
}

export default Home