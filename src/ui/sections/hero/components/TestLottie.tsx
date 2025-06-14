// import {
// useLottie,
// useLottieInteractivity,
// } from "lottie-react";

import Lottie from "lottie-react";
import { useAnimationData } from "@/components/lottie/hooks/useAnimationData";

// const style = {
//   height: 300,
//   width: 300,
//   border: 3,
//   borderStyle: "solid",
//   borderRadius: 7,
// };

const PlaySegmentsOnHover = () => {
  const animationData = useAnimationData("/assets/lottie/smoke.json");

  // const options = {
  //   animationData,
  //   autoplay: false,
  //   loop: false,
  // };

  // const lottieObj = useLottie(options, style);
  // const { View } = lottieObj;

  // console.log("Lottie Object:", lottieObj.View);

  // const Animation = useLottieInteractivity({
  //   lottieObj,
  //   mode: "cursor",
  //   actions: [
  //     {
  //       position: { x: -1, y: -1 },
  //       type: "play",
  //       frames: [0, 160],
  //     },
  //     // {
  //     //   position: { x: -1, y: -1 },
  //     //   type: "stop",
  //     //   frames: [0],
  //     // },
  //   ],
  // });

  return (
    <Lottie
      animationData={animationData}
      style={{ height: 300, width: 300 }}
      interactivity={{
        mode: "cursor",
        actions: [
          {
            position: { x: [0, 1], y: [0, 1] },
            type: "loop",
            frames: [45, 60],
          },
          {
            position: { x: -1, y: -1 },
            type: "stop",
            frames: [45],
          },
        ],
      }}
    />
  );
};

export default PlaySegmentsOnHover;
