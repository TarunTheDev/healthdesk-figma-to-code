import React from "react";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { Input } from "../../ui/input";
import { Badge } from "../../ui/badge";
import { ScrollArea, ScrollBar } from "../../ui/scroll-area";

const navigationItems = [
  { label: "Home", href: "#" },
  { label: "Shop", href: "#" },
  { label: "About Us", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact Us", href: "#" },
];

const trustBadges = [
  { label: "All Natural" },
  { label: "Cruelty-Free" },
  { label: "Money-back\nGuarantee" },
  { label: "Giving back" },
  { label: "Non-GMO" },
];

const healthCategories = [
  {
    title: "Weight Loss",
    description: "Shop trusted weight loss products that help boost metabolism and support your journey to a healthier you",
    icon: "https://c.animaapp.com/mim0vhi0ToxdUJ/img/group-9422-7.png",
    bgColor: "bg-[#edf9f6]",
  },
  {
    title: "Nerve Pain",
    description: "Find relief with nerve pain products formulated to soothe discomfort and support healthy nerve function",
    icon: "https://c.animaapp.com/mim0vhi0ToxdUJ/img/group-9422-1.png",
    bgColor: "bg-[#edf9f6]",
  },
  {
    title: "Skin Care",
    description: "Explore premium skincare products that nourish, protect, and enhance your natural glow",
    icon: "https://c.animaapp.com/mim0vhi0ToxdUJ/img/group-9422-2.png",
    bgColor: "bg-[#edf9f6]",
  },
  {
    title: "Men's Health",
    description: "Discover men's health products designed to boost energy, strength, and overall well-being.",
    icon: "https://c.animaapp.com/mim0vhi0ToxdUJ/img/group-9422-3.png",
    bgColor: "bg-[#edf9f6]",
  },
  {
    title: "Women's Health",
    description: "Explore women's health products that support hormonal balance, vitality, and overall wellness",
    icon: "https://c.animaapp.com/mim0vhi0ToxdUJ/img/group-9422-4.png",
    bgColor: "bg-[#edf9f6]",
  },
  {
    title: "Dental",
    description: "Shop dental care products that keep your smile bright, healthy, and confident",
    icon: "https://c.animaapp.com/mim0vhi0ToxdUJ/img/group-9422-5.png",
    bgColor: "bg-[#edf9f6]",
  },
  {
    title: "Memory",
    description: "Discover memory support products that help enhance focus, clarity, and cognitive performance",
    icon: "https://c.animaapp.com/mim0vhi0ToxdUJ/img/group-9422-6.png",
    bgColor: "bg-[#edf9f6]",
  },
];

const bestSellers = [
  {
    name: "Dent Pure",
    rating: 5,
    image: "https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-17.png",
  },
  {
    name: "True Fem",
    rating: 5,
    image: "https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-19.png",
  },
  {
    name: "Vita Renew",
    rating: 5,
    image: "https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-21.png",
  },
  {
    name: "ProstaZen",
    rating: 5,
    image: "https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-29.png",
  },
  {
    name: "Nerve Freedom",
    rating: 5,
    image: "https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-31.png",
  },
];

const trustLogos = [
  "https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-42.png",
  "https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-43.png",
  "https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-44.png",
  "https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-45.png",
  "https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-46.png",
];

const charityLogos = [
  "https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-47.png",
  "https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-48.png",
  "https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-49.png",
  "https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-50.png",
  "https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-51.png",
];

const testimonials = [
  {
    product: "TestoBites",
    image: "https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-17.png",
    rating: 5,
    review: "TestoBites has been a game changer when it comes to my stamina and energy levels. I can truly feel a difference in my sex drive and virility as well. Highly recommended.",
    author: "Ryan R.",
  },
  {
    product: "Vita Renew",
    image: "https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-19.png",
    rating: 5,
    review: "My pain therapist recommended this product to me and I was surprised by how well it worked. I can see a marked improvement in my Skin Care.",
    author: "Jamie Fields",
  },
  {
    product: "Nerve Freedom",
    image: "https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-21.png",
    rating: 5,
    review: "I have been an RN for 20 years and love helping people find solutions to their health issues.NF Product is the best natural product for neuropathy pain hands down.",
    author: "Anonymous",
  },
  {
    product: "Tinnitus 911",
    image: "https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-35.png",
    rating: 5,
    review: "With just over 3 weeks of use, I could feel the ringing in my ears come down drastically, helping me be more productive through the day & sleep better too.",
    author: "Jackson K.",
  },
  {
    product: "Blood Pressure 911",
    image: "https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-37.png",
    rating: 5,
    review: "I have a family history of high blood pressure. I thought I was doomed. But your Blood Pressure 911 turned everything around for me. I'm now looking at 124/69 and feeling great!",
    author: "Conrad T",
  },
  {
    product: "Prostate 911",
    image: "https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-39.png",
    rating: 5,
    review: "Amazing product and one that works as promised! It has really helped me get control over my prostate problems and now I can sleep through the night without issue.",
    author: "Anonymous",
  },
  {
    product: "Testo 911",
    image: "https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-29.png",
    rating: 5,
    review: "Testo 911 has been a game changer when it comes to my stamina and energy levels. I can truly feel a difference in my sex drive and virility as well. Highly recommended.",
    author: "Ryan R.",
  },
  {
    product: "Varicose 911",
    image: "https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-31.png",
    rating: 5,
    review: "My pain therapist recommended this product to me and I was surprised by how well it worked. I can see a marked improvement in my varicose vein issues. No more burning and swelling too!",
    author: "Jamie Fields",
  },
  {
    product: "Nerve Control 911",
    image: "https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-33.png",
    rating: 5,
    review: "I have been an RN for 20 years and love helping people find solutions to their health issues. Nerve Control 911 is the best natural product for neuropathy pain hands down.",
    author: "Anonymous",
  },
];

const socialIcons = [
  { icon: "https://c.animaapp.com/mim0vhi0ToxdUJ/img/facebook.svg", alt: "Facebook" },
  { icon: "https://c.animaapp.com/mim0vhi0ToxdUJ/img/twitter.svg", alt: "Twitter" },
  { icon: "https://c.animaapp.com/mim0vhi0ToxdUJ/img/telegram.svg", alt: "Telegram" },
  { icon: "https://c.animaapp.com/mim0vhi0ToxdUJ/img/linkedin.svg", alt: "LinkedIn" },
];

const footerProducts = [
  ["Testobites", "Vita Renew", "Audizen", "Nerve Flow", "Uro flow"],
  ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "Memof"],
  ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "Derma care"],
  ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "TestoZen"],
  ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "True Fem"],
];

