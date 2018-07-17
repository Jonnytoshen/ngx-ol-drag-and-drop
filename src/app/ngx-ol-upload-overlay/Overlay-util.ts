export interface ClickPosition {
    x: number;
    y: number;
  }
  
  export class OverlayUtil {
    private lastPosition: ClickPosition = null;
  
    constructor(private document: Document) {
      this.listenDocumentClick();
    }
  
    getLastClickPosition(): ClickPosition | null {
      return this.lastPosition;
    }
  
    listenDocumentClick(): void {
      this.document.addEventListener('click', (event: MouseEvent) => {
        this.lastPosition = { x: event.clientX, y: event.clientY };
      });
    }
  }
  
  export default new OverlayUtil(document);