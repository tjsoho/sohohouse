

function ComingSoon() {

    const headerClasses = `
   Title Styling
   text-brand-orange text-[32px]  md:text-[60px] lg:text-[70px] 
   leading-[42px] md:leading-[65px] lg:leading-[80px] xl:leading-[90px] 2xl:leading-[110px] 
   text-center
   `;
  const subClasses = `
   Sub-Title Styling
   text-brand-cream text-[20px] md:text-[28px] lg:text-[32px] xl:text-[35px] 2xl:text-[35px] font-Raleway font-thin leading-1 tracking-widest
   text-center
   `;
  return (
    <div className="bg-brand-blue h-screen w-screen flex flex-col justify-center items-center">
      <h3 className={headerClasses}>Coming Soon</h3>
        <p className={subClasses}>This home is undergoing a SoHo renovation. <br/> We're excited to share it with you very soon!</p>
    </div>
  )
}

export default ComingSoon