const featureBadges = [
  { label: "Results-Driven" },
  { label: "All-Natural" },
  { label: "Non-GMO" },
  { label: "Cruelty-Free" },
];

export const HealthDeskClinic = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen" data-model-id="0:1533">
<header className="w-full bg-[#084688] py-1.5 px-4 translate-y-[-1rem] animate-fade-in opacity-0">
<p className="[font-family:'Inter',Helvetica] font-normal text-white text-[19.2px] tracking-[1.20px] leading-[26.4px] text-center">
Free Shipping Across U.S.A. On All Orders
        </p>
</header>
<nav className="w-full bg-white shadow-[0px_3.6px_4.8px_#0000001a] py-4 px-[61px] flex items-center justify-between translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
<img
          className="w-[100px] h-[78px]"
          alt="Health Desk Clinic Logo"
          src="https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-52.png"
        />
<ul className="flex items-center gap-[30px]">
{navigationItems.map((item, index) => (
            <li key={index}>
<a
                href={item.href}
                className="[font-family:'Inter',Helvetica] font-normal text-black text-[19.2px] tracking-[0.60px] leading-[24.0px] hover:text-[#1a69be] transition-colors"
              >
{item.label}
              </a>
</li>
))}
        </ul>
<div className="flex items-center gap-4">
<div className="w-[52px] h-6 border-l-[1.2px] border-black" />
<img
            className="w-5 h-[22px]"
            alt="Search"
            src="https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-53.png"
          />
