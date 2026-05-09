
type Feature = {
  title: string;
  subtitle: string;
  icon: string;
};

const features: Feature[] = [
  {
    title: "TRUSTED EXPERTS",
    subtitle: "Professional Legal Guidance",
    icon: "/img/img15.png",
  },
  {
    title: "CLIENT FIRST",
    subtitle: "Clear & Honest Support",
    icon: "/img/img14.png",
  },
  {
    title: "PROVEN SUPPORT",
    subtitle: "Focused on Your Rights",
    icon: "/img/img16.png",
  },
];

const LegalTopBar = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                flex items-center gap-4
                px-6 py-5 "
            >
              {/* Icon Circle */}
              <div className="  flex items-center justify-center shrink-0">
                <img src={item.icon} alt={item.title} className="w-16 h-14" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-[20px] font-bold tracking-wide text-[#001025] archivo" style={{fontWeight:500}}>
                  {item.title}
                </h3>

                <p className="text-[14px] text-[#808080]  archivo" style={{fontWeight:500}}>
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalTopBar;