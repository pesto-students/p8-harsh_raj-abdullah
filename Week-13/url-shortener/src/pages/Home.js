import React, { useState } from "react";
import './Home.css'

const BASE_URL = 'https://api.shrtco.de/v2/shorten'

function Home () {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('')
  const [urlList, setUrlList] = useState([])

 
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const response = await (await fetch(`${BASE_URL}?url=${url}`)).json()
    if(response.ok){
      const shortUrl = response?.result?.full_short_link
      setUrlList([{ url, shortUrl }, ...urlList])
      setUrl('')
    }
    else{
      alert(response?.error)
    }
    setLoading(false)
  }

  const onClickCopy = (text) =>{
    navigator.clipboard.writeText(text);
    alert('Copied!')
  }

  return (
    <div className="body">
      <div>
        <h2>More than just shorter Links</h2>
        <div>Build your brand's recognition and get details insights on how your links are performing</div>
      </div>
      
      <form className="form" onSubmit={onSubmit} >
        <input required 
          type="url" 
          value={url}
          placeholder="Shorten a link here" 
          onChange={e => setUrl(e.target.value)} 
        />
        <button type="submit">{loading ? '.....' : 'Shorten It!'}</button>
      </form>

      <div className="url_list">
        { urlList?.map((item, idx) => (
          <div key={idx} className="shorter_box">
            <div className="shorter_link_holder">
              <p>{item?.url}</p>
              <p className="shorter_link">
                <span>{item?.shortUrl}</span>
                <button onClick={()=>onClickCopy(item?.shortUrl)}>COPY</button>
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Home;