</div>
</nav>
<section className="relative w-full px-[72px] py-[110px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
<div className="flex items-center justify-between gap-8">
<div className="flex-1 max-w-[642px]">
<h1 className="[font-family:'Inter',Helvetica] font-bold text-black text-[50.4px] tracking-[1.20px] leading-[57.6px] mb-[10.8px]">
Health Desk Clinic: <br />
All Natural Supplements
            </h1>
<p className="[font-family:'Inter',Helvetica] font-normal text-black text-[17.5px] tracking-[0.44px] leading-[24.5px] mb-6">
Health Care Desk is the premier choice for those seeking wellness through wholesome, superfood-enriched formulas that actually work. Our all-natural, organic health supplements are designed to give your body what it needs to thrive and optimize your health each day!
            </p>
<Button className="bg-[#1a69be] hover:bg-[#145a9e] text-white [font-family:'Inter',Helvetica] font-bold text-[21.6px] tracking-[0.60px] h-auto px-12 py-6 rounded-[47.99px]">
Shop Now
            </Button>
</div>
<div className="flex-1">
<img
              className="w-full max-w-[861px] h-auto"
              alt="Doctor with supplements"
              src="https://c.animaapp.com/mim0vhi0ToxdUJ/img/image.png"
            />
</div>
</div>
<div className="flex items-center justify-center gap-8 mt-12">
{trustBadges.map((badge, index) => (
            <div key={index} className="text-center">
<p className="[font-family:'Inter',Helvetica] font-medium text-[#1a69be] text-[21.6px] tracking-[0] leading-[25px] whitespace-pre-line">
{badge.label}
              </p>
</div>
))}
        </div>
</section>
<section className="w-full px-[76px] py-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
<h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-[43.2px] text-center tracking-[0.60px] leading-[54.0px] mb-8">
Nutrition Solutions
          <br /> for Your Complete Well-Being
        </h2>
<ScrollArea className="w-full">
<div className="flex gap-8 pb-4">
{healthCategories.map((category, index) => (
              <Card key={index} className={`${category.bgColor} min-w-[270px] rounded-[18.72px] shadow-[0px_18.72px_24.96px_-2.34px_#0208320a] border-0`}>
<CardContent className="p-[24.96px] flex flex-col gap-[18.72px]">
<img
                    className="w-[62.4px] h-[62.4px]"
                    alt={category.title}
                    src={category.icon}
                  />
<div className="flex flex-col gap-[9.36px]">
<h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-[18.7px] tracking-[0] leading-[16.4px]">
{category.title}
                    </h3>
<p className="[font-family:'Sora',Helvetica] font-normal text-second text-[10.9px] tracking-[0] leading-[15.6px]">
{category.description}
                    </p>
</div>
<Button className="w-full h-[43.68px] rounded-[78.01px] shadow-[0px_6.24px_17.94px_#4184f73d] bg-[linear-gradient(141deg,rgba(58,142,246,1)_0%,rgba(111,58,250,1)_100%)] hover:opacity-90 [font-family:'Sora',Helvetica] font-semibold text-white text-sm">
Buy now
                  </Button>
</CardContent>
</Card>
))}
          </div>
<ScrollBar orientation="horizontal" />
</ScrollArea>
</section>
<section className="w-full px-[76px] py-12">
<h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-[43.2px] tracking-[0.60px] leading-[54.0px] mb-4">
Our Best Sellers
        </h2>
<p className="[font-family:'Inter',Helvetica] font-normal text-black text-[22.2px] tracking-[0] leading-[28.8px] mb-8">
Formulated with science-backed all-natural ingredients, our unique supplements support holistic health, healing & wellness.
        </p>
<div className="flex items-center gap-8 mb-8">
{featureBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2">
{index > 0 && <div className="w-px h-12 bg-black" />}
              <p className="[font-family:'Inter',Helvetica] font-bold text-black text-[21.6px] tracking-[0.60px] leading-[24.0px]">
{badge.label}
              </p>
</div>
))}
        </div>
