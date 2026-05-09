type Feature = {
  title: string;
  subtitle: string;
  icon: string;
  bg: string;
};

const features: Feature[] = [
  {
    title: "TRUSTED EXPERTS",
    subtitle: "Professional Legal Guidance",
    icon: "/img/img15.png",
    bg: "bg-[#FFFFFF]",
  },
  {
    title: "CLIENT FIRST",
    subtitle: "Clear & Honest Support",
    icon: "/img/img14.png",
    bg: "bg-[#F9F8F8]",
  },
  {
    title: "PROVEN SUPPORT",
    subtitle: "Focused on Your Rights",
    icon: "/img/img16.png",
    bg: "bg-[#F2F0F0]",
  },
];

const LegalTopBar = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className={`
                flex items-center gap-4
                px-6 py-5
                ${item.bg}
                md:bg-white
                border-t border-[#949393]
                lg:border-transparent
              `}
            >
              {/* Icon */}
              <div className="flex items-center justify-center shrink-0">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-16 h-14 object-contain"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-[16px] md:text-[20px] font-bold tracking-wide text-[#001025] archivo" style={{ fontWeight: 500 }}> {item.title} </h3>
                <p className="text-[12px] md:text-[14px] text-[#808080] archivo" style={{ fontWeight: 500 }}> {item.subtitle} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalTopBar;