import "./offers.scss";

const Offers = () => {
  return (
    <div className="container offers">
      <h1>
        Get offers straight <br /> to your inbox
      </h1>
      <p>Sign up for the Sushiman newsletter.</p>
      <form>
        <input className="e-input" placeholder="Enter email address" type="text" />
        <button>get started</button>
      </form>
    </div>
  );
};

export default Offers;
