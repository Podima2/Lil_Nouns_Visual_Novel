/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
//import { pinata } from 'frog/hubs'
import { handle } from 'frog/vercel'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'

export const app = new Frog({
  basePath: '/api',
})

let REDanswered = false
let REDHelpM8 = false

let YELLOWanswered = false
let YELLOWHelpM8 = false

let BLUEanswered = false
let BLUEHelpM8 = false

app.frame('/', (c) => {
  return c.res({
    action: '/wakeup',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Welcome-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Next Page">LFG, start the novel</Button>,
    ],
  })
})

app.frame('/wakeup', (c) => {
  return c.res({
    action: '/glasses', 
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Noun_Waking_Up-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Next Page">Carpe Diem</Button>,
    ],
  })
})

app.frame('/glasses', (c) => {

  return c.res({
    action: '/glassesFork',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Glasses_Selection-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Next Page">Pick</Button>,
    ],
  })
})

app.frame('/glassesFork', (c) => {

  return c.res({
    action: '/interviewQ1',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/Glasses_Selection_fork-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Red">Red</Button>,
      <Button value="Yellow">Yellow</Button>,
      <Button value="Blue">Blue</Button>,
    ],
  })
})

app.frame('/interviewQ1', (c) => {      ////////// FROM GLASS FRAME COLOUR PICK TO INTERVIEW SETTING
  const { buttonValue } = c
  //console.log(c)

    if (buttonValue === 'Red') {
      return c.res({
        action: '/RedInterviewA1',
        image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/RedInterviewQ1-min.png`,
        imageAspectRatio: '1:1',
        intents: [
          <Button value=">$100">0-$100</Button>,
          <Button value="$100-$1k">$100-$1k</Button>,
          <Button value="$1k-$100k">$1k-$100k</Button>,
          <Button value="$100k-$1m">$100k-$1m</Button>,
        ],
      })
    }

    if (buttonValue === 'Yellow') {
      return c.res({
        action: '/YellowInterviewA1',
        image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/YellowInterviewQ1-min.png`,
        imageAspectRatio: '1:1',
        intents: [
          <Button value=">$100">0-$100</Button>,
          <Button value="$100-$1k">$100-$1k</Button>,
          <Button value="$1k-$100k">$1k-$100k</Button>,
          <Button value="$100k-$1m">$100k-$1m</Button>,
        ],
      })
    }

    if (buttonValue === 'Blue') {
      return c.res({
        action: '/BlueInterviewA1',
        image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/BlueInterviewQ1-min.png`,
        imageAspectRatio: '1:1',
        intents: [
          <Button value=">$100">0-$100</Button>,
          <Button value="$100-$1k">$100-$1k</Button>,
          <Button value="$1k-$100k">$1k-$100k</Button>,
          <Button value="$100k-$1m">$100k-$1m</Button>,
        ],
      })
    }

  return c.res({
    action: '/meme/b',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmPMSujcSGpRL2GySfSwyQU6G3i8eiycQRdv7b4gp7UheF/3.png`,
    imageAspectRatio: '1:1',
    intents: [
      <TextInput placeholder="Text" />,
      <Button value="generate">Generate</Button>,
    ],
  })
})

app.frame('/RedInterviewA1', (c) => {   ////////// RED INTERVIEW ANSWER 1
  const { buttonValue } = c

  if (buttonValue != '$100k-$1m') {
    return c.res({
      action: '/interviewQ1',
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Try_Again-min.png`,
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Red">Try again</Button>,
      ],
    })
  }

  return c.res({
    action: '/RedInterviewQ2',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/RedInterviewA1-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Next Question">Next Question</Button>,
    ],
  })

})

app.frame('/RedInterviewQ2', (c) => {   ////////// RED INTERVIEW QUESTION 2
  const { buttonValue } = c

  return c.res({
    action: '/RedInterviewA2',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/RedInterviewQ2-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="0-5">0-5</Button>,
      <Button value="5-10">6-15</Button>,
      <Button value="16-30">16-30</Button>,
      <Button value="31-50">31-50</Button>,
    ],
  })

})

app.frame('/RedInterviewA2', (c) => {   ////////// RED INTERVIEW ANSWER 2
  const { buttonValue } = c

  if (buttonValue != '16-30') {
    return c.res({
      action: '/RedInterviewQ2',
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Try_Again-min.png`,
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Red">Try again</Button>,
      ],
    })
  }

  return c.res({
    action: '/RedPhoneCallInterruption',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/RedInterviewA2-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Next Question">Next Question</Button>,
    ],
  })

})

app.frame('/RedPhoneCallInterruption', (c) => {    ////////// PhoneCallInterruption, Answer or Ignore
  const { buttonValue } = c

  return c.res({
    action: '/RedPhoneCallFork',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Interview_PhoneCall_Interruption-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Ignore Call">Ignore</Button>,
      <Button value="Answer Call">Check Message</Button>,
    ],
  })

})

