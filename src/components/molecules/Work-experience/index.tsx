import axios from "axios";
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { ThemeContext, ThemeInterface } from "../../../utils/contexts/ThemeContext";
import WorkingSVG from "../../atoms/WorkingSvg";
import styles from "./styles.module.scss";

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
   const [theme, _] = useContext<[ThemeInterface, Dispatch<SetStateAction<ThemeInterface>>]>(ThemeContext);

   useEffect(() => {
      const fetchData = async () => {
         const data = await axios.get("./json/work-experience.json");
         setWorkEx(data.data);
      }
      fetchData();
   }, [])

   return (
      <div className={styles.container} id="work-experience" style={theme.text}>
         <div className={styles.textDiv}>
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
         <div className={styles.imageDiv}>
            <WorkingSVG width={"40vw"} height={"40vh"} />
         </div>
      </div>
   );
}

export default WorkExperience;