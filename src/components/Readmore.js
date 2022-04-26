import React from 'react';
import ReadMoreReact from 'read-more-react';
 
const Readmore = () => { 
        return (
            <ReadMoreReact text={"Ever since I was a child, I fell in love with video games on the computer and decided to study in that direction. I really wanted to work with computers in the future, but I didn't know exactly what I wanted to do. After finishing school, I did various jobs, but I never found enough time and strong enough motivation to continue educating myself in that direction. As time went on and when I started my family, I decided to continue chasing my dream and dealing with computers."
        }
                min={80}
                ideal={100}
                max={150}
                readMoreText="Read more >"/>
        ) 
    }

    export default Readmore;