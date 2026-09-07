import logo from '../assets/logo.png'

const Nav = () => {
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
      </nav>
    </div>
  );
};

export default Nav;