<div className="w-full max-w-[1286px]">
<div className="grid grid-cols-5 gap-4">
{bestSellers.map((product, index) => (
            <div key={index} className="flex flex-col items-center">
<img
                className="w-full h-auto mb-4"
                alt={product.name}
                src={product.image}
              />
<h3 className="[font-family:'Inter',Helvetica] font-bold text-black text-[22.8px] tracking-[0] leading-[31.2px] text-center">
{product.name}
              </h3>
<div className="flex gap-1 my-4">
{[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    className="w-[23.54px] h-[23.54px]"
                    alt="Star"
                    src="https://c.animaapp.com/mim0vhi0ToxdUJ/img/star-purple500.svg"
                  />
))}
              </div>
<Button variant="outline" className="w-[161px] h-[53px] border-[1.2px] border-[#1a69be] text-[#1a69be] hover:bg-[#1a69be] hover:text-white [font-family:'Inter',Helvetica] font-normal text-[21.6px]">
Shop Now
              </Button>
</div>
))}
        </div>
        </div>
</section>
<section className="relative w-full h-[414px] my-12">
<img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Trust background"
          src="https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-12.png"
        />
<div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
<h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-4xl text-center tracking-[0.60px] leading-[43.2px] mb-4">
A Brand That You Can Trust
          </h2>
<p className="[font-family:'Inter',Helvetica] font-normal text-black text-[21.6px] tracking-[0.60px] leading-[32.4px] text-center max-w-[800px] mb-8">
Our results-driven supplements are made with premium & safe ingredients
          </p>
<div className="flex items-center gap-[76px]">
{trustLogos.map((logo, index) => (
              <img
                key={index}
                className="w-[83.97px] h-[62.38px]"
                alt={`Trust logo ${index + 1}`}
                src={logo}
              />
))}
          </div>
</div>
</section>
<section className="w-full px-[148px] py-12">
<h2 className="[font-family:'Inter',Helvetica] font-bold text-[43.2px] text-center tracking-[0.60px] leading-[54.0px] text-black mb-8">
Health Care Desk
          <br />
The Future Of Smart Health
        </h2>
<p className="[font-family:'Inter',Helvetica] font-light text-black text-[21.6px] tracking-[0.60px] leading-[31.2px] text-center mb-12">
At Health Care Desk, we are committed to producing supplements that harness the power of all-natural superfoods. Our products help support the body's natural processes, improving our customers' quality of life.
        </p>
<div className="grid grid-cols-2 gap-12 mb-12">
<img
            className="w-full h-auto"
            alt="Natural Components"
            src="https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-13.png"
          />
<div className="flex flex-col justify-center">
<h3 className="[font-family:'Inter',Helvetica] font-bold text-black text-[33.6px] tracking-[0] leading-[45.6px] mb-4">
100% Natural Components
            </h3>
<p className="[font-family:'Inter',Helvetica] font-medium text-black text-[21.6px] tracking-[0.60px] leading-[31.2px] mb-6">
Nature-Powered Wellness You Can Trust
            </p>
<p className="[font-family:'Inter',Helvetica] font-light text-black text-[21.6px] tracking-[0.60px] leading-[31.2px] mb-8">
We harness the goodness of nature to create supplements enriched with premium, research-backed superfood extracts. Each formula is carefully crafted to promote overall vitality and deliver proven health benefits. At Health Desk Care, we uphold the highest standards of quality, safety, and regulatory compliance, ensuring every product you choose is both effective and trustworthy.
            </p>
<Button variant="outline" className="w-60 h-[53px] border-[1.2px] border-[#1a69be] text-[#1a69be] hover:bg-[#1a69be] hover:text-white [font-family:'Inter',Helvetica] font-normal text-[21.6px]">
Learn More
            </Button>
</div>
</div>
<div className="grid grid-cols-2 gap-12 mb-12">
<div className="flex flex-col justify-center">
<h3 className="[font-family:'Inter',Helvetica] font-bold text-black text-[33.6px] tracking-[0] leading-[45.6px] mb-4">
Research-Backed Formulations
            </h3>
<p className="[font-family:'Inter',Helvetica] font-medium text-black text-2xl tracking-[0.60px] leading-[31.2px] mb-6">
Formulated with Clinically Tested Ingredients
            </p>
