const Contact = () => {
  return (
    <>
      {/* <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
      <h1 className="text-7xl">Contact USSSSSSSS</h1>
    </div> */}
      <div className="flex flex-col items-center min-h-screen py-10 dark:bg-[#0d121cf9]">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl text-orange-600 dark:text-orange-500 font-semibold tracking-wide uppercase">
              Contact Us
            </h2>
            <p className="mt-1 text-4xl leading-10 font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:leading-none lg:text-6xl">
              Get in touch
            </p>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              We are a creative agency focused on building brands and digital
              products.
            </p>
          </div>
          <div>
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6 md:space-y-0 space-y-6 mt-10">
              <div className="w-full px-4 py-6 space-y-2 bg-white dark:bg-gray-900 rounded-lg shadow-md border dark:border-gray-600">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Email
                </h4>
                <div className=" w-full">
                  <input
                    type="text"
                    className="w-full p-4 text-gray-700 placeholder:dark:text-gray-400 outline-none rounded-lg border-2 dark:border-gray-600 dark:bg-gray-800"
                    placeholder="Enter your email"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Description
                </h4>
                <div className=" w-full">
                  <textarea
                    rows={10}
                    type="text"
                    className="w-full p-4 rounded-lg text-gray-700 border-2 dark:border-gray-600 dark:bg-gray-800 outline-none placeholder:dark:text-gray-400"
                    placeholder="Enter your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-1/4 dark:text-white border-2 border-gray-600 px-4 py-2 rounded-lg font-medium text-lg hover:bg-gray-800 hover:text-white hover:dark:text-gray-800 dark:hover:bg-gray-200 active:text-white active:scale-95 duration-150"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
