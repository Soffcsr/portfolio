import React from "react";

const Footer = props => {
  return (
    <footer className="d-flex flex-md-row flex-column justify-content-md-end h-100 w-100">
      <div className="mt-5">
        <i className="fab fa-github"></i>
        <i className="fab fa-codepen"></i>
        <i className="fab fa-gitlab"></i>
      </div>
      <div className="mt-5">
        <h3>Send me a message!</h3>
        <form className="d-flex flex-md-row flex-column">
          <div>
            <div className="form-group">
              <input type="text" className="" placeholder="Nombre"/>
            </div>
            <div className="form-group">
              <input type="text" className="" placeholder="Email"/>
            </div>
            <div className="form-group">
              <input type="text" className="" placeholder="Teléfono"/>
            </div>
          </div>
          <div>
            <div className="form-group">
              <textarea rows="5" className="" placeholder="Mensaje"></textarea>
            </div>
            <div className="form-group">
              <button className="btn btn-light">Enviar</button>
            </div>
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
