import { Link, useLocation } from 'react-router-dom'


interface ButtonProps {
    title: string;
    isActive?: boolean;
}

const Button = ( { title }: ButtonProps ) => {
    const location = useLocation();
    const to = (title === 'home') ? '/' : `/${title}`;
    const isActive = location.pathname === to;

  return (
    <Link
        to={to}
    >
    
    <div
        className={`
            flex w-12 h-6 border border-red-500 rounded-md
            ` + (isActive ? 'bg-red-500' : 'bg-none')}
    >
        <p
            className="text-xs m-auto"
        >
            {title}
        </p>
    </div>
    </Link>
  )
}

export default Button