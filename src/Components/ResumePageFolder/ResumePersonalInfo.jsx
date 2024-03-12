import PropTypes from "prop-types";
import { MdMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { calculateColorBrightness } from "../../util/colorUtils";
import "./ResumePersonalInfo.css";

const ResumePersonalInfo = ({ personalInfo, layout, color }) => {
  
  // Calculate the brightness of the background color
  const brightness = calculateColorBrightness(color);
  const textColor = brightness > 128 ? "#333" : "white";

  return (
    <div
      className={layout === "Top" ? "personal-info" : "leftRight-personal-info"}
      style={{
        transition: "0.1s all",
        backgroundColor: color,
        color: textColor,
      }}
    >
      <h1>{personalInfo.name}</h1>
      <div
        className={layout === "Top" ? "contact-info" : "leftRight-contact-info"}
        style={{ color: textColor }}
      >
        <span>
          <MdMail /> {personalInfo.email}
        </span>
        <span>
          <FaPhoneAlt /> {personalInfo.phoneNumber}
        </span>
        <span>
          <FaLocationDot /> {personalInfo.address}
        </span>
      </div>
    </div>
  );
};

ResumePersonalInfo.propTypes = {
  personalInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
  layout: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ResumePersonalInfo;
