import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { ToDoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent("Image title", "https://picsum.photos/600/300");
        image.attachTo(appRoot, "beforeend");
        const video = new VideoComponent("Video title", "https://www.youtube.com/watch?v=POe9SOEKotk");
        video.attachTo(appRoot, "beforeend");
        const note = new NoteComponent("Note title", "Note body");
        note.attachTo(appRoot, "beforeend");
        const todo = new ToDoComponent("Todo title", "Todo item");
        todo.attachTo(appRoot, "beforeend");
    }
}
new App(document.querySelector(".document"));
