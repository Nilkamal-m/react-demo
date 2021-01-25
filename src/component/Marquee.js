import React from "react";

const Marquee = () => {
  return (
    <marquee behavior="scroll" direction="left">
      <font color="#08088A">
        <strong>महत्वपूर्ण घोषणा:</strong>
      </font>
      <font color="#FF4000">
        <strong>
          भारतीय रेलवे माल गोदाम श्रमिक संघ यह घोषणा कर रहा है कि{" "}
        </strong>
      </font>
      <font color="#31B404">
        <strong>WWW.BRMGSS.ORG </strong>
      </font>
      <font color="#FF4000">
        <strong>
          हमारी एकमात्र आधिकारिक वेबसाइट है। कोई अन्य वेबसाइट जो भारतीय रेलवे
          माल गोदाम श्रमिक संघ के बारे में जानकारी दिखा रही है, वह नकली है, और
          हमारा संघ ऐसे वेबसाइट प्रकाशन के खिलाफ कानूनी कार्रवाई करेगा।
        </strong>
      </font>
    </marquee>
  );
};

export default Marquee;
