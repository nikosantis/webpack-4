import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'
import logo from '../../images/platzi.png'
import icon from '../../images/heart.svg'
import video from '../../video/que-es-core.mp4'


import '../../sass/sass.scss'
import '../../less/less.less'
import '../../stylus/stylus.styl'
console.log(data)

function App() {
  const [loaderList, setLoaderList] = useState([])
  function handleClick() {
    setLoaderList(data.loaders)
  }
  return (
    <div>
    <p className='sass'>Esto es sass</p>
    <p className='less'>Esto es less</p>
    <p className='stylus'>Esto es stylus</p>
    <p className='post-css'>Esto es post-css</p>
      Que linda Aplicación hecha en React.js
      <video src={video} width={360} controls poster={logo}></video>
      <p>
        <img src={logo} alt="" width={40} />
      </p>
      <p>
        <img src={icon} />
      </p>
      <ul>
        {
          loaderList.map(item => <Loader {...item} key={item.id} />)
        }
      </ul>
      <button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>
    </div>
  )
}

export default App
