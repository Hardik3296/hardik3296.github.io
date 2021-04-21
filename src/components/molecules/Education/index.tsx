import { Dispatch, memo, SetStateAction, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import EducationSVG from "../../atoms/EducationSvg";
import styles from "./styles.module.scss";
import { ThemeInterface, ThemeContext } from "../../../utils/contexts/ThemeContext";
import animationStyles from "../../../assets/animation.module.scss";

interface EducationData {
   name: string,
   data: {
      course: string,
      institution: string,
      duration: string,
      score: string
   }[]
}

const Education = (): JSX.Element => {
   const ref = useRef<HTMLDivElement>(null);
   const [education, setEducation] = useState<EducationData>();
   const [animation, setAnimation] = useState<boolean>(false);
   const [theme, _] = useContext<[ThemeInterface, Dispatch<SetStateAction<ThemeInterface>>]>(ThemeContext);

   useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               setAnimation(true);
               if (ref && ref.current)
                  observer.unobserve(ref.current);
            }
         })
      }, { root: null, rootMargin: '0px', threshold: 0.6 });

      const fetchData = async () => {
         const data = await axios.get("./json/education.json");
         setEducation(data.data);
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
      <div className={styles.container} id="education" ref={ref}>
         <div className={`${styles.imageDiv} ${animation ? animationStyles.animateHorizontalDone : {}}`}>
            <EducationSVG width={"40vw"} height={"40vh"} />
         </div>
         <div className={`${styles.textDiv} ${animation ? animationStyles.animateHorizontalDone : {}}`} style={theme.text}>
            {education?.data.map((record, index) => {
               return <div key={record.course + index}>
                  <p className={styles.course}>{record.course}</p>
                  <p className={styles.institution}>{record.institution}</p>
                  <p className={styles.score}>{record.score}</p>
                  <p className={styles.duration}>{record.duration}</p>
               </div>
            })}
         </div>
      </div>
   );
}

export default memo(Education);