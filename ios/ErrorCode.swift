//
//  ErrorCode.swift
//  react-native-video-trim
//
//  Created by ByteDance on 7/27/24.
//

import Foundation

enum ErrorCode: String {
    case trimmingFailed = "TRIMMING_FAILED"
    case failToLoadMedia = "FAIL_TO_LOAD_MEDIA"
    case failToSaveToPhoto = "FAIL_TO_SAVE_TO_PHOTO"
    case failToShare = "FAIL_TO_SHARE"
    case noPhotoPermission = "NO_PHOTO_PERMISSION"
    case invalidFilePath = "INVALID_FILE_PATH"
}
