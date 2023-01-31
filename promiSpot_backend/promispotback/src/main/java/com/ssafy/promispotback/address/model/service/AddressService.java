package com.ssafy.promispotback.address.model.service;

import java.sql.SQLException;
import java.util.List;

import com.ssafy.promispotback.address.model.entity.AddressEntity;

public interface AddressService {
	
	// 회원 주소 등록
	public boolean addAddress(AddressEntity addressEntity) throws SQLException;
	
	// 회원 주소 조회
	public AddressEntity getAddress(int addressSeq) throws SQLException;
	
	// 회원 주소 수정
	public boolean modifyAddress(AddressEntity addressEntity) throws SQLException;
	
	// 회원 주소 삭제
	public boolean removeAddress(int addressSeq) throws SQLException;
	
	// 회원 주소 목록 조회
	public List<AddressEntity> getAddressList(int memberSeq) throws SQLException;

}//AddressService