<p className="[font-family:'Inter',Helvetica] font-light text-black text-[21.6px] tracking-[0.60px] leading-[31.2px] mb-8">
We combine the expertise of our physicians with the latest health data and medical research, ensuring every supplement is thoughtfully formulated for maximum benefit.
            </p>
<Button variant="outline" className="w-60 h-[53px] border-[1.2px] border-[#1a69be] text-[#1a69be] hover:bg-[#1a69be] hover:text-white [font-family:'Inter',Helvetica] font-normal text-[21.6px]">
Learn More
            </Button>
</div>
<img
            className="w-full h-auto"
            alt="Research-Backed"
            src="https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-14.png"
          />
        </div>
<div className="grid grid-cols-2 gap-12">
<img
            className="w-full h-auto"
            alt="Eco-Conscious"
            src="https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-15.png"
          />
<div className="flex flex-col justify-center">
<h3 className="[font-family:'Inter',Helvetica] font-bold text-black text-[33.6px] tracking-[0] leading-[45.6px] mb-4">
Eco-Conscious Manufacturing
            </h3>
<p className="[font-family:'Inter',Helvetica] font-medium text-black text-2xl tracking-[0.60px] leading-[31.2px] mb-6">
Sustainable from Source to Shelf
            </p>
<p className="[font-family:'Inter',Helvetica] font-light text-black text-[21.6px] tracking-[0.60px] leading-[31.2px] mb-8">
Our supplements are crafted in certified facilities that meet and exceed industry standards — ensuring exceptional quality while minimizing environmental impact. Through eco-friendly processes and a commitment to reducing our carbon footprint, we create wellness solutions that are as good for the planet as they are for you.
            </p>
<Button variant="outline" className="w-60 h-[53px] border-[1.2px] border-[#1a69be] text-[#1a69be] hover:bg-[#1a69be] hover:text-white [font-family:'Inter',Helvetica] font-normal text-[21.6px]">
Learn More
            </Button>
</div>
</div>
</section>
<section className="relative w-full h-[516px]">
<img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Charitable Initiatives"
          src="https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-16.png"
        />
<div className="relative z-10 flex flex-col items-center justify-center h-full px-[69px]">
<h2 className="[font-family:'Inter',Helvetica] font-bold text-white text-[43.2px] tracking-[0.60px] leading-[54.0px] mb-2 text-center">
Our Charitable Initiatives
          </h2>
<h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-[43.2px] tracking-[0.60px] leading-[54.0px] mb-8 text-center">
Health Care Desk Gives Back
          </h3>
<p className="[font-family:'Inter',Helvetica] font-normal text-white text-[21.6px] tracking-[0.60px] leading-[32.4px] mb-12 text-center">
At Health Care Desk, a portion of our profits are committed to supporting charities and global health research initiatives.
          </p>
<div className="flex items-center gap-[60px]">
{charityLogos.map((logo, index) => (
              <img
                key={index}
                className="h-auto max-h-[87.57px]"
                alt={`Charity logo ${index + 1}`}
                src={logo}
              />
))}
          </div>
</div>
</section>
<section className="w-full px-[76px] py-16">
<h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-[43.2px] tracking-[0.60px] leading-[54.0px] mb-12 text-center">
Verified Customer Testimonials
        </h2>
<ScrollArea className="w-full">
<div className="flex gap-8 pb-4">
{testimonials.map((testimonial, index) => (
              <Card key={index} className="min-w-[443px] bg-white rounded-lg shadow-lg border-0 relative">
<CardContent className="p-0">
<img
                    className="absolute top-[-54px] left-7 w-[108px] h-[136px] z-10"
                    alt={testimonial.product}
                    src={testimonial.image}
                  />
<div className="pt-[78px] px-8 pb-8">
<h3 className="[font-family:'Inter',Helvetica] font-bold text-black text-[21.6px] tracking-[0.60px] leading-[31.2px] mb-4">
{testimonial.product}
                    </h3>
<div className="flex gap-1 mb-4">
{[...Array(5)].map((_, i) => (
                        <img
                          key={i}
                          className="w-[23.54px] h-[23.54px]"
                          alt="Star"
                          src="https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-40.png"
                        />
))}
                    </div>
<p className="[font-family:'Inter',Helvetica] font-light text-black text-[21.6px] tracking-[0.60px] leading-[31.2px] mb-6">
{testimonial.review}
                    </p>
<p className="[font-family:'Inter',Helvetica] font-normal text-black text-[21.6px] tracking-[0] leading-[31.2px]">
- {testimonial.author}
                    </p>
</div>
</CardContent>
</Card>
))}
          </div>
