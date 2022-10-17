import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
              <div class="video__player">
                <iframe class="video__iframe"></iframe>
              </div>
              <h2 class="page-item__title video__title"></h2>
            </section>`);

    const videoElement = this.element.querySelector(
      ".video__iframe"
    )! as HTMLIFrameElement;
    videoElement.src = this.convertToEmbeddedURL(url);

    const titleElement = this.element.querySelector(
      ".video__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  // input
  // https://www.youtube.com/watch?v=6EJ0mFTLP_Y
  // https://youtu.be/6EJ0mFTLP_Y
  // ouput
  // https://www.youtube.com/embed/6EJ0mFTLP_Y
  // 정규표현식 Regex
  private convertToEmbeddedURL(url: string): string {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);

    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}
