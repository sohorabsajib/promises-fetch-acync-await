{/* <div id="joke" class="joke">
            Awsome jokes is loading...
        </div>
        <div id="jokeBtn" class="btn">Next JOKE</div> */}

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');


// promises start
// const genarateJokes =()=>{

//     const setHeader = {
//         headers:{
//             Accept : "application/json"
//         }
//     }


//     fetch('https://icanhazdadjoke.com/',setHeader)
//     .then((res)=>res.json())
//     .then((data)=>{
//         jokes.innerHTML = data.joke;
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// }
// promises end


// async,await start
const genarateJokes = async ()=>{
    try{
        const setHeader = {
            headers:{
                Accept : "application/json"
            }
        }
        const res = await fetch('https://icanhazdadjoke.com/',setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;

    }catch(err){
        console.log(`this error is ${err}`);
    }
    
}
// async,await end





jokeBtn.addEventListener('click',genarateJokes);
genarateJokes();