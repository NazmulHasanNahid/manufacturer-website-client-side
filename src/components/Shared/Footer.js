import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-300  p-20" >
     <footer className="">
            <div className='footer w-full justify-evenly    '>
                <div >
                    <span className="footer-title ">Services</span>
                    <Link to="/" className="link link-hover">Tools</Link>
                    <Link to="/" className="link link-hover">Manufacture</Link>
                    <Link to="/" className="link link-hover">Indrusty</Link>
                    <Link to="/" className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="/" className="link link-hover">About us</Link>
                    <Link to="/" className="link link-hover">Contact</Link>
                    <Link to="/" className="link link-hover">Jobs</Link>
                    <Link to="/" className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Information</span>
                    <Link to="/" className="link link-hover">Terms of use</Link>
                    <Link to="/" className="link link-hover">Privacy policy</Link>
                    <Link to="/" className="link link-hover">Cookie policy</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to="/" className="link link-hover">Terms of use</Link>
                    <Link to="/" className="link link-hover">Privacy policy</Link>
                    <Link to="/" className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div className='my-10 text-center uppercase'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
      
    </div>
  );
};

export default Footer;
