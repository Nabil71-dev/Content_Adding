fetch("./package.json").then(resp=>resp.json()).then(obj=>{console.log(obj)
  let btn=document.querySelector(".container__button")
  let amount = document.querySelector(".container__input");
  let paragraph=document.querySelector(".container__paragraph");
    btn.addEventListener('click',function(){
      let value = parseInt(amount.value);
      var i=0,randomQuote='\0';
      while( i<value)
      {randomQuote=randomQuote+(obj.quotes[i].quote)
      paragraph.innerHTML=randomQuote;
      i++}
  })
}).catch(error=>{console.log("Something went wrong in JSON")})

//random: Math.floor(Math.random()*quotes.length)