app.frame('/RedPhoneCallFork', (c) => {    ////////// Red branch PhoneCall redirect, [Help or Don't help] OR redinterviewQ3
  const { buttonValue } = c

  if (buttonValue === 'Answer Call') {  /////// PHONECALL DECISION
    REDanswered = true
    return c.res({
      action: '/RedPhoneCallFinish', //////////////////////// needs text to explain help or dont help decision (have incoming text from jess asking for help with her job)
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/ToHelpOrNotToHelp_0-min.png`, 
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Help the lil noun">Help the lil noun</Button>,
        <Button value="Make an excuse">Make an excuse</Button>,
      ],
    })
  }

  return c.res({          /////// THIS WOULD BE REDINTERVIEWQ3 BUT ITS INTEGRATED
    action: '/RedInterviewA3',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/RedInterviewQ3-min.png`,    imageAspectRatio: '1:1',
    intents: [
      <Button value="0-$500K">0-$500K</Button>,
      <Button value="$500K-$1M">$500K-$1M</Button>,
      <Button value="$1M-$5M">$1M-$5M</Button>,
      <Button value="$5M-$10M">$5M-$10M</Button>,
    ]
  })

})

app.frame('/RedPhoneCallFinish', (c) => {   ////////// RED INTERVIEW FINISH PHONECALL AND GET BACK TO INTERVIEW
  const { buttonValue } = c

  if (buttonValue === 'Help the lil noun') {
    REDHelpM8 = true
    console.log("Woah", REDHelpM8)
  }
  console.log(REDHelpM8)
  
  return c.res({
    action: '/RedInterviewQ3',              ///////// HERE SHOULD BE THE APOLOGY IMAGE "SORRY FOR THAT INTERRUPTION"
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/PostAnswer-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Continue Interview">LmaoMYOBdnaman Continue Interview</Button>,
    ],
  })

})

app.frame('/RedInterviewQ3', (c) => {   ////////// RED INTERVIEW QUESTION 3 POST PHONECALL INTERRUPTION ANSWER
  const { buttonValue } = c
  
  return c.res({          
    action: '/RedInterviewA3',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/RedInterviewQ3-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="0-$500K">0-$500K</Button>,
      <Button value="$500K-$1M">$500K-$1M</Button>,
      <Button value="$1M-$5M">$1M-$5M</Button>,
      <Button value="$5M-$10M">$5M-$10M</Button>,
    ]
  })

})

app.frame('/RedInterviewA3', (c) => {   ////////// RED INTERVIEW ANSWER 3
  const { buttonValue } = c
  
  if (buttonValue != '$1M-$5M') {
    return c.res({
      action: '/RedInterviewQ3',
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Try_Again-min.png`,
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Red">Try again</Button>,
      ],
    })
  }

  return c.res({
    action: '/RedInterviewQ4',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/RedInterviewA3-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Next Question">Next Question</Button>,
    ],
  })

})

app.frame('/RedInterviewQ4', (c) => {   ////////// RED INTERVIEW QUESTION 4
  const { buttonValue } = c
  
  return c.res({          
    action: '/RedInterviewA4',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/RedInterviewQ4-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <TextInput placeholder="Use 2nd Apr 2024 as reference" />,
      <Button value="0-50">0-50</Button>,
      <Button value="51-100">51-100</Button>,
      <Button value="100-1000">100-1000</Button>,
      <Button value="1k-10k">1k-10k</Button>,
    ]
  })

})

app.frame('/RedInterviewA4', (c) => {   ////////// RED INTERVIEW ANSWER 4
  const { buttonValue } = c
  
  if (buttonValue != '1k-10k') {
    return c.res({
      action: '/RedInterviewQ4',
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Try_Again-min.png`,
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Red">Try again</Button>,
      ],
    })
  }

  return c.res({
    action: '/RedFinishInterview',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/RedInterviewA4-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Finish Interview">Finish Interview</Button>,
    ],
  })

})

