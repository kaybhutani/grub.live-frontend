import React from "react";

import styles from "./PartnerSlider.module.scss";
import dinersclub from "../../Assets/images/Partners/dinersclub.jpeg";
import infinitylogo from "../../Assets/images/Partners/infinitylogo.png";
import raftaarlogo from "../../Assets/images/Partners/raftaarlogo.png";
import tcrclogo from "../../Assets/images/Partners/tc2rc2.png";
import telegram from "../../Assets/images/Partners/telegram.jpg";
import verandalogo from "../../Assets/images//Partners/vehrandalogo.png";
import minipunjab from "../../Assets/images/Partners/minipunjab.jpeg";
import bemisaallogo from "../../Assets/images/Partners/bemisaallogo.png";

const PartnerSlider: React.FC = () => {
  const partnerLists = [
    raftaarlogo,
    infinitylogo,
    verandalogo,
    telegram,
    dinersclub,
    tcrclogo,
    bemisaallogo,
    minipunjab,
  ];

  return (
    <div className={styles.PartnerSlider}>
      <div>
        <h3>Some of our clients</h3>
      </div>
      <div className={styles.parnterList}>
        {/* <marquee>
          {partnerLists.map((parnter, index) => (
            <img
              alt="partnerImage"
              src={parnter}
              className={styles.partnerImg}
              key={index}
            />
          ))}
        </marquee> */}
      </div>
    </div>
  );
};

export default PartnerSlider;
