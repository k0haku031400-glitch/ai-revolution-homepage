"use client";

/**
 * トップカーブコンポーネント
 * ページ最上部に表示される赤色の曲線（アーチ状）
 * 左上から右方向に伸びる半円形のデザイン
 */
export const TopCurve: React.FC = () => {
  return (
    <div className="relative z-0 w-full overflow-hidden bg-[#E60000]" style={{ height: "200px" }}>
      <svg
        width="100%"
        height="150"
        viewBox="0 0 1200 200"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
        style={{ display: "block" }}
      >
        {/* 左上から右方向に伸びる半円形のアーチ */}
        {/* ベジェ曲線で滑らかなカーブを描画 */}
        <path
          d="M -40,150 Q 320,10 250,135 T 1750,0"
          stroke="#FFFFFF"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

