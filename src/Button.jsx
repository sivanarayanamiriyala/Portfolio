import { useNavigate } from 'react-router-dom';
import './App.css'

function Button({className,path,name})
{

const navigate=useNavigate();

return (
<>
<button className={className}  onClick={()=>navigate(path)}>{name}</button>
</>
);
}

export default Button;