import "./index.html";
import React, { useEffect, useState } from "react";

export function CountDownLightSwitch() {
  const [toggle, settoggle] = useState(".light-mode");
  function changetheme(){
    if(toggle === ".light-mode"){
        settoggle(".dark-mode");

    }
    console.log(document)
  }
  changetheme()
  useEffect(() => {
    document.body.classList.add(toggle);
    }, [toggle]);
  
}
useEffect(()=>{
    document.body.classList.remove("light-mode");
    document.body.classList.remove("dark-mode");
    },[toggle])
    startbutton = document.getElementById('startButton');
    resetbutton = document.getElementById('resetButton');

useEffect(()=>{
    let count = 30;
    progress = document.getElementById('progress');
    let intervalId = setInterval(() => {

        count -= 1;
        progress.style.width = `${count}%`;
        if (count === 0) {
            clearInterval(intervalId);
            document.body.classList.remove(toggle);
            document.body.classList.add("dark-mode");
            settoggle(".dark-mode"); 
       
            startbutton = document.getElementById('startButton');

            resetbutton = document.getElementById('resetButton');
            startbutton.style.display = 'block';

            resetbutton.style.display = 'block';
            
        resetbutton.addEventListener() {

            settoggle(".light-mode");
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");

        
            count = 30;
            progress.style.width = '0%';
            progress.style.width = `${count}%`;}
          
          


            
            



        }
        console.log(count);
        
            }
            , 1000);
            return count;
},[])


useEffect(()=>{
    resetbutton.addEventListener(){
            
        settoggle(".light-mode");
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");

    
        count = 30;
        progress.style.width = '0%';
        progress.style.width = `${count}%`;}

},[resetbutton])

function countdowntimer(){
    let count = 30;
    let intervalId = setInterval(() => {
        count -= 1;
        console.log(count);
        if (count === 0) {
            clearInterval(intervalId);}
            }
            , 1000);
            return count;

}

function compressbar(){
 progress = document.getElementById('progress');
 progress.style.width = '100%';

}




  return <>




  
  
  </>;
  
}
