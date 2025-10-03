### 배경색 사용법 ###
배경색이 초록색 그라데이션인 페이지와 하얀 배경 페이지를 쉽게 전환하고, 나중에 색상 변경이 있을 것을 고려해 useContext 사용 및 App.tsx 파일에서 설정을 주었습니다.
useLayout으로 경로에 따라 다르게 주도록 설정했기 때문에 App.tsx에서 아래의 추가경로에 추가해주시면 됩니다.
</br>
```
// 경로별 테마 매핑
const routeThemeMap: Record<string, "green" | "white"> = {
  "/childcard": "green",
  // 추가 경로는 계속 작성
};


  ```
  </br>

  