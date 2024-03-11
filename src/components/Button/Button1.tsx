import Icon from "../Icons/Icon";

interface Button1Props {
    label: string;
    onClick?: () => void;
    icon?: string;
    color?: string;
    text?: string;
    size?: string;
    className?: string;
    
}



export default function Button1 ({ label, onClick, icon, color = 'orange', text = 'blue', className = '', size = 'medium'} : Button1Props) {
  const buttonClasses = `
  Button Class
  ${size === 'small' ? 'px-4 py-2 text-sm' : size === 'medium' ? 'px-6 py-3 text-base' : 'px-8 py-4 text-lg'}
  ${color === 'orange' ? 'bg-brand-orange' : color === 'blue' ? 'bg-brand-blue' : color === 'light' ? 'bg-brand-orange-light' :'bg-brand-camel'}
  text-brand-blue-light hover:text-brand-cream  active:underline
  ${className}
  flex justify-center items-center 
  font-Black

  `
  const iconClasses = `
  Icon Class
  ml-2
  `
  return (
    <button className={buttonClasses} onClick={onClick} >
      {label}
      <div className={iconClasses}>
        {icon && <Icon name={icon}  />}
      </div>
    </button>
  )
}