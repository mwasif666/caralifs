const Cards4 = () => {
  const data = [
    {
      icon: "/assets/images/icon-box/1.png",
      title: "Powered by data",
      desc: "Our partner Deal Drive scans millions of automotive transactions and evolving market conditions to get you a real value.",
    },
    {
      icon: "/assets/images/icon-box/2.png",
      title: "You're in control",
      desc: "Access key information about your vehicle’s value, market trends, and competitive data, empowering you to make informed decisions.",
    },
    {
      icon: "/assets/images/icon-box/3.png",
      title: "Negotiating power",
      desc: "If you plan to sell or trade-in your car, having a realistic understanding of its value gives you negotiating power with potential buyers.",
    },
    {
      icon: "/assets/images/icon-box/4.png",
      title: "Get a valuation instantly",
      desc: "Get a car valuation in a few clicks, with no obligation to sell.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 fs-3">
          Why choose CARALIF for your Car Valuation?
        </h2>

        <div className="row g-4">
          {data.map((item, index) => (
            <div className="col-md-6" key={index}>
              <div className="card4 d-flex bg-white shadow-sm align-items-center gap-3 h-100">
                <img
                  src={item.icon}
                  alt={item.title}
                  style={{
                    width: "60px",
                    height: "60px",
                  }}
                />
                <div>
                  <h5 className="fw-semibold mb-1">{item.title}</h5>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards4;