app.frame('/RedFinishInterview', (c) => {   ////////// RED finish interview + Go art gallery for sightseeing or call back friend
  const { buttonValue } = c
  
  if (REDanswered === true){           /////// if you answered the call 
    console.log("REDanswered", REDanswered)
    if (REDHelpM8 === true ) {        ////// if you agreed to help
      console.log("REDHelpM8",REDHelpM8)
      return c.res({
        action: '/RedGalleryArrival_WITHFRIEND',      ////////// i think jess is hosting here
        image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/Red_Interview_Gallery_Limbo-min.png`,
        imageAspectRatio: '1:1',
        intents: [
          <Button value="Enter Gallery">Enter Gallery</Button>,
        ],
      })
    }

    return c.res({                    /////// if you answered but declined to help, go to nearby art gallery for sightseeing, no job, no friend
      action: '/RedGalleryArrival_NOFRIEND',
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/RedMayAswellGo-min.png`, 
      imageAspectRatio: '1:1',
      intents: [
        <Button value="May as well go">May as well go</Button>,
      ],
    })

    }

  return c.res({      //////// if you ignored the call, this gives the option to call back your friend
    action: '/RedCallback',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/ToCallOrNotToCall-min.png`, 
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Call Friend Back">Call Friend Back</Button>,
      <Button value="Dont call Friend Back">Go sightseeing</Button>,
    ]
  })

})

app.frame('/RedCallback', (c) => {    //////////  call back after interview, [call back and decide] OR [Don't call and go Gallery] 
  const { buttonValue } = c

  if (buttonValue === 'Call Friend Back') {  /////// callback phonecall DECISION
    return c.res({
      action: '/RedPhoneCallForkPOSTINTERVIEW',
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/ToHelpOrNotToHelp-min.png`,       //////////////////////// needs text to explain help or dont help decision (have incoming text from jess asking for help with her job)
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Help the lil noun">Help the lil noun</Button>,
        <Button value="Make an excuse">Make an excuse</Button>,
      ],
    })   
  }

  return c.res({                            /////// red, ignored call during interview and chose to not call back after
    action: '/RedGalleryArrival_NOFRIEND',  /////// Should be equivalent to "May As Well Go"
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/RedMayAswellGo-min.png`,  
    imageAspectRatio: '1:1',
    intents: [
      <Button value="May as well go">May as well go</Button>,
    ],
  })

})

app.frame('/RedPhoneCallForkPOSTINTERVIEW', (c) => {     
  const { buttonValue } = c

  if (buttonValue === 'Help the lil noun') {  
    return c.res({
      action: '/RedGalleryArrival_WITHFRIEND',      ////////// i think jess is hosting here
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/Red_Interview_Gallery_Limbo-min.png`,
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Enter Gallery">Enter Gallery</Button>,
      ],
    })
  }

  return c.res({                  //////// red, ignored call during interview, call back after but rejected to help friend
    action: '/RedGalleryDecision_NOFRIEND',     ////// Should be equivalent to "May As Well Go"
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/RedMayAswellGo-min.png`, ////////////////////////////////////////  Replace with Solarpunk sidewalk picture 
    imageAspectRatio: '1:1',
    intents: [
      <Button value="May as well go">May as well go</Button>,
    ],
  })

})

app.frame('/RedGalleryArrival_NOFRIEND', (c) => {    ////////// Continues to missing display room
  const { buttonValue } = c

  return c.res({
    action: '/RedGalleryArrivalContinueBrowsing_NOFRIEND',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/RedGalleryArrival-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Continue Browsing">Continue Browsing</Button>,
    ],
  })

})

app.frame('/RedGalleryArrival_WITHFRIEND', (c) => {    ////////// Continues to missing display room
  const { buttonValue } = c

  return c.res({
    action: '/RedGalleryArrivalContinueBrowsing_WITHFRIEND',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/RedGalleryArrival-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Continue Browsing">Continue Browsing</Button>,
    ],
  })

})

app.frame('/RedGalleryArrivalContinueBrowsing_NOFRIEND', (c) => {    ////////// Goes to backroom with stranger
  const { buttonValue } = c

  return c.res({
    action: '/RedGalleryDecision_NOFRIEND',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/Red_GalleryHelpUnknown-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Help Gallery Decision">Help Gallery Decision</Button>,
    ],
  })

})

app.frame('/RedGalleryArrivalContinueBrowsing_WITHFRIEND', (c) => {    ////////// Goes to backroom with Jess
  const { buttonValue } = c

  return c.res({
    action: '/RedGalleryDecision_WITHFRIEND',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/Red_GalleryHelpFriend-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Help Gallery Decision">Help Gallery Decision</Button>,
    ],
  })

})

app.frame('/RedGalleryDecision_NOFRIEND', (c) => {    ////////// Presented with the display choice from stranger
  const { buttonValue } = c

  return c.res({
    action: '/Red_Final_No_Friend',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/Red_PaintPickSTRANGER-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <TextInput placeholder="Use 2nd Apr 2024 as reference" />,
      <Button value="A">A</Button>,
      <Button value="B">B</Button>,
      <Button value="C">C</Button>,
    ],
  })

})

app.frame('/RedGalleryDecision_WITHFRIEND', (c) => {    ////////// Presented with the display choice from jess
  const { buttonValue } = c

  return c.res({
    action: '/Red_Final_With_Friend',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/Red_PaintPickFriend-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <TextInput placeholder="Use 2nd Apr 2024 as reference" />,
      <Button value="A">A</Button>,
      <Button value="B">B</Button>,
      <Button value="C">C</Button>,
    ],
  })

})

app.frame('/Red_Final_No_Friend', (c) => {     
  const { buttonValue } = c

  if (buttonValue != 'C') {  
    return c.res({
      action: '/RedGalleryDecision_NOFRIEND',      ////////// 
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Try_Again-min.png`,
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Try Again">Try Again</Button>,
      ],
    })
  }

  if(REDanswered === true){ 

    return c.res({                    //////// Red, no friend, no job
      //action: '/Red_Pre_Ending_No_Friend',      
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Red_Stranger_NoJob-min.png`, ////////////////////////////////////////  Replace with Solarpunk sidewalk picture 
      imageAspectRatio: '1:1',
      // intents: [
      //   <Button value="nofriend">Finish Visual Novel</Button>,
      // ],
    })

  }

  return c.res({                    //////// Red, no friend, job
    //action: '/Red_Pre_Ending_No_Friend',      
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Red_Stranger_Job-min.png`, ////////////////////////////////////////  Replace with Solarpunk sidewalk picture 
    imageAspectRatio: '1:1',
    // intents: [
    //   <Button value="nofriend">Finish Visual Novel</Button>,
    // ],
  })

})

app.frame('/Red_Final_With_Friend', (c) => {     
  const { buttonValue } = c

  if (buttonValue != 'C') {  
    return c.res({
      action: '/RedGalleryDecision_WITHFRIEND',      ////////// 
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Try_Again-min.png`,
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Try Again">Try Again</Button>,
      ],
    })
  }

  if(REDanswered === true){ 

    return c.res({                    //////// Red, friend, no job
      //action: '/Red_Pre_Ending_No_Friend',      
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Red_Friend_NoJob-min.png`, ////////////////////////////////////////  Replace with Solarpunk sidewalk picture 
      imageAspectRatio: '1:1',
      // intents: [
      //   <Button value="nofriend">Finish Visual Novel</Button>,
      // ],
    })

  }

  return c.res({                    //////// Red, friend, job
    //action: '/Red_Pre_Ending_No_Friend',      
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Red_Friend_Job-min.png`, ////////////////////////////////////////  Replace with Solarpunk sidewalk picture 
    imageAspectRatio: '1:1',
    // intents: [
    //   <Button value="nofriend">Finish Visual Novel</Button>,
    // ],
  })
})


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Yellow////Yellow////Yellow////Yellow////Yellow////Yellow////Yellow////Yellow////Yellow////Yellow////Yellow////Yellow////Yellow////Yellow////Yellow//


app.frame('/YellowInterviewA1', (c) => {   ////////// Yellow INTERVIEW ANSWER 1
  const { buttonValue } = c

  if (buttonValue != '$100k-$1m') {
    return c.res({
      action: '/interviewQ1',
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Try_Again-min.png`,
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Yellow">Try again</Button>,
      ],
    })
  }

  return c.res({
    action: '/YellowInterviewQ2',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/YellowInterviewA1-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Next Question">Next Question</Button>,
    ],
  })

})

