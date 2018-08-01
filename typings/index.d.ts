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

    interface MapsEventListener {
    }

    interface MouseEvent {
      latLng: LatLng;
      pixel: Point;
    }

    class Event {
      addDomListener(element: HTMLElement, eventName: string, handler: Function): MapsEventListener;

      addDomListenerOnce(element: HTMLElement, eventName: string, handler: Function): MapsEventListener;

      addListener(instance: object, eventName: string, handler: Function): MapsEventListener;

      addListenerOnce(instance: object, eventName: string, handler: Function): MapsEventListener;

      removeListener(listener: MapsEventListener): void;

      clearListeners(instance: Object, eventName: String): void;

      trigger(instance: Object, eventName: String, args?: any): void;

    }

    /* Core Classes */
    enum MapZoomType {
      DEFAULT,
      CENTER
    }

    enum MapTypeId {
      ROADMAP,
      SATELLITE,
      HYBRID
    }

    enum ControlPosition {
      TOP_LEFT,
      TOP_CENTER,
      TOP_RIGHT,
      BOTTOM_LEFT,
      BOTTOM_CENTER,
      BOTTOM_RIGHT,
      LEFT_TOP,
      LEFT_CENTER,
      LEFT_BOTTOM,
      RIGHT_TOP,
      RIGHT_CENTER,
      RIGHT_BOTTOM,
      CENTER
    }

    enum ZoomControlStyle {
      DEFAULT,
      LARGE,
      SMALL
    }

    interface MapTypeControlOptions {
      mapTypeIds: Array<MapTypeId> | Array<string>;
      position: ControlPosition;
    }

    interface PanControlOptions {
      position: ControlPosition;
    }

    interface ZoomControlOptions {
      position: ControlPosition;
      style: ZoomControlStyle;
    }

    interface ScaleControlOptions {
      position: ControlPosition;
    }

    interface MapOptions {
      center: LatLng;
      zoom: number;
      minZoom: number;
      maxZoom: number;
      mapZoomType: MapZoomType;
      noClear: boolean;
      backgroundColor: string;
      boundary: LatLngBounds;
      draggableCursor: string;
      draggingCursor: string;
      mapTypeId: MapTypeId;
      draggable: boolean;
      scrollwheel: boolean;
      disableDoubleClickZoom: boolean;
      keyboardShortcuts: boolean;
      mapTypeControl: boolean;
      mapTypeControlOptions: MapTypeControlOptions;
      panControl: boolean;
      panControlOptions: PanControlOptions;
      zoomControl: boolean;
      zoomControlOptions: ZoomControlOptions;
      scaleControl: boolean;
      scaleControlOptions: ScaleControlOptions;
    }


    class Map extends MVCObject {
      constructor(mapContainer: HTMLDivElement | string, options?: MapOptions);

      fitBounds(bounds: LatLngBounds, padding?: number): void;

      getBounds(): LatLngBounds;

      getCenter(): LatLng;

      getZoom(): number;

      getContainer(): HTMLDivElement;

      getMapTypeId(): MapTypeId;

      // TODO: getPosition
    }
  }
}





