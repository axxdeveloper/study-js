export class TodoItem {
    public constructor(public id:String, public task:String, public done:boolean) {
    }

    public printDetail():void {
        console.log(`${this.id} / ${this.task} / ${this.done}`);
    }
}