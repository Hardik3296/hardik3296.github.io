import axios from "axios";
import React, { useEffect, useState } from "react";
import WorkingSVG from "../../atoms/WorkingSvg";

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

   useEffect(() => {
      const fetchData = async () => {
         const data = await axios.get("./json/work-experience.json");
         setWorkEx(data.data);
      }
      fetchData();
   }, [])

   return (
      <div>
         {workEx?.data.map((record) => {
            return <div key={record.organization + record.position}>
               <p>{record.position}</p>
               <p>{record.organization}</p>
               {record?.details.map((description, index) => {
                  return <p key={record.position + index}>{description}</p>
               })}
            </div>
         })}
         <WorkingSVG />
      </div>
   );
}

export default WorkExperience;