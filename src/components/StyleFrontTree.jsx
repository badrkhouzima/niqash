import PropTypes from "prop-types";
const StyleFrontTree = ({ children }) => {
  return (
    <div className="h-screen bg-teal-500 flex flex-col overflow-y-auto ">
      <div className="h-screen bg-gradient-to-b from-transparent to-black flex flex-col overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

StyleFrontTree.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StyleFrontTree;
