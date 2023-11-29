import Contact from "../Contact/Contact"

import Content from "./Content/Content"
import Hero from "./Hero/Hero"


function About() {
  return (
    <div className="flex flex-col">
        <div className="w-screen h-screen">
            <Hero />
        </div>
        <div className="w-screen h-contain bg-brand-camel">
            <Content />
        </div>
      <Contact />
    </div>
  )
}

export default About
