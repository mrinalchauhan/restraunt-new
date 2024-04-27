const Footer = () => {
    return (
      <footer className="bg-red-900   text-white  py-10 p-5">
        <div className="container mx-auto grid grid-cols-3 md:grid-cols-3 gap-5">
          {/* Column 1 */}
          <div className="px-4">
            <img
              src='https://res.cloudinary.com/dmrpovrmd/image/upload/v1711775838/logo_q1of0l.jpg'
              loading='lazy'
              alt="Love Khati Logo"
              className="h-12 md:h-16 rounded-full mr-2"
            />
            <div>
              <h3 className="font-bold text-lg">Love-khati</h3>
              <p>Some description </p>
            </div>
          </div>
  
          {/* Column 2 */}
          <div className="">
            <h3 className="font-bold text-lg">Location</h3>
            <p>123 Main Street</p>
            <p>City, State, Zip Code</p>
          </div>
  
          {/* Column 3 */}
          <div className="">
            <h3 className="font-bold text-lg">Contact</h3>
            <p>Phone: 123-456-7890</p>
            <p>Opening Hours: 9am - 5pm</p>
            <p>Closed on weekends</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  