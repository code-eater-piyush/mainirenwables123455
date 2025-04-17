import "./preloader.css";

const preloader = () => {
  return (
    <div className="preloader">
      <div className="turbine-wrapper">
        {/* Spinning turbine */}
        <div className="turbine">
          <ul>
          <li className="blade"></li>
          <li className="blade"></li>
          <li className="blade"></li>
          </ul>
        </div>
        {/* Text */}
        <h2 className="">Powering Sustainability...</h2>
      </div>
    </div>
  );
};

export default preloader;
