import { BaseComponent } from "../../component.js";

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="image">
              <div class="image__holder"><img class="image__thumnail" /></div>
              <h2 class="page-item__title image__title"></h2>
            </section>`);

    // 사용자에게 전달받은 인자를 바로 innerHTML로 설정하는 것은 위험하다.
    // ✅ 템플릿 안의 요소에 접근해서 필요한 것들만 업데이트 해주는 것이 좋다.
    const imageElement = this.element.querySelector(
      ".image__thumnail"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      ".image__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}
