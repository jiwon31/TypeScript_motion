import { Component } from "./components/component.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { ToDoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { Composable, PageComponent } from "./components/page/page.js";

class App {
  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "Image title",
      "https://picsum.photos/600/300"
    );
    this.page.addChild(image);

    const video = new VideoComponent(
      "Video title",
      "https://www.youtube.com/watch?v=POe9SOEKotk"
    );
    this.page.addChild(video);

    const note = new NoteComponent("Note title", "Note body");
    this.page.addChild(note);

    const todo = new ToDoComponent("Todo title", "Todo item");
    this.page.addChild(todo);
  }
}

new App(document.querySelector(".document")! as HTMLElement);
