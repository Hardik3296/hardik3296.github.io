import React, { useEffect, useState } from "react";
import axios from "axios";
import EducationSVG from "../../atoms/EducationSvg";
import styles from "./styles.module.scss";

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
            <EducationSVG width={"40vw"} height={"40vh"} />
         </div>
         <div className={styles.textDiv}>
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