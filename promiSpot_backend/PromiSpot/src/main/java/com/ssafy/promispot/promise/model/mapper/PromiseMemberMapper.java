package com.ssafy.promispot.promise.model.mapper;

import java.sql.SQLException;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.promispot.promise.model.entity.PromiseEntity;
import com.ssafy.promispot.promise.model.entity.PromiseMemberEntity;

@Mapper
public interface PromiseMemberMapper {
	
	// 약속 참여자 등록
	public int registPromiseMember(PromiseMemberEntity promiseMemberEntity);
	

	

}
