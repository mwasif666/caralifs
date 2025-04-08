import Image from "next/image";

const steps = [
  {
    img: "/assets/images/icon-box/car.png",
    title: "Enter Car Details",
    desc: "Provide your car's accurate details in the form above.",
  },
  {
    img: "/assets/images/icon-box/book.png",
    title: "Enter your Details",
    desc: "Fill in your contact details to get your valuation report.",
  },
  {
    img: "/assets/images/icon-box/network.png",
    title: "Get Instant Value",
    desc: "Receive a quick and accurate market valuation.",
  },
];

export default function Card3() {
  return (
    <section className="mt-5 text-center">
      <div className="themesflat-container card-steps">
        <h3 className="ps-5 pb-3 text-start font-bold mb-10">
          How to Get Your Car Valued in 3 Simple Steps?
        </h3>
        <div className="row">
          {steps.map((step, index) => (
            <div key={index} className="col-lg-4">
              <div className={`card relative ${index === 2 ? "no-arrow" : ""}`}>
                <div className="mb-4">
                  <img
                    src={step.img}
                    alt={step.title}
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                  />
                  {/* <Image width={50} height={50} className=" rounded-full p-4" /> */}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
