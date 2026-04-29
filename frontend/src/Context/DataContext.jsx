import React, { createContext, useEffect, useState } from "react";

import GalleryData from "../Components/Assets/Gallery_pic";
import videoinfoData from "../Components/Assets/videoinfo";
import teachersData from "../Components/Assets/teachers";

export const DataContext = createContext(null);

const DataContextProvider = (props) => {
  const [videoinfo, setVideoinfo] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [Gallery, setGallery] = useState([]);

  useEffect(() => {
    setVideoinfo(videoinfoData);
    setTeachers(teachersData);
    setGallery(GalleryData);
  }, []);

  const contextValue = { teachers, Gallery, videoinfo };

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
