package com.ssafy.promispotback.vote.controller;

import java.sql.SQLException;
import java.util.List;

import com.ssafy.promispotback.vote.model.entity.VotePlaceEntity;
import org.apache.ibatis.annotations.Param;
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

import com.ssafy.promispotback.promise.model.entity.PromiseEntity;
import com.ssafy.promispotback.vote.model.entity.VoteEntity;
import com.ssafy.promispotback.vote.model.entity.VoteMemberEntity;
import com.ssafy.promispotback.vote.model.service.VoteService;



@RestController
@CrossOrigin
@RequestMapping("/vote")
public class VoteController {
	
	@Autowired
	VoteService voteService;
	
	
	//약속 장소 후보 등록
	@PostMapping("insert")
	public ResponseEntity<?> insertCandidatePlace(@RequestBody VoteEntity voteEntity) {
		try {
			int result = voteService.insertCandidatePlace(voteEntity);
			
			if(result != 0) {
				return new ResponseEntity<String>("success", HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}	
	}
	
	
	
	
	
	//약속 장소 후보 가져오기
	@GetMapping("get/{voteSeq}")
	public ResponseEntity<?> getCandidatePlace(@PathVariable("voteSeq") int voteSeq) {
		try {
			VoteEntity candidatePlace = voteService.getCandidatePlace(voteSeq);
			
			if (candidatePlace != null) {
				System.out.println("success work");
				return new ResponseEntity<VoteEntity>(candidatePlace, HttpStatus.OK);
			} else {
				System.out.println("fail work");
				return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}
	
	
	
	//약속 장소 후보들 가져오기 - 하나의 약속에 속한 모든 장소 후보들
	@GetMapping("getList/{promiseSeq}")
	public ResponseEntity<?> getCandidatePlaceList(@PathVariable("promiseSeq") int promiseSeq) {
		try {
			
			List<VotePlaceEntity> candidatePlaceList = voteService.getCandidatePlaceList(promiseSeq);
			
			if (candidatePlaceList != null) {
				System.out.println("success work");
				return new ResponseEntity<List<VotePlaceEntity>>(candidatePlaceList, HttpStatus.OK);
			} else {
				System.out.println("fail work");
				return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}
	
	
	
	
	
	
	//약속 장소 후보 수정(투표/투표취소)
	@PutMapping("modify/{voteSeq}/{memberSeq}")
	public ResponseEntity<?> modifyCandidatePlace(@PathVariable("voteSeq") int voteSeq, @PathVariable("memberSeq") int memberSeq) {
		
		try {

			int result = voteService.modifyCandidatePlace(voteSeq, memberSeq);

			if (result != 0) {
				return new ResponseEntity<String>("success", HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
			}

		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}
	
	
	
	//약속 장소 후보 삭제
	@DeleteMapping("delete/{voteSeq}")
	public ResponseEntity<?> removeCandidatePlace(@PathVariable("voteSeq") int voteSeq) {
		
		try {
			int result = voteService.removeCandidatePlace(voteSeq);
			if (result != 0) {
				return new ResponseEntity<String>("success", HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}
	
	
	//사용자가 한 약속에서 이 장소를 투표한 건지 아닌지 조회
	@GetMapping("isVoted/{memberSeq}/{voteSeq}")
	public ResponseEntity<?> getPromiseList(@PathVariable("memberSeq") int memberSeq, @PathVariable("voteSeq") int voteSeq) {
		try {
			
			int result = voteService.isVoted(memberSeq, voteSeq);
			
			if (result != 0) {
				System.out.println("success work");
				return new ResponseEntity<String>("1", HttpStatus.OK);
			} else {
				System.out.println("fail work");
				return new ResponseEntity<String>("0", HttpStatus.ACCEPTED);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}
	
	// 약속 장소 투표버튼 누르면 투표자 테이블에 추가
	@PostMapping("member/insert")
	public ResponseEntity<?> insertVoter(@RequestBody VoteMemberEntity voteMemberEntity) {
		try {
			
			int result = voteService.insertVoter(voteMemberEntity);
			
			if(result != 0) {
				return new ResponseEntity<String>("success", HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}	
	}
	
	
	//약속 장소 투표를 해제하면 투표자 테이블에서 삭제
	@DeleteMapping("delete/{memberSeq}/{voteSeq}")
	public ResponseEntity<?> removeVoter(@PathVariable("memberSeq") int memberSeq, @PathVariable("voteSeq") int voteSeq) {
		
		try {
			int result = voteService.removeVoter(memberSeq, voteSeq);
			
			if (result != 0) {
				return new ResponseEntity<String>("success", HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
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
