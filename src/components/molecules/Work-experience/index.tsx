import axios from "axios";
import { Dispatch, memo, SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { ThemeContext, ThemeInterface } from "../../../utils/contexts/ThemeContext";
import WorkingSVG from "../../../assets/svgs/WorkingSvg";
import styles from "./styles.module.scss";
import animationStyles from "../../../assets/animation.module.scss";

interface WorkEx {
   name: string,
   data: {
      position: string,
      organization: string,
      details: string[]
   }[]
}

const WorkExperience = (): JSX.Element => {

   const [workEx, setWorkEx] = useState<WorkEx>();
   const [animation, setAnimation] = useState<boolean>(false);
   const [theme, _] = useContext<[ThemeInterface, Dispatch<SetStateAction<ThemeInterface>>]>(ThemeContext);
   const ref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               setAnimation(true);
               if (ref && ref.current)
                  observer.unobserve(ref.current);
            }
         })
      }, { root: null, rootMargin: '0px', threshold: 0.3 });

      const fetchData = async () => {
         const data = await axios.get("./json/work-experience.json");
         setWorkEx(data.data);
      }
      fetchData();

      if (ref && ref.current) {
         observer.observe(ref.current);
      }

      return () => {
         if (ref && ref.current)
            observer.unobserve(ref.current);
      }
   }, []);

   return (
      <div className={styles.container} id="work-experience" style={theme.text} ref={ref}>
         <div className={`${styles.textDiv} ${animation ? animationStyles.animateHorizontalDone : {}}`}>
            {workEx?.data.map((record) => {
               return <div key={record.organization + record.position}>
                  <p className={styles.position}>{record.position}</p>
                  <p className={styles.organization}>{record.organization}</p>
                  {record?.details.map((description, index) => {
                     return <p key={record.position + index} className={styles.description}>{description}</p>
                  })}
               </div>
            })}
         </div>
         <div className={`${styles.imageDiv} ${animation ? animationStyles.animateHorizontalDone : {}}`}>
            <WorkingSVG width={"40vw"} height={"40vh"} />
         </div>
      </div>
   );
}

export default memo(WorkExperience);