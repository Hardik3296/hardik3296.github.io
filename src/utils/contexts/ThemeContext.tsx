import React, { createContext, Dispatch, SetStateAction, useState } from "react";

export interface IconInterface {
   linkedin: {
      color: string
   },
   github: {
      color: string
   },
   mail: {
      color: string
   }

}

export interface ThemeInterface {
   sidebar: {
      backgroundColor: string
   },
   header: {
      backgroundColor: string,
      boxShadow: string,
      borderBottom: string
   },
   body: {
      backgroundColor: string

   },
   text: {
      color: string
   },
   repos: {
      div: {
         background: string,
         boxShadow: string
      }
   }
   icons: IconInterface,
   error: {
      text: {
         color: string,
      }
   }
}

export interface ThemeArrayInterface {
   light: ThemeInterface,
   dark: ThemeInterface,
}

export const themes: ThemeArrayInterface = {
   light: {
      sidebar: {
         backgroundColor: "#f2f2f2",
      },
      header: {
         backgroundColor: "#f2f2f2",
         boxShadow: "8px 0px 10px 4px rgba(31, 38, 135, 0.37)",
         borderBottom: "1px solid rgba( 255, 255, 255, 0.18)",
      },
      body: {
         backgroundColor: "#ffffff"
      },
      repos: {
         div: {
            background: "rgba( 255, 255, 255, 0.0005 )",
            boxShadow: "0 5px 10px 2px rgba( 31, 38, 135, 0.37 )"
         }
      },
      text: {
         color: "#000000"
      },
      icons: {
         linkedin: {
            color: "#0077b5"
         },
         github: {
            color: "#333333"
         },
         mail: {
            color: "#6c63ff"
         }
      },
      error: {
         text: {
            color: "#B00020"
         }
      }
   },
   dark: {
      sidebar: {
         backgroundColor: "#242424",
      },
      header: {
         backgroundColor: "#242424",
         boxShadow: "8px 0px 10px 4px rgba(0, 0, 0, 0.45)",
         borderBottom: "1px solid rgba( 0, 0, 0, 0.18)",
      },
      body: {
         backgroundColor: "#181818"
      },
      repos: {
         div: {
            background: "rgba( 40, 40, 40, 0.25 )",
            boxShadow: "0 5px 10px 2px rgba(0, 0, 0, 0.85)"
         }
      },
      text: {
         color: "#ffffff"
      },
      icons: {
         linkedin: {
            color: "#ffffff"
         },
         github: {
            color: "#ffffff"
         },
         mail: {
            color: "#ffffff"
         }
      },
      error: {
         text: {
            color: "#CF6679"
         }
      }
   }
}

export const ThemeContext = createContext<[ThemeInterface, Dispatch<SetStateAction<ThemeInterface>>]>([themes.light, () => { }]);

export const ThemeProvider = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }): JSX.Element => {
   const [theme, setTheme] = useState<ThemeInterface>(themes.light);
   return (
      <ThemeContext.Provider value={[theme, setTheme]} >
         {props.children}
      </ThemeContext.Provider>
   );
}


