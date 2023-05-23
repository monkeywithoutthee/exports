

    export const fetchJoke = function(data){

        return window.fetch(data.url, {
          method: 'GET',
          headers: data.headers
        })
      .then((response) => response.json())
      .then((data) => {
          return data;
       })
       .catch((error) => {
          console.log("error::;", error);
          return false;
       })
    };

    export const drawjoke = ((data)=>{
          //data = {title:'',body:''}
        //  console.log('drawjoke::',data);
          const t = document.querySelector('.jokeTitle');
          if (t){t.innerHTML = data.title;};
          const el = document.querySelector('.jokeContent');
          if (el){el.innerHTML = data.body;};
    })
