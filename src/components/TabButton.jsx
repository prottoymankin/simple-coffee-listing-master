const TabButton = ({ title, activeTab, setActiveTab }) => {
  return (
    <button 
      onClick={() => setActiveTab(title)}
      className={
        `font-semibold text-[#FEF7EE] px-3 py-1.5 rounded-lg cursor-pointer text-sm ${activeTab === title && 'bg-[#4D5562]'}`
      }
    >
      {title}
    </button>
  );
};

export default TabButton;