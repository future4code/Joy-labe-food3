import React from "react";
import MainRoutes from "./routes/Routes";
import {GlobalState} from "./global/GlobalState"


export default function App(){
  return(
    <GlobalState>
      <MainRoutes/>
    </GlobalState>
  )
}
