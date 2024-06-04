import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black py-8 text-gray-400 text-center border-t border-gray-700">
      <div className="container mx-auto">
        <p className="mb-2">Developed by Yanga Rubushe</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/YangaRubushe/CineNex" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
          </a>
          <a href="https://x.com/YangaRubushe" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/yanga-rubushe-2ba414273" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="text-xs text-gray-400 mt-4 sm:mt-0">© 2024 CineNex. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
