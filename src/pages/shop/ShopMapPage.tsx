import React, { useEffect } from "react";

export default function ShopMapPage() {
  useEffect(() => {
    const appKey = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY;

    const existingScript = document.getElementById("kakao-map-script");
    if (existingScript) return;

    const script = document.createElement("script");
    script.id = "kakao-map-script";
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false`;
    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");

        // 디폴트 위치
        let center = new window.kakao.maps.LatLng(37.3943, 127.1110);

        // 내 위치 가져오기
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const lat = position.coords.latitude;
              const lng = position.coords.longitude;
              center = new window.kakao.maps.LatLng(lat, lng);

              // 내 위치로 지도 중심 설정
              const map = new window.kakao.maps.Map(container, {
                center,
                level: 3,
              });

              // 내 위치 
              new window.kakao.maps.Marker({
                position: center,
                map,
              });
            },
            (error) => {
              console.warn("⚠️ 위치 정보를 불러올 수 없습니다:", error);
                // 위치 디폴트
              const map = new window.kakao.maps.Map(container, {
                center,
                level: 3,
              });

              new window.kakao.maps.Marker({
                position: center,
                map,
              });
            }
          );
        } else {
          console.warn("⚠️ Geolocation을 지원하지 않는 브라우저입니다.");

          // 위치 디폴트
          const map = new window.kakao.maps.Map(container, {
            center,
            level: 3,
          });

          new window.kakao.maps.Marker({
            position: center,
            map,
          });
        }
      });
    };
    document.head.appendChild(script);
  }, []);

  return <div id="map" style={{ width: "100vw", height: "100vh" }} />;
}
