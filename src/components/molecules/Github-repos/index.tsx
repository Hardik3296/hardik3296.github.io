import { Dispatch, memo, SetStateAction, useContext, useEffect, useState } from "react";
import { StarOutlineOutlined } from "@material-ui/icons";
import axios, { AxiosResponse } from "axios";
import styles from "./styles.module.scss";
import image from "../../../assets/images/code-fork.png";
import { ThemeContext, ThemeInterface } from "../../../utils/contexts/ThemeContext";
import useAsyncError from "../../../utils/AsyncErrorHandler";

interface repoType {
   repo: string,
   stars: string,
   forks: string,
   description: string,
   link: string,
}

const GitHubRepos = (): JSX.Element => {

   const [theme, _] = useContext<[ThemeInterface, Dispatch<SetStateAction<ThemeInterface>>]>(ThemeContext);
   const [pinnedRepos, setPinnedRepos] = useState([]);
   const createError = useAsyncError();
   const compareFunc = (firstParam: repoType, secondParam: repoType): boolean => {
      return firstParam.forks > secondParam.forks;
   }

   useEffect(() => {
      let results: AxiosResponse<any>, thrain: AxiosResponse<any>, emulator: AxiosResponse<any>;
      const fetchData = async () => {
         try {
            results = await axios.get(`${process.env.REACT_APP_GITHUB_PINNED_REPOS}${process.env.REACT_APP_GITHUB_USERNAME}`);
            thrain = await axios.get(`${process.env.REACT_APP_GITHUB_COLLABORATOR}thrain`);
            emulator = await axios.get(`${process.env.REACT_APP_GITHUB_COLLABORATOR}8085-Emulator`);
         } catch (e) {
            createError(e);
         }
         let filteredResult = results.data.filter((details: repoType) => details.repo.toLowerCase() !== "thrain" && details.repo.toLowerCase() != "8085-emulator");
         filteredResult.push({ repo: thrain.data.name, stars: thrain.data.stargazers_count, forks: thrain.data.forks, description: thrain.data.description, link: thrain.data.html_url });
         filteredResult.push({ repo: emulator.data.name, stars: emulator.data.stargazers_count, forks: emulator.data.forks, description: emulator.data.description, link: emulator.data.html_url });
         await filteredResult.sort(compareFunc);
         setPinnedRepos(filteredResult);
      }

      fetchData();
   }, []);

   const handleClick = (link: string): void => {
      window.open(link, "_blank");
   }

   return (
      <div className={styles.container} id="github-repos" style={theme.text}>
         {pinnedRepos !== [] && pinnedRepos.map((repo: repoType) => {
            return (
               <div key={repo.repo} onClick={() => { handleClick(repo.link) }} className={styles.innerContainer} style={theme.repos.div}>
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
   );
}

export default memo(GitHubRepos);