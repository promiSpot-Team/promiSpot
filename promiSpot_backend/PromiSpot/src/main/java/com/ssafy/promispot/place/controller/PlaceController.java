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
import org.springframework.web.bind.annotation.PutMapping;
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
	
	// ��� ���
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
	
	// ��� �ϳ� ��ȸ
	@GetMapping("select/{placeId}")
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
	
	// ��� ����
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
	
	
	// ��� ���� 
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
	
	
	
	
	
	
	
	
	

	
	// ���� ó��
	private ResponseEntity<String> exceptionHandling(Exception e) {
		return new ResponseEntity<String>("Error: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	

}
