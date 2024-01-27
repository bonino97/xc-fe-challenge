import xceedLogo from '/logo.svg';

const Topbar: React.FC = () => {
  return (
    <div className='h-[4.5rem] flex justify-center items-center sticky top-0 bg-white'>
      <img className='h-6 ' src={xceedLogo} />
    </div>
  );
};

export default Topbar;
