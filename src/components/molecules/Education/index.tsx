import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import axios from "axios";
import EducationSVG from "../../atoms/EducationSvg";
import styles from "./styles.module.scss";
import { ThemeInterface, ThemeContext } from "../../../utils/contexts/ThemeContext";
import SlideAnimation from "../../atoms/SlideAnimation";

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

   const [education, setEducation] = useState<EducationData>();
   const [theme, _] = useContext<[ThemeInterface, Dispatch<SetStateAction<ThemeInterface>>]>(ThemeContext);

   useEffect(() => {
      const fetchData = async () => {
         const data = await axios.get("./json/education.json");
         setEducation(data.data);
      }
      fetchData();
   }, [])

   return (
      <div className={styles.container} id="education">
         <div className={styles.imageDiv}>
            <SlideAnimation
               mountCondition={true}
               slideDirection={"slide-from-left"}
            >
               <EducationSVG width={"40vw"} height={"40vh"} />
            </SlideAnimation>
         </div>
         <div className={styles.textDiv} style={theme.text}>
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

export default Education;