import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const ChildCardScan = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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

  const guideWidth = 320;
  const guideHeight = 192;

  const callGoogleVisionApi = async (imageBase64: string) => {
    const apiKey = import.meta.env.REACT_APP_GOOGLE_VISION_API_KEY;
    const apiUrl = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`;

    const body = {
      requests: [
        {
          image: { content: imageBase64.replace(/^data:image\/(png|jpeg);base64,/, "") },
          features: [{ type: "DOCUMENT_TEXT_DETECTION", maxResults: 1 }],
        },
      ],
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Google Vision API error: ${response.statusText}`);
    }
    return response.json();
  };

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
      const result = await callGoogleVisionApi(imageBase64);
      console.log("Vision API OCR 결과:", result);
      // 카드번호, 만료일 등 필요한 데이터 파싱 후 상태 저장 및 화면 전환
    } catch (error) {
      console.error("Vision API 호출 실패:", error);
    }

    setIsLoading(false);
    navigate("/childcard/upload");
  };

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
      <canvas ref={canvasRef} style={{ display: "none" }} />

      <div className="relative z-10 flex flex-col w-full h-full justify-between">
        <div className="mt-16 px-6 text-center">
          <h1 className="text-[16px] font-semibold mb-2">카드 스캔</h1>
          <p className="text-[12px] text-gray-200">
            사각형에 카드를 맞춰주세요. <br />
            카드 정보를 자동으로 스캔합니다.
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-80 h-48">
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-maingreen" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-maingreen" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-maingreen" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-maingreen" />
          </div>
        </div>

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
