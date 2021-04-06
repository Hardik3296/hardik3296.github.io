import React, { useEffect, useState } from "react";
import { StarOutlineOutlined } from "@material-ui/icons";
import axios from "axios";
import styles from "./styles.module.scss";
import image from "../../../assets/images/code-fork.png";

const GitHubRepos = (): JSX.Element => {

   interface repoType {
      repo: string,
      owner: string,
      stars: string,
      forks: string,
      language: string,
      description: string,
      link: string,
   }

   const [pinnedRepos, setPinnedRepos] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const results = await axios.get(`${process.env.REACT_APP_GITHUB_PINNED_REPOS}${process.env.REACT_APP_GITHUB_USERNAME}`);
         setPinnedRepos(results.data);
      }

      fetchData();
   }, []);

   const handleClick = (link: string): void => {
      window.open(link, "_blank");
   }

   return (
      <>
         <p className={styles.heading}>Projects</p>
         <div className={styles.container} id="github-repos">

            {pinnedRepos !== [] && pinnedRepos.map((repo: repoType) => {
               return (
                  <div key={repo.repo} onClick={() => { handleClick(repo.link) }} className={styles.innerContainer}>
                     <p className={styles.repo}>{repo.repo.toUpperCase()}</p>
                     <div className={styles.row}>
                        <span className={styles.stars}><StarOutlineOutlined style={{ color: "#6c63ff", fontSize: 28 }} />{repo.stars}</span>
                        <span className={styles.forks}><img src={image} alt="" style={{ width: 28, height: 28 }} />{repo.forks}</span>
                     </div>
                     <p className={styles.description}>{repo.description}</p>
                  </div>
               );
            })}
         </div >
      </>
   );
}

export default GitHubRepos;