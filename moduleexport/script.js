
  import * as cred from './cred.js';
  import * as modfunc from './modfunc.js';

  const but = document.querySelector('.fetchJoke');
  but.addEventListener('click',((event)=>{
    new Promise((resolve,reject)=>{
      resolve(modfunc.fetchJoke(cred.cred));
      reject(false);
    })
    .then((data)=>{
          modfunc.drawjoke({title:data[0].title,body:data[0].body});
    })
    .catch((error)=>{
      console.log('error calling fetchJoke::',error);
    })
  }));
  document.querySelector('.jokeContent').innerHTML = 'click fetch joke!!';
