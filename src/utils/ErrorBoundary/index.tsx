import { Component, ReactNode } from "react";
import styles from "./styles.module.scss";

interface MyProps {
   textcolor: string,
   children: ReactNode,
}

class ErrorBoundary extends Component<MyProps, {}> {

   state = {
      hasError: false
   }

   static getDerivedStateFromError() {
      return { hasError: true }
   }

   componentDidCatch(error: any, errorInfo: any) {
   }
   render() {
      if (this.state.hasError)
         return <div className={styles.errorDiv}>
            <p style={{ color: this.props.textcolor }}>Something went wrong while fetching the repositories!!</p>
         </div>
      else
         return this.props.children;
   }
}

export default ErrorBoundary;