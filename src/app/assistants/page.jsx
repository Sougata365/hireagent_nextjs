import WithWithout from "../sections/WithWithout";
import VideoPlayer from "../sections/VideoPlayer";
import AssistantHero from "../sections/AssistantHero";
import ROI from "../sections/ROI";
import Stats from "../sections/Stats";
import Features from "../sections/Features";
import Testimonial from "../sections/Testimonial";
import GetStarted from "../sections/GetStarted";
import TryAssistant from "../sections/TryAssistant";

const page = () => {
  return (
    <div className="min-h-screen bg-white">
      <AssistantHero />
      <VideoPlayer />
      <WithWithout />
      <TryAssistant />
      <Stats />
      <Features />
      <Testimonial />
      <GetStarted />
    </div>
  );
};

export default page;
