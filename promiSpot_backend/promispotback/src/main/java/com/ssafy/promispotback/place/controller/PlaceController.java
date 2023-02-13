package com.ssafy.promispotback.place.controller;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.promispotback.place.model.entity.PlaceEntity;
import com.ssafy.promispotback.place.model.service.PlaceService;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/place")
public class PlaceController {
	
	@Autowired
	PlaceService placeService;
	
	// 장소 등록
	@PostMapping("insert")
	public ResponseEntity<?> insertPlace(@RequestBody PlaceEntity placeEntity) {

		System.out.println(placeEntity.toString());
		Map<String, Object> resultMap = new HashMap<>();

		try {
			// 이미 등록된 장소라면 id를 반환
			if(placeService.getPlace(placeEntity.getPlaceId()) != null) {
				resultMap.put("message", "success");
				resultMap.put("placeId", placeEntity.getPlaceId()); // 자동 생성된 pk 값 담아주기
				return new ResponseEntity<Map<String, Object>>(resultMap, HttpStatus.OK);
			}

			// 등록되지 않은 장소라면 DB에 저장하고 id를 반환
			int result = placeService.insertPlace(placeEntity);
			
			if(result != 0) {
				resultMap.put("message", "success");
				resultMap.put("placeId", placeEntity.getPlaceId()); // 자동 생성된 pk 값 담아주기
				return new ResponseEntity<Map<String, Object>>(resultMap, HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("fail", HttpStatus.NO_CONTENT);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}	
	}
	
	// 장소 하나 조회
	@GetMapping("get/{placeId}")
	public ResponseEntity<?> getPlace(@PathVariable("placeId") String placeId) {
		try {
			PlaceEntity place = placeService.getPlace(placeId);
			
			if (place != null) {
				System.out.println("success work");
				return new ResponseEntity<PlaceEntity>(place, HttpStatus.OK);
			} else {
				System.out.println("fail work");
				return new ResponseEntity<String>("fail", HttpStatus.NO_CONTENT);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}
	
	// 장소 수정
	@PutMapping("update")
	public ResponseEntity<?> updatePlace(@RequestBody PlaceEntity place) {
		
		try {
			
			int result = placeService.modifyPlace(place);

			if (result != 0) {
				return new ResponseEntity<String>("success", HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("fail", HttpStatus.NO_CONTENT);
			}

		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}
	
	
	// 장소 삭제 
	@DeleteMapping("remove/{placeId}")
	public ResponseEntity<?> removePlace(@PathVariable("placeId") String placeId) {
		
		try {
			int result = placeService.removePlace(placeId); 
			if (result != 0) {
				return new ResponseEntity<String>("success", HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("fail", HttpStatus.NO_CONTENT);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}
	
	
	// 투표 완료 후 스케줄페이지에서 투표 장소 리스트 가져오기
	@ApiOperation(value = "장소 리스트 가져오기", notes = "장소 리스트 가져오기", response = String.class)
	@GetMapping("/getPlaceList/{promiseSeq}")
	public ResponseEntity<?> getPlaceList(@RequestBody @ApiParam(value="약속 일련번호", required=true)
											  @PathVariable("promiseSeq") int promiseSeq){
		return null;
	}//getPlaceList
	
	
	
	

	
	// 에러 처리
	private ResponseEntity<String> exceptionHandling(Exception e) {
		return new ResponseEntity<String>("Error: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	

}