app.frame('/YellowInterviewQ2', (c) => {   ////////// Yellow INTERVIEW QUESTION 2
  const { buttonValue } = c

  return c.res({
    action: '/YellowInterviewA2',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/YellowInterviewQ2-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="0-5">0-5</Button>,
      <Button value="5-10">6-15</Button>,
      <Button value="16-30">16-30</Button>,
      <Button value="31-50">31-50</Button>,
    ],
  })

})

app.frame('/YellowInterviewA2', (c) => {   ////////// Yellow INTERVIEW ANSWER 2
  const { buttonValue } = c

  if (buttonValue != '16-30') {
    return c.res({
      action: '/YellowInterviewQ2',
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Try_Again-min.png`,
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Yellow">Try again</Button>,
      ],
    })
  }

  return c.res({
    action: '/YellowPhoneCallInterruption',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/YellowInterviewA2-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Next Question">Next Question</Button>,
    ],
  })

})

app.frame('/YellowPhoneCallInterruption', (c) => {    ////////// PhoneCallInterruption, Answer or Ignore
  const { buttonValue } = c

  return c.res({
    action: '/YellowPhoneCallFork',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Interview_PhoneCall_Interruption-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Ignore Call">Ignore</Button>,
      <Button value="Answer Call">Check Message</Button>,
    ],
  })

})

app.frame('/YellowPhoneCallFork', (c) => {    ////////// Yellow branch PhoneCall redirect, [Help or Don't help] OR YellowinterviewQ3
  const { buttonValue } = c

  if (buttonValue === 'Answer Call') {  /////// PHONECALL DECISION
    YELLOWanswered = true
    return c.res({
      action: '/YellowPhoneCallFinish', //////////////////////// needs text to explain help or dont help decision (have incoming text from jess asking for help with her job)
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/ToHelpOrNotToHelp_0-min.png`, 
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Help the lil noun">Help the lil noun</Button>,
        <Button value="Make an excuse">Make an excuse</Button>,
      ],
    })
  }

  return c.res({          /////// THIS WOULD BE YellowINTERVIEWQ3 BUT ITS INTEGRATED
    action: '/YellowInterviewA3',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/YellowInterviewQ3-min.png`,    imageAspectRatio: '1:1',
    intents: [
      <Button value="0-$500K">0-$500K</Button>,
      <Button value="$500K-$1M">$500K-$1M</Button>,
      <Button value="$1M-$5M">$1M-$5M</Button>,
      <Button value="$5M-$10M">$5M-$10M</Button>,
    ]
  })

})

app.frame('/YellowPhoneCallFinish', (c) => {   ////////// Yellow INTERVIEW FINISH PHONECALL AND GET BACK TO INTERVIEW
  const { buttonValue } = c

  if (buttonValue === 'Help the lil noun') {
    YELLOWHelpM8 = true
    console.log("Woah", YELLOWHelpM8)
  }
  console.log(YELLOWHelpM8)
  
  return c.res({
    action: '/YellowInterviewQ3',              ///////// HERE SHOULD BE THE APOLOGY IMAGE "SORRY FOR THAT INTERRUPTION"
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/PostAnswer-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Continue Interview">LmaoMYOBdnaman Continue Interview</Button>,
    ],
  })

})

app.frame('/YellowInterviewQ3', (c) => {   ////////// Yellow INTERVIEW QUESTION 3 POST PHONECALL INTERRUPTION ANSWER
  const { buttonValue } = c
  
  return c.res({          
    action: '/YellowInterviewA3',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/YellowInterviewQ3-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="0-$500K">0-$500K</Button>,
      <Button value="$500K-$1M">$500K-$1M</Button>,
      <Button value="$1M-$5M">$1M-$5M</Button>,
      <Button value="$5M-$10M">$5M-$10M</Button>,
    ]
  })

})

app.frame('/YellowInterviewA3', (c) => {   ////////// Yellow INTERVIEW ANSWER 3
  const { buttonValue } = c
  
  if (buttonValue != '$1M-$5M') {
    return c.res({
      action: '/YellowInterviewQ3',
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Try_Again-min.png`,
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Yellow">Try again</Button>,
      ],
    })
  }

  return c.res({
    action: '/YellowInterviewQ4',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/YellowInterviewA3-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Next Question">Next Question</Button>,
    ],
  })

})

app.frame('/YellowInterviewQ4', (c) => {   ////////// Yellow INTERVIEW QUESTION 4
  const { buttonValue } = c
  
  return c.res({          
    action: '/YellowInterviewA4',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/YellowInterviewQ4-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <TextInput placeholder="Use 2nd Apr 2024 as reference" />,
      <Button value="0-50">0-50</Button>,
      <Button value="51-100">51-100</Button>,
      <Button value="100-1000">100-1000</Button>,
      <Button value="1k-10k">1k-10k</Button>,
    ]
  })

})

