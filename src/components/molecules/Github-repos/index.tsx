import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.scss";

const GitHubRepos = (): JSX.Element => {

   interface repoType {
      repo: string,
      owner: string,
      stars: string,
      forks: string,
      language: string,
      description: string
   }

   const [pinnedRepos, setPinnedRepos] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const results = await axios.get(`${process.env.REACT_APP_GITHUB_PINNED_REPOS}${process.env.REACT_APP_GITHUB_USERNAME}`);
         setPinnedRepos(results.data);
      }

      fetchData();
   }, []);

   return (
      <div className={styles.container}>
         {pinnedRepos !== [] && pinnedRepos.map((repo: repoType) => {
            return <div key={repo.repo}>
               <p>{repo.repo}</p>
               <p>{repo.description}</p>
               <span>{repo.stars}</span>
               <span>{repo.forks}</span>
            </div>
         })}
      </div>
   );
}

export default GitHubRepos;