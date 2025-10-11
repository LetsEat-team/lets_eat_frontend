interface ConvyItemProps {
  image: string;
  name: string;
}

const ConvyItem = ({ image, name }: ConvyItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-[140px] h-[140px] border border-maingreen rounded-md shadow-sm bg-white">
      <img src={image} alt={name} className="w-[95px] h-[95px] mt-[8px] rounded-full bg-gray-300" />
      <p className="mt-1 text-textblack font-bold text-[16px]">{name}</p>
    </div>
  );
};

export default ConvyItem;
