import { BsCodeSlash } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";
import styles from "../styles/Repo.module.css";
import { RepositoryProps } from "../types/repos";

const Repos = ({
  name,
  language,
  html_url,
}: RepositoryProps) => {
  // console.log(language)
  return (
    <div className={styles.repository}>
      <h3>{name}</h3>
      <p>
        <BsCodeSlash /> {language}
      </p>
      <div className={styles.stats}>
      </div>
      <a href={html_url} target="_blank" className={styles.repository_btn}>
        <span>Ver código</span>
        <RiGitRepositoryLine />
      </a>
    </div>
  );
};

export default Repos;
