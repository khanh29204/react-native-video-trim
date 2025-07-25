import type { TurboModule } from 'react-native';

export interface BaseOptions {
  saveToPhoto: boolean;
  type: string;
  outputExt: string;
  openDocumentsOnFinish: boolean;
  openShareSheetOnFinish: boolean;
  removeAfterSavedToPhoto: boolean;
  removeAfterFailedToSavePhoto: boolean;
  removeAfterSavedToDocuments: boolean;
  removeAfterFailedToSaveDocuments: boolean;
  removeAfterShared: boolean;
  removeAfterFailedToShare: boolean;
  enableRotation: boolean;
  rotationAngle: number;
}

export interface EditorConfig extends BaseOptions {
  enableHapticFeedback: boolean;
  maxDuration: number;
  minDuration: number;
  cancelButtonText: string;
  saveButtonText: string;
  enableCancelDialog: boolean;
  cancelDialogTitle: string;
  cancelDialogMessage: string;
  cancelDialogCancelText: string;
  cancelDialogConfirmText: string;
  enableSaveDialog: boolean;
  saveDialogTitle: string;
  saveDialogMessage: string;
  saveDialogCancelText: string;
  saveDialogConfirmText: string;
  trimmingText: string;
  fullScreenModalIOS: boolean;
  autoplay: boolean;
  jumpToPositionOnLoad: number;
  closeWhenFinish: boolean;
  enableCancelTrimming: boolean;
  cancelTrimmingButtonText: string;
  enableCancelTrimmingDialog: boolean;
  cancelTrimmingDialogTitle: string;
  cancelTrimmingDialogMessage: string;
  cancelTrimmingDialogCancelText: string;
  cancelTrimmingDialogConfirmText: string;
  headerText: string;
  headerTextSize: number;
  headerTextColor: number;
  alertOnFailToLoad: boolean;
  alertOnFailTitle: string;
  alertOnFailMessage: string;
  alertOnFailCloseText: string;
}

export interface TrimOptions extends BaseOptions {
  startTime: number;
  endTime: number;
}

export interface FileValidationResult {
  isValid: boolean;
  fileType: string;
  duration: number;
}

export interface Spec extends TurboModule {
  showEditor(filePath: string, config: EditorConfig): void;
  listFiles(): Promise<string[]>;
  cleanFiles(): Promise<number>;
  deleteFile(filePath: string): Promise<boolean>;
  closeEditor(): void;
  isValidFile(url: string): Promise<FileValidationResult>;
  trim(url: string, options: TrimOptions): Promise<string>;

  // Chuẩn TurboModule: xử lý event thông qua 2 hàm này
  addListener(eventName: string): void;
  removeListeners(count: number): void;
}

declare const _default: Spec;
export default _default;
