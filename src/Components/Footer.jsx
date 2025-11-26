
import React from "react";
import "./Footer.css"; 

export default function Footer(){
    return (
      <footer className="footer">
        <div className="footer_top">
          <div className="footer_left">
            <h3>Bibliothèque ENSAF</h3>
            <p>
              Organize your books seamlessly, share and exchange resources with
              other students, track your reading progress, and stay up-to-date
              with all library news and events.
            </p>
          </div>
          <div className="footer_middle">
            <h1>Company</h1>
            <p>home</p>
            <p>About</p>
            <p>Categories</p>
            <p> Shared Library</p>
            <p>contact us</p>
          </div>
          <div className="footer_right">
            <h1>Get it touch</h1>
            <p>0615683217</p>
            <p>Ensaf.school@gemail.com</p>
          </div>
        </div>
        <p className="footer_bottom">
          Copyright {new Date().getFullYear()} © . All Right Reserved.
        </p>
      </footer>
    );
}
