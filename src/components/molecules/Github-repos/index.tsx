import { Dispatch, memo, SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { StarOutlineOutlined } from "@material-ui/icons";
import axios, { AxiosResponse } from "axios";
import styles from "./styles.module.scss";
import image from "../../../assets/images/code-fork.png";
import { ThemeContext, ThemeInterface } from "../../../utils/contexts/ThemeContext";
import useAsyncError from "../../../utils/AsyncErrorHandler";
import animationStyles from "../../../assets/animation.module.scss";

interface repoType {
   name: string,
   stargazers_count: string,
   stars: string,
   forks: string,
   description: string,
   link: string,
   id: string
}

const GitHubRepos = (): JSX.Element => {
   const [animation, setAnimation] = useState<boolean>(false);
   const [theme, _] = useContext<[ThemeInterface, Dispatch<SetStateAction<ThemeInterface>>]>(ThemeContext);
   const [pinnedRepos, setPinnedRepos] = useState([]);
   const ref = useRef<HTMLDivElement>(null);
   const createError = useAsyncError();
   const compareFunc = (firstParam: repoType, secondParam: repoType): boolean => {
      return firstParam.forks > secondParam.forks;
   }

   useEffect(() => {
      let results: AxiosResponse<any>, thrain: AxiosResponse<any>, emulator: AxiosResponse<any>;

      const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               if (ref && ref.current)
                  observer.unobserve(ref.current);
               setAnimation(true);
            }
         })
      }, { root: null, rootMargin: '0px', threshold: 0.3 });

      const fetchData = async () => {
         try {
            results = await axios.get(`${process.env.REACT_APP_GITHUB_PINNED_REPOS}`);
            thrain = await axios.get(`${process.env.REACT_APP_GITHUB_COLLABORATOR}thrain`);
            emulator = await axios.get(`${process.env.REACT_APP_GITHUB_COLLABORATOR}8085-Emulator`);
         } catch (e) {
            createError(e);
         }
         const requiredRepoIds = (process.env.REACT_APP_GITHUB_REPO_IDS || '').split(",");
         let filteredResult = results.data.filter((details: repoType) => details.name.toLowerCase() !== "thrain" && details.name.toLowerCase() !== "8085simulator");
         filteredResult = filteredResult.filter((repo:repoType)=> (requiredRepoIds.includes(repo.id.toString())));
         filteredResult.push({ name: thrain.data.name, stars: thrain.data.stargazers_count, forks: thrain.data.forks, description: thrain.data.description, link: thrain.data.html_url });
         filteredResult.push({ name: emulator.data.name, stars: emulator.data.stargazers_count, forks: emulator.data.forks, description: emulator.data.description, link: emulator.data.html_url });
         await filteredResult.sort(compareFunc);
         console.log(filteredResult);
         setPinnedRepos(filteredResult);
      }

      fetchData();
      if (ref && ref.current) {
         observer.observe(ref.current);
      }

      return () => {
         if (ref && ref.current) {
            observer.unobserve(ref.current);
         }
      }
   }, []);

   const handleClick = (link: string): void => {
      window.open(link, "_blank");
   }

   return (
      <div className={`${styles.container} ${animation ? animationStyles.animateHorizontalDone : {}}`} id="github-repos" style={theme.text} ref={ref}>
         {pinnedRepos !== [] && pinnedRepos.map((repo: repoType) => {
            return (
               <div test-id="repo" key={repo.name} onClick={() => { handleClick(repo.link) }} className={styles.innerContainer} style={theme.repos.div}>
                  <p test-id="repo-name" className={styles.repo}>{repo.name.toUpperCase()}</p>
                  <div test-id="repo-info" className={styles.row}>
                     <span className={styles.stars}><StarOutlineOutlined style={{ color: "#6c63ff", fontSize: 28 }} />{repo.name==='thrain' || repo.name==='8085-Emulator'?repo.stars: repo.stargazers_count}</span>
                     <span className={styles.forks}><img src={image} alt="" style={{ width: 28, height: 28 }} />{repo.forks}</span>
                  </div>
                  <p test-id="repo-description" className={styles.description}>{repo.description}</p>
               </div>
            );
         })}
      </div >
   );
}

export default memo(GitHubRepos);