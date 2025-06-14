import { useState } from "react";

export const useBgImages = () => {
  const [bgImages, setbgImages] = useState(
    "https://doot-light.react.themesbrand.com/static/media/pattern-01.8f62e18892cc9ccdc303.png"
  );
  const bgimage = [
    {
      id: "https://doot-light.react.themesbrand.com/static/media/pattern-01.8f62e18892cc9ccdc303.png",
    },
    {
      id: "https://doot-light.react.themesbrand.com/static/media/pattern-02.63fbbc7a53eef1f47429.png",
    },
    {
      id: "https://doot-light.react.themesbrand.com/static/media/pattern-03.aad153cb51fa58d0c87a.png",
    },
    {
      id: "https://doot-light.react.themesbrand.com/static/media/pattern-04.626e3aa68eb2db1ea275.png",
    },
    {
      id: "https://doot-light.react.themesbrand.com/static/media/pattern-05.ffd181cdf9a08b200998.png",
    },
    {
      id: "https://doot-light.react.themesbrand.com/static/media/pattern-06.8662e9c00739344367d8.png",
    },
    {
      id: "https://doot-light.react.themesbrand.com/static/media/pattern-07.8a869dec5fa717a089de.png",
    },
    {
      id: "https://doot-light.react.themesbrand.com/static/media/pattern-08.08165c77f146d3e497a5.png",
    },
    {
      id: "https://doot-light.react.themesbrand.com/static/media/pattern-09.73d34b7671ddd9e093fa.png",
    },
  ];

  return {
    bgImages,
    setbgImages,
    bgimage,
  };
};
