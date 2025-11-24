
export default function Footer(){
    return (
      <footer className="footer">
        <div className="footer_top">
          <div className="footer_left">
            <h3>Bibliothèque ENSAF</h3>
            <p>
              Manage your books easily, share with students, and stay updated
              with the latest library news.
            </p>
          </div>
          <div className="footer_middle">
                  <h1>Company</h1>
                  <p>home</p>
                  <p>About</p>
                  <p>Categories</p>
                  
                  <p>contact us</p>
          </div>
          <div></div>
        </div>
        <p className="footer_bottom">
          Copyright {new Date().getFullYear()} © . All Right Reserved.
        </p>
      </footer>
    );
}
