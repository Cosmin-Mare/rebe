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
        </div>
        <div class="item2">
          <p class="item-title2">ma intelege si ne intelegem bine🥰</p>
          <img src="/2.png" class="item-img2"/>
        </div>
        <div class="item3">
          <p class="item-title3">e goofy</p>
          <img src="/3.jpg" class="item-img3"/>
        </div>
      </div>
      <div class="te-iubesc">
        <p>ps: daca esti rebe: te iubesc❤️</p>
      </div>
    </div>
  );
}
