import { NativeModules, Platform, processColor } from 'react-native';
const LINKING_ERROR = `The package 'react-native-video-trim' doesn't seem to be linked. Make sure: \n\n` + Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const VideoTrim = NativeModules.VideoTrim ? NativeModules.VideoTrim : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
/**
 * Delete a file
 *
 * @param {string} videoPath: absolute non-empty file path to edit
 * @param {EditorConfig} config: editor configuration
 * @returns {void} A **Promise** which resolves `void`
 */
export function showEditor(filePath) {
  let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    headerTextColor
  } = config;
  const color = processColor(headerTextColor);
  VideoTrim.showEditor(filePath, {
    ...config,
    headerTextColor: color
  });
}

/**
 * Clean output files generated at all time
 *
 * @returns {Promise<string[]>} A **Promise** which resolves to array of files
 */
export function listFiles() {
  return VideoTrim.listFiles();
}

/**
 * Clean output files generated at all time
 *
 * @returns {Promise} A **Promise** which resolves to number of deleted files
 */
export function cleanFiles() {
  return VideoTrim.cleanFiles();
}

/**
 * Delete a file
 *
 * @param {string} filePath: absolute non-empty file path to delete
 * @returns {Promise} A **Promise** which resolves `true` if successful
 */
export function deleteFile(filePath) {
  if (!(filePath !== null && filePath !== void 0 && filePath.trim().length)) {
    throw new Error('File path cannot be empty!');
  }
  return VideoTrim.deleteFile(filePath);
}

/**
 * Close editor
 */
export function closeEditor() {
  return VideoTrim.closeEditor();
}

/**
 * Check if a file is valid audio or video file
 *
 * @returns {Promise} A **Promise** which resolves file info if successful
 */
export function isValidFile(url) {
  return VideoTrim.isValidFile(url);
}
//# sourceMappingURL=index.js.map