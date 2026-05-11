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
    icon: "/img/legalTop2.png",
    bg: "bg-[#FFFFFF]",
  },
  {
    title: "CLIENT FIRST",
    subtitle: "Clear & Honest Support",
    icon: "/img/Legaltop1.png",
    bg: "bg-[#F9F8F8]",
  },
  {
    title: "PROVEN SUPPORT",
    subtitle: "Focused on Your Rights",
    icon: "/img/legalTop3.png",
    bg: "bg-[#F2F0F0]",
  },
];

const LegalTopBar = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 border-t border-[#949393] px-6 py-5 md:bg-white lg:border-transparent ${item.bg}`}
            >
              <div className="flex shrink-0 items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-14 w-16 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div>
                <h3
                  className="archivo text-[16px] font-bold tracking-wide text-[#001025] md:text-[20px]"
                  style={{ fontWeight: 500 }}
                >
                  {item.title}
                </h3>
                <p
                  className="archivo text-[12px] text-[#808080] md:text-[14px]"
                  style={{ fontWeight: 500 }}
                >
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