app.frame('/YellowInterviewA4', (c) => {   ////////// Yellow INTERVIEW ANSWER 4
  const { buttonValue } = c
  
  if (buttonValue != '1k-10k') {
    return c.res({
      action: '/YellowInterviewQ4',
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Try_Again-min.png`,
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Yellow">Try again</Button>,
      ],
    })
  }

  return c.res({
    action: '/YellowFinishInterview',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/YellowInterviewA4-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Finish Interview">Finish Interview</Button>,
    ],
  })

})

app.frame('/YellowFinishInterview', (c) => {   ////////// Yellow finish interview + Go art gallery for sightseeing or call back friend
  const { buttonValue } = c
  
  if (YELLOWanswered === true){           /////// if you answered the call 
    console.log("YELLOWanswered", YELLOWanswered)
    if (YELLOWHelpM8 === true ) {        ////// if you agreed to help
      console.log("YELLOWHelpM8",YELLOWHelpM8)
      return c.res({
        action: '/YellowGalleryArrival_WITHFRIEND',      ////////// i think jess is hosting here
        image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/Yellow_Interview_Gallery_Limbo-min.png`,
        imageAspectRatio: '1:1',
        intents: [
          <Button value="Enter Gallery">Enter Gallery</Button>,
        ],
      })
    }

    return c.res({                    /////// if you answered but declined to help, go to nearby art gallery for sightseeing, no job, no friend
      action: '/YellowGalleryArrival_NOFRIEND',
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/YellowMayAswellGo-min.png`, 
      imageAspectRatio: '1:1',
      intents: [
        <Button value="May as well go">May as well go</Button>,
      ],
    })

    }

  return c.res({      //////// if you ignored the call, this gives the option to call back your friend
    action: '/YellowCallback',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/ToCallOrNotToCall-min.png`, 
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Call Friend Back">Call Friend Back</Button>,
      <Button value="Dont call Friend Back">Go sightseeing</Button>,
    ]
  })

})

app.frame('/YellowCallback', (c) => {    //////////  call back after interview, [call back and decide] OR [Don't call and go Gallery] 
  const { buttonValue } = c

  if (buttonValue === 'Call Friend Back') {  /////// callback phonecall DECISION
    return c.res({
      action: '/YellowPhoneCallForkPOSTINTERVIEW',
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/ToHelpOrNotToHelp-min.png`,       //////////////////////// needs text to explain help or dont help decision (have incoming text from jess asking for help with her job)
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Help the lil noun">Help the lil noun</Button>,
        <Button value="Make an excuse">Make an excuse</Button>,
      ],
    })   
  }

  return c.res({                            /////// Yellow, ignored call during interview and chose to not call back after
    action: '/YellowGalleryArrival_NOFRIEND',  /////// Should be equivalent to "May As Well Go"
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/YellowMayAswellGo-min.png`,  
    imageAspectRatio: '1:1',
    intents: [
      <Button value="May as well go">May as well go</Button>,
    ],
  })

})

app.frame('/YellowPhoneCallForkPOSTINTERVIEW', (c) => {     
  const { buttonValue } = c

  if (buttonValue === 'Help the lil noun') {  
    return c.res({
      action: '/YellowGalleryArrival_WITHFRIEND',      ////////// i think jess is hosting here
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/Yellow_Interview_Gallery_Limbo-min.png`,
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Enter Gallery">Enter Gallery</Button>,
      ],
    })
  }

  return c.res({                  //////// Yellow, ignored call during interview, call back after but rejected to help friend
    action: '/YellowGalleryDecision_NOFRIEND',     ////// Should be equivalent to "May As Well Go"
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/YellowMayAswellGo-min.png`, ////////////////////////////////////////  Replace with Solarpunk sidewalk picture 
    imageAspectRatio: '1:1',
    intents: [
      <Button value="May as well go">May as well go</Button>,
    ],
  })

})

app.frame('/YellowGalleryArrival_NOFRIEND', (c) => {    ////////// Continues to missing display room
  const { buttonValue } = c

  return c.res({
    action: '/YellowGalleryArrivalContinueBrowsing_NOFRIEND',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/YellowGalleryArrival-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Continue Browsing">Continue Browsing</Button>,
    ],
  })

})

app.frame('/YellowGalleryArrival_WITHFRIEND', (c) => {    ////////// Continues to missing display room
  const { buttonValue } = c

  return c.res({
    action: '/YellowGalleryArrivalContinueBrowsing_WITHFRIEND',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/YellowGalleryArrival-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Continue Browsing">Continue Browsing</Button>,
    ],
  })

})

app.frame('/YellowGalleryArrivalContinueBrowsing_NOFRIEND', (c) => {    ////////// Goes to backroom with stranger
  const { buttonValue } = c

  return c.res({
    action: '/YellowGalleryDecision_NOFRIEND',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/Yellow_GalleryHelpUnknown-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Help Gallery Decision">Help Gallery Decision</Button>,
    ],
  })

})

app.frame('/YellowGalleryArrivalContinueBrowsing_WITHFRIEND', (c) => {    ////////// Goes to backroom with Jess
  const { buttonValue } = c

  return c.res({
    action: '/YellowGalleryDecision_WITHFRIEND',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/Yellow_GalleryHelpFriend-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Help Gallery Decision">Help Gallery Decision</Button>,
    ],
  })

})

app.frame('/YellowGalleryDecision_NOFRIEND', (c) => {    ////////// Presented with the display choice from stranger
  const { buttonValue } = c

  return c.res({
    action: '/Yellow_Final_No_Friend',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/Yellow_PaintPickSTRANGER-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <TextInput placeholder="Use 2nd Apr 2024 as reference" />,
      <Button value="A">A</Button>,
      <Button value="B">B</Button>,
      <Button value="C">C</Button>,
    ],
  })

})

app.frame('/YellowGalleryDecision_WITHFRIEND', (c) => {    ////////// Presented with the display choice from jess
  const { buttonValue } = c

  return c.res({
    action: '/Yellow_Final_With_Friend',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/Yellow_PaintPickFriend-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <TextInput placeholder="Use 2nd Apr 2024 as reference" />,
      <Button value="A">A</Button>,
      <Button value="B">B</Button>,
      <Button value="C">C</Button>,
    ],
  })

})

