import { RepositoryProps } from "../types/repos";
import { BsCodeSlash } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";
import styles from "../styles/Repository.module.css";

const Repos = ({
  name,
  language,
  html_url,
}: RepositoryProps) => {
  return (
    <div className={styles.repository}>
      <h3>{name}</h3>
      <p>
        <BsCodeSlash /> {language}
      </p>
      <div className={styles.stats}>
        
      </div>
      <a href={html_url} target="_blank" className={styles.repo_btn}>
        <span>Ver código</span>
        <RiGitRepositoryLine />
      </a>
    </div>
  );
};

export default Repos;
