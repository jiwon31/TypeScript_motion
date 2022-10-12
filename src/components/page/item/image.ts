export class ImageComponent {
  private element: HTMLElement;

  constructor(title: string, url: string) {
    const template = document.createElement("template");
    template.innerHTML = `<section class="image">
    <div class="image__holder">
      <img class="image__thumnail" />
    </div>
    <p class="image__title"></p>
  </section>`;

    // 사용자에게 전달받은 인자를 바로 innerHTML로 설정하는 것은 위험하다.
    // ✅ 템플릿 안의 요소에 접근해서 필요한 것들만 업데이트 해주는 것이 좋다.
    this.element = template.content.firstElementChild! as HTMLElement;

    const imageElement = this.element.querySelector(
      ".image__thumnail"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      ".image__title"
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
