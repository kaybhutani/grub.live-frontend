import React from "react";
import styles from "./SocialLinks.module.scss";
import Instagram from "../../../assets/images/instagram.svg";
import Facebook from "../../../assets/images/facebook.svg";
import Globe from "../../../assets/images/globe.svg";
const SocialLinks = ({
  defaultSocialLinks = { website: "", facebook: "", instagram: "" },
  menuChangeHandler,
}) => {
  return (
    <div>
      <p>Social Links</p>
      <div className={styles.socialLinkRow}>
        <img src={Facebook} alt="Fb" className={styles.icon} />
        <input
          type="text"
          placeholder="Facebook Link"
          className="form-input"
          onChange={(e) => menuChangeHandler("social.facebook", e.target.value)}
          value={defaultSocialLinks.facebook || ""}
        />
      </div>
      <div className={styles.socialLinkRow}>
        <img src={Instagram} alt="Ig" className={styles.icon} />
        <input
          type="text"
          placeholder="Instagram Link"
          className="form-input"
          onChange={(e) => menuChangeHandler("social.instagram", e.target.value)}
          value={defaultSocialLinks.instagram || ""}
        />
      </div>
      <div className={styles.socialLinkRow}>
        <img src={Globe} alt="Web" className={styles.icon} />

        <input
          type="text"
          placeholder="Website Link"
          className="form-input"
          onChange={(e) => menuChangeHandler("social.website", e.target.value)}
          value={defaultSocialLinks.website || ""}
        />
      </div>
    </div>
  );
};

export default SocialLinks;
