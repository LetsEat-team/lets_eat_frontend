### 배경색 사용법 ###
배경색이 초록색 그라데이션인 페이지와 하얀 배경 페이지를 쉽게 전환하고, 나중에 색상 변경이 있을 것을 고려해 useContext 사용 및 App.tsx 파일에서 설정을 주었습니다.
아래와 같이 페이지 const로 useTheme을 불러서 useEffect에 넣어서 사용하면 됩니다.
</br>
```
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme({ bgTheme: "green" });   // 페이지 진입 시 green 배경
    return () => setTheme({ bgTheme: "white" }); // 페이지 떠날 때 white 배경
  }, []);

  ```
  </br>

  </br>
  예시)

</br>
```
import { useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";

type ChildCardOnBoardProps = {
  onFinish: () => void;  //onBoarding 끝났는지 여부
};

export default function ChildCardOnBoard({ onFinish }: ChildCardOnBoardProps) {
    const { setTheme } = useTheme();

  useEffect(() => {
    setTheme({ bgTheme: "green" }); // 페이지 진입 시 green 배경
    return () => setTheme({ bgTheme: "white" }); // 페이지 떠날 때 white로 복원
  }, []);
  return (
    <div className="p-5 rounded-lg bg-[#F8F8F8E0] backdrop-blur-[27px] shadow-md">
      <h2>환영합니다!</h2>
      <p>처음 방문하셨군요. 온보딩 내용을 확인해 주세요.</p>
      <button onClick={onFinish}>온보딩 완료</button>
    </div>
  );
}


  ```
  </br>

  