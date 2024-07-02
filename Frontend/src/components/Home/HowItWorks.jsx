import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobZee Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create an Account</p>
              <p>
                Job Seeker and Job Post can create account with basic user
                information
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
                Job aspirants can search Job which will provide them with the
                relevant result
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Send your resume</p>
              <p>
                Job Seeker can apply for Job which is a potential match for
                their profile
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
