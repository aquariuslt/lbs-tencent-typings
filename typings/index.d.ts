/** Definition global namespace qq */
declare namespace qq {
  namespace maps {
    class MVCObject {
      get(key: string): any;

      set(key: string, value: any): void;

      setValues(values: object): void;

      bindTo(key: string, target: MVCObject, targetKey?: string, noNotify?: boolean): void;

      unbindKey(key: string): void;

      unbindAll(): void;

      notify(key: string): void;

      changed(key: string): void;

    }

    class MVCArray {
      constructor(array?: Array<any>);

      forEach(callback: Function): void;

      getAt(index: number): any;

      setAt(index: number, element: any): void;

      getLength(): number;

      pop(): any;

      setAt(element: any): number;

      insertAt(index: number, element: any): void;

      removeAt(index: number): any;
    }

    class Point {
      private x: number;
      private y: number;

      constructor(x: number, y: number);

      equals(other: Point);

      getX(): number;

      getY(): number;

      toString(): string;

      clone(): Point;
    }
  }
}





