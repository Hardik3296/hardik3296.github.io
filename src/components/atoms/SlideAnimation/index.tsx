import React, { memo, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import "./animation.scss";

interface SlideAnimationProps {
   children: ReactNode,
   slideDirection?: string,
   mountCondition: boolean
}

const SlideAnimation = ({ children, slideDirection, mountCondition }: SlideAnimationProps): JSX.Element => {
   slideDirection = slideDirection ? slideDirection : "slide-from-left";
   return (
      <CSSTransition
         in={mountCondition}
         appear={true}
         classNames={slideDirection}
         addEndListener={() => { }}
      >
         {children}
      </CSSTransition>
   )
}

export default memo(SlideAnimation);