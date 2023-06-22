const FooterRights = () => {
  return (
    <div className="footer-bottom bg-dark text-center py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} KAIFA Glass. Всички права са
              запазени.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterRights;
