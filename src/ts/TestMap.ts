export class TestMap {
    private map: Map<string, string> = new Map();

    put(key:string, val:string): void {
        if (key) {
            this.map.set(key, val);
        }
    }

    get(key:string): string | undefined {
        if (key) {
            return this.map.get(key)
        }
    }
}