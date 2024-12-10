import Link from "next/link";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-28 mx-auto mb-12 px-8 sm:px-12 pb-24 py-4 text-center">
        <h1 className="text-secondary-500 mb-4 text-5xl sm:text-6xl lg:text-8xl lg:leading-normal font-extrabold">
          404
        </h1>
        <h2 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl lg:leading-normal font-semibold">
          OOPS! PAGE NOT FOUND.
        </h2>
        <p className="text-[#ADB7BE mb-6 text-lg sm:text-xl">
          The page you're looking for does not exist.
        </p>
        <button className="mt-2 px-6 py-3 w-fit rounded-full sm:mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white text-base sm:text-lg lg:text-xl">
          <Link href="/">Back to Home</Link>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
