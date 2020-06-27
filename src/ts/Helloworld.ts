export class Helloworld {
    public name: String;

    public constructor(name:String) {
        this.name = name;
    }

    public greeting(): void {
        console.log(`Helloworld! ${this.name}`);
    }
}