<ScrollBar orientation="horizontal" />
</ScrollArea>
</section>
<section className="w-full px-[76px] py-12">
<div className="flex justify-center mb-12">
<Button variant="outline" className="w-[206px] h-[43px] border-[1.2px] border-[#1a69be] text-[#1a69be] hover:bg-[#1a69be] hover:text-white [font-family:'Inter',Helvetica] font-normal text-[21.6px]">
Follow Us
          </Button>
</div>
<div className="flex justify-center gap-4">
{socialIcons.map((social, index) => (
            <a key={index} href="#" className="hover:opacity-80 transition-opacity">
<img
                className="w-10 h-10"
                alt={social.alt}
                src={social.icon}
              />
</a>
))}
        </div>
</section>
<section className="w-full bg-[#f2f3f5] py-16 px-[88px]">
<div className="grid grid-cols-3 gap-12">
<div>
<h3 className="[font-family:'Inter',Helvetica] font-medium text-black text-[28.8px] tracking-[0.60px] leading-[36.0px] mb-6">
Have a Question?
            </h3>
<p className="[font-family:'Inter',Helvetica] font-light text-black text-[21.6px] tracking-[0.60px] leading-[31.2px] mb-8">
Check out our FAQs where we answer the most commonly asked questions
            </p>
<Button variant="outline" className="w-[204px] h-[43px] border-[1.2px] border-[#1a69be] text-[#1a69be] hover:bg-[#1a69be] hover:text-white [font-family:'Inter',Helvetica] font-normal text-[19.2px]">
Read FAQs
            </Button>
</div>
<div>
<h3 className="[font-family:'Inter',Helvetica] font-medium text-black text-[28.8px] tracking-[0.60px] leading-[36.0px] mb-6">
Connect With Us
            </h3>
<p className="[font-family:'Inter',Helvetica] font-light text-black text-[21.6px] tracking-[0.60px] leading-[31.2px] mb-4">
Enjoy free shipping for all orders.
            </p>
<p className="[font-family:'Inter',Helvetica] font-bold text-black text-2xl tracking-[0.60px] leading-[38.4px]">
1-800-822-7777
            </p>
</div>
<div>
<h3 className="[font-family:'Inter',Helvetica] font-medium text-black text-[28.8px] tracking-[0.60px] leading-[36.0px] mb-4">
We're Social
            </h3>
<p className="[font-family:'Inter',Helvetica] font-light text-black text-[21.6px] tracking-[0.60px] leading-[31.2px]">
Like us, love us, follow us!
            </p>
</div>
</div>
</section>
<section className="w-full bg-phytagelaboratoriescomdenim py-[25px] px-[115px]">
<div className="max-w-[1170px] mx-auto">
<h3 className="[font-family:'Inter',Helvetica] font-medium text-white text-[43.2px] tracking-[0] leading-[48.0px] mb-2 text-center">
Let's Grow Together
          </h3>
<p className="[font-family:'Inter',Helvetica] font-normal text-white text-[21.6px] tracking-[0.60px] leading-[31.2px] mb-6 text-center">
We'll keep it simple. Only the news and updates you need.
          </p>
<div className="flex justify-center">
<div className="flex w-[585px]">
<Input
                placeholder="Please Enter Your Email"
                className="flex-1 h-[54px] bg-phytagelaboratoriescomtory-blue border-white text-phytagelaboratoriescomcatskill-white placeholder:text-phytagelaboratoriescomcatskill-white rounded-none [font-family:'Inter',Helvetica] font-normal text-base"
              />