app.frame('/Yellow_Final_No_Friend', (c) => {     
  const { buttonValue } = c

  if (buttonValue != 'C') {  
    return c.res({
      action: '/YellowGalleryDecision_NOFRIEND',      ////////// 
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Try_Again-min.png`,
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Try Again">Try Again</Button>,
      ],
    })
  }

  if(YELLOWanswered === true){ 

    return c.res({                    //////// Yellow, no friend, no job
      //action: '/Yellow_Pre_Ending_No_Friend',      
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Yellow_Stranger_NoJob-min.png`, ////////////////////////////////////////  Replace with Solarpunk sidewalk picture 
      imageAspectRatio: '1:1',
      // intents: [
      //   <Button value="nofriend">Finish Visual Novel</Button>,
      // ],
    })

  }

  return c.res({                    //////// Yellow, no friend, job
    //action: '/Yellow_Pre_Ending_No_Friend',      
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Yellow_Stranger_Job-min.png`, ////////////////////////////////////////  Replace with Solarpunk sidewalk picture 
    imageAspectRatio: '1:1',
    // intents: [
    //   <Button value="nofriend">Finish Visual Novel</Button>,
    // ],
  })

})

app.frame('/Yellow_Final_With_Friend', (c) => {     
  const { buttonValue } = c

  if (buttonValue != 'C') {  
    return c.res({
      action: '/YellowGalleryDecision_WITHFRIEND',      ////////// 
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Try_Again-min.png`,
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Try Again">Try Again</Button>,
      ],
    })
  }

  if(YELLOWanswered === true){ 

    return c.res({                    //////// Yellow, friend, no job
      //action: '/Yellow_Pre_Ending_No_Friend',      
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Yellow_Friend_NoJob-min.png`, ////////////////////////////////////////  Replace with Solarpunk sidewalk picture 
      imageAspectRatio: '1:1',
      // intents: [
      //   <Button value="nofriend">Finish Visual Novel</Button>,
      // ],
    })

  }

  return c.res({                    //////// Yellow, friend, job
    //action: '/Yellow_Pre_Ending_No_Friend',      
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Yellow_Friend_Job-min.png`, ////////////////////////////////////////  Replace with Solarpunk sidewalk picture 
    imageAspectRatio: '1:1',
    // intents: [
    //   <Button value="nofriend">Finish Visual Novel</Button>,
    // ],
  })
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Blue////Blue////Blue////Blue////Blue////Blue////Blue////Blue////Blue////Blue////Blue////Blue////Blue////Blue////Blue////Blue////Blue////Blue////Blue//


app.frame('/BlueInterviewA1', (c) => {   ////////// Blue INTERVIEW ANSWER 1
  const { buttonValue } = c

  if (buttonValue != '$100k-$1m') {
    return c.res({
      action: '/interviewQ1',
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Try_Again-min.png`,
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Blue">Try again</Button>,
      ],
    })
  }

  return c.res({
    action: '/BlueInterviewQ2',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/BlueInterviewA1-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Next Question">Next Question</Button>,
    ],
  })

})

app.frame('/BlueInterviewQ2', (c) => {   ////////// Blue INTERVIEW QUESTION 2
  const { buttonValue } = c

  return c.res({
    action: '/BlueInterviewA2',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/BlueInterviewQ2-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="0-5">0-5</Button>,
      <Button value="5-10">6-15</Button>,
      <Button value="16-30">16-30</Button>,
      <Button value="31-50">31-50</Button>,
    ],
  })

})

app.frame('/BlueInterviewA2', (c) => {   ////////// Blue INTERVIEW ANSWER 2
  const { buttonValue } = c

  if (buttonValue != '16-30') {
    return c.res({
      action: '/BlueInterviewQ2',
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Try_Again-min.png`,
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Blue">Try again</Button>,
      ],
    })
  }

  return c.res({
    action: '/BluePhoneCallInterruption',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/BlueInterviewA2-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Next Question">Next Question</Button>,
    ],
  })

})

app.frame('/BluePhoneCallInterruption', (c) => {    ////////// PhoneCallInterruption, Answer or Ignore
  const { buttonValue } = c

  return c.res({
    action: '/BluePhoneCallFork',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Interview_PhoneCall_Interruption-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Ignore Call">Ignore</Button>,
      <Button value="Answer Call">Check Message</Button>,
    ],
  })

})

app.frame('/BluePhoneCallFork', (c) => {    ////////// Blue branch PhoneCall redirect, [Help or Don't help] OR BlueinterviewQ3
  const { buttonValue } = c

  if (buttonValue === 'Answer Call') {  /////// PHONECALL DECISION
    BLUEanswered = true
    return c.res({
      action: '/BluePhoneCallFinish', //////////////////////// needs text to explain help or dont help decision (have incoming text from jess asking for help with her job)
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/ToHelpOrNotToHelp_0-min.png`, 
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Help the lil noun">Help the lil noun</Button>,
        <Button value="Make an excuse">Make an excuse</Button>,
      ],
    })
  }

  return c.res({          /////// THIS WOULD BE BlueINTERVIEWQ3 BUT ITS INTEGRATED
    action: '/BlueInterviewA3',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/BlueInterviewQ3-min.png`,    imageAspectRatio: '1:1',
    intents: [
      <Button value="0-$500K">0-$500K</Button>,
      <Button value="$500K-$1M">$500K-$1M</Button>,
      <Button value="$1M-$5M">$1M-$5M</Button>,
      <Button value="$5M-$10M">$5M-$10M</Button>,
    ]
  })

})

app.frame('/BluePhoneCallFinish', (c) => {   ////////// Blue INTERVIEW FINISH PHONECALL AND GET BACK TO INTERVIEW
  const { buttonValue } = c

  if (buttonValue === 'Help the lil noun') {
    BLUEHelpM8 = true
    console.log("Woah", BLUEHelpM8)
  }
  console.log(BLUEHelpM8)
  
  return c.res({
    action: '/BlueInterviewQ3',              ///////// HERE SHOULD BE THE APOLOGY IMAGE "SORRY FOR THAT INTERRUPTION"
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/PostAnswer-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Continue Interview">LmaoMYOBdnaman Continue Interview</Button>,
    ],
  })

})

