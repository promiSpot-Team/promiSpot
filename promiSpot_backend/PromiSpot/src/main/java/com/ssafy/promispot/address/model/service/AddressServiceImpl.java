package com.ssafy.promispot.address.model.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.promispot.address.model.entity.AddressEntity;
import com.ssafy.promispot.address.model.mapper.AddressMapper;

@Service
public class AddressServiceImpl implements AddressService {
	
	@Autowired
	private AddressMapper addressMapper;

	// 회원 주소 등록
	@Override
	public boolean addAddress(AddressEntity addressEntity) throws SQLException {		
		return addressMapper.addAddress(addressEntity) == 1;
	}//addAddress

	// 회원 주소 조회
	@Override
	public AddressEntity getAddress(int addressSeq) throws SQLException {
		return addressMapper.getAddress(addressSeq);
	}//getAddress

	// 회원 주소 수정
	@Override
	public boolean modifyAddress(AddressEntity addressEntity) throws SQLException {
		return addressMapper.modifyAddress(addressEntity) == 1;
	}//modifyAddress

	// 회원 주소 삭제
	@Override
	public boolean removeAddress(int addressSeq) throws SQLException {
		return addressMapper.removeAddress(addressSeq) == 1;
	}//removeAddress

	// 회원 주소 목록 조회
	@Override
	public List<AddressEntity> getAddressList(int memberSeq) throws SQLException {
		return addressMapper.getAddressList(memberSeq);
	}//getAddressList

}//AddressServiceImpl
