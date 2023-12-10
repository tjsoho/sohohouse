function Calendar() {
    return (
      <div className="bg-brand-camel w-full h-full">
        {/* <!-- Calendly inline widget begin --> */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/sohocreativehouse/30min?background_color=ffe8d6&text_color=061c4e&primary_color=fc7643"
          style={{ minWidth: '320px', height: '700px' }} // Use an object for style
        ></div>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
        {/* <!-- Calendly inline widget end --> */}
      </div>
    );
  }
  
  export default Calendar;
  