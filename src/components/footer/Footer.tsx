import "./footer.scss";
function Footer() {
  return (
    <footer className="footer">
        <div className="footer__left">
            <img src="/logo-wht.png" alt="" />
            <span className="span--bold">Personal</span>
        </div>

        <div className="footer__right">
            <span>&copy; 2024 Personal</span>
            <span>Made with React</span>
        </div>
      
    </footer>
  )
}

export default Footer
