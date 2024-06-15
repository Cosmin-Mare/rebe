import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div class="title">
        <img src="title.svg" class="title" />
      </div>
      <div class="list">
        <div class="item1">
          <p class="item-title1">e foarte frumoasa</p>
          <img src="/1.jpg" class="item-img1"/>
          <p class="small-text">(si sexy)</p>
        </div>
        <div class="item2">
          <p class="item-title2">ma intelege si ne intelegem f bine🥰</p>
          <img src="/2.png" class="item-img2"/>
        </div>
        <div class="item3">
          <p class="item-title3">e goofy</p>
          <img src="/3.jpg" class="item-img3"/>
        </div>
        <div class="item3">
          <p class="item-title3">e foarte harnica (cand vrea)</p>
          <img src="/4.webp" class="item-img3"/>
        </div>
        <div class="item3">
          <p class="item-title3">ma face sa ma simt iubit</p>
          <img src="/5.jpg" class="item-img3"/>
        </div>
      </div>
      <div class="te-iubesc">
        <p>ps: daca esti rebe: te iubesc❤️</p>
      </div>
    </div>
  );
}
