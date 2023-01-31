package com.ssafy.promispotback.address.controller;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.promispotback.address.model.entity.AddressEntity;
import com.ssafy.promispotback.address.model.service.AddressService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@CrossOrigin
@RestController
@RequestMapping("/address")
@Api("회원 주소 컨트롤러  API")
public class AddressController {
	
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";
	
	@Autowired 
	private AddressService addressService;
	
	// 회원 주소 등록
	@ApiOperation(value = "회원 주소 등록", notes = "회원 주소 등록. DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다. ", response = String.class)
	@PostMapping
	public ResponseEntity<?> addAddress(@RequestBody @ApiParam(value="회원 주소", required=true) 
		AddressEntity addressEntity){
		
		try {
			if(addressService.addAddress(addressEntity)) {
				return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
			}else {
				return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
			}
		} catch (SQLException e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
		
	}//addAddress
	
	
	// 회원 주소 조회
	@ApiOperation(value = "회원 주소 상세 조회", notes = "회원 주소 상세 조회. DB 조회 성공여부에 따라 AddressEntity 또는 'fail' 문자열을 반환한다. ", response = String.class)
	@GetMapping("/{addressSeq}")
	public ResponseEntity<?> getAddress(@RequestBody @ApiParam(value="회원 주소 일련번호", required=true) 
		@PathVariable("addressSeq") int addressSeq){
		
		try {
			AddressEntity address = addressService.getAddress(addressSeq);
			if(address != null) {
				return new ResponseEntity<AddressEntity>(address, HttpStatus.OK);
			}else {
				return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
			}
		} catch (SQLException e) {
			e.printStackTrace();
			return exceptionHandling(e);
		} 
		
	}//getAddress
	
	
	// 회원 주소 수정
	@ApiOperation(value = "회원 주소 수정", notes = "회원 주소 수정. DB 수정 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다. ", response = String.class)
	@PutMapping
	public ResponseEntity<?> modifyAddress(@RequestBody @ApiParam(value="회원 주소", required=true) 
		AddressEntity addressEntity){
		
		try {
			if(addressService.modifyAddress(addressEntity)) {
				return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
			}else {
				return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
			}
		} catch (SQLException e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
		
	}//modifyAddress
	
	
	// 회원 주소 삭제
	@ApiOperation(value = "회원 주소 삭제", notes = "회원 주소 삭제. DB 삭제 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다. ", response = String.class)
	@DeleteMapping("/{addressSeq}")
	public ResponseEntity<?> removeAddress(@RequestBody @ApiParam(value="회원 주소 일련번호", required=true) 
		@PathVariable("addressSeq") int addressSeq){
		
		try {
			if(addressService.removeAddress(addressSeq)) {
				return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
			}else {
				return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
			}
		} catch (SQLException e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
		
	}//removeAddress

	
	// 회원 주소 목록 조회
	@ApiOperation(value = "회원 주소 목록 조회", notes = "회원 주소 목록 조회. DB 목록 조회 성공여부에 따라 주소 목록 또는 'fail' 문자열을 반환한다. ", response = String.class)
	@GetMapping("/addressList/{memberSeq}")
	public ResponseEntity<?> getAddressList(@RequestBody @ApiParam(value="회원 일련번호", required=true) 
		@PathVariable("memberSeq") int memberSeq){
		
		try {
			List<AddressEntity> addressList = addressService.getAddressList(memberSeq);
			if(addressList != null) {
				return new ResponseEntity<List<AddressEntity>>(addressList, HttpStatus.OK);
			}else {
				return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
			}
		} catch (SQLException e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
		
	}//getAddressList

	// 에러 처리
	private ResponseEntity<String> exceptionHandling(Exception e) {
		return new ResponseEntity<String>("Error: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}//exceptionHandling
		
}//AddressController
