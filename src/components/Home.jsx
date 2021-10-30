import { useState, useEffect } from "react";
import TvShows from "./TvShows";

const Home = () => {
  const apiKey = process.env.REACT_APP_API_KEY

  const [videos, setVideos] = useState(null);
  const index = Math.floor(Math.random() *15)

  const fetchTrailer = async () => {
    try {
      const response = await fetch("https://api.pexels.com/videos/popular", {
        headers: {
          Authorization: apiKey,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setVideos(data.videos);

        console.log(`here is your data`, data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchTrailer();
  }, []);

  return (
    <>
      <div>
        {!videos ? (
          <h1>Loading....</h1>
        ) : (
        <video height="700" loop autoPlay playsinline className="video">
            <source src={videos[index].video_files[1].link} type="video/mp4"/>
          </video>
        )}
      </div>

      <TvShows dQuery={"horror"} />
    </>
  );
};

export default Home;
