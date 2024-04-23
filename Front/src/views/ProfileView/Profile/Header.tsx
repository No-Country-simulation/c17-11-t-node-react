import Profile_owner from "../../../assets/dueño-mascota1.webp";
export const Header = () => {
  return (
    <div>
      <div className="absolute right-12 mt-4 rounded">
        <div
          x-show="openSettings"
          className="bg-white absolute hidden right-0 w-40 py-2 mt-1 border border-gray-200 shadow-2xl"
        >
          <div className="py-2 border-b">
            <p className="text-gray-400 text-xs px-6 uppercase mb-1">
              Settings
            </p>
            <button className="w-full flex items-center px-6 py-1.5 space-x-2 hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                ></path>
              </svg>
              <span className="text-sm text-gray-700">Share Profile</span>
            </button>
            <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                ></path>
              </svg>
              <span className="text-sm text-gray-700">Block User</span>
            </button>
            <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="text-sm text-gray-700">More Info</span>
            </button>
          </div>
          <div className="py-2">
            <p className="text-gray-400 text-xs px-6 uppercase mb-1">
              Feedback
            </p>
            <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                ></path>
              </svg>
              <span className="text-sm text-gray-700">Report</span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[250px] bg-amber-500"></div>
      <div className="flex flex-col items-center -mt-20">
        <img
          src={Profile_owner}
          className="w-40 border-4 border-white rounded-full"
        />
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-2xl">Amanda Ross</p>
          <span className="bg-blue-500 rounded-full p-1" title="Verified">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-100 h-2.5 w-2.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </span>
        </div>
        <p className="text-sm text-gray-500">New York, USA</p>
        <form action="">
          <p style={{ direction: "rtl", unicodeBidi: "bidi-override" }}>
            <input
              className="hidden "
              id="radio1"
              type="radio"
              name="estrellas"
              value="5"
            />
            <label className="text-gray-400" htmlFor="radio1">
              ★
            </label>
            <input
              className="hidden "
              id="radio2"
              type="radio"
              name="estrellas"
              value="4"
            />
            <label className="text-gray-400" htmlFor="radio2">
              ★
            </label>
            <input
              className="hidden "
              id="radio3"
              type="radio"
              name="estrellas"
              value="3"
            />
            <label className="text-gray-400" htmlFor="radio3">
              ★
            </label>
            <input
              className="hidden "
              id="radio4"
              type="radio"
              name="estrellas"
              value="2"
            />
            <label className="text-gray-400" htmlFor="radio4">
              ★
            </label>
            <input
              className="hidden "
              id="radio5"
              type="radio"
              name="estrellas"
              value="1"
            />
            <label className="text-gray-400" htmlFor="radio5">
              ★
            </label>
          </p>
        </form>
      </div>
      <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
        <div className="flex items-center space-x-4 mt-2">
          <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Message</span>
          </button>
        </div>
      </div>
    </div>
  );
};