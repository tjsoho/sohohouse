import React from 'react'

function PlaceHolder() {
  return (
    <div id="placeholderSection" className="w-full h-screen flex flex-col items-center bg-brand-blue-light justify-center p-8">
      <h3 className="text-brand-orange text-[34px] w-3/4 text-center">I'm updating a few things behind the curtains. <br /> I'll be back shortly.</h3>
      <p className="text-brand-cream mt-4">Please email if you'd like to connect in the meantime.</p>
      <a href="mailto:toby@ai-guy.co">
      <p className="text-brand-cream mt-4 hover:text-brand-orange underline">toby@ai-guy.co</p>
        </a>
      
    </div>
  )
}

export default PlaceHolder
