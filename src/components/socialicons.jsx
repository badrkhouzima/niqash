import TiktokIcon from "../assets/social_icons/TiktokIcon";
import YoutubeIcon from "../assets/social_icons/YoutubeIcon";
import TwitchIcon from "../assets/social_icons/TwitchIcon";
import XtweetIcon from "../assets/social_icons/XtweetIcon";
import FacebookIcon from "../assets/social_icons/FacebookIcon";
const SocialIcons = () => {
  return (
    <div className="flex justify-center items-center h-16">
      <a
        href="https://tiktok.com/@ni9ash"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2"
      >
        <TiktokIcon />
      </a>

      <a
        href="https://youtube.com/@ni9ash"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2"
      >
        <YoutubeIcon />
      </a>

      <a
        href="https://twitch.com/niqashx"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2"
      >
        <TwitchIcon />
      </a>

      <a
        href="https://x.com/@ni9ash"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2"
      >
        <XtweetIcon />
      </a>

      <a
        href="https://facebook.com/niqashx"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2"
      >
        <FacebookIcon />
      </a>
    </div>
  );
};

export default SocialIcons;
