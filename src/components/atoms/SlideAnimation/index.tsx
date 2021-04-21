import React, { memo, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import "./animation.scss";

interface SlideAnimationProps {
   children: ReactNode,
   slideDirection?: string,
}

const SlideAnimation = ({ children, slideDirection }: SlideAnimationProps): JSX.Element => {
   slideDirection = slideDirection ? slideDirection : "slide-in-from-left";
   return (
      <CSSTransition
         in={true}
         appear={true}
         classNames={slideDirection}
         addEndListener={() => { }}
         timeout={1500}
      >
         {children}
      </CSSTransition>
   )
}

export default SlideAnimation;