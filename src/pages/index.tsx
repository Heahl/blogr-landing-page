import Dropdown from "@/components/Dropdown";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [connectDropdownOpen, setConnectDropdownOpen] = useState(false);

  const toggleProductDropdown = () => {
    setProductDropdownOpen(!productDropdownOpen);
    setCompanyDropdownOpen(false);
    setConnectDropdownOpen(false);
  };

  const toggleCompanyDropdown = () => {
    setCompanyDropdownOpen(!companyDropdownOpen);
    setProductDropdownOpen(false);
    setConnectDropdownOpen(false);
  };

  const toggleConnectDropdown = () => {
    setConnectDropdownOpen(!connectDropdownOpen);
    setProductDropdownOpen(false);
    setCompanyDropdownOpen(false);
  };

  // Styles
  const h1Style = "text-center text-5xl leading-snug tracking-wide text-white";
  const h3Style =
    "text-very-dark-blue md:text-left md:mx-0 mx-16 mt-14 mb-8 text-center text-4xl font-medium";
  const pStyle =
    "text-very-dark-gray-blue leading-relaxed md:text-left text-center text-2xl font-light";
  const pWhiteStyle = "text-white text-center text-2xl font-light";
  const liStyle =
    "text-footer-text hover:underline text-center md:text-left hover:cursor-pointer text-xl font-light";

  return (
    <>
      <Head>
        <title>Blogr</title>
        <meta name="description" content="blogr-landing-page" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main className="font-overpass relative flex min-h-screen flex-col items-center justify-start overflow-hidden">
        {/* Navigation Bar */}
        <div className="absolute z-20 flex h-48 w-full items-center justify-between bg-transparent px-8 md:px-16 lg:px-24">
          {/* Logo + Desktop Menu */}
          <div className="flex h-full w-full items-end justify-start pb-12">
            <Image
              src={"/images/logo.svg"}
              width={32}
              height={24}
              alt="Logo"
              className="flex h-12 w-auto"
            />
            {/* Desktop Buttons */}
            <div className="hidden h-full w-full items-end justify-start gap-8 pb-1 pl-10 md:flex">
              {/* Product Dropdown Desktop */}
              <div
                className="flex h-full items-end"
                onMouseEnter={toggleProductDropdown}
                onMouseLeave={toggleProductDropdown}
              >
                <Dropdown
                  isOpen={productDropdownOpen}
                  title="Product"
                  items={[
                    "Overview",
                    "Pricing",
                    "Marketplace",
                    "Features",
                    "Integrations",
                  ]}
                  isMobile={false}
                  arrowSrc="/images/icon-arrow-light.svg"
                  toggleDropdown={toggleProductDropdown}
                  titleClassNames="text-white hover:underline"
                />
              </div>
              <div
                className="flex h-full items-end"
                onMouseEnter={toggleCompanyDropdown}
                onMouseLeave={toggleCompanyDropdown}
              >
                <Dropdown
                  isOpen={companyDropdownOpen}
                  title="Company"
                  items={["About", "Team", "Blog", "Careers"]}
                  isMobile={false}
                  arrowSrc="/images/icon-arrow-light.svg"
                  toggleDropdown={toggleCompanyDropdown}
                  titleClassNames="text-white hover:underline"
                />
              </div>
              <div
                className="flex h-full items-end"
                onMouseEnter={toggleConnectDropdown}
                onMouseLeave={toggleConnectDropdown}
              >
                <Dropdown
                  isOpen={connectDropdownOpen}
                  title="Connect"
                  items={["Contact", "Newsletter", "LinkedIn"]}
                  isMobile={false}
                  arrowSrc="/images/icon-arrow-light.svg"
                  toggleDropdown={toggleConnectDropdown}
                  titleClassNames="text-white hover:underline"
                />
              </div>
            </div>
          </div>
          {/* Login + Mobile Menu */}
          {/* Mobile Menu */}
          <div
            className="flex h-full w-1/2 items-end justify-end pb-16 md:hidden"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
            }}
          >
            {mobileMenuOpen ? (
              <Image
                src={"/images/icon-close.svg"}
                width={32}
                height={32}
                alt="Close Icon"
                className="block h-8 w-auto md:hidden"
              />
            ) : (
              <Image
                src={"/images/icon-hamburger.svg"}
                width={32}
                height={32}
                alt="Menu Icon"
                className="block h-7 w-auto md:hidden"
              />
            )}
          </div>
          {/* Login Buttons */}
          <div className="hidden h-full w-full items-end justify-end gap-4 pb-10 md:flex">
            <button className="h-16 rounded-full px-12 text-lg font-medium text-white">
              Login
            </button>
            <button className="text-light-red h-16 rounded-full bg-white px-12 text-lg font-medium hover:bg-white/30 hover:text-white">
              Sign Up
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-44 z-20 flex w-[90vw] flex-col items-center justify-center rounded-lg bg-white py-10 shadow-2xl">
            {/* Mobile Dropdowns */}
            <div className="my-4 w-full" onClick={toggleProductDropdown}>
              <Dropdown
                isOpen={productDropdownOpen}
                title="Product"
                items={[
                  "Overview",
                  "Pricing",
                  "Marketplace",
                  "Features",
                  "Integrations",
                ]}
                isMobile={true}
                arrowSrc="/images/icon-arrow-dark.svg"
              />
            </div>
            <div className="my-4 w-full" onClick={toggleCompanyDropdown}>
              <Dropdown
                isMobile={true}
                isOpen={companyDropdownOpen}
                title="Company"
                items={["About", "Team", "Blog", "Careers"]}
                arrowSrc="/images/icon-arrow-dark.svg"
              />
            </div>
            <div className="my-4 w-full" onClick={toggleConnectDropdown}>
              <Dropdown
                isMobile={true}
                isOpen={connectDropdownOpen}
                title="Connect"
                items={["Contact", "Newsletter", "LinkedIn"]}
                arrowSrc="/images/icon-arrow-dark.svg"
              />
            </div>
            <div className="border-footer-bg/10 my-4 w-[90%] rounded-full border-b-2" />
            {/* Login Buttons */}
            <div className="mt-4 flex w-[90%] flex-col items-center justify-start gap-2">
              <button className="h-16 w-44 text-2xl">Login</button>
              <button className="from-very-light-red to-light-red hover:bg-very-light-red h-16  w-44 rounded-full bg-gradient-to-r text-2xl text-white">
                Sign Up
              </button>
            </div>
          </div>
        )}
        {/* Hero Element */}
        <div
          className="from-very-light-red to-light-red relative flex h-[90vh] w-screen flex-col gap-16 overflow-hidden bg-gradient-to-br px-12 pt-32 md:bg-gradient-to-r md:px-16 lg:px-24"
          style={{ borderRadius: "0 0 0 30vw" }}
        >
          <Image
            className="absolute left-0 top-0 z-0 h-screen w-auto translate-x-40 translate-y-28 scale-[360%] object-contain md:hidden"
            src={"/images/bg-pattern-intro-mobile.svg"}
            width={100}
            height={100}
            alt="Mobile Hero Section"
          />
          <Image
            className="absolute left-0 top-0 z-0 hidden h-screen w-auto translate-x-40 translate-y-28 scale-[360%] object-contain md:block"
            src={"/images/bg-pattern-intro-desktop.svg"}
            height={100}
            width={100}
            alt="Desktop Hero Section"
          />
          {/* Hero Text */}
          <div className="text-white-text z-10 mt-40 flex h-1/3 w-full flex-col justify-center gap-8">
            <h1 className={`${h1Style}`}>A modern publishing platform</h1>
            <p className="text-center text-2xl font-light">
              Grow your audience and build your online brand
            </p>
          </div>
          {/* Hero Buttons */}
          <div className="z-10 flex items-center justify-center gap-8 text-xl">
            <button className="text-light-red hover:bg-very-light-red flex h-16 w-44 items-center justify-center rounded-full bg-white py-2 text-xl font-semibold hover:text-white">
              Start for Free
            </button>
            <button className="py2 hover:text-light-red h-16 w-44 rounded-full border-2 border-white bg-transparent font-semibold text-white hover:bg-white">
              Learn More
            </button>
          </div>
        </div>
        {/* Designed Element */}
        <div className="relative z-10 flex flex-col items-center justify-center bg-white pb-0 pt-32 md:pb-40 md:pt-32">
          {/* Designed Header */}
          <h2 className="text-very-dark-gray-blue text-4xl font-medium md:mb-24 md:text-6xl">
            Designed for the future
          </h2>
          <div className="relative z-10 flex flex-col items-center justify-center gap-20 bg-white pb-20 tracking-wide md:flex-row-reverse md:py-0">
            {/* Designed Image */}
            <div className="h-full w-1/2" />
            <Image
              className="absolute right-0 top-1/4 z-0 hidden h-1/2 w-auto translate-x-32 scale-150 md:block md:h-full md:max-h-[380px] md:-translate-y-40 lg:h-2/3 lg:max-h-[480px] xl:h-auto xl:max-h-[650px] xl:w-2/5"
              src={"/images/illustration-editor-desktop.svg"}
              width={100}
              height={100}
              alt="Editor Illustration"
            />
            <Image
              className="block w-screen scale-110 md:hidden"
              src={"/images/illustration-editor-mobile.svg"}
              width={100}
              height={100}
              alt="Editor Illustration"
            />
            {/* Designed Texts */}
            <div className="flex h-full flex-col px-8 md:w-1/2">
              {/* Introducing Text */}
              <h3 className={`${h3Style}`}>Introducing an extensible editor</h3>
              <p className={`${pStyle}`}>
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
              {/* Robust Content Management Text */}
              <h3 className={`${h3Style}`}>Robust content management</h3>
              <p className={`${pStyle} mb-[70vw] md:mb-0`}>
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you&apos;re in full control.
              </p>
            </div>
          </div>
        </div>
        {/* State of the Art Infrastructure */}
        <div className="from-very-dark-gray-blue to-very-dark-desaturated-blue md:rounded-smallTwoRoundedDiv rounded-bigTwoRoundedDiv relative flex h-[100vh] flex-col items-center justify-between bg-gradient-to-br pb-10 md:h-[50vh] md:flex-row md:bg-gradient-to-r">
          {/* BG Circles */}
          <Image
            className="right-1/5 absolute top-0 z-0 h-auto w-screen -translate-y-32 scale-[160%] md:w-[50vw] md:-translate-y-80"
            src={"/images/bg-pattern-circles.svg"}
            height={100}
            width={100}
            alt="BG circles"
          />
          {/* Image 1 */}
          <div className="z-20 h-1/2 w-full -translate-y-1/2 md:h-auto md:w-1/2 md:translate-y-7">
            <Image
              className="block w-full scale-105"
              src={"/images/illustration-phones.svg"}
              width={100}
              height={100}
              alt="Phones Illustration"
            />
          </div>
          <div className="mx-12 mt-24 flex h-1/2 -translate-y-28 flex-col gap-8 md:mr-28 md:h-auto md:w-1/2 md:-translate-y-0 ">
            {/* Header */}
            <h1
              className={`${h1Style} font-semibold tracking-normal md:text-left md:text-5xl`}
            >
              State of the Art Infrastructure
            </h1>
            {/* Text */}
            <p
              className={`${pWhiteStyle} leading-relaxed text-white/70 md:text-left`}
            >
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>
        {/* More Marketing */}
        <div className="relative z-10 flex flex-col items-center justify-center bg-white py-10 md:py-32 md:pb-40">
          {/* Image */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-20 bg-white py-40 tracking-wide md:flex-row md:py-0 md:pb-28 ">
            <div className="h-full md:w-1/2" />
            <Image
              className="absolute left-0 top-1/4 z-0 hidden h-1/2 w-auto -translate-x-32 scale-150 md:block md:max-h-[380px] lg:h-2/3 lg:max-h-[480px] xl:h-4/5 xl:max-h-[550px]"
              src={"/images/illustration-laptop-desktop.svg"}
              width={100}
              height={100}
              alt="Laptop Illustration"
            />
            <Image
              className="block w-screen scale-[140%] md:hidden"
              src={"/images/illustration-laptop-mobile.svg"}
              width={100}
              height={100}
              alt="Laptop Illustration"
            />
            {/* Texts */}
            <div className="flex h-full flex-col px-8 md:w-1/2">
              {/* Free, Open, Simple */}
              {/* Header */}
              <h3 className={`${h3Style}`}>Free, open, simple</h3>
              {/* Text */}
              <p className={`${pStyle}`}>
                Blogr is a free and open source application backed by a large
                community of helpful developers. It supports features such as
                code syntax highlighting, RSS feeds, social media integration,
                third-party commenting tools, and works seamlessly with Google
                Analytics. The architecture is clean and is relatively easy to
                learn.
              </p>
              {/* Powerful tooling */}
              {/* Header */}
              <h3 className={`${h3Style}`}>Powerful tooling</h3>
              {/* Text */}
              <p className={`${pStyle}`}>
                Batteries included. We built a simple and straightforward CLI
                tool that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites.
              </p>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="bg-footer-bg rounded-bigOneRoundedDiv md:rounded-smallOneRoundedDiv flex w-screen flex-col items-center justify-center gap-14 py-20 md:flex-row md:items-start md:justify-evenly">
          {/* Logo */}
          <Image
            className="my-10 h-14 w-auto md:-translate-y-3/4"
            src={"/images/logo.svg"}
            height={100}
            width={100}
            alt="Logo"
          />
          {/* Product Section */}
          <div className="flex flex-col">
            <h3 className="mb-6 text-center text-2xl font-medium text-white md:text-left">
              Product
            </h3>
            <ul className="mb-8 flex flex-col gap-2">
              <li className={`${liStyle}`}>Overview</li>
              <li className={`${liStyle}`}>Pricing</li>
              <li className={`${liStyle}`}>Marketplace</li>
              <li className={`${liStyle}`}>Features</li>
              <li className={`${liStyle}`}>Integrations</li>
            </ul>
          </div>
          {/* Company Section */}
          <div className="flex flex-col">
            <h3 className="mb-6 text-center text-2xl font-medium text-white md:text-left">
              Company
            </h3>
            <ul className="mb-8 flex flex-col gap-2">
              <li className={`${liStyle}`}>About</li>
              <li className={`${liStyle}`}>Team</li>
              <li className={`${liStyle}`}>Blog</li>
              <li className={`${liStyle}`}>Careers</li>
            </ul>
          </div>
          {/* Connect Section */}
          <div className="flex flex-col">
            <h3 className="mb-6 text-center text-2xl font-medium text-white md:text-left">
              Connect
            </h3>
            <ul className="mb-8 flex flex-col gap-2">
              <li className={`${liStyle}`}>Contact</li>
              <li className={`${liStyle}`}>Newsletter</li>
              <li className={`${liStyle}`}>LinkedIn</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
