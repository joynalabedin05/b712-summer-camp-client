
import logo from '../../assets/logo2.jpg'
const Footer = () => {
    return (
        <footer className="footer p-16 rounded-lg text-white bg-slate-600">
            <div className='flex'>
                <img className='w-12 rounded-full' src={logo} alt="" />
                <div className=''>
                    <h3 className="text-3xl">ACADEMY OF ART UNIVERSITY</h3>
                    <p className="uppercase text-sm mb-4">defy the ordinary , create the extra ordinary</p>
                    <hr />
                    <h3 className=' mt-4'>Copyrights@ 2023 All rights reserved by <br /> ACADEMY OF ART UNIVERSITY <br /> established in 1992</h3>
                </div>
            </div>
            <div>
                <span className="footer-title">Get in Touch</span>
                <a className="link link-hover">1-300-433-2747</a>
                <a className="link link-hover">89 New Montgomy St.</a>
                <a className="link link-hover">SanFraccisco, CA 95106</a>
                <a className="link link-hover">GET Direction</a>
            </div>
            <div>
                <span className="footer-title">School Topics</span>
                <a className="link link-hover">Accreditation</a>
                <a className="link link-hover">Education</a>
                <a className="link link-hover">Disclousures</a>
                <a className="link link-hover">Job Opportunities</a>
            </div>
            <div>
                <span className="footer-title">Link & Resourses</span>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Instructor</a>
                <a className="link link-hover">Classes</a>
                <a className="link link-hover">Login</a>
            </div>
            <div>
                <span className="footer-title">Art Degree</span>
                <a className="link link-hover">Fashion Design School</a>
                <a className="link link-hover">Photography Design School</a>
                <a className="link link-hover">Interior Design School</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;