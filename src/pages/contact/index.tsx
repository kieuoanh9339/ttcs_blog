import "./contact.css";
export const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact_heading">
          <h1>Get In Touch</h1>
          <p>
            I love to listen and I am eagerly waiting to talk to you regarding
            your project. Get in touch with us if you have any queries and I
            will get back to you as soon as possible.
          </p>
        </div>
        <div className="contact_body">
          <div>
            <input className="contact__name" type="text" placeholder="Name" />
          </div>
          <div>
            <input className="contact__email" type="text" placeholder="Email" />
          </div>
          <div>
            <textarea className="contact__message" placeholder="Message" />
          </div>
          <div>
            <button className="contact__button">SUBMIT</button>
          </div>
        </div>
      </div>
    </>
  );
};
