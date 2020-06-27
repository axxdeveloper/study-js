import {TodoItem} from "./TodoItem";

export class TodoItemCollection {
    constructor(public name:String, public todoItems: TodoItem[]) {
    }

    public addItem(item: TodoItem): number {
        return this.todoItems.push(item);
    }

    public getItemById(id:String): TodoItem | undefined {
        return this.todoItems.find(item => item.id === id);
    }

    public markDone(id:String) {
        const item = this.getItemById(id)
        if (item) {
            item.done = true
        }
    }
}