interface IconProps {
    name: string
    className?: string
  }
  
  export default function Icon({ name, className }: IconProps) {
    return (
      <>
      {name === 'arrowDown' && (
        <svg className={className} width="65" height="25" viewBox="0 0 65 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M66.2337 0.891674L34.0695 24.1157L1.9053 0.891674L66.2337 0.891674Z" fill="#FC7643" stroke="#FC7643" stroke-width="0.764368"/>
        </svg>
        )}
      </>
    );
    }