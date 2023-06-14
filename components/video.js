import { useState } from "react";
import Container from "./container";

const Video = () => {
  const [playVideo, setPlayVideo] = useState(true);
  return (
    <Container>
      <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 relative z-0  rounded-2xl ">
        <div
          className=" relative cursor-pointer aspect-w-16 aspect-h-9 ">
            
         <iframe width="560" height="315" src="https://www.youtube.com/embed/-hZx-AaX38M?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  
        </div>
      </div>
    </Container>
  );
}

export default Video;