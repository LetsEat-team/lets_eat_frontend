

export default function MainPage() {

  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-[20px] py-3">

      {/* 서비스명 */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-extrabold text-textbold">Let's eat</h1>
        <p className="text-sm text-textbold mt-2">
          Let's eat과 함께하는 즐거운 식사시간 샘플샘플
        </p>
      </div>

      {/* 이미지*/}
      <div className="mt-10 w-[335px] h-[254px] bg-gray-200 "></div>

    </div>

  );

}