app.frame('/BlueInterviewQ3', (c) => {   ////////// Blue INTERVIEW QUESTION 3 POST PHONECALL INTERRUPTION ANSWER
  const { buttonValue } = c
  
  return c.res({          
    action: '/BlueInterviewA3',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/BlueInterviewQ3-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="0-$500K">0-$500K</Button>,
      <Button value="$500K-$1M">$500K-$1M</Button>,
      <Button value="$1M-$5M">$1M-$5M</Button>,
      <Button value="$5M-$10M">$5M-$10M</Button>,
    ]
  })

})

app.frame('/BlueInterviewA3', (c) => {   ////////// Blue INTERVIEW ANSWER 3
  const { buttonValue } = c
  
  if (buttonValue != '$1M-$5M') {
    return c.res({
      action: '/BlueInterviewQ3',
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Try_Again-min.png`,
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Blue">Try again</Button>,
      ],
    })
  }

  return c.res({
    action: '/BlueInterviewQ4',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/BlueInterviewA3-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Next Question">Next Question</Button>,
    ],
  })

})

app.frame('/BlueInterviewQ4', (c) => {   ////////// Blue INTERVIEW QUESTION 4
  const { buttonValue } = c
  
  return c.res({          
    action: '/BlueInterviewA4',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/BlueInterviewQ4-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <TextInput placeholder="Use 2nd Apr 2024 as reference" />,
      <Button value="0-50">0-50</Button>,
      <Button value="51-100">51-100</Button>,
      <Button value="100-1000">100-1000</Button>,
      <Button value="1k-10k">1k-10k</Button>,
    ]
  })

})

app.frame('/BlueInterviewA4', (c) => {   ////////// Blue INTERVIEW ANSWER 4
  const { buttonValue } = c
  
  if (buttonValue != '1k-10k') {
    return c.res({
      action: '/BlueInterviewQ4',
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Try_Again-min.png`,
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Blue">Try again</Button>,
      ],
    })
  }

  return c.res({
    action: '/BlueFinishInterview',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/BlueInterviewA4-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Finish Interview">Finish Interview</Button>,
    ],
  })

})

