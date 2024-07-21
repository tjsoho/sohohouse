import Icon from "../../../Icons/Icon";

function Socials() {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="social-icon-container">
        <a href="https://www.instagram.com/toby.ai.guy" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Icon name="ig" />
        </a>
      </div>
      
      <div className="social-icon-container mx-4">
        <a href="https://www.linkedin.com/in/toby-j-ai-guy-211338295/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Icon name="linked" />
        </a>
      </div>

      <div className="social-icon-container">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Icon name="fb" />
        </a>
      </div>
    </div>
  );
}

export default Socials;
