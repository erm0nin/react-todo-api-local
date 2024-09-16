import React from 'react'
import { BsCheck } from 'react-icons/bs'

const Check = ({isComplited}) => {
  return (
		<div className={`border-2 rounded-lg  ${isComplited ? 'bg-white' : ''} w-6 h-6 mr-3 flex items-center justify-center`}>
      {isComplited && 
			<BsCheck size={24} className='text-green-600'/>
    }
		</div>
      
	)
}

export default Check
