import { CgDollar } from 'react-icons/cg';
import logo from '../assets/logo.png'

const Nav = ({coin}:{coin:number}) => {
  return (
    <div>
      <nav className="flex justify-between container mx-auto px-5 py-2">
        <img className="" src={logo} alt="" />

        <ul className="flex  gap-4 justify-center items-center text-md ">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
        </ul>

        <h2 className='flex items-center text-2xl justify-center font-bold'>
          <CgDollar/>
          {coin}
        </h2>
      </nav>
    </div>
  );
};

export default Nav;