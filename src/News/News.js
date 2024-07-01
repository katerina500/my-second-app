import React, {useState} from 'react';
import './News.css';

const News = () => {

    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState();


    const handleSubmit = (e) =>{
      e.preventDefault();
      fetch('https://content.guardianapis.com/search?q='+encodeURIComponent(input)+'&api-key=0ec2031f-4ccb-4260-b988-701355e6bbb5')
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        setPosts(res.response.results);
      });
    }


  return (  
   <div className='body'>
     <form className='form'>
      <lable className="lable">Введите интересующую тему: </lable>
      <input value={input} className="newsInput" onChange={e => setInput(e.target.value)} type="text" /> <br />
      <button class="button" onClick={handleSubmit}>Получить список статей</button>
     </form>
     <div class="inform">
      {posts.map((el, i) => {
        return(
        <div key={i}>
          <a href={el.webUrl}>{el.webTitle}</a>
        </div>
        );
      })}
     </div>
   </div>
  );
}

export default News;