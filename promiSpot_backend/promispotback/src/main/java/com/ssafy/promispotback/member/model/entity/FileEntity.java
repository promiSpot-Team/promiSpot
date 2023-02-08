package com.ssafy.promispotback.member.model.entity;

import com.fasterxml.jackson.annotation.JsonInclude;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value = "FileEntity : 회원 프로필 이미지 파일", description = "회원의 프로필 이미지 파일.")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class FileEntity {

    @ApiModelProperty(value = "프로필 이미지 경로")
    private String imgPath;

    @ApiModelProperty(value = "프로필 이미지 원본 이름")
    private String imgOriginName;

    @ApiModelProperty(value = "프로필 이미지 서버 이름")
    private String imgServerName;

    @ApiModelProperty(value = "프로필 이미지 사이즈")
    private long file_size;

    public FileEntity() {
        super();
    }

    public FileEntity(String imgPath, String imgOriginName, String imgServerName, long file_size) {
        super();
        this.imgPath = imgPath;
        this.imgOriginName = imgOriginName;
        this.imgServerName = imgServerName;
        this.file_size = file_size;
    }

    public String getImgPath() {
        return imgPath;
    }

    public void setImgPath(String imgPath) {
        this.imgPath = imgPath;
    }

    public String getImgOriginName() {
        return imgOriginName;
    }

    public void setImgOriginName(String imgOriginName) {
        this.imgOriginName = imgOriginName;
    }

    public String getImgServerName() {
        return imgServerName;
    }

    public void setImgServerName(String imgServerName) {
        this.imgServerName = imgServerName;
    }

    public long getFile_size() {
        return file_size;
    }

    public void setFile_size(long file_size) {
        this.file_size = file_size;
    }

    @Override
    public String toString() {
        return "FileEntity [imgPath=" + imgPath + ", imgOriginName=" + imgOriginName + ", imgServerName="
                + imgServerName + ", file_size=" + file_size + "]";
    }



}//FileEntity
