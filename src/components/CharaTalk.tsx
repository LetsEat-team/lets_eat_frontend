type CharaTalkProps = {
  children: React.ReactNode;
};

const CharaTalk = ({ children }: CharaTalkProps) => {
  const charName = '캐릭터이름';
  return (
    <div className="w-[335px] h-[118px] bg-white relative rounded-[5px] border border-maingreen flex justify-center items-center">
      <div className='w-[77px] h-[26px] absolute top-[-14px] left-[10px] rounded-[50px] bg-maingreen font-medium text-[12px] flex justify-center items-center text-white'>{charName}</div>
      <div className="text-center px-[18px] font-medium whitespace-pre-line text-[16px]">{children}</div>
    </div>
  );
};

export default CharaTalk;
