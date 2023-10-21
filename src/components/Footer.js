function Footer() {
    const currentYear = new Date().getFullYear(); // Get the current year
  
    return (
      <footer className="footer text-center p-4">
        <p>&copy; {currentYear} Mohamed Ouhami. All rights reserved.</p>
      </footer>
    );
  }
  
  export default Footer;
  