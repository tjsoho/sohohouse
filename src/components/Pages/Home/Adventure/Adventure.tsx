import React from 'react'
import Button1 from '../../../Button/Button1';
import { Link } from 'react-router-dom';
import Button from '../../../Button/Button';

function Adventure() {

    const headerClass = 'text-center text-brand-blue text-[36px] md:text-[50px] lg:text-[50px]'
    const divClass = 'w-full lg:w-1/2 flex flex-col justify-center items-center py-8 lg:py-16'

  return (
    <div className='max-w-[1440px] mx-auto'>
    <div className='h-full w-full  flex flex-col lg:flex-row py-8 lg:py-16'>
      
    {/* left col */}
      <div className={divClass}>
        <h3 className={headerClass}>
            Ai HUB
        </h3>
        <Link to="/aihub">
        <img src="../../../../images/mbAir.png" alt="placeholder" className="transform scale-[85%] hover:scale-100 ease-in-out duration-200"/>
        </Link>
        <Link to="/aihub">
        <Button1 label="DISCOVER" />
        </Link>
      </div>
    
    {/* right col */}
      <div className={divClass}>
      <h3 className={headerClass}>
            Web Sites
        </h3>
        <Link to="/websites">
        <img src="../../../../images/mockDesk1.png" alt="placeholder" className="transform scale-[85%] hover:scale-100 ease-in-out duration-200"/>
        </Link>
        <Link to="/websites">
        <Button1 label="DISCOVER" />
        </Link>
      </div>
      </div>
    </div>
    
  )
}

export default Adventure;
