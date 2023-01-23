package com.ssafy.promispot.vote.model.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.promispot.vote.model.entity.VoteEntity;
import com.ssafy.promispot.vote.model.entity.VoteMemberEntity;
import com.ssafy.promispot.vote.model.mapper.VoteMapper;


@Service
public class VoteServiceImpl implements VoteService{

	@Autowired
	VoteMapper voteMapper;
	
	
	//약속 장소 후보 등록
	@Override
	public int insertCandidatePlace(VoteEntity voteEntity) throws SQLException {
		return voteMapper.insertCandidatePlace(voteEntity);
	}

	
	//약속 장소 후보 가져오기
	@Override
	public VoteEntity getCandidatePlace(int voteSeq) throws SQLException {
		return voteMapper.getCandidatePlace(voteSeq);
	}

	
	//약속 장소 후보들 가져오기 - 하나의 약속에 속한 모든 장소 후보들
	@Override
	public List<VoteEntity> getCandidatePlaceList(int promiseSeq) throws SQLException {
		return voteMapper.getCandidatePlaceList(promiseSeq);
	}

	
	//약속 장소 후보 수정(투표/투표취소)
	@Override
	public int modifyCandidatePlace(int voteSeq) throws SQLException {
		return voteMapper.modifyCandidatePlace(voteSeq);
	}

	
	//약속 장소 후보 삭제
	@Override
	public int removeCandidatePlace(int voteSeq) throws SQLException {
		return voteMapper.removeCandidatePlace(voteSeq);
	}

	
	//사용자가 한 약속에서 이 장소를 투표한 건지 아닌지 조회
	@Override
	public int isVoted(int memberSeq, int voteSeq) throws SQLException {
		return voteMapper.isVoted(memberSeq, voteSeq);
	}

	//약속 장소 투표버튼 누르면 투표자 테이블에 추가
	@Override
	public int insertVoter(VoteMemberEntity voteMemberEntity) throws SQLException {
		return voteMapper.insertVoter(voteMemberEntity);
	}

	//약속 장소 투표를 해제하면 투표자 테이블에서 삭제
	@Override
	public int removeVoter(int memberSeq, int voteSeq) throws SQLException {
		return voteMapper.removeVoter(memberSeq, voteSeq);
	}

}
