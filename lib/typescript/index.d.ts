import { type ColorValue } from 'react-native';
export interface EditorConfig {
    /**
     * Enable haptic feedback
     * @default true
     */
    enableHapticFeedback?: boolean;
    /**
     * Save the output file to Photos Library. Only video is supported. Note that you have to make sure you have permission to save to Photos Library.
     * @default false
     */
    saveToPhoto?: boolean;
    maxDuration?: number;
    /**
     * Minimum duration for trimmer
     * @default 1000
     */
    minDuration?: number;
    /**
     * Cancel button text
     * @default "Cancel"
     */
    cancelButtonText?: string;
    /**
     * Save button text
     * @default "Save"
     */
    saveButtonText?: string;
    /**
     * Enable cancel dialog
     * @default true
     */
    enableCancelDialog?: boolean;
    /**
     * Cancel dialog title
     * @default "Warning!"
     */
    cancelDialogTitle?: string;
    /**
     * Cancel dialog message
     * @default "Are you sure want to cancel?"
     */
    cancelDialogMessage?: string;
    /**
     * Cancel dialog cancel text
     * @default "Close"
     */
    cancelDialogCancelText?: string;
    /**
     * Cancel dialog confirm text
     * @default "Proceed"
     */
    cancelDialogConfirmText?: string;
    /**
     * Enable save dialog
     * @default true
     */
    enableSaveDialog?: boolean;
    /**
     * Save dialog title
     * @default "Confirmation!"
     */
    saveDialogTitle?: string;
    /**
     * Save dialog message
     * @default "Are you sure want to save?"
     */
    saveDialogMessage?: string;
    /**
     * Save dialog cancel text
     * @default "Close"
     */
    saveDialogCancelText?: string;
    /**
     * Save dialog confirm text
     * @default "Proceed"
     */
    saveDialogConfirmText?: string;
    /**
     * Trimming text
     * @default "Trimming video..."
     */
    trimmingText?: string;
    /**
     * By default, on iOS the editor will be presented as a modal. If you want to present it as a full screen modal, set this to `true`.
     * @default false
     */
    fullScreenModalIOS?: boolean;
    /**
     * Type of the file to edit. If video file, recommend to use `video`. If audio file, recommend to use `audio`.
     * @default "video"
     */
    type?: 'video' | 'audio';
    /**
     * Output file extension. If video file, recommend to use `mp4` or `mov`. If audio file, recommend to use `wav` or `m4a`.
     * @default "mp4"
     * @example "mp4", "mov", "wav", "m4a", "3gp", "avi", "mkv", "flv", "wmv", "webm"
     */
    outputExt?: string;
    /**
     * Whether to open Documents app after finish editing
     * @default false
     */
    openDocumentsOnFinish?: boolean;
    /**
     * Whether to open Share Sheet after finish editing
     * @default false
     */
    openShareSheetOnFinish?: boolean;
    /**
     * Remove the file after saved to Photos Library
     * @default false
     */
    removeAfterSavedToPhoto?: boolean;
    /**
     * Remove the file after failed to save to Photos Library
     * @default false
     */
    removeAfterFailedToSavePhoto?: boolean;
    /**
     * Remove the file after saved to Documents app
     * @default false
     */
    removeAfterSavedToDocuments?: boolean;
    /**
     * Remove the file after failed to save to Documents app
     * @default false
     */
    removeAfterFailedToSaveDocuments?: boolean;
    /**
     * Remove the file after shared to other apps. Currently only support iOS, on Android there's no way to detect if the file is shared or not.
     * @default false
     */
    removeAfterShared?: boolean;
    /**
     * Remove the file after failed to share to other apps. Currently only support iOS, on Android there's no way to detect if the file is shared or not.
     * @default false
     */
    removeAfterFailedToShare?: boolean;
    /**
     * Whether to enable autoplay on load
     */
    autoplay?: boolean;
    /**
     * Jump to position on load in milliseconds
     * @default `undefined` (beginning of the video)
     */
    jumpToPositionOnLoad?: number;
    /**
     * Whether to close the editor when finish editing
     * @default true
     */
    closeWhenFinish?: boolean;
    /**
     * Enable cancel trimming
     * @default true
     */
    enableCancelTrimming?: boolean;
    /**
     * Cancel trimming button text
     * @default "Cancel"
     */
    cancelTrimmingButtonText?: string;
    /**
     * Enable cancel trimming dialog
     * @default true
     */
    enableCancelTrimmingDialog?: boolean;
    /**
     * Cancel trimming dialog title
     * @default "Warning!"
     */
    cancelTrimmingDialogTitle?: string;
    /**
     * Cancel trimming dialog message
     * @default "Are you sure want to cancel trimming?"
     */
    cancelTrimmingDialogMessage?: string;
    /**
     * Cancel trimming dialog cancel text
     * @default "Close"
     */
    cancelTrimmingDialogCancelText?: string;
    /**
     * Cancel trimming dialog confirm text
     * @default "Proceed"
     */
    cancelTrimmingDialogConfirmText?: string;
    /**
     * Header text
     */
    headerText?: string;
    /**
     * Header text size
     * @default 16
     */
    headerTextSize?: number;
    /**
     * Header text color
     * @default white
     */
    headerTextColor?: ColorValue;
    /**
     * Alert on fail to load media
     * @default true
     */
    alertOnFailToLoad?: boolean;
    /**
     * Alert on fail to load media title
     * @default "Error"
     */
    alertOnFailTitle?: string;
    /**
     * Alert on fail to load media message
     * @default "Fail to load media. Possibly invalid file or no network connection"
     */
    alertOnFailMessage?: string;
    /**
     * Alert on fail to load media close text
     * @default "Close"
     */
    alertOnFailCloseText?: string;
    /**
     * Progress update interval in seconds
     * @default 0.1
     */
    progressUpdateInterval?: number;
}
/**
 * Delete a file
 *
 * @param {string} videoPath: absolute non-empty file path to edit
 * @param {EditorConfig} config: editor configuration
 * @returns {void} A **Promise** which resolves `void`
 */
export declare function showEditor(filePath: string, config?: EditorConfig): void;
/**
 * Clean output files generated at all time
 *
 * @returns {Promise<string[]>} A **Promise** which resolves to array of files
 */
export declare function listFiles(): Promise<string[]>;
/**
 * Clean output files generated at all time
 *
 * @returns {Promise} A **Promise** which resolves to number of deleted files
 */
export declare function cleanFiles(): Promise<number>;
/**
 * Delete a file
 *
 * @param {string} filePath: absolute non-empty file path to delete
 * @returns {Promise} A **Promise** which resolves `true` if successful
 */
export declare function deleteFile(filePath: string): Promise<boolean>;
/**
 * Close editor
 */
export declare function closeEditor(): void;
/**
 * Check if a file is valid audio or video file
 *
 * @returns {Promise} A **Promise** which resolves file info if successful
 */
export declare function isValidFile(url: string): Promise<boolean>;
//# sourceMappingURL=index.d.ts.map