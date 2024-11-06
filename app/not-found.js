import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-center bg-[#121212]">
      <div>
        <h1 className="text-secondary-500 mb-4 text-5xl sm:text-6xl lg:text-8xl lg:leading-normal font-extrabold">
          404
        </h1>
        <h2 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-semibold">
          OOPS! PAGE NOT FOUND.
        </h2>
        <p className="text-[#ADB7BE mb-6 text-lg sm:text-xl lg:text-2xl">
          The page you're looking for does not exist.
        </p>
        <button className="px-6 py-3 w-fit rounded-full sm:mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white text-lg sm:text-xl lg:text-2xl">
          <Link href="/">Back to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
