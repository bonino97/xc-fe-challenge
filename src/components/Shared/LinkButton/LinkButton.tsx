interface LinkButtonProps {
  text: string;
  onClick: () => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className='text-base font-semibold text-[#b5dde8] pt-4'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default LinkButton;
