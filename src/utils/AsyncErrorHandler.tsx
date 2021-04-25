import React from "react";

const useAsyncError = () => {
   const [_error, setError] = React.useState();
   return React.useCallback(
      e => {
         setError(() => {
            throw e;
         });
      },
      [setError],
   );
};

export default useAsyncError;