app.frame('/BlueFinishInterview', (c) => {   ////////// Blue finish interview + Go art gallery for sightseeing or call back friend
  const { buttonValue } = c
  
  if (BLUEanswered === true){           /////// if you answered the call 
    console.log("BLUEanswered", BLUEanswered)
    if (BLUEHelpM8 === true ) {        ////// if you agreed to help
      console.log("BLUEHelpM8",BLUEHelpM8)
      return c.res({
        action: '/BlueGalleryArrival_WITHFRIEND',      ////////// i think jess is hosting here
        image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/Blue_Interview_Gallery_Limbo-min.png`,
        imageAspectRatio: '1:1',
        intents: [
          <Button value="Enter Gallery">Enter Gallery</Button>,
        ],
      })
    }

    return c.res({                    /////// if you answered but declined to help, go to nearby art gallery for sightseeing, no job, no friend
      action: '/BlueGalleryArrival_NOFRIEND',
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/BlueMayAswellGo-min.png`, 
      imageAspectRatio: '1:1',
      intents: [
        <Button value="May as well go">May as well go</Button>,
      ],
    })

    }

  return c.res({      //////// if you ignored the call, this gives the option to call back your friend
    action: '/BlueCallback',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/ToCallOrNotToCall-min.png`, 
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Call Friend Back">Call Friend Back</Button>,
      <Button value="Dont call Friend Back">Go sightseeing</Button>,
    ]
  })

})

app.frame('/BlueCallback', (c) => {    //////////  call back after interview, [call back and decide] OR [Don't call and go Gallery] 
  const { buttonValue } = c

  if (buttonValue === 'Call Friend Back') {  /////// callback phonecall DECISION
    return c.res({
      action: '/BluePhoneCallForkPOSTINTERVIEW',
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/ToHelpOrNotToHelp-min.png`,       //////////////////////// needs text to explain help or dont help decision (have incoming text from jess asking for help with her job)
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Help the lil noun">Help the lil noun</Button>,
        <Button value="Make an excuse">Make an excuse</Button>,
      ],
    })   
  }

  return c.res({                            /////// Blue, ignored call during interview and chose to not call back after
    action: '/BlueGalleryArrival_NOFRIEND',  /////// Should be equivalent to "May As Well Go"
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/BlueMayAswellGo-min.png`,  
    imageAspectRatio: '1:1',
    intents: [
      <Button value="May as well go">May as well go</Button>,
    ],
  })

})

app.frame('/BluePhoneCallForkPOSTINTERVIEW', (c) => {     
  const { buttonValue } = c

  if (buttonValue === 'Help the lil noun') {  
    return c.res({
      action: '/BlueGalleryArrival_WITHFRIEND',      ////////// i think jess is hosting here
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/Blue_Interview_Gallery_Limbo-min.png`,
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Enter Gallery">Enter Gallery</Button>,
      ],
    })
  }

  return c.res({                  //////// Blue, ignored call during interview, call back after but rejected to help friend
    action: '/BlueGalleryDecision_NOFRIEND',     ////// Should be equivalent to "May As Well Go"
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/BlueMayAswellGo-min.png`, ////////////////////////////////////////  Replace with Solarpunk sidewalk picture 
    imageAspectRatio: '1:1',
    intents: [
      <Button value="May as well go">May as well go</Button>,
    ],
  })

})

app.frame('/BlueGalleryArrival_NOFRIEND', (c) => {    ////////// Continues to missing display room
  const { buttonValue } = c

  return c.res({
    action: '/BlueGalleryArrivalContinueBrowsing_NOFRIEND',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/BlueGalleryArrival-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Continue Browsing">Continue Browsing</Button>,
    ],
  })

})

app.frame('/BlueGalleryArrival_WITHFRIEND', (c) => {    ////////// Continues to missing display room
  const { buttonValue } = c

  return c.res({
    action: '/BlueGalleryArrivalContinueBrowsing_WITHFRIEND',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/BlueGalleryArrival-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Continue Browsing">Continue Browsing</Button>,
    ],
  })

})

app.frame('/BlueGalleryArrivalContinueBrowsing_NOFRIEND', (c) => {    ////////// Goes to backroom with stranger
  const { buttonValue } = c

  return c.res({
    action: '/BlueGalleryDecision_NOFRIEND',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/Blue_GalleryHelpUnknown-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Help Gallery Decision">Help Gallery Decision</Button>,
    ],
  })

})

app.frame('/BlueGalleryArrivalContinueBrowsing_WITHFRIEND', (c) => {    ////////// Goes to backroom with Jess
  const { buttonValue } = c

  return c.res({
    action: '/BlueGalleryDecision_WITHFRIEND',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/Blue_GalleryHelpFriend-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <Button value="Help Gallery Decision">Help Gallery Decision</Button>,
    ],
  })

})

app.frame('/BlueGalleryDecision_NOFRIEND', (c) => {    ////////// Presented with the display choice from stranger
  const { buttonValue } = c

  return c.res({
    action: '/Blue_Final_No_Friend',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/Blue_PaintPickSTRANGER-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <TextInput placeholder="Use 2nd Apr 2024 as reference" />,
      <Button value="A">A</Button>,
      <Button value="B">B</Button>,
      <Button value="C">C</Button>,
    ],
  })

})

app.frame('/BlueGalleryDecision_WITHFRIEND', (c) => {    ////////// Presented with the display choice from jess
  const { buttonValue } = c

  return c.res({
    action: '/Blue_Final_With_Friend',
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmUEwL9G3TieCE2DX18JxAAD9KM9YHzfidVbw8spvTLfRT/Blue_PaintPickFriend-min.png`,
    imageAspectRatio: '1:1',
    intents: [
      <TextInput placeholder="Use 2nd Apr 2024 as reference" />,
      <Button value="A">A</Button>,
      <Button value="B">B</Button>,
      <Button value="C">C</Button>,
    ],
  })

})

app.frame('/Blue_Final_No_Friend', (c) => {     
  const { buttonValue } = c

  if (buttonValue != 'C') {  
    return c.res({
      action: '/BlueGalleryDecision_NOFRIEND',      ////////// 
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Try_Again-min.png`,
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Try Again">Try Again</Button>,
      ],
    })
  }

  if(BLUEanswered === true){ 

    return c.res({                    //////// Blue, no friend, no job
      //action: '/Blue_Pre_Ending_No_Friend',      
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Blue_Stranger_NoJob-min.png`, ////////////////////////////////////////  Replace with Solarpunk sidewalk picture 
      imageAspectRatio: '1:1',
      // intents: [
      //   <Button value="nofriend">Finish Visual Novel</Button>,
      // ],
    })

  }

  return c.res({                    //////// Blue, no friend, job
    //action: '/Blue_Pre_Ending_No_Friend',      
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Blue_Stranger_Job-min.png`, ////////////////////////////////////////  Replace with Solarpunk sidewalk picture 
    imageAspectRatio: '1:1',
    // intents: [
    //   <Button value="nofriend">Finish Visual Novel</Button>,
    // ],
  })

})

app.frame('/Blue_Final_With_Friend', (c) => {     
  const { buttonValue } = c

  if (buttonValue != 'C') {  
    return c.res({
      action: '/BlueGalleryDecision_WITHFRIEND',      ////////// 
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Try_Again-min.png`,
      imageAspectRatio: '1:1',
      intents: [
        <Button value="Try Again">Try Again</Button>,
      ],
    })
  }

  if(BLUEanswered === true){ 

    return c.res({                    //////// Blue, friend, no job
      //action: '/Blue_Pre_Ending_No_Friend',      
      image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Blue_Friend_NoJob-min.png`, ////////////////////////////////////////  Replace with Solarpunk sidewalk picture 
      imageAspectRatio: '1:1',
      // intents: [
      //   <Button value="nofriend">Finish Visual Novel</Button>,
      // ],
    })

  }

  return c.res({                    //////// Blue, friend, job
    //action: '/Blue_Pre_Ending_No_Friend',      
    image: `https://azure-worried-landfowl-942.mypinata.cloud/ipfs/QmTodVBQMzSKz7KEoJntijG5ApL5FtspxP11yYxZiri7BC/Blue_Friend_Job-min.png`, ////////////////////////////////////////  Replace with Solarpunk sidewalk picture 
    imageAspectRatio: '1:1',
    // intents: [
    //   <Button value="nofriend">Finish Visual Novel</Button>,
    // ],
  })
})


devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
