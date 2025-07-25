import VideoTrim from './NativeVideoTrim';
import type { EditorConfig, FileValidationResult, TrimOptions } from './NativeVideoTrim';
export * from './NativeVideoTrim';
/**
 * Show video editor
 *
 * @param {string} filePath: absolute non-empty file path to edit
 * @param {EditorConfig} config: editor configuration
 * @param {Function} onEvent: event callback
 * @returns {void}
 */
export declare function showEditor(filePath: string, config: Partial<Omit<EditorConfig, 'headerTextColor'>> & {
    headerTextColor?: string;
}): void;
/**
 * List output files generated at all time
 *
 * @returns {Promise<string[]>} A **Promise** which resolves to array of files
 */
export declare function listFiles(): Promise<string[]>;
/**
 * Clean output files generated at all time
 *
 * @returns {Promise<number>} A **Promise** which resolves to number of deleted files
 */
export declare function cleanFiles(): Promise<number>;
/**
 * Delete a file
 *
 * @param {string} filePath: absolute non-empty file path to delete
 * @returns {Promise<boolean>} A **Promise** which resolves `true` if successful
 */
export declare function deleteFile(filePath: string): Promise<boolean>;
/**
 * Close editor
 */
export declare function closeEditor(): void;
/**
 * Check if a file is valid audio or video file
 *
 * @param {string} url: file path to validate
 * @returns {Promise<FileValidationResult>} A **Promise** which resolves file info if successful
 */
export declare function isValidFile(url: string): Promise<FileValidationResult>;
/**
 * Trim a video file
 *
 * @param {string} url: absolute non-empty file path to edit
 * @param {TrimOptions} options: trim options
 * @returns {Promise<string>} A **Promise** which resolves to the trimmed file path
 */
export declare function trim(url: string, options: Partial<TrimOptions>): Promise<string>;
export * from './NativeVideoTrim';
export default VideoTrim;
//# sourceMappingURL=index.d.ts.map