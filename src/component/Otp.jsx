import { useState, useEffect } from "react";

function OTPInput({ onComplete }) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [activeInput, setActiveInput] = useState(0);

  const handleInputChange = (e, index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = e.target.value;
    setOtp(updatedOtp);

    if (e.target.value.length === 1) {
      setActiveInput(index + 1);
    }
  };

  useEffect(() => {
    if (activeInput === 4) {
      // onComplete(otp.join(""));
    } else {
      const input = document.getElementById(`otp-input-${activeInput}`);
      if (input) {
        input.focus();
      }
    }
  }, [activeInput, onComplete, otp]);

  return (
    <div>
      {otp.map((value, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          maxLength={1}
          value={value}
          onChange={(e) => handleInputChange(e, index)}
        />
      ))}
    </div>
  );
}
export default OTPInput;
