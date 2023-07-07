const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://www.github.com/superb-shan">
        <i className="fa-brands fa-github" aria-hidden="true" title="Shankar's GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/shankar-k-/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Shankar's LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://leetcode.com/shanleet/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Shankar's Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.codechef.com/users/sece_mcs131">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Shankar's Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
