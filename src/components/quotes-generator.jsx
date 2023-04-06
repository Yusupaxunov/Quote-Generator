import { useEffect, useState } from "react";
import {AiOutlineInstagram, AiFillLinkedin, AiOutlineGithub, AiOutlineTwitter} from 'react-icons/ai'
import { BsTelegram} from 'react-icons/bs'

function getRandomQuote(quotes) {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

const QuotesGenerator = () => {

    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState('');

    useEffect(() => {
        fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((json) => {
          setQuotes(json);
          setQuote(json[0])
        });

    }, [])

    function getNewQuote() {
        setQuote(getRandomQuote(quotes))
    }
    

  return (
    <div className="bg-[#000300] w-full h-screen px-0 py-[100px]">
        <div className="flex justify-center items-center flex-col md:w-[75%] w-[80%] h-full svgBg bg-white m-auto rounded-lg shadow-md shadow-slate-700">
            <div className="flex justify-center -mt-[70px] text-center flex-col w-[75%] bg-[#e4e4e4] border border-black p-5 rounded-xl font-sans italic">
                <h2 className="md:text-lg text-sm">"{quote?.text}"</h2>
                <p className="text-end pt-4">~{quote?.author}~</p>
            </div>
            <div className="">
                <button onClick={getNewQuote} className="px-8 py-4 bg-black text-white rounded-md mt-8 active:bg-slate-800 transition-all duration-200">New Quote</button>
            </div>
        </div>
        <div className="flex justify-between items-center mt-[70px] mr-3">
          <div>
            <p className="text-gray-400 ml-1">Author: Yusupaxunov Muhammadrizo</p>
          </div>
          <div className="flex">
            <a href="https://github.com/Yusupaxunov"><AiOutlineGithub color="white" size={25}/></a>
            <a href="https://www.linkedin.com/in/yusupaxunov-muhammadrizo-85848623b"><AiFillLinkedin color="white" size={25}/></a>
            <a href="https://twitter.com/yusupaxunov"><AiOutlineTwitter color="white" size={25}/></a>
            <a href="https://www.instagram.com/yusupaxunov.m/"><AiOutlineInstagram color="white" size={25}/></a>
          </div>
        </div>
    </div>
  )
}

export default QuotesGenerator;