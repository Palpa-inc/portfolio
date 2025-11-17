"use client";

import { useEffect, useRef } from "react";

export default function TaglineTypeIt() {
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!taglineRef.current || typeof window === "undefined") return;

    let instance: { destroy: () => void } | null = null;

    // クライアントサイドでのみTypeItを動的インポート
    import("typeit").then((TypeItModule) => {
      const TypeIt = TypeItModule.default;
      const element = taglineRef.current;
      if (!element) return;

      instance = new TypeIt(element, {
        speed: 60, // タイピング速度
        deleteSpeed: 50, // 削除速度
        loop: false, // 1回のみ、ループなし
        lifeLike: true,
        cursorChar: "▌",
      })
        // オープニング: 自己紹介の言い換え
        .type("I'm a developer")
        .pause(600)
        .delete(9) // "developer" を削除
        .pause(300)
        .type("designer")
        .pause(500)
        .delete(8) // "designer" を削除
        .type("creator who lives in the code.")
        .pause(900)
        .break()
        .break()
        
        // ストーリー1: 何を作るか
        .type("I turn coffee and curiosity into")
        .pause(400)
        .break()
        .type("apps, experiences, and sometimes")
        .pause(400)
        .break()
        .type("complete chaos.")
        .pause(800)
        .delete(15) // "complete chaos." を削除
        .type("elegant solutions.")
        .pause(1000)
        .break()
        .break()
        
        // ストーリー2: 哲学
        .type("Every pixel matters.")
        .pause(500)
        .break()
        .type("Every interaction tells a story.")
        .pause(700)
        .break()
        .type("Every bug is a new adventure.")
        .pause(1200)
        .break()
        .break()
        
        // クロージング
        .type("Let's build something ")
        .pause(400)
        .type("remarkable")
        .pause(300)
        .delete(10)
        .pause(300) 
        .type("unforgettable.", { speed: 200 })
        .go();
    });

    return () => {
      if (instance) {
        instance.destroy();
      }
    };
  }, []);

  return (
    <div className="mb-8 h-[16em]">
      <div
        ref={taglineRef}
        className="text-lg font-medium text-gray-200 md:text-xl leading-relaxed"
      />
    </div>
  );
}

