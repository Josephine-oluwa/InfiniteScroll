import { Link } from "react-router-dom";
import pix from "../../assets/photo.jpg";

const Register = () => {
  return (
    <div className="w-full flex justify-center items-center h-[100vh]">
      <div className="flex flex-col  justify-center">

        {}
        <div className="flex flex-col items-center">
          <img
            className="w-[100px] h-[100px] border-[50%] object-cover rounded-[50%] border-[purple] border-[4px]"
            src={pix}
          />
          <label
            className="py-2 px-8 my-4 bg-purple-500 text-purple-200 rounded-md hover:scale-[1.02] hover:cursor-pointer duration-300 transition-all"
            htmlFor="image"
          >
            upload Image
          </label>
          <input
            className="hidden"
            placeholder="image"
            id="image"
            type="file"
            accept="image/png, image/jpeg, image/jpg"
          />
        </div>
        <div className="flex flex-col items-start">
          <label className="text-[12px] font-semibold">Enter Name</label>
          <input
            type="text"
            className="w-[300px] border p-2 text-[14px] rounded "
            placeholder="Enter your Name"
          />
          <label className="text-[12px] font-semibold w-[300px] flex justify-end text-rose-300 ">
            error
          </label>
        </div>
        <div className="flex flex-col items-start">
          <label className="text-[12px] font-semibold">Enter Email</label>
          <input
            type="text"
            className="w-[300px] border p-2 text-[14px] rounded "
            placeholder="Enter your Email"
          />
          <label className="text-[12px] font-semibold w-[300px] flex justify-end text-rose-300 ">
            error
          </label>
        </div>
        <div className="flex flex-col items-start">
          <label className="text-[12px] font-semibold">Enter Password</label>
          <input
            type="text"
            className="w-[300px] border p-2 text-[14px] rounded "
            placeholder="Enter your Password"
          />
          <label className="text-[12px] font-semibold w-[300px] flex justify-end text-rose-300 ">
            error
          </label>
        </div>
        <div className="flex flex-col items-start">
          <label className="text-[12px] font-semibold">Enter Confirm Password</label>
          <input
            type="text"
            className="w-[300px] border p-2 text-[14px] rounded "
            placeholder="Repeat Password"
          />
          <label className="text-[12px] font-semibold w-[300px] flex justify-end text-rose-300 ">
            error
          </label>
        </div>
        <label
          className="py-2 px-8 my-4 bg-purple-500 text-purple-200 rounded-md hover:scale-[1.02] hover:cursor-pointer duration-300 transition-all justify-center flex"
          htmlFor="image"
        >
          upload Image
        </label>

        <div className="my-4">
          <hr />
        </div>
        <div className="mt-4">
          <div className="flex flex-col items-center w-[300px] text-[12px]">
            <div>Already have an account</div>
            <Link to="/sign-in">
              <span className="font-bold text-purple-500 hover:cursor-pointer duration-300 decoration-none">
                Please Sign in here
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;