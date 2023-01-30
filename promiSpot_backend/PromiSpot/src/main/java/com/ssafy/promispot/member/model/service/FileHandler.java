package com.ssafy.promispot.member.model.service;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.ssafy.promispot.member.controller.MemberController;
import com.ssafy.promispot.member.model.entity.FileEntity;

@Component
public class FileHandler {
	
	public static final Logger logger = LoggerFactory.getLogger(FileHandler.class);
	
	// 루트 경로 불러오기
    private final String rootPath = "C:\\Temp";
//    private final String rootPath = System.getProperty("user.dir");
    
    // 프로젝트 루트 경로에 있는 디렉토리
    private final String fileDir = rootPath + "\\upload\\";
    
    public String getFullPath(String filename) { 
    	return fileDir + filename; 
    }
	
	public FileEntity saveFile(MultipartFile multipartFile) {
		
		// 작성자가 업로드한 파일명
		String originalFileName = multipartFile.getOriginalFilename();
		
		// 서버에서 관리하는 파일. 파일명을 중복되지 않게끔 UUID로 정하고 ".확장자"는 그대로
        String storeFilename = UUID.randomUUID() + "." + extractExt(originalFileName);
        
        
        File folder = makeFolder();
        
		FileEntity file = new FileEntity(folder.toString()
										, multipartFile.getOriginalFilename()
										, storeFilename
										, multipartFile.getSize());
		
		// 파일 저장
		File newFile = new File(folder, storeFilename);
		try {
			multipartFile.transferTo(newFile);
		} catch (IllegalStateException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return file;		
	}//saveFile

	private File makeFolder() {
		
		// 오늘 날짜로 폴더 생성
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyyMMdd");
		String current_date = simpleDateFormat.format(new Date());
		
		File folder = new File(fileDir);
		
        if(!folder.exists()) {
        	if(folder.mkdir()) {
        		logger.info("files 생성 성공");
        	}else {
        		logger.info("files 생성 실패");        		
        	}
        }
        
        // File.separator : Windows('\'), Linux, MAC('/')
        folder = new File(folder + File.separator + current_date);
        if(!folder.exists()) {
        	if(folder.mkdir()) {
        		logger.info("날짜 폴더 생성 성공");
        	}else {
        		logger.info("날짜 폴더 생성 실패");        		
        	}
        }
        
		return folder;
	}//makeFolder

	// 확장자 추출
	private String extractExt(String originalFileName) {
		int pos = originalFileName.lastIndexOf(".");
        return originalFileName.substring(pos + 1);
	}//extractExt

}//FileHandler
