package com.ssafy.promispotback.vote.model.service;

import java.sql.SQLException;
import java.util.List;

import com.ssafy.promispotback.vote.model.entity.VotePlaceEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.promispotback.vote.model.entity.VoteEntity;
import com.ssafy.promispotback.vote.model.entity.VoteMemberEntity;
import com.ssafy.promispotback.vote.model.mapper.VoteMapper;


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
	public List<VotePlaceEntity> getCandidatePlaceList(int promiseSeq) throws SQLException {
		return voteMapper.getVotePlaceList(promiseSeq);
	}



	
	//약속 장소 후보 수정(투표/투표취소)
	@Override
	public int modifyCandidatePlace(int voteSeq, int memberSeq) throws SQLException {
		if(isVoted(memberSeq, voteSeq) == 1){ // 이미 투표 했을 경우
			if(voteMapper.modifyCandidatePlace(voteSeq, -1) == 1){
				return removeVoter(memberSeq, voteSeq);
			}
			return 0;
		}else{ // 투표 처음
			if(voteMapper.modifyCandidatePlace(voteSeq, 1) == 1){
				return insertVoter(new VoteMemberEntity(memberSeq, voteSeq));
			}
			return 0;
		}
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





	@Override
	public List<VotePlaceEntity> getVotePlaceList(int promiseSeq) throws SQLException {
		return voteMapper.getVotePlaceList(promiseSeq);
	}

	@Override
	public VoteEntity getVotePlaceByPlaceId(String placeId) throws SQLException {
		return voteMapper.getVotePlaceByPlaceId(placeId);
	}

	// 이 장소가 등록되어 있는지 확인하는 하수
	@Override
	public VoteEntity checkVotePlace(VoteEntity voteEntity) throws SQLException {
		return voteMapper.checkVotePlace(voteEntity);
	}


	//약속 장소 투표버튼 누르면 투표자 테이블에 추가
	@Override
	public int insertVoter(VoteMemberEntity voteMemberEntity) throws SQLException {
		// votes_members 에 삽입
		int result1 =  voteMapper.insertVoter(voteMemberEntity);
		// votes의 vote_cnt 1 증가시킴
		int result2 = voteMapper.doVote(voteMemberEntity);

		return result1 * result2;
	}

	//약속 장소 투표를 해제하면 투표자 테이블에서 삭제
	@Override
	public int removeVoter(int memberSeq, int voteSeq) throws SQLException {
		// 투표자 삭제
		int result1 = voteMapper.removeVoter(memberSeq, voteSeq);

		// 득표수 -1
		VoteMemberEntity voteMemberEntity = new VoteMemberEntity();
		voteMemberEntity.setMemberSeq(memberSeq);
		voteMemberEntity.setVoteSeq(voteSeq);
		int result2 = voteMapper.cancleVote(voteMemberEntity);
		return result1 * result2;
	}

}
