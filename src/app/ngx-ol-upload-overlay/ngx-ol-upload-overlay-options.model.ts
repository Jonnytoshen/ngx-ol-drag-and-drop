import { EventEmitter, Type } from "@angular/core";
import { OnClickCallback } from "./ngx-ol-upload-overlay/ngx-ol-upload-overlay.component";


export interface NgxOlUploadOverlayOptions<T = any> {
    title?: string;
    visible?: boolean;
    zIndex?: number;
    width?: number | string;
    wrapClassName?: string;
    className?: string;
    style?: object;
    maskEnable?: boolean;
    maskClosable?: boolean;
    maskStyle?: object;

    closable?: boolean;

    component?: Type<T>;
    componentParams?: object;

    onOk?: EventEmitter<T> | OnClickCallback<T>;
    onCancel?: EventEmitter<T> | OnClickCallback<T>;
}