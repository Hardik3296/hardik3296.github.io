import React from "react";
import Profile from "../../molecules/Profile";
import GitHubRepos from "../../molecules/Github-repos";
import Education from "../../molecules/Education";
import WorkExperience from "../../molecules/Work-experience";

const Body = (): JSX.Element => {

   return (
      <div>
         <Profile />
         <Education />
         <WorkExperience />
         <GitHubRepos />
      </div>
   )
}

export default Body;