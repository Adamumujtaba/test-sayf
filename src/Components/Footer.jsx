function Footer() {
  return (
    <footer className="text-gray-light grid gap-6 md:grid-cols-3 p-5">
      <div className="about">
        <h3 className="text-[#00d094] font-bold my-4">About Us</h3>
        <p className="text-justify">
          {/* The mission of Saad Ahmad Youth Foundation is to foster mutual
          co-operation and unity within youth of the family. SAYF recognizes the
          importance of promoting general and educational welfare of the entire
          family. */}
          The SAYF Online Academy is designed to help students within the family
          to bridge the wide gap between the traditional method of learning
          (theoretical) and the practical application of the knowledge to become
          industrious in the field of their studies{' '}
        </p>
      </div>
      <div className="">
        <h3 className="text-[#00d094] font-bold my-4">Committees</h3>
        <ol type="1">
          <li>Welfare Committee</li>
          <li>Student Affairs Committee</li>
          <li>Financial Committee</li>
        </ol>
      </div>

      <div className="links">
        <h3 className="text-[#00d094] font-bold my-4">Links</h3>
        <ul className="">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="students">Student</a>
          </li>
          <li>
            <a href="/ziyara">Ziyara</a>
          </li>
          <li>
            <a href="/committees">Committees</a>
          </li>
          {/* <li>
              <a href="">Images</a>
            </li> */}
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
