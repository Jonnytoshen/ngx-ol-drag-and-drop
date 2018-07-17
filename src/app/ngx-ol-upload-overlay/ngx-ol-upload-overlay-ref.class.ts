import { Observable } from "rxjs";


export abstract class NgxOlUploadOverlayRef<T = any, R = any> {
    
    abstract afterOpen: Observable<void>;
    abstract afterClose: Observable<R>;

    abstract open(): void;
    abstract close(result?: R): void;
    abstract destroy(result?: R): void;
        

}