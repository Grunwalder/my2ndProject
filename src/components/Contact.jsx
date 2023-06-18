import React from 'react'
import FormInput from '../reuseable/FormInput'
const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - thang9a2.pl2020@gmail.com</p>
        </div>
        <FormInput
          
          labelFor="name"
          inputType="text"
          inputId="name"
          inputName="name"
          placeholderText="Your Name"
          ariaLabelName="Name"
        />
        <FormInput
          
          labelFor="email"
          inputType="email"
          inputId="email"
          inputName="email"
          placeholderText="Your email"
          ariaLabelName="Email"
        />
        <div className="mt-6">
						
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact