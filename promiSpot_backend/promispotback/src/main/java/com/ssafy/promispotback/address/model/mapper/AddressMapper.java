package com.ssafy.promispotback.address.model.mapper;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.promispotback.address.model.entity.AddressEntity;

@Mapper
public interface AddressMapper {
	
	// 회원 주소 등록
	public int addAddress(AddressEntity addressEntity) throws SQLException;
	
	// 회원 주소 조회
	public AddressEntity getAddress(int addressSeq) throws SQLException;
	
	// 회원 주소 수정
	public int modifyAddress(AddressEntity addressEntity) throws SQLException;
	
	// 회원 주소 삭제
	public int removeAddress(int addressSeq) throws SQLException;
	
	// 회원 주소들 조회
	public List<AddressEntity> getAddressList(int memberSeq) throws SQLException;

}//AddressMapper
