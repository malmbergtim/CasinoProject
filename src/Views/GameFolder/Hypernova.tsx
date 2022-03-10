import styled from "styled-components";
import hyperNova from "../../images/Hypernova.jpg";

const image = { hyperNova };
const Hypernova = () => {
  return (
    <>
      <div>
        <iframe
          id="hypernova"
          src="https://staticpff.yggdrasilgaming.com/init/launchClient.html?org=pafcom&amp;gameid=10171&amp;lang=sv&amp;currency=EUR&amp;reminderInterval=0&amp;key=&amp;channel=pc&amp;topOrg=PAFGroup"
          style={{ width: "100%", height: "900px" }}
        ></iframe>
      </div>
    </>
  );
};

export default Hypernova;
