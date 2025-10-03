import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const ChildCardScan = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("카메라 접근 실패:", err);
      }
    };

    startCamera();

    // 카메라 스트림 정리
    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  // 카드 촬영 핸들러
  const handleCapture = async () => {
    setIsLoading(true);

    // 사진 촬영 및 OCR 처리 시뮬레이션 (API 호출 등)
    await new Promise((resolve) => setTimeout(resolve, 3000)); // 3초 대기

    setIsLoading(false);
    navigate("/childcard/upload"); // 업로드 화면 이동
  };

  // 직접 입력 바로 이동
  const handleDirectInput = () => {
    navigate("/childcard/upload");
  };

  return (
    <div className="-mx-4 -my-8 w-[390px] h-full flex flex-col items-center justify-between min-h-screen bg-black text-center text-white relative overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* UI 컨텐츠 */}
      <div className="relative z-10 flex flex-col w-full h-full justify-between">
        {/* 상단 안내 */}
        <div className="mt-16 px-6 text-center">
          <h1 className="text-[16px] font-semibold mb-2">카드 스캔</h1>
          <p className="text-[12px] text-gray-200">
            사각형에 카드를 맞춰주세요. <br />
            카드 정보를 자동으로 스캔합니다.
          </p>
        </div>

        {/* 카드 가이드 영역 */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-80 h-48">
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-maingreen" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-maingreen" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-maingreen" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-maingreen" />
          </div>
        </div>

        {/* 버튼 영역 */}
        <div className="flex w-full px-6 gap-3 py-6">
          <Button
            className="flex-1 bg-maingreen text-white"
            onClick={handleCapture}
            disabled={isLoading}
          >
            {isLoading ? "로딩 중..." : "카드 촬영"}
          </Button>
          <Button className="flex-1 bg-white text-black" onClick={handleDirectInput}>
            직접 입력
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChildCardScan;
