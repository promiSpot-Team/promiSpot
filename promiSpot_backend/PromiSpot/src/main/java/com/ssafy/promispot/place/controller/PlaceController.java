package com.ssafy.promispot.place.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.promispot.place.model.entity.PlaceEntity;
import com.ssafy.promispot.place.model.service.PlaceService;

@RestController
@CrossOrigin
@RequestMapping("/place")
public class PlaceController {
	
	
	
	@Autowired
	PlaceService placeService;
	
	// 장소 등록
	@PostMapping("insert")
	public ResponseEntity<?> insertPlace(@RequestBody PlaceEntity placeEntity) {
		
		try {
			int result = placeService.insertPlace(placeEntity);
			
			if(result != 0) {
				return new ResponseEntity<String>("success", HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("fail", HttpStatus.NO_CONTENT);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}	
	}
	
	// 장소 하나 조회
	@GetMapping("{placeId}")
	public ResponseEntity<?> getPlace(@PathVariable("placeId") String placeId) {
		
		
	
		
		try {
			PlaceEntity place2 = placeService.getPlace("1");
			System.out.println(place2);
			
			
			
			if (place2 != null) {
				System.out.println("success work");
				return new ResponseEntity<PlaceEntity>(place2, HttpStatus.OK);
			} else {
				System.out.println("fail work");
				return new ResponseEntity<String>("fail", HttpStatus.NO_CONTENT);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
		
	}
	
	
	// 장소 삭제 
	@DeleteMapping("{placeId}")
	public ResponseEntity<?> deletePlace(@PathVariable("placeId") String placeId) {
		
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
	
	
	
	
	
	
	
	
	

	
	// 에러 처리
	private ResponseEntity<String> exceptionHandling(Exception e) {
		return new ResponseEntity<String>("Error: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	

}
