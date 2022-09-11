// import React from 'react'

import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topbar/TopBar";
import { Users } from "../../dumnyData";
import "./home.css";
export default function Home() {
  return (
    <>
      <TopBar placeholder="Start typing..." data={Users}/>
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
