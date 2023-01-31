package com.ssafy.promispotback.promise.model.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.promispotback.promise.dto.PromiseMemberModifyLeaderDto;
import com.ssafy.promispotback.promise.model.entity.PromiseMemberEntity;
import com.ssafy.promispotback.promise.model.mapper.PromiseMemberMapper;



@Service
public class PromiseMemberServiceImpl implements PromiseMemberService{

	@Autowired
	PromiseMemberMapper promiseMemberMapper;
	
	
	// 약속 참여자 등록
	@Override
	public int registPromiseMember(PromiseMemberEntity promiseMemberEntity) throws SQLException {
		return promiseMemberMapper.registPromiseMember(promiseMemberEntity);
	}

	
	// 약속 참여자 한 명 조회
	@Override
	public PromiseMemberEntity getPromiseMember(int promiseSeq, int memberSeq) throws SQLException {
		return promiseMemberMapper.getPromiseMember(promiseSeq, memberSeq);
	}

	
	// 약속 참여자 전체 조회
	@Override
	public List<PromiseMemberEntity> getPromiseMemberList(int promiseSeq) throws SQLException {
		return promiseMemberMapper.getPromiseMemberList(promiseSeq);
	}

	
	// 약속장 변경
	@Override
	public int modifyPromiseMemberLeader(PromiseMemberModifyLeaderDto promiseMemberModifyLeaderdto) throws SQLException {
		int result1 = promiseMemberMapper.modifyPromiseMemberLeader(promiseMemberModifyLeaderdto.getPromiseSeq(), promiseMemberModifyLeaderdto.getBeforeMemberSeq());
		int result2 = promiseMemberMapper.modifyPromiseMemberLeader(promiseMemberModifyLeaderdto.getPromiseSeq(), promiseMemberModifyLeaderdto.getAfterMemberSeq());
		if(result1 != 0 && result2 != 0) {
			return 1;
		} else {
			return 0;
		}
	}
	
	
	// 약속 참여자 삭제 
	@Override
	public int removePromiseMember(int promiseSeq, int memberSeq) throws SQLException {
		return promiseMemberMapper.removePromiseMember(promiseSeq, memberSeq);
	}

}
