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

    class MVCArray<T> {
      constructor(array?: Array<any>);

      forEach(callback: Function): void;

      getAt(index: number): T;

      setAt(index: number, element: T): void;

      setAt(element: T): number;

      getLength(): number;

      pop(): T;

      insertAt(index: number, element: T): void;

      removeAt(index: number): T;
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

    interface Projection {
      fromLatLngToPoint(latLng: LatLng): Point;

      fromPointToLatLng(pixel: Point, noWrap?: boolean);
    }

    class Map extends MVCObject {
      constructor(mapContainer: HTMLDivElement | string, options?: MapOptions);

      controls: Array<MVCArray<HTMLDivElement>>;


      fitBounds(bounds: LatLngBounds, padding?: number): void;

      getBounds(): LatLngBounds;

      getCenter(): LatLng;

      getZoom(): number;

      getContainer(): HTMLDivElement;

      getMapTypeId(): MapTypeId;

      getProjection(): Projection;

      panBy(x: number, y: number): void;

      zoomBy(deltaZoom: number): void;

      setCenter(latLng: LatLng): void;

      setZoom(zoom: number): void;

      setMapTypeId(mapTypeId: MapTypeId): void;

      setOptions(options: MapOptions);
    }


    /* Marker */
    enum MarkerAnimation {
      BOUNCE,
      DROP,
      DOWN,
      UP
    }

    interface MarkerOptions {
      animation: MarkerAnimation;
      clickable: boolean;
      draggable: boolean;
      flat: boolean;
      cursor: string;
      icon: MarkerImage;
      shadow: MarkerImage;
      shape: MarkerImage;
      title: string;
      visible: boolean;
      zIndex: boolean;
      map: Map;
      position: LatLng;
      rotation: number;
      autoRotation: boolean;
    }

    class MarkerImage {
      constructor(url: string, size: Size, origin: Point, anchor: Point, scaleSize: Size, shadowAngle?: number);
    }

    class MarkerShape {
      constructor(coords: Array<number>, type: 'circle' | 'poly' | 'rect')
    }

    class Marker {
      constructor(options: MarkerOptions);

      getAnimation(): MarkerAnimation;

      getClickable(): boolean;

      getCursor(): string;

      getDraggable(): boolean;

      getFlat(): boolean;

      getIcon(): string | MarkerImage;

      getMap(): Map;

      getPosition(): LatLng;

      getShadow(): string | MarkerImage;

      getShape(): MarkerShape;

      getTitle(): string;

      getVisible(): boolean;

      getRotation(): number;

      setAnimation(animation: MarkerAnimation): void;

      setClickable(clickable: boolean): void;

      setCursor(cursor: string): void;

      setDraggable(draggable: boolean): void;

      setFlat(flat: boolean): void;

      setIcon(icon: string | MarkerImage): void;

      setMap(map: Map): void;

      setPosition(position: LatLng): void;

      setShadow(shadow: string | MarkerImage): void;

      setShape(shape: MarkerShape): void;

      setTitle(title: string): void;

      setVisible(visible: boolean): void;

      setZIndex(zIndex: number): void;

      setRotation(rotation: number): void;

      moveTo(latLng: LatLng, speed: number): void;

      moveAlong(path: Array<LatLng>, speed: number): void;

      stopMove(): void;

      pauseMove(): void;

      resumeMove(): void;
    }

    interface MarkerClusterOptions {
      map: Map;
      minimumClusterSize: number;
      markers: Marker; // Suppose to be Array<Marker>
      zoomOnClick: boolean;
      gridSize: number;
      averageCenter: boolean;
      maxZoom: number
    }

    class MarkerCluster extends MVCObject {
      constructor(options: MarkerClusterOptions);
    }

    interface InfoWindowOptions {
      map: Map;
      content: HTMLElement | string;
      position: LatLng | Marker;
      zIndex: number;
    }

    class InfoWindow extends MVCObject {
      constructor(options: InfoWindowOptions);

      open(): void;

      close(): void;

      getContent(): string | HTMLElement;

      getMap(): Map;

      getPosition(): LatLng | Marker;

      getZIndex(): Number;

      setContent(content: string | HTMLElement): void;

      setMap(map: Map): void;

      setPosition(position: LatLng | Marker): void;

      setZIndex(zIndex: number);

      setOptions(options: InfoWindowOptions): void;
    }

    interface PolylineOptions {
      clickable: boolean;
      cursor: string;
      editable: boolean;
      map: Map;
      path: Array<LatLng> | MVCArray<LatLng>;
      strokeColor: Color | string;
      strokeDashStyle: string;
      strokeWeight: number;
      visible: boolean;
      zIndex: number;
    }

    class Polyline extends MVCObject {
      constructor(options: PolylineOptions);

      getBounds(): LatLngBounds;

      getMap(): Map;

      getPath(): MVCArray<LatLng>;

      getStrokeColor(): Color;

      getStrokeWeight(): number;

      getVisible(): boolean;

      getZIndex(): number;

      setMap(map: Map): void;

      setPath(path: Array<LatLng> | MVCArray<LatLng>): void;

      setStrokeColor(color: Color): void;

      setStrokeWeight(width: Number): void;

      setVisible(visible: boolean): void;

      setZIndex(zIndex: number): void;

      setOptions(options: PolylineOptions): void;
    }

    interface PolygonOptions {
      clickable: boolean;
      cursor: string;
      editable: boolean;
      fillColor: Color | string;
      map: Map;
      path: Array<LatLng> | MVCArray<LatLng>;
      strokeColor: Color | string;
      strokeDashStyle: string;
      strokeWeight: number;
      visible: boolean;
      zIndex: number;
    }

    class Polygon extends MVCObject {
      constructor(options: PolygonOptions);

      getBounds(): LatLngBounds;

      getMap(): Map;

      getPath(): MVCArray<LatLng>;

      getStrokeColor(): Color;

      getStrokeWeight(): number;

      getVisible(): boolean;

      getZIndex(): number;

      setMap(map: Map): void;

      setPath(path: Array<LatLng> | MVCArray<LatLng>): void;

      setStrokeColor(color: Color): void;

      setStrokeWeight(width: Number): void;

      setVisible(visible: boolean): void;

      setZIndex(zIndex: number): void;

      setOptions(options: PolygonOptions): void;
    }

    interface CircleOptions {
      center: LatLng;
      clickable: boolean;
      cursor: string;
      editable: boolean;
      fillColor: Color | string;
      map: Map;
      path: Array<LatLng> | MVCArray<LatLng>;
      strokeColor: Color | string;
      strokeDashStyle: string;
      strokeWeight: number;
      visible: boolean;
      zIndex: number;
    }

    class Circle extends MVCObject {
      constructor(options: CircleOptions);

      getBounds(): LatLngBounds;

      getCenter(): LatLng;

      getMap(): Map;

      getRadius(): number;

      getVisible(): boolean;

      getZIndex(): number;

      setCenter(center: LatLng);

      setMap(map: Map): void;

      setRadius(radius: number): void;

      setVisible(visible: boolean): void;

      setZIndex(zIndex: number): void;

      setOptions(options: CircleOptions): void;
    }

    interface LabelOptions {
      clickable: boolean;
      content: string;
      map: Map;
      offset: Size;
      position: LatLng;
      style: object;
      visible: boolean;
      zIndex: number;
    }

    class Label extends MVCObject {
      constructor(options: LabelOptions);

      getContent(): string;

      getMap(): Map;

      getPosition(): LatLng;

      getVisible(): boolean;

      getZIndex(): number;

      setContent(content: string): void;

      setMap(map: Map): void;

      setPosition(position: LatLng): void;

      setStyle(style: object): void;

      setVisible(visible: boolean): void;

      setZIndex(zIndex: number): void;

      setOptions(options: LabelOptions): void;
    }


    /* Components */
    interface MapTypeControlOptions {
      mapTypeIds: Array<MapTypeId> | Array<string>;
      position: ControlPosition;
    }

    interface ScaleControlOptions {
      position: ControlPosition;
    }

    interface ZoomControlOptions {
      position: ControlPosition;
      style: ZoomControlStyle;
    }

    interface PanControlOptions {
      position: ControlPosition;
    }


    /* Services */
    enum ServiceResultType {
      POI_LIST,
      CITY_LIST,
      AREA_INFO,
      GEO_INFO,
      STATION_INFO,
      LINE_INFO,
      TRANSFER_INFO,
      DRIVING_INFO,
      MULTI_DESTINATION
    }

    enum ServiceErrorType {
      Error,
      NO_RESULTS,
      INVALID_REQUEST,
      UNKNOWN_ERROR
    }

    enum PoiType {
      NORMAL,
      BUS_STATION,
      SUBWAY_STATION,
      BUS_LINE,
      DISTRICT
    }

    interface SearchServiceOptions {
      complete?: Function;
      error?: Function;
      pageIndex?: number;
      pageCapacity?: number;
      location?: string;
      map?: Map;
      panel?: string | HTMLDivElement;
      autoExtend?: boolean;
    }

    interface PoiList {
      pois: Array<Poi>;
      pageIndex: number;
      pageCapacity: number;
      totalNum: number;
    }


    interface Poi {
      id: string;
      name: string;
      latLng: LatLng;
      type: PoiType;
      address: string;
      phone: string;
      postcode: string;
      category: string;
      boundary: Array<LatLng>;
      panoinfo: object;
      dist: number;
    }

    interface CityList {
      cities: Array<City>;
    }

    interface City {
      cityName: string;
      resultNum: number;
      cities?: Array<City>;
    }

    interface AreaInfo {
      name: string;
      level: string;
      latlng: LatLng;
    }

    type SearchServiceCompleteFunction = (type: ServiceResultType, detail: PoiList | CityList | AreaInfo) => void;
    type SearchServiceErrorFunction = (error: ServiceErrorType) => void;


    class SearchService {
      constructor(opts?: SearchServiceOptions);

      search(keyword: string): void;

      searchInBounds(keyword: string, latlngBounds: LatLngBounds): void;

      searchNearBy(keyword: string, center: LatLng, radius: number): void;

      setComplete(callback: SearchServiceCompleteFunction): void;

      setError(callback: SearchServiceErrorFunction): void;

      setLocation(location: string): LatLng;

      setPageIndex(pageIndex: number): void;

      setPageCapacity(pageCapacity: number): void;

      getLocation(): LatLng;

      getPageIndex(): number;

      getPageCapacity(): number;

      clear(): void;
    }
  }
}





