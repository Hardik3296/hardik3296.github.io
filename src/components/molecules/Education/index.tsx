import React, { useEffect, useState } from "react";
import axios from "axios";
import EducationSVG from "../../atoms/EducationSvg";

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
      <div>
         {education?.data.map((record, index) => {
            return <div key={record.course + index}>
               <p>{record.course}</p>
               <p>{record.institution}</p>
               <p>{record.score}</p>
               <p>{record.duration}</p>
            </div>
         })}
         <EducationSVG />
      </div>
   );
}

export default Education;