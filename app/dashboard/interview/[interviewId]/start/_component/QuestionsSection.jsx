import { Lightbulb, Volume1, Volume2 } from 'lucide-react'
import React from 'react'

function QuestionsSection({mockInterviewQuestion,activeQuestionIndex}) {
  const textToSpeach =(text)=>{
    if('speechSynthesis' in window){
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech)
    }
    else{
      alert("Sorry, Your Browser Does Not support text to speech")
    }
  }
  return mockInterviewQuestion&&(
    <div className='p-5 border rounded-lg my-10'>
       
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {mockInterviewQuestion&&mockInterviewQuestion.map((question,index)=>(
                <h2 className={`p-2 border rounded-full
                text-xs md:text-sm text-center cursor-pointer
                ${activeQuestionIndex== index && 'bg-primary txt-white'}`} >Question #{index+1}</h2>
            ))}
           
        </div>
        <h2 className='my-5 text-sm md:text-lg'>{mockInterviewQuestion[activeQuestionIndex]?.question}</h2>
        <Volume2 className='my-5' onClick={()=>textToSpeach(mockInterviewQuestion[activeQuestionIndex]?.question)} />
            <div className="border rounded-lg p-5 bg-blue-100">
              <h2 className="flex gap-2 item-center text-primary">
                <Lightbulb />
                <strong>Note:</strong>
              </h2>
            </div>
    </div>
  )
}

export default QuestionsSection