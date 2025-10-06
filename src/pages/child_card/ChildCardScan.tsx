import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useMinHeightRealScreen } from "../../hooks/useMinHeightRealScreen";
import { callGoogleVisionAPI } from "../../hooks/GoogleVisionAPI";
import { extractChildCardData } from "../../hooks/ExtractCardData";

const ChildCardScan = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  
  // 카드 정보 상태
  const [cardNum, setCardNum] = useState<string | null>(null);
  const [cardExpiry, setCardExpiry] = useState<string | null>(null);
  const [cardHolder, setCardHolder] = useState<string | null>(null);
  const [cardCVC,setCardCVC] = useState<string | null>(null);
  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });
        if (videoRef.current) videoRef.current.srcObject = stream;
      } catch (e) {
        console.error("카메라 접근 실패:", e);
      }
    };

    startCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        (videoRef.current.srcObject as MediaStream).getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const guideWidth = 35;
  const guideHeight = 184;


const handleCapture = async () => {
    if (!videoRef.current || !canvasRef.current) return;
    setIsLoading(true);

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;
    canvas.width = guideWidth;
    canvas.height = guideHeight;

    const sx = (videoWidth - guideWidth) / 2;
    const sy = (videoHeight - guideHeight) / 2;

    ctx.drawImage(video, sx, sy, guideWidth, guideHeight, 0, 0, guideWidth, guideHeight);
    const imageBase64 = canvas.toDataURL("image/png");

    try {
      const result = await callGoogleVisionAPI(imageBase64);
      const ocrText = result.responses?.[0]?.fullTextAnnotation?.text || "";
      const { cardNum, cardExpiry, cardHolder, cardCVC } = extractChildCardData(ocrText);
      setCardNum(cardNum);
      setCardExpiry(cardExpiry);
      setCardHolder(cardHolder);
      setCardCVC(cardCVC);
    // 상태 전달하며 이동
    navigate("/childcard/upload", { state: { cardNum, cardExpiry, cardHolder, cardCVC } });

    } catch (error) {
      console.error("Vision API 호출 실패:", error);
    }

  setIsLoading(false);
  };



  const handleDirectInput = () => {
    navigate("/childcard/upload");
  };

  useMinHeightRealScreen();

  return (
    <div className="w-[390px] h-full flex flex-col items-center justify-between min-h-real-screen bg-black text-center text-white relative overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <canvas ref={canvasRef} style={{ display: "none" }} />

      <div className="relative z-10 flex flex-col w-full h-full justify-between">
        <div className="mt-16 px-6 text-center">
          <h1 className="text-[16px] font-semibold mb-4 -mt-4">카드 스캔</h1>
          <p className="text-[12px] text-gray-200 mb-[60px]">
            사각형에 카드를 맞춰주세요. <br />
            카드 정보를 자동으로 스캔합니다.
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center relative w-full h-full relative"
          style={{ zIndex: -1 }}
        >
          {/* 상단 영역 */}
          <div className="absolute -top-[220px] left-0 right-0" style={{ height: `calc(220px)`, backgroundColor: 'rgba(0,0,0,0.6)' }} />
          {/* 하단 영역 */}
          <div className="absolute -bottom-[800px] left-0 right-0" style={{ height: `calc(800px)`, backgroundColor: 'rgba(0,0,0,0.6)' }} />
          {/* 왼쪽 영역 */}
          <div className="absolute" style={{ top: `calc(50% - 96px)`, bottom: `calc(50% - 96px)`, left: 0, width: `calc(50% - 160px)`, backgroundColor: 'rgba(0,0,0,0.6)' }} />
          {/* 오른쪽 영역 */}
          <div className="absolute" style={{ top: `calc(50% - 96px)`, bottom: `calc(50% - 96px)`, right: 0, width: `calc(50% - 160px)`, backgroundColor: 'rgba(0,0,0,0.6)' }} />

          {/* 가운데 사각형 (카드 스캔 가이드) */}
          <div className="relative w-80 h-48">
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-maingreen" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-maingreen" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-maingreen" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-maingreen" />
          </div>
        </div>


        <div className="fixed bottom-[30px] flex w-[390px] px-6 gap-3 py-6">
          <Button
            className="flex text-white"
            onClick={handleCapture}
            disabled={isLoading}
          >
            {isLoading ? "로딩 중..." : "카드 촬영"}
          </Button>
          <Button style={{ color: 'black' }} className="flex bg-white text-black" onClick={handleDirectInput}>
            직접 입력
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChildCardScan;
