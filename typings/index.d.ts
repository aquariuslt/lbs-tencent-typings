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

    class Size {
      private width: number;
      private height: number;

      constructor(width: number, height: number);

      equals(other: Size): boolean;

      getWidth(): number;

      getHeight(): number;

      toString(): string;

      clone(): Size;
    }


    class LatLng {
      constructor(lat: number, lng: number);

      equals(other: LatLng): boolean;

      getLat(): number;

      getLng(): number;

      toString(): string;

      clone(): LatLng;
    }

    class LatLngBounds {
      constructor(sw?: LatLng, ne?: LatLng);

      getCenter(): LatLng;

      getNorthEast(): LatLng;

      getSouthWest(): LatLng;

      extend(latlng: LatLng): LatLngBounds;

      union(): LatLngBounds;

      isEmpty(): boolean;

      contains(latlng: LatLng): boolean;

      toString(): string;
    }

    class Color {
      constructor(red: number, green: number, blue: number, alpha?: number);

      toRGB(): string;

      toRGBA(): string;

      toHex(): string;

      static fromHex(): Color;
    }
  }
}