<Button className="w-[146.25px] h-[54px] bg-white hover:bg-gray-100 text-black rounded-none [font-family:'Inter',Helvetica] font-semibold text-xl">
Submit
              </Button>
</div>
</div>
</div>
</section>
<footer className="w-full bg-neutral-50 py-12 px-[49px]">
<div className="grid grid-cols-5 gap-8 mb-8">
<div>
<img
              className="w-[206px] h-[63px] mb-6"
              alt="Footer Logo"
              src="https://c.animaapp.com/mim0vhi0ToxdUJ/img/image-41.png"
            />
<address className="[font-family:'Inter',Helvetica] font-normal text-[#5c5c5c] text-[17px] tracking-[0] leading-[25.5px] not-italic">
Address: 7823 Red Oak Trail, Austin, TX, 78745, United States
              <br />
Phone: (512) 555-2376
              <br />
Email: Ereforce@outlook.com
            </address>
</div>
<div className="border-l-[1.2px] border-black pl-8">
<h4 className="[font-family:'Inter',Helvetica] font-normal text-[#1a69be] text-[19.2px] tracking-[0] leading-[24.0px] mb-6">
Our Products
            </h4>
<ul className="space-y-2">
{footerProducts[0].map((product, index) => (
                <li key={index}>
<a href="#" className="[font-family:'Inter',Helvetica] font-normal text-[#5c5c5c] text-[16.8px] tracking-[0] leading-[24.0px] hover:text-[#1a69be] transition-colors">
{product}
                  </a>
</li>
))}
            </ul>
</div>
{footerProducts.slice(1).map((column, colIndex) => (
            <div key={colIndex}>
<ul className="space-y-2 mt-[35px]">
{column.map((product, index) => (
                  <li key={index}>
<a href="#" className="[font-family:'Inter',Helvetica] font-normal text-[#5c5c5c] text-[16.8px] tracking-[0] leading-[24.0px] hover:text-[#1a69be] transition-colors">
{product}
                    </a>
</li>
))}
              </ul>
</div>
))}
        </div>
</footer>
<section className="w-full bg-phytagelaboratoriescommercury py-[25px] px-0">
<div className="max-w-[1170px] mx-auto">
<p className="[font-family:'Inter',Helvetica] font-normal text-phytagelaboratoriescomscorpion text-[15.5px] text-center tracking-[0] leading-6 mb-4">
These statements have not been evaluated by the Food and Drug Administration.
            <br />
These products are not intended to diagnose, treat, cure or prevent any disease. Individual results may vary.
          </p>
<div className="w-[255px] h-9 mx-auto mb-8 bg-[url(https://c.animaapp.com/mim0vhi0ToxdUJ/img/credit-cards-accepted.png)] bg-cover bg-center" />
<div className="flex items-center justify-between">
<p className="[font-family:'Inter',Helvetica] font-normal text-phytagelaboratoriescomtundora text-[15.5px] text-center tracking-[0] leading-5">
© 2025, Health Desk Clinic. All Rights Reserved.
            </p>
<div className="flex items-center gap-2.5">
<a href="#" className="[font-family:'Inter',Helvetica] font-normal text-phytagelaboratoriescomtundora text-[15.9px] text-center tracking-[0] leading-5 hover:text-[#1a69be] transition-colors">
Terms And Conditions
              </a>
<span className="[font-family:'Inter',Helvetica] font-normal text-phytagelaboratoriescomtundora text-base text-center tracking-[0] leading-5">
|
              </span>
<a href="#" className="[font-family:'Inter',Helvetica] font-normal text-phytagelaboratoriescomtundora text-[15.9px] text-center tracking-[0] leading-5 hover:text-[#1a69be] transition-colors">
Privacy Policy
              </a>
<span className="[font-family:'Inter',Helvetica] font-normal text-phytagelaboratoriescomtundora text-base text-center tracking-[0] leading-5">
|
              </span>
<a href="#" className="[font-family:'Inter',Helvetica] font-normal text-phytagelaboratoriescomtundora text-[15.9px] text-center tracking-[0] leading-5 hover:text-[#1a69be] transition-colors">
Contact Us
              </a>
</div>
</div>
</div>
</section>
</div>
);
};
