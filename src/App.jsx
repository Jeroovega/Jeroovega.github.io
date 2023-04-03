import { random } from 'mathjs';
import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaTwitter, FaTumblr } from "react-icons/fa";

function App() {

  const [cita, setCita] = useState();

  const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

  const fetchApi = async () => {
    const respuesta = await fetch(url);
    const respuestaJSON = await respuesta.json();
    setCita(respuestaJSON);
  }

  useEffect(() => {
    fetchApi()
  }, [])


  const [newNum, setNewNum] = useState(Math.floor(Math.random() * 100));


  const [newColor, setNewColor] = useState("#fa3fa5");

  const nuevoColor = () => {
    let caracteres = "abcdef0123456789";
    let nuevaCadena = "";
    for (let i = 0; i < 6; i++) {
      if (!nuevaCadena.includes("#")) {
        nuevaCadena = "#"
      }
      nuevaCadena += caracteres[(Math.floor(Math.random() * caracteres.length))]
    }
    setNewColor(nuevaCadena)
  }

  const funcionBoton = () => {
    let randomNum = Math.floor(Math.random() * 100);
    setNewNum(randomNum);
    nuevoColor()
  };


  console.log(newColor)
  return (
    <main className={` h-screen font-texto`}
      style={{ backgroundColor: newColor }}
    >
      <div className='flex flex-col items-center justify-center h-[100vh] w-full '>
        <div className='bg-white flex flex-col py-8 px-12'>
          <div className='flex w-96'>
            <FaQuoteLeft className='w-[100px] mt-3 mr-2 text-3xl'
              style={{ color: newColor }} />
            <h1
              className={'font-texto text-3xl flex text-center py-6 '}
              style={{ color: newColor }}
            >
              {cita && cita.quotes[newNum].quote}
            </h1>
          </div>
          <div className='flex justify-end'>
            <h4 className='font-texto'
              style={{ color: newColor }}>
              - {cita && cita.quotes[newNum].author}
            </h4>
          </div>
          <div className='flex justify-between mt-4'>
            <div className='flex text-[#77b1a9] gap-1 items-center'>
              <a href={`https://twitter.com/intent/tweet?text=${cita && ('"' + cita.quotes[newNum].quote + '"' + " - " + cita.quotes[newNum].author)}`}
                className='text-xl  p-2  text-white  cursor-pointer rounded-sm hover:opacity-80 '
                style={{ backgroundColor: newColor }}
                target="_blank"
              ><FaTwitter /></a>
              <a href='https://www.tumblr.com/login'
                className='text-xl cursor-pointer  p-2  text-white rounded-sm hover:opacity-80 '
                style={{ backgroundColor: newColor }}
                target="_blank"><FaTumblr /></a>
            </div>
            <div className='flex items-center'>
              <button
                className=' py-2 px-4 text-xs text-[white] font-semibold rounded-sm hover:opacity-80'
                onClick={funcionBoton}
                style={{ backgroundColor: newColor }}
              >Nueva cita</button>
            </div>
          </div>
        </div>
        <div className='flex text-white text-[12px] mt-3 cursor-pointer'>
          <a>by <span className='font-semibold'>jerovega</span></a>
        </div>


      </div>
    </main>
  );
}

